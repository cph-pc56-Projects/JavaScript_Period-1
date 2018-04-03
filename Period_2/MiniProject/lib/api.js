'use strict'

const Archetype = require('archetype-js')
const express = require('express')

module.exports = db => {
  const router = express.Router()

  const wrapAsync = handler => (req, res) => handler(req)
    .then(result => res.json(result))
    .catch(error => res.status(500).json({ error: error.message }))

  router.get('/', wrapAsync(async function(req) {
    return db.collection('User').find({}, {firstName: 1, lastName: 1}).sort({ createdAt: -1 }).toArray()
  }))

  

  return router
}
