function randomGenerator() {
  let result = ''
  let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmonqurstuvwxyz1234567890'
  const charlength = char.length

  for (var i = 0; i < 7; i++) {
    result += char.charAt(Math.floor(Math.random() * charlength))
    i++
  }
  console.log(result)
  return result
}

module.exports = randomGenerator
