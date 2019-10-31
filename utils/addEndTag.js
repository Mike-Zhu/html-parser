let whiteList = ["meta", "link", "img", "br", "hr", "input"]

module.exports = function addTag(input) {
  return whiteList.reduce((prev, key) => {
    let reg = eval(`/<${key}[^>]+>/g`)
    return prev.replace(reg, tagHtml => {
      let shouldAdd = !tagHtml.includes("/>")
      if (shouldAdd)
        return tagHtml.replace(">", "/>")
      return tagHtml
    })
  }, input)
}