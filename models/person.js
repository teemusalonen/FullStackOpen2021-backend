const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')


const url = process.env.MONGODB_URI

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(result => {
        console.log('Connected to MongoDB')
    }).catch((error) => {
        console.log('Could not connect to MongoDB:', error.message) 
    })

const personSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    number: { type: String, required: true, unique: true },
    id: { type: String }
})

personSchema.plugin(uniqueValidator)

// poistetaan ylimääräiset asiat
personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Person', personSchema)