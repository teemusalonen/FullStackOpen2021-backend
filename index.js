require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const Person = require('./models/person')

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

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }

  next(error)
}

app.use(errorHandler)

app.post('/api/persons', (req, res) => {
  const body = req.body 
  
  // Jos sisältö on puutteellinen, heitetään errori
  
  if(!body.name | !body.number){
    return res.status(400).json({
      error: 'Request contains too little information'
    })
  }

  // Luodaan uusi Person requestin perusteella
  const newPerson = new Person({
      name: body.name,
      number: body.number
  })
    newPerson.save().then(savedPerson => {
      res.json(savedPerson)
    })
    .catch((error) => console.log('Couldn\'t save:', error.message))
    }
)

app.get('/info', (req, res) => {
  Person.find({}).then(persons => {
    res.send(`<div> <p> Phonebook has info for <b> ${persons.length} </b> people </p> <p> ${new Date()} </p> </div>`).status(200).end()
  })
})

app.get('/api/persons', (req, res) => {
  Person.find({}).then(persons => {
    res.json(persons)
  }) 
})

app.get('/api/persons/:id', (req, res, next) => {
  Person.findById(req.params.id)
    .then(person => {
      // jos person ei ole null, palautetaan henkilö, jos on, palautetaan virhestatus
      person ? res.json(person) : res.status(404).end()
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndDelete(req.params.id)
    .then(result => {
      res.status(204).end()
    }).catch(error => next(error))
})

app.put('/api/persons/:id', (req, res, next) => {
  const body = req.body

  const newPerson = {
    name: body.name,
    number: body.number
  }
  
  Person.findByIdAndUpdate(req.params.id, newPerson, { new: true })
    .then(updatedPerson => {
      res.status(200).json(updatedPerson)
    }).catch(error => next(error))
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})