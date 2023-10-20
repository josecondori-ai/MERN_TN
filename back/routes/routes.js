const express =require('express')

const router=express.Router()
const {obtenerDatos} =require('../controller/controller')

router.get('/',obtenerDatos)
// router.get('/:id',obtenerDato)
// router.post('/',crearDato)
// router.delete('/:id',eleminarDatos)
// router.patch('/:id',actualizarDatos)

module.exports= router




// router.get('/',(req,res)=>{
//         res.json({mensaje:'holaaa'})
// })



// router.get('/:id',(req,res)=>{
//     res.json({mensaje:'holaaa '})
// })


// router.post('/',async(req,res)=>{
//     // res.json({mensaje:'holaaa soy post'})
//     // console.log(req.body)
//     const {materia,calificacion,aula}= req.body
//     // console.log(materia)

//     try{
//         const resultado=await colegio.create({calificacion,materia,aula})
//         res.status(200).json(resultado)
//         console.log(resultado)
//     }
//     catch(error){
//         res.status(404).json({error:error.message})

//     }


// })


// router.delete('/:id',(req,res)=>{
//     res.json({mensaje:'holaaa soy el delete'})
// })


// router.patch('/:id',(req,res)=>{
//     res.json({mensaje:'holaaa'})
// })
