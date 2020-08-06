import React from "react"

import './style.sass'


/**
 * 
  brand: {name: "Ducati"}
  displacement: 200
  id: "Vehicles_4"
  location: {address: "Santa Ana, San José"}
  mileage: 7673464
  model: {name: "Monster"}
  negotiable_price: true
  photos: (3) [{…}, {…}, {…}]
  plate: 1
  price: "5530000"
  strapiId: 4
  tags: [{…}]
  trade: true
  year: 1998
 */
export default ({ data }) => {

  return (
    <table style={{ width:"100%" }}>
        <tr>
          <th>Detalle</th>
          <th>Valor</th>
        </tr>
      <tr>
        <td>Cilindrada:</td>
        <td>{data.displacement}</td>
      </tr>      <tr>
        <td>Modelo:</td>
        <td>{data.model.name}</td>
      </tr>
      <tr>
        <td>Placa:</td>
        <td>{`Termina en ${data.plate}`}</td>
      </tr>
      
    </table>
  )
}