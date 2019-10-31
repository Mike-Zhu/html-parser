let {
  first,
  character,
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
} = require('./util')
let delNotes = require('./delNotes')
let addEndTag = require('./addEndTag')

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
const prop_val = either(
  bracket(
    char(`"`),
    many(not(`"`)),
    char(`"`)
  ),
  bracket(char(`'`), many(not(`'`), char(`'`)))
)

const prop = map(
  either(
    applyAll(
      inject(name => _ => val => [name, val]),
      many(name_letter),
      char("="),
      prop_val
    ),
    many(name_letter)
  ),
  list => {
    let [tagName, value] = list
    let key = tagName.join('')
    return {
      [key]: value.join('')
    }
  })

const props = many(ignoreFirst(char(' '), prop))

const openTag =
  applyAll(
    inject(_1 => tagName => props => _2 => [tagName, props]),
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
const tagContent = source => oneOf(text, tag)(source)

const text_val = many1(
  oneOf(
    uppper,
    lower,
    digit,
    char("-"),
    char("_"),
    whiteSpace,
    character
  )
)
const text = map(text_val, list => list.join(""))

const selfCloseTag = map(
  applyAll(
    inject(_1 => tagName => props => _2 => _3 => [tagName, props]),
    char("<"),
    many(lower),
    props,
    char("/"),
    char(">")
  ), list => {
    let [name, props] = list
    return {
      type: name.join(''),
      props: props,
      children: []
    }
  })

const tagCb = list => {
  let [open, ...content] = list
  let [name, props] = open
  return {
    type: name.join(''),
    props: props,
    children: content
  }
}
const normalTag = map(
  applyAll(
    inject(tagName => content => _ => [tagName, content]),
    aroundBySpace(openTag),
    either(many1(tagContent), inject([])),
    aroundBySpace(closeTag),
  ), tagCb
)

const tag = either(selfCloseTag, normalTag)

module.exports = {
  tag,
  many,
  delNotes,
  addEndTag
}