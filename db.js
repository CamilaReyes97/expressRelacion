const mongoose = require('mongoose')

const connectToDB = () => {
    mongoose.set('useCreateIndex', true)
    mongoose.connect('mongodb://localhost:27017/equipoBIT', { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
        if (error){
            console.log('Error -> ', error)
        }else{
            console.log('Nos conectamos correctamente...')
        }
    } )
}

module.exports = { connectToDB }