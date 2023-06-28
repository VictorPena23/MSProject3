const patient = require('../models/patientModel')
const mongoose = require('mongoose')

//get all patients
const getPatients = async (req,res) =>{
    const patients = await find({}).sort({createdAt:-1})

    res.status(200).json(patients)
}

//get single patient
const getPatient = async (req,res) => {
    const {id} = req.params

    if(!Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Such Patient'})
    }

    const patient = await findById(id)

    if(!patient) {
        return res.status(400).json({error: 'No Such Patient'})
    }
    res.status(200).json(patient)
}

//create new patient
const createPatient = async(req,res) => {

    const {firstName, age, mobile} = req.body

    try{
        const patient = await create({firstName, age, mobile})
        res.status(200).json(patient)
    }catch(error) {
        res.status(400).json({error: error.message})
    }
}

//delete a patient
const deletePatient = async (req, res) => {
    const { id } = req.params

    if(!Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Such Patient'})
    }

    const patient = await findOneAndDelete({_id: id})

    if(!patient) {
        return res.status(404).json({error: 'No Such Patient'})
    }

    res.status(200).json(patient)
}


//update a patient
const updatePatient = async (req,res) => {
    const{ id } = req.params

    if(!Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Such Patient'})
    }

    const patient = await findOneAndUpdate({_id: id},{
        ...req.body
    })

    if(!patient) {
        return res.status(404).json({error: 'No Such Patient'})
    }

    res.status(200).json(patient)
}


module.exports = {
    getPatients,
    getPatient,
    createPatient,
    deletePatient,
    updatePatient,
}