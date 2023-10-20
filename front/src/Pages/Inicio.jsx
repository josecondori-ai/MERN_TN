import React, { useEffect, useState } from 'react';
import './Inicio'
const Inicio = () => {

    const [datos,setDatos]=useState(null)

    useEffect(()=>{
            const mifuncion= async()=>{
                const response=await fetch('/miapi/pepe/')//==> /
                console.log(response)
                const json= await response.json()
                console.log(json)
                if(response.ok){
                    
                    setDatos(json)
                }
            }

            mifuncion()

    },[])

    console.log(datos)

    /*
    
    nada siempre se renderiza
    [] 1 sola vez
    [varibale] se renderiza cuanod se cambiar el valor de la variable
    */


    return(
            <div>
                {datos.map(dato=>(
                    <p>{dato}</p>
                ))}
            </div>
        )
}

export { Inicio }