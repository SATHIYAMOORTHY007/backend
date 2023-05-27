const express = require('express')
const router = express.Router()
const home = require('../Controllers/home')
const { verifyAdmin } = require('../utils/verifyToken')

router.get('/home', home)

module.exports = router
