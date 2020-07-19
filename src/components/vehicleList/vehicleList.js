import React from "react"
import { Link } from "gatsby"

import VehicleCard from "../vehicleCard/vehicleCard"

import  "./style.sass"

export default function VehicleList({ items }) {
  return (
    <div className="listContainer">
      {items.map((e, index)=>(<VehicleCard key={`${index}-VehicleList`} node={e.node}/>))}
    </div>
  )
}
