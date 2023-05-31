const express = require('express')
const urlModel = require('../Models/url')
const randomGenerator = require('../utils/randomgen')
const urlCreate = async (req, res) => {
  const { longurl } = req.body
  shorturl = randomGenerator()
  console.log(shorturl)
  try {
    const result = await urlModel.create({
      longUrl: longurl,
      shortUrl: shorturl,
    })
    result.save()
    res.json({ message: result })
  } catch (error) {
    throw error
  }
}

const getAll = async (req, res) => {
  const data = await urlModel.find()
  res.send(data)
}
module.exports = { urlCreate, getAll }
