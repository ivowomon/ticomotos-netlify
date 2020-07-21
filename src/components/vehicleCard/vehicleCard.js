import React from "react"
import { Link } from "gatsby"

import { formatMileage } from "../../utils/formatVehicleData"
import  "./style.sass"

const temporalImageUrl = "https://cdn1.cycletrader.com/v1/media/5dbaf6dcc7c3f0593d2b8980.jpg"


export default function VehicleCard({ node }) {
  //console.log("TempVehicle -> node", node)
  const mainTitle = `${node.acf.vehicles_year} ${node.acf.vehicles_brand.post_title}`

  return (
    <Link className="linkWrapper" to={`/${node.slug}/`}>
      <div className="container">
        <div className="imageBody">
          <div className="vehicleImageDetails">
            <span>₡{node.acf.vehicles_price}</span>
            <span className="milesText">{formatMileage(node.acf.vehicles_mileage)}</span>
          </div>
          <img className="vehicleImage" src={temporalImageUrl}/>
        </div>
        <div className="contentBody">
          <div className="shortDescription">
            {mainTitle}
          </div>
          <div className="locationText">
            {node.acf.vehicles_location.state}
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