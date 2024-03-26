import React from 'react'
import { useState, useEffect } from "react";
import Card from '../components/Card';
import '../assets/css/Estacionamiento.css';
import Page from './Page';
import Title from '../components/fragments/Title';
import Fecha from '../components/Fecha';


export default function NewEstacionamiento() {

  // logica

  // let fecha = new Date();
  // let hora = fecha.getHours()
  // const semanaNumber = fecha.getDay()

  // const diasSemana = [
  //   "domingo",
  //   "lunes",
  //   "martes",
  //   "miércoles",
  //   "jueves",
  //   "viernes",
  //   "sábado",
  // ];

  // const [estado, setEstado] = useState("Abierto");
  // const [subMensaje, setSubMensaje] = useState("");

  // Parametros para probar!!!
  // let hora = 8;
  // let semanaNumber = 5;
  // console.log("fecha: ", fecha, "Hora: ", hora)
  // console.log("El estacionamiento esta", estado)

  // let nombreDia = diasSemana[semanaNumber];

  // useEffect(() => {
  //   switch (semanaNumber) {
  //     case 1:
  //     case 2:
  //     case 3:
  //     case 4:
  //     case 5:
  //       if (hora < 8 || hora >= 23) {
  //         setEstado("Cerrado");
  //         if (hora < 8) {
  //           setSubMensaje(
  //             "Aun no abrimos, nuestros servicios empiezan a las 8:00 AM."
  //           );
  //         } else {
  //           setSubMensaje(
  //             "Nuestros servicios acabaron a las 23:00 PM. Ya estamos cerrados!"
  //           );
  //         }
  //       } else {
  //         setEstado("Abierto");
  //         setSubMensaje("Estamos abiertos hasta las 23:00 PM!");
  //       }
  //       break;
  //     case 6:
  //       if (hora < 8 || hora >= 22) {
  //         setEstado("Cerrado");
  //         if (hora < 8) {
  //           setSubMensaje(
  //             "Aun no abrimos, nuestros servicios empiezan a las 8:00 AM."
  //           );
  //         } else {
  //           setSubMensaje(
  //             "Nuestros servicios acabaron a las 22:00 PM. Ya estamos cerrados!"
  //           );
  //         }
  //       } else {
  //         setEstado("Abierto");
  //         setSubMensaje("Estamos abiertos hasta las 23:00 PM!");
  //       }
  //       break;
  //     default:
  //       setEstado("Cerrado");
  //       setSubMensaje(
  //         "No abrimos los domingos, abajo encontras nuestro horario!"
  //       );
  //       break;
  //   }
  // }, [estado, semanaNumber, hora]);




  return (
    <div>
      <Page

        head={
          <Title
          style='normalTitle'
          title='EL MEJOR ESTACIONAMIENTO EN RANCAGUA'
          subtitle='Jose Domingo Mujica 218'
          content={<Fecha/>}/>
          
        }
        body={
        <iframe
          className='gmaps'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.1365820573583!2d-70.7378707!3d-34.1684255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9663436a8974a0e3%3A0xefff5518a29a6793!2sEstacionamiento%20JP!5e0!3m2!1ses!2scl!4v1705974237220!5m2!1ses!2scl"
          // height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />}
        foot=''

      />

      <Page

      head={
        <Title
        style='normalTitle'
        title='Nuestros servicios'
        subtitle='Servicios de estacionamiento'/>
      }
      
      

      />

      <div className="page">
        <div className='banner'>

          <h1>EL MEJOR ESTACIONAMIENTO EN RANCAGUA</h1>
          <h4>Jose Domingo Mujica 218</h4>
        </div>

        {/* <div className={estado}>
          <h3>Hoy es {nombreDia}. Estamos {estado} actualmente</h3>
          <h4>{subMensaje}</h4>
        </div> */}

        <iframe
          className='gmaps'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.1365820573583!2d-70.7378707!3d-34.1684255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9663436a8974a0e3%3A0xefff5518a29a6793!2sEstacionamiento%20JP!5e0!3m2!1ses!2scl!4v1705974237220!5m2!1ses!2scl"
          // height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />


      </div>


      <div className='page container centerpage justify-content-around'>
        <h2>Nuestros Servicios</h2>

        <div className='row justify-content-evenly'>
          <div className='horario col-11 col-md-5'>

            <h4 className="titulocard">Horario</h4>
            <ul className='listacard row'>
              <li>Lun: 8:00 a.m.-11:00p.m.</li>
              <li>Mar: 8:00 a.m.-11:00p.m.</li>
              <li>Mié: 8:00 a.m.-11:00p.m.</li>
              <li>Jue: 8:00 a.m.-11:00p.m.</li>
              <li>Vie: 8:00 a.m.-11:00p.m.</li>
              <li>Sab: 8:00 a.m.-10:00p.m.</li>
              <li>Dom: Cerrado</li>
            </ul>
          </div>

          <div className='valores horario col-11 col-md-5'>
            <h4 className="titulocard">Valores</h4>
            <div>
              <table>
                <tr>
                  <td>Lorem ipsum dolor sit.</td>
                  <td>$10.000</td>
                </tr>
                <tr>
                  <td>Lorem ipsum dolor sit.</td>
                  <td>$10.000</td>
                </tr>
                <tr>
                  <td>Lorem ipsum dolor sit.</td>
                  <td>$10.000</td>
                </tr>
                <tr>
                  <td>Lorem ipsum dolor sit.</td>
                  <td>$10.000</td>
                </tr>
                <tr>
                  <td>Lorem ipsum dolor sit.</td>
                  <td>$10.000</td>
                </tr>
              </table>

            </div>
          </div>

        </div>
      </div>

      <div className='page container centerpage justify-content-around'>
        <h2>Nuestros Servicios</h2>


        <Card
          primicia={"hola"}
          titulo={"hola"}
          texto={"Hola hola hola hola hola"}
          disponibilidad={"hola"}
        />

        <Card
          primicia={"hola"}
          titulo={"Esto es un titulo de prueba "}
          texto={"Hola hola hola hola hola"}
          btnS={"."}
          disponibilidad={'no'}

        />
        <Card
          primicia={"hola"}
          titulo={"hola"}
          texto={"Hola hola hola hola hola"}
          disponibilidad={'si'}
          btnS={"."}
        />






      </div>


      <div className="page">
        <h2>OPINIONES DE NUESTROS CLIENTES</h2>
        <iframe
          className="col-10"
          src="https://widgets.sociablekit.com/google-reviews/iframe/25354733"
          frameborder="0"
        />

      </div>


    </div>
  )
}
