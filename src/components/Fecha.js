import React, { useEffect } from 'react'
import { useState } from 'react';



export default function Fecha() {
  // logica

  let fecha = new Date();
  let hora = fecha.getHours()
  const semanaNumber = fecha.getDay()

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
  // let hora = 8;
  // let semanaNumber = 5;
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
    <div className={estado}>
    <h3>Hoy es {nombreDia}. Estamos {estado} actualmente</h3>
    <h4>{subMensaje}</h4>
  </div>
  )

}
