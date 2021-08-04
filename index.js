require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const Person = require('./models/person')
const { response } = require('express')

const app = express()

app.use(express.static('build'))
app.use(cors())
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :getData'))

morgan.token('getData', (req, res) => {
    return JSON.stringify(req.body)
})

morgan((tokens, req, res) => {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    tokens.getData(req, res)
  ].join(' ')
}) 

app.post('/api/persons', (req, res) => {
  const body = req.body
  // jos postattavaa contenttia ei ole, vastataan ongelmalla 
  if(!body.name | !body.number){
    return res.status(400).json({
      error: 'Request contains too little information'
    })
  }

  /*if(persons.find(p => p.name === body.name)){
    return res.status(400).json({
      error: 'Name must be unique'
    })
  }*/

  const newPerson = new Person({
    name: body.name,
    number: body.number
  })

  newPerson.save().then(savedPerson => {
    res.json(savedPerson)
  }).catch((error) => console.log('Couldnt save:', error.message))
})

app.get('/info', (req, res) => {
  res.send(`<div> <p> Phonebook has info for <b> ${persons.length} </b> people </p> <p> ${new Date()} </p> </div>`)
})

app.get('/api/persons', (req, res) => {
  Person.find({}).then(persons => {
    res.json(persons)
  }) 
  
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(p => p.id === id)
  // jos person ei ole null, palautetaan henkilö, jos on, palautetaan virhestatus
  person ? res.json(person) : res.status(404).end()
})

app.delete('/api/persons/:id', (req, res) => {
  Person.findByIdAndDelete(req.params.id)
    .then(result => {
      res.status(204).end()
    }).catch(error => {
      console.log('not able to delete:', error.message)
    })
  
  /*const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)
  res.status(204).end()*/
})


const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})