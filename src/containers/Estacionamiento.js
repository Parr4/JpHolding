import React, { useEffect } from "react";
import Fecha from "../components/Fecha";
import { useState } from "react";
import "../assets/css/Estacionamiento.css";

export default function Estacionamiento() {
  let fecha = new Date();
  // let hora = fecha.getHours()
  // const semanaNumber = fecha.getDay()

  const diasSemana = [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
  ];

  const [estado, setEstado] = useState("Abierto");
  const [subMensaje, setSubMensaje] = useState("");

  // Parametros para probar!!!
  let hora = 8;
  let semanaNumber = 5;
  // console.log("fecha: ", fecha, "Hora: ", hora)
  // console.log("El estacionamiento esta", estado)

  let nombreDia = diasSemana[semanaNumber];

  useEffect(() => {
    switch (semanaNumber) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        if (hora < 8 || hora >= 23) {
          setEstado("Cerrado");
          if (hora < 8) {
            setSubMensaje(
              "Aun no abrimos, nuestros servicios empiezan a las 8:00 AM."
            );
          } else {
            setSubMensaje(
              "Nuestros servicios acabaron a las 23:00 PM. Ya estamos cerrados!"
            );
          }
        } else {
          setEstado("Abierto");
          setSubMensaje("Estamos abiertos hasta las 23:00 PM!");
        }
        break;
      case 6:
        if (hora < 8 || hora >= 22) {
          setEstado("Cerrado");
          if (hora < 8) {
            setSubMensaje(
              "Aun no abrimos, nuestros servicios empiezan a las 8:00 AM."
            );
          } else {
            setSubMensaje(
              "Nuestros servicios acabaron a las 22:00 PM. Ya estamos cerrados!"
            );
          }
        } else {
          setEstado("Abierto");
          setSubMensaje("Estamos abiertos hasta las 23:00 PM!");
        }
        break;
      default:
        setEstado("Cerrado");
        setSubMensaje(
          "No abrimos los domingos, abajo encontras nuestro horario!"
        );
        break;
    }
  }, [estado, semanaNumber, hora]);

  return (
    <div>
      <div className="page">

        <div className=" banner">

          <h1>EL MEJOR ESTACIONAMIENTO EN RANCAGUA</h1>
          <h4>Jose Domingo Mujica 218</h4>
          <div className={estado}>
            <h2>Hoy es {nombreDia}. Estamos {estado} actualmente</h2>
            <h4>{subMensaje}</h4>
          </div>



        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.1365820573583!2d-70.7378707!3d-34.1684255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9663436a8974a0e3%3A0xefff5518a29a6793!2sEstacionamiento%20JP!5e0!3m2!1ses!2scl!4v1705974237220!5m2!1ses!2scl"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

      </div>

      <div className="gap" />

      <div className="page">

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-6">
              <div className="card ">
                <h4 className="card-title">Horario</h4>
                <ul className="card-body">
                  <li>Lun: 8:00 a.m.-11:00p.m.</li>
                  <li>Mar: 8:00 a.m.-11:00p.m.</li>
                  <li>Mié: 8:00 a.m.-11:00p.m.</li>
                  <li>Jue: 8:00 a.m.-11:00p.m.</li>
                  <li>Vie: 8:00 a.m.-11:00p.m.</li>
                  <li>Sab: 8:00 a.m.-10:00p.m.</li>
                  <li>Dom: Cerrado</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 mb-3 mb-sm-6">
              <div className="card ">
                <h4 className="card-title">Valores</h4>
                <div className="valores card-body">
                  <ul className="cositas">
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Impedit dolorum nam possimus doloremque?</li>
                    <li>Natus enim adipisci illo accusantium.</li>
                    <li>Itaque quae distinctio adipisci aspernatur?</li>
                    <li>Facilis, asperiores provident? Dolore, sit!</li>
                  </ul>
                  <ul className="precios">
                    <li>$1.000</li>
                    <li>$1.000</li>
                    <li>$1.000</li>
                    <li>$1.000</li>
                    <li>$1.000</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

      <div className="page">

        <div className="row justify-content-center">
          <h4 >OPINIONES DE NUESTROS CLIENTES</h4>
          <iframe
            className="col-10"
            src="https://widgets.sociablekit.com/google-reviews/iframe/25354733"
            frameborder="0"
          ></iframe>
        </div>
      </div>


    </div>
  );


  // <div className="gap" />
  // <div className="gap" />
}
