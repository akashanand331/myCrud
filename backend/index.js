/**
 * Crud App APIs
 */

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    console.log(req.query)
    let data = {
        name: "Akash",
        email: "akash@gmail.com",
        phone: "99999999999s"
    }
    res.json({
        data: data
    })
  })

  app.post('/student', (req, res) => {
    console.log(req.body)

    res.json({
        data:"Student submitted"
    })
  })

  app.listen(3000)