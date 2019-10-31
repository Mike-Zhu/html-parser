// const { tokenizer, parser, toText } = require("./src")
const { tag, many, delNotes, addEndTag, normalTag } = require("./utils")
const util = require('util')
let lispStr = `<div id="topbar">
    <div id="wrap">
			<div class="topbarleft">
				<a href="/" target="_blank">脚本之家</a>
				<a href="http://s.jb51.net" target="_blank" rel="nofollow">服务器常用软件</a>
			</div>
		</div>
	</div>`
var tokenizer = (input) => {
	let notNotes = delNotes(input)
	let tagNotes = addEndTag(notNotes)
	return normalTag(input)
}
var code = tokenizer(lispStr)
console.log(util.inspect(code, { showHidden: false, depth: null }))
// let ast = parser(code)
// let text = toText(ast)

// console.log({ text })