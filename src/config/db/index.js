const mongoose = require('mongoose')

async function connect(){

    try {
        await mongoose.connect('mongodb://localhost:27017/F8_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to Mongoose database')
    } catch (error) {
        console.log('Error connecting to Mongoose database')
    }


}

module.exports = { connect }