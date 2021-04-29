const express = require('express')
const connection = require('../config')
const router = express.Router()

router.get('/', (req, res) => {
    connection.query('SELECT * from list', (err, results) => {
      if (err) {
        console.log(err)
        res.status(500).send('Error retrieving data')
      } else {
        res.status(200).json(results)
      }
    })
  })

  module.exports = router