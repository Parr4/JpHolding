import React from 'react'
import '../assets/css/Footer.css'

export default function Footer() {
    return (
        // <div className='footer'>
        //     <div className="container">
        //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, aperiam!</p>
        //     </div>
        //     <div className="container">
        //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        //     </div>
        //     <div className="container">
        //         <p>Lorem ipsum dolor sit amet.
        //         </p>
        //     </div>
        // </div>

        <div className='container-fluid foooter'>
            <div className='row '>
                <div className="col-12 col-md-4 contenedor">
                    <h5>Contacto</h5>
                    <ul>
                        <li>Email: Email@jpinformatica.cl</li>
                        <li>Numero: +56 9 54659685</li>
                    </ul>
                </div>
                <div className="col-6 col-md-4 contenedor">
                    <h5>Holding Jp</h5>
                    <ul>
                        <li>Nosotros</li>
                        <li>Nuestra historia</li>
                    </ul>
                </div>
                <div className="col-6 col-md-4 contenedor">
                    <p>Esta es una pagina propiedad de Holding JP</p>
                    <p>Web desarrollada por Francisco Parra</p>
                </div>

            </div>
        </div>
    )
}
