import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import RoomFourOne from "../assests/Rooms/Room5/R5-1.jpg";
import RoomFourTwo from "../assests/Rooms/Room5/R5-2.jpg";
import RoomFourThree from "../assests/Rooms/Room5/R5-3.jpg";
import RoomFourFour from "../assests/Rooms/Room5/R5-4.jpg";
import RoomFourFive from "../assests/Rooms/Room5/R5-5.jpg";
import RoomFourSix from "../assests/Rooms/Room5/R5-6.jpg";
const RoomFiveSlider = () => {
  return (
    <Carousel>
    <Carousel.Item>
      <img src={RoomFourOne} />
    </Carousel.Item>
    <Carousel.Item>
      <img src={RoomFourTwo} />
    </Carousel.Item>
    <Carousel.Item>
      <img src={RoomFourThree} />
    </Carousel.Item>
    <Carousel.Item>
      <img src={RoomFourFour} />
    </Carousel.Item>
    <Carousel.Item>
      <img src={RoomFourFive} />
    </Carousel.Item>
    <Carousel.Item>
      <img src={RoomFourSix} />
    </Carousel.Item>
  </Carousel>
  )
}

export default RoomFiveSlider