const express = require('express')
const router = express.Router()
const { urlCreate, getAll } = require('../Controllers/urlCreate')

router.post('/create', urlCreate)
router.get('/getall', getAll)

module.exports = router
