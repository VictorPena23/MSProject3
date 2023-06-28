const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PatientSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    race: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required:true
    }
} ,{timestamps: true})

module.exports = mongoose.model('Patient', PatientSchema)