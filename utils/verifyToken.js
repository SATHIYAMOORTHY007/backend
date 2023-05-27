const jwt = require('jsonwebtoken')
const createError = require('../utils/createError')

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token
  if (!token) {
    return res.sendStatus(401)
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

const verifyUser = (req, res) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next()
    } else {
      return res.sendStatus(401)
    }
  })
}
const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next()
    } else {
      return res.sendStatus(401)
    }
  })
}

module.exports = { verifyToken, verifyUser, verifyAdmin }
