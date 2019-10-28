const tokenizer = require("./tokenizer")
const parser = require("./parser")
const toText = require("./toText")
// const transfer = require("./transfer")
// const codeGenerator = require("./codeGenerator")

// function compiler(input) {
//   var tokens = tokenizer(input);
//   var ast = parser(tokens);
//   var newAst = transfer(ast);
//   var output = codeGenerator(newAst);

//   // 然后返回输出!
//   return output;
// }
module.exports = {
  tokenizer,
  parser,
  toText
  // transfer,
  // codeGenerator,
  // compiler
}