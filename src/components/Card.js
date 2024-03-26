import React, { useEffect, useState } from 'react'

export default function Card(props) {
    const { primicia, titulo, texto, disponibilidad, info, btnS  } = props;

    const [dispo, setDispo] = useState("")

    useEffect(()=>{if (disponibilidad == 'si'){
            setDispo("Disponible");
        } else ( setDispo("No Disponible"));
    });



    const [btn, setBtn] = useState("")
    useEffect(()=> {if (btnS !== undefined){
        setBtn(true) } else{setBtn(false)
    }})



    return (

        <div>

            <div class="card text-center">
                <div class="card-header">
                    {primicia}
                </div>
                <div class="card-body">
                    <h5 class="card-title">{titulo}</h5>
                    <p class="card-text">{texto}</p>

                    {btn ? <a href="#" class="btn btn-primary">Mas informacion</a> : <p>hola</p>}

                </div>
                <div class="card-footer text-muted">
                   {dispo}
                    
                </div>
            </div>




        </div>
    )
}
