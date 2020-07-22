import React from "react"
import { Link } from "gatsby"

import { formatMileage } from "../../utils/formatVehicleData"
import  "./style.sass"

const temporalImageUrl = "https://cdn1.cycletrader.com/v1/media/5dbaf6dcc7c3f0593d2b8980.jpg"


export default function VehicleCard({ node }) {
  //console.log("TempVehicle -> node", node)
  const mainTitle = `${node.year} ${node.model.name} | ${node.brand.name}`

  return (
    <Link className="linkWrapper" to={`/${node.strapiId}/`}>
      <div className="container">
        <div className="imageBody">
          <div className="vehicleImageDetails">
            <span>₡{node.price}</span>
            <span className="milesText">{formatMileage(node.mileage)}</span>
          </div>
          <img className="vehicleImage" src={temporalImageUrl}/>
        </div>
        <div className="contentBody">
          <div className="shortDescription">
            {mainTitle}
          </div>
          <div className="locationText">
            {node.location.address}
          </div>
        </div>
      </div>
    </Link>
  )
}
export const query = graphql`
  fragment VehicleCardFields on StrapiVehicles {
    brand {
      name
    }
    tags {
      name
    }
    model {
      name
    }
    location{
      address
    }
    year
    displacement
    mileage
    negotiable_price
    plate
    trade
    id
    strapiId
    price
    photos {
      formats {
        large {
          url
        }
        medium {
          url
        }
        small {
          url
        }
        thumbnail {
          url
        }
      }
    }
  }
`