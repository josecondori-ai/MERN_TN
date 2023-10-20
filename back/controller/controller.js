const colegio=require('../models/modelo')
const mongoose=require('mongoose')

const  obtenerDatos= async (req,res) =>{
    const datos= await colegio.find({})
    res.status(200).json(datos)
}


module.exports={obtenerDatos}