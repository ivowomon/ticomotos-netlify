import React, {useState} from "react"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

import HomeLayout from "../layouts/homeLayout"
import VehicleCard from "../components/vehicleCard/vehicleCard"
import { formatImagesUrls } from "../utils/formatVehicleData"

const TEMP_IMAGES = [
  '/harley.jpg',
  '/red.jpg',
  '/red-white.jpg',
  '/trike.jpg',
  '/vintage.jpg',
  '/white-blue.jpg',
]
const CustomSlider = ({ imagesUrls }) => (
  <Carousel showArrows={true} >
    {imagesUrls.map((imagePath) => (
      <div key={`${imagePath}-carousel`}>
          <img src={`http://localhost:1337${imagePath}`} />
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
  const imagesUrls = formatImagesUrls(postData)
  console.log("Home -> postData", postData)
  console.log("Home -> imagesUrls", imagesUrls)

  return (
    <HomeLayout>
      <CustomSlider imagesUrls={imagesUrls}/>
      <VehicleCard node={postData} />
      <MainCTA ownerContact={'+(##) ####-####'}/>
    </HomeLayout>
  )
}
