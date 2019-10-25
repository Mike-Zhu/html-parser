let { self_end_list } = require("./config")
const is_tag = token => token.type === "tag"
const is_end = token => is_tag(token) && token.value.startsWith("/")
const is_start = token => is_tag(token) && !is_end(token)
const is_content = token => token.type === "content"
const is_key = token => token.type === "propsName"
const is_value = token => token.type === "propsValue"

const no_end = token => is_start(token)
  && self_end_list.includes(token.value)

function parser(tokens) {
  let current = 0;

  function walk() {
    let token = tokens[current]
    if (is_content(token)) {
      current++;
      return token
    }
    if (is_key(token) || is_value(token)) {
      current++;
      return token
    }

    if (is_start(token)) {
      let node = {
        type: "tag",
        value: token.value,
        children: [],
        props: {}
      }
      // let self_end = no_end(token)
      token = tokens[++current];
      let list = []

      while (!is_tag(token)
        || (
          !is_end(token)
          && !self_end
        )
      ) {
        list.push(walk())
        token = tokens[current];
      }

      let [propsList, children] = filterList(list)
      node.children = children
      node.props = getProps(propsList)
      // if (!self_end) {
        current++
      // }
      return node
    }

    throw new TypeError('I dont know what this character is: ' + token.type + '=>' + token.value);
  }
  let body = []
  while (current < tokens.length) {
    body.push(walk())
  }
  let ast = {
    type: "Program",
    body: body
  }
  return ast
}

function filterList(list) {
  let propsList = list.filter(item => item.type.startsWith("props"))
  let children = list.filter(item => !item.type.startsWith("props"))
  return [propsList, children]
}

function getProps(propsList) {
  let props = {}
  for (var i = 0; i < propsList.length; i++) {
    let propsItem = propsList[i]
    if (propsItem.type !== "propsName") {
      continue
    }
    let key = propsItem.value
    props[key] = undefined
    if (i >= propsList.length - 1) {
      break
    }
    propsItem = propsList[i + 1]
    if (propsItem.type !== "propsValue") {
      continue
    }
    i++
    props[key] = propsItem.value
  }
  return props
}

module.exports = parser
