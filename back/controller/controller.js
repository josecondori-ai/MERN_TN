const colegio=require('../models/modelo')
const mongoose=require('mongoose')

const  obtenerDatos= async (req,res) =>{
    const datos= await colegio.find({})
    res.status(200).json(datos)
}

const crearDato= async (req,res)=>{
    const {materia,calificacion,aula}=req.body
    
    // console.log(req.body.materia)

    //const materia= req.body.materia
    // console.log(req.body.calificacion)
    // console.log(req.body.aula)

    try{
        const datos= await colegio.create({materia,calificacion,aula})
        res.status(200).json(datos)
    }
    catch(error){
        res.status(400).json({error:error.message})

    }

}


module.exports={obtenerDatos,crearDato}