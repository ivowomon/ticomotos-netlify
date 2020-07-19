import React from "react"

import { Link } from "gatsby"

export default function TempVehicle({ node }) {
  //console.log("TempVehicle -> node", node)
  return (
    <Link to={`/${node.slug}/`}>
      <div>
        <div>
          {node.title}
        </div>
        <div>
          {node.acf.vehicles_mileage}
        </div>
        <div>
          {node.acf.vehicles_year}
        </div>
        <div>
          {node.acf.vehicles_location.state}
        </div>
      </div>
    </Link>
  )
}
