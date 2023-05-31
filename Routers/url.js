const express = require('express')
const router = express.Router()
const { urlCreate, getAll } = require('../Controllers/urlCreate')
const { verifyToken } = require('../utils/verifyToken')
router.post('/create', verifyToken, urlCreate)
router.get('/getall', verifyToken, getAll)

module.exports = router
