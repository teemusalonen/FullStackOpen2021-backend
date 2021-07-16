
const express = require('express')

const app = express()

app.use(express.json())

persons = [
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": 1
    },
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
    },
    {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": 3
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": 4
    }  
]


app.get('/', (req, res) => {
  res.send('<div> moi </div>')
})

app.get('/info', (req, res) => {
  res.send(`<div> <p> Phonebook has info for ${persons.length} people </p> <p> ${new Date()} </p> </div>`)
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  // käytä findia, älä filteriä!!!!
  const person = persons.find(p => p.id === id)
  // jos person ei ole null, palautetaan henkilö, jos on, palautetaan virhestatus
  person ? res.json(person) : res.status(404).end()
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)
  res.status(204).end()
})


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})