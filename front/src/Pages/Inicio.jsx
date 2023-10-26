import React, { useEffect, useState } from 'react';
import './Inicio'
import { Detalles } from '../Components/Detalles/Detalles';
import { Formulario } from '../Components/Formulario/Formulario';

const Inicio = () => {

    const [datos,setDatos]=useState(null)
    console.log(datos)

    useEffect(()=>{

            const mifuncion= async()=>{
                const response=await fetch('/miapi/pepe')//==> /
                const json= await response.json()
            
                if(response.ok){
                    
                    setDatos(json)
                }
            }

            mifuncion()

    },[])

    return(
       
            <div>
                {datos &&  datos.map(dato=>(
                <div  >
                        <Detalles dato={dato} key={dato._id} />
                    
                </div>
                ))}

                <Formulario/>
            </div>
        )
}
export { Inicio }