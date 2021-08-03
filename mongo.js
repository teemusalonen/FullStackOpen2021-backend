const mongoose = require('mongoose')

if(process.argv.length<3) {
    console.log('Give password as an argument')
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fullstack:${password}@fullstackopen2021.zs6qt.mongodb.net/fullstack2021?retryWrites=true`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
    id: Number
})

const Person = mongoose.model('Person', personSchema)

/*const person = new Person({
    name: 'Kissa',
    number: '112-040-6699',
    id: 5
})

 person.save().then(response => {
    console.log('person saved to the database!')
    mongoose.connection.close()
})*/

if(process.argv.length === 3) {
    console.log('Phonebook:')
    console.log('')
    Person.find({}).then(result => {
        result.forEach(p => {
            console.log(p.name, p.number)
        })
        mongoose.connection.close()
        console.log('')
        console.log('ready! =)')
    })
}

if(process.argv.length === 5) {
    const na = process.argv[3]
    const nu = process.argv[4]

    const p = new Person({
        name: na,
        number: nu
    })
    p.save().then(response => {
        console.log(`Added ${p.name} number ${p.number} to the phonebook!`)
        mongoose.connection.close()
    })
}