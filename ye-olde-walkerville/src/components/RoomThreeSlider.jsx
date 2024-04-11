import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import RoomThreeOne from "../assests/Rooms/Room3/R3-1.jpeg";
import RoomThreeTwo from "../assests/Rooms/Room3/R3-2.jpeg";
import RoomThreeThree from "../assests/Rooms/Room3/R3-3.jpeg";
import RoomThreeFour from "../assests/Rooms/Room3/R3-4.jpeg";
import RoomThreeFive from "../assests/Rooms/Room3/R3-5.jpeg";
const RoomThreeSlider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={RoomThreeOne} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={RoomThreeTwo} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={RoomThreeThree} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={RoomThreeFour} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={RoomThreeFive} />
      </Carousel.Item>
    </Carousel>
  )
}

export default RoomThreeSlider