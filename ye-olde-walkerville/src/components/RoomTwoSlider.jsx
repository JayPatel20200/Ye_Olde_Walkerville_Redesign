import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import RoomTwoOne from "../assests/Rooms/Room2/R2-1.jpeg";
import RoomTwoTwo from "../assests/Rooms/Room2/R2-2.jpg";
import RoomTwoThree from "../assests/Rooms/Room2/R2-3.jpg";
import RoomTwoFour from "../assests/Rooms/Room2/R2-4.jpg";
import RoomTwoFive from "../assests/Rooms/Room2/R2-5.jpg";
const RoomTwoSlider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={RoomTwoOne} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={RoomTwoTwo} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={RoomTwoThree} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={RoomTwoFour} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={RoomTwoFive} />
      </Carousel.Item>
    </Carousel>
  )
}

export default RoomTwoSlider