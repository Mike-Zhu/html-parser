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


// console.log('digit', digit('1'), digit('a'), digit('A'))
// console.log('lower', lower('1'), lower('a'), lower('A'))
// console.log('uppper', uppper('1'), uppper('a'), uppper('A'))
// console.log('char', char('0')('0'), char('0')('1'))
// console.log('not', not('1')('123'), not('1')('abc'))

const either = (parserA, parserB) => source => {
  let resultA = parserA(source)
  if (!isFailed(resultA)) return resultA
  let resultB = parserB(source)
  return resultB
}
// console.log('either', either(char('0'), char('1'))('123'))

const oneOf = (...args) => args.reduce(either)
// oneOf => ((( parseA, parseB ), parseC ), parseD)
// console.log('oneOf', oneOf(char('0'), char('1'), char('2'))('123'))

const whiteSpace = oneOf(
  char('\s'),
  char('\n'),
  char(' '),
  char('\t'))
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
  if (list.length === 0) return `At least match once`
  return [list, rest_source]
}

const ignoreFirst = (first, second) => applyAll(inject(_ => value => value), first, second)

const separateBy = (parser, separator) => {
  applyAll(
    inject(item => list => [item, ...list]),
    parser,
    many(ignoreFirst(separator, parser))
  )
}

const bracket = (open, parser, close) => {
  return applyAll(
    inject(_1 => x => _2 => x),
    open,
    parser,
    close
  )
}
const aroundBy = (parser, surround) =>
  applyAll(inject(_1 => x => _2 => x), many(surround), parser, many(surround))

const aroundBySpace = parser => aroundBy(parser, whiteSpace)

const name_letter = oneOf(uppper, lower, digit, char("-"), char("_"))
const prop_val = oneOf(
  bracket(
    char(`"`),
    many(not(`"`)),
    char(`"`)
  ),
  bracket(char(`'`), many(not(`'`), char(`'`)))
)

const prop = map(either(
  applyAll(
    inject(name => _ => val => [name, val]),
    many(name_letter),
    char("="),
    prop_val
  ),
  many(name_letter)
), list => {
  let [tagName, value] = list
  let key = tagName.join('')
  return {
    [key]: value.join('')
  }
})

const props = many(ignoreFirst(char(' '), prop))

const openTag = applyAll(
  inject(_1 => tagName => props => _2 => [tagName.join(''), props]),
  char("<"),
  many(lower),
  props,
  char(">")
)

const closeTag = applyAll(
  inject(_1 => _2 => tagName => _3 => tagName),
  char("<"),
  char("/"),
  many(lower),
  char(">")
)
const tagContent = source => either(text, aroundBySpace(tag))(source)

const text_val = many1(
  oneOf(
    uppper,
    lower,
    digit,
    char("-"),
    char("_"),
    whiteSpace
  )
)
const text = map(text_val, list => list.join(""))

const tagCb = list => {
  let [open, ...content] = list
  let [name, props] = open
  return {
    type: name,
    props: props,
    children: content
  }
}
const tag = map(
  applyAll(
    inject(tagName => content => _ => [tagName, content]),
    openTag,
    either(many1(tagContent), inject([])),
    closeTag
  ), tagCb
)

let tagValue =
  `<div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
this is p1
<span>this is span1</span>
this is p2
<span>this is span2</span>
</div>`

console.log('cont', JSON.stringify(
  tag(tagValue)
))