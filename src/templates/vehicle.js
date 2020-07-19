import React, {useState} from "react"

import HomeLayout from "../layouts/homeLayout"
import VehicleCard from "../components/vehicleCard/vehicleCard"



const MainCTA = ({ ownerContact }) => {
  const [showContact, setContact] = useState(false)

  return (
    <button onClick={()=> setContact(true)}>
      {showContact ? ownerContact : 'Contactar dueño'}
    </button>
  )
}
export default function Home(props) {
  console.log("Home -> props", props);
  const postData = props.pageContext.post
  
  return (
    <HomeLayout>
      <VehicleCard node={postData} />
      <MainCTA ownerContact={'+(##) ####-####'}/>
    </HomeLayout>
  )
}
