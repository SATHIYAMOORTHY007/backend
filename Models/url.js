const mongooes = require('mongoose')

const urlModel = new mongooes.Schema({
  shortUrl: {
    type: String,
  },
  longUrl: {
    type: String,
    require: true,
  },
  count: {
    type: String,
    default: 0,
  },
  date: { type: Date, default: Date.now },
})

module.exports = mongooes.model('urlModel', urlModel)
