import React from 'react';
import './Detalles'


const Detalles = ({dato}) => {
    return(
        <div>
            <h4>{dato.materia}</h4>
            <p>{dato.calificacion}</p>
        </div>
    )
}

export { Detalles }