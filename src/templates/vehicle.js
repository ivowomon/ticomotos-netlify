import React, {useState} from "react"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

import HomeLayout from "../layouts/homeLayout"
import VehicleCard from "../components/vehicleCard/vehicleCard"

const TEMP_IMAGES = [
  '/harley.jpg',
  '/red.jpg',
  '/red-white.jpg',
  '/trike.jpg',
  '/vintage.jpg',
  '/white-blue.jpg',
]
const CustomSlider = () => (
  <Carousel showArrows={true} >
    {TEMP_IMAGES.map((imagePath) => (
      <div key={`${imagePath}-carousel`}>
          <img src={imagePath} />
      </div>
    ))}
  </Carousel>
);

const VehicleDetails = ({ data }) => {


  return (
    <div></div>
  )
}

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
      <CustomSlider />
      <VehicleCard node={postData} />
      <MainCTA ownerContact={'+(##) ####-####'}/>
    </HomeLayout>
  )
}
