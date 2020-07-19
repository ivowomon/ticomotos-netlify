import React from "react"
import { Link } from "gatsby"

import  "./style.sass"

const temporalImageUrl = "https://cdn1.cycletrader.com/v1/media/5dbaf6dcc7c3f0593d2b8980.jpg"


export default function VehicleCard({ node }) {
  //console.log("TempVehicle -> node", node)
  return (
    <Link to={`/${node.slug}/`}>
      <div className="container">
        <div className="imageBody">
          <img className="vehicleImage" src={temporalImageUrl}/>
          <div className="contentBody">
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
        </div>
      </div>
    </Link>
  )
}
export const query = graphql`
  fragment VehicleCardFields on wordpress__wp_vehicles {
    title
    slug
    tags {
      slug
    }
    acf {
      vehicles_mileage
      vehicles_year
      vehicles_location {
        lng
        lat
        state
        city
      }
      vehicles_brand {
        post_title
      }
      vehicles_price
    }
  }
`