const express = require('express')
const app = express()

const persons = {
    "persons": [
      {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": "1"
      },
      {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": "2"
      },
      {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": "3"
      },
      {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": "4"
      },
      {
        "id": 5,
        "name": "Kalle",
        "number": "1234"
      },
      {
        "id": 6,
        "name": "Mikko",
        "number": "123"
      },
      {
        "id": 7,
        "name": "Kalvei",
        "number": "123123"
      }
    ]
  }

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})