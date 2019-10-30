let {
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
} = require('./util')

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
  bracket(char(`'`), many(not(`'`), char(`'`))),
  many(not(whiteSpace))
)

const prop = map(
  oneOf(
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
const tagContent = source => oneOf(
  aroundBySpace(notes),
  text,
  aroundBySpace(tag)
)(source)

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
    openTag,
    either(many1(tagContent), inject([])),
    many1(closeTag),
  ), tagCb
)

const tag = oneOf(selfCloseTag, normalTag, openTag)

const note_start = applyAll(
  inject(_1 => _2 => _3 => _4 => ''),
  char('<'),
  char('!'),
  char('-'),
  char('-')
)

const note_end = applyAll(
  inject(_1 => _2 => _3 => _4 => ''),
  char('-'),
  char('-'),
  char('>')
)
const note_val = many(not(note_end))

const notes = applyAll(
  inject(_1 => val => _3 => val),
  note_start,
  note_val,
  note_end,
)

let tagValue =
  `<!-- .sticky312header -->`

console.log('notes', JSON.stringify(
  notes(tagValue)
))