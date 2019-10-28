const { self_end_list } = require("./config")
const l_paren = char => char === "<"
const r_paren = char => char === ">"
const end_paran = char => char === "/"
const is_euqal = char => char === "="
const is_quota = char => ["'", '"'].includes(char)
const is_paren = char => l_paren(char) || r_paren(char) || end_paran(char)
const is_letters = char => !!char && /[A-Za-z]/.test(char)
const is_number = char => /[0-9]/.test(char)
const empty = char => /\s/.test(char)
const transfer = (prev, char) => (l_paren(char) || r_paren(char)) && end_paran(prev)

function tokenizer(input) {
  let current = 0;
  let tokens = [];
  while (current < input.length) {
    let char = input[current];
    if (empty(char)) {
      current++
      continue
    }

    if (l_paren(char)) {
      let tagName = ""
      let prev = char
      char = input[++current]
      while (
        transfer(prev, char) ||
        (
          !l_paren(char)
          && !r_paren(char)
        )
      ) {
        tagName += char
        prev = char
        char = input[++current]
      }
      let tagTokens = dealWith(tagName)
      tokens = tokens.concat(tagTokens)
      current++
      continue
    }

    if (!is_paren(char)) {
      let value = ""
      while (!l_paren(char)) {
        value += char
        char = input[++current]
      }
      tokens.push({
        type: "content",
        value: value
      })
      continue
    }
    // 最后如果我们没有匹配上任何类型的 token，那么我们抛出一个错误。
    throw new TypeError('I dont know what this character is: ' + char);
  }

  return tokens
}


function dealWith(input) {
  // 结束tag，直接返回
  let tokens = [];

  if (end_paran(input[0])) {
    tokens.push({
      type: "tag",
      value: input
    })
    return tokens
  }

  let current = 0;
  let type = "tag"
  const is_content = char => {
    if (type === "propsName") {
      return is_letters(char) || ["-", "_"].includes(char)
    }
    if (type === "propsValue") {
      return !is_quota(char)
    }
    if (type === "tag") {
      return is_letters(char)
        || ["-"].includes(char)
        || is_number(char)

    }
  }
  let tagName = ""
  self_end_list.some(name => {
    if (
      input.startsWith(name)
      && !input.endsWith("/")
    ) {
      tagName = name
      input = input + " /"
    }
  })
  // console.log("input =>", input + " end")
  while (current < input.length) {
    let char = input[current]
    if (
      empty(char) // 非value内的空格忽略
      || is_euqal(char)// 引号永久忽略
    ) {
      current++
      continue
    }

    if (end_paran(char)) {// 非value的斜杠忽略
      current++
      tokens.push({
        type: "tag",
        value: "/" + tagName
      })
      continue
    }
    // "" as propsValue
    if (is_quota(char)) {
      let value = ""
      char = input[++current]
      while (!is_quota(char)) {
        value += char
        char = input[++current]
      }

      tokens.push({
        type: "propsValue",
        value: value
      })
      type = "propsName"
      current++
      continue
    }

    if (is_content(char)) {
      let value = ""
      while (is_content(char)) {
        value += char
        char = input[++current]
      }
      tagName = tagName || value
      tokens.push({
        type,
        value: value
      })
      // tag or value  => name
      if (type !== "propsName") {
        type = "propsName"
        continue
      }
      // name 2 value
      if (is_euqal(char)) {
        // 切换到value
        type = "propsValue"
        continue
      }
      // empty props value
      tokens.push({
        type: "propsValue",
        value: ""
      })
    }
    // 最后如果我们没有匹配上任何类型的 token，那么我们抛出一个错误。
    throw new TypeError('I dont know what this character is: ' + char + "index is " + current + " type is " + type);
  }
  return tokens
}
;
module.exports = tokenizer