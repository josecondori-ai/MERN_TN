const mongoose=require('mongoose')


const Schema=mongoose.Schema

const miesquema=new Schema({
    materia:{
        type:String,
        required:true
    },
    calificacion:{
        type:Number,
        required:true
    },
    aula:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('colegio',miesquema)