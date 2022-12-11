import React from 'react'
import { useParams } from 'react-router-dom'

function ThankYou() {
    const idOrder= useParams().idOrder
  return (
    <div><h1>Gracias por su compra!</h1><h3>El id de su compra es: {idOrder}</h3></div>
  )
}

export default ThankYou