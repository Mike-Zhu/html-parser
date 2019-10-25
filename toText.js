
let { self_end_list } = require("./config")
function toText(ast) {

  function transferArray(list) {
    return list.map(transferNode).join('')
  }

  function transferNode(node) {
    switch (node.type) {
      case "tag":
        return transferArray(node.children)
      case "content":
        return node.value
    }
  }

  return transferArray(ast.body)
}
module.exports = toText
