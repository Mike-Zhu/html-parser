var note = /<!--[\w\W]*?-->/g

module.exports = function delNotes(input) {
  return input.replace(note, _ => "")
}