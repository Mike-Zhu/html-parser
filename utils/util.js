const first = source => {
  if (!source) return "empty source"
  return [source[0], source.slice(1)]
}

const isFailed = result => typeof result === "string"

const inject = value => source => [value, source]

const map = (parser, f) => source => {
  let result = parser(source)
  if (isFailed(result)) return result
  let [data, rest_resource] = result
  return [f(data), rest_resource]
}

const apply = (parserFn, parserArg) => source => {
  let result_fn = parserFn(source)
  if (isFailed(result_fn)) return result_fn
  let [fn, rest_fn_source] = result_fn
  let result_arg = parserArg(rest_fn_source)

  if (isFailed(result_arg)) return result_arg
  let [arg, rest_arg_resource] = result_arg
  return [fn(arg), rest_arg_resource]
}
// console.log('apply', apply(inject(n => n + 1), inject(1))('123'))

const applyAll = (...args) => args.reduce(apply)
// applyAll => (((fn,arg),arg),arg) =>  对fn的消参，相当于科里化

const satisfy = predicate => source => {
  let result = first(source)
  if (isFailed(result)) return result
  let [char, rest_source] = result
  if (!predicate(char)) {
    return `unexpect char ${char}`
  }
  return [char, rest_source]
}

const digit = satisfy(c => c >= "0" && c <= "9")
const lower = satisfy(c => c >= "a" && c <= "z")
const uppper = satisfy(c => c >= "A" && c <= "Z")
const char = target => satisfy(c => c === target)
const not = target => satisfy(c => c !== target)

const either = (parserA, parserB) => source => {
  let resultA = parserA(source)
  if (!isFailed(resultA)) return resultA
  let resultB = parserB(source)
  return resultB
}
// console.log('either', either(char('0'), char('1'))('123'))

const oneOf = (...args) => args.reduce(either)

const whiteSpace = oneOf(
  char('\s'),
  char('\n'),
  char(' '),
  char('\t'))




// console.log('digit', digit('1'), digit('a'), digit('A'))
// console.log('lower', lower('1'), lower('a'), lower('A'))
// console.log('uppper', uppper('1'), uppper('a'), uppper('A'))
// console.log('char', char('0')('0'), char('0')('1'))
// console.log('not', not('1')('123'), not('1')('abc'))


// oneOf => ((( parseA, parseB ), parseC ), parseD)
// console.log('oneOf', oneOf(char('0'), char('1'), char('2'))('123'))


// console.log('whiteSpace', whiteSpace("d"))

const many = parser => {
  let concat = applyAll(
    inject(item => list => [item, ...list]),
    parser,
    source => many(parser)(source)
  )
  return either(concat, inject([]))
}

const many1 = parser => source => {
  let result = many(parser)(source)
  if (isFailed(result)) return result
  let [list, rest_source] = result
  if (list.length === 0) return `At least match once ${rest_source}`
  return [list, rest_source]
}

module.exports = {
  first,
  isFailed,
  inject,
  map,
  apply,
  applyAll,
  satisfy,
  whiteSpace,
  digit,
  lower,
  uppper,
  char,
  not,
  either,
  oneOf,
  many,
  many1
}
