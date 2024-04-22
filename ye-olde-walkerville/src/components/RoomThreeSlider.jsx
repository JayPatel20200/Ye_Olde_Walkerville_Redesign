import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import RoomFourOne from "../assests/Rooms/Room5/R5-1.jpg";
import RoomFourTwo from "../assests/Rooms/Room5/R5-2.jpg";
import RoomFourThree from "../assests/Rooms/Room5/R5-3.jpg";
import RoomFourFour from "../assests/Rooms/Room5/R5-4.jpg";
import RoomFourFive from "../assests/Rooms/Room5/R5-5.jpg";
import RoomFourSix from "../assests/Rooms/Room5/R5-6.jpg";
const RoomThreeSlider = () => {
  return (
    <Carousel>
    <Carousel.Item>
      <img src={RoomFourOne} className="d-block w-100" alt="Room 5" style={{ maxHeight: "500px", objectFit: "cover" }} />
    </Carousel.Item>
    <Carousel.Item>
      <img src={RoomFourTwo} className="d-block w-100" alt="Room 5" style={{ maxHeight: "500px", objectFit: "cover" }}/>
    </Carousel.Item>
    <Carousel.Item>
      <img src={RoomFourThree} className="d-block w-100" alt="Room 5" style={{ maxHeight: "500px", objectFit: "cover" }} />
    </Carousel.Item>
    <Carousel.Item>
      <img src={RoomFourFour} className="d-block w-100" alt="Room 5" style={{ maxHeight: "500px", objectFit: "cover" }} />
    </Carousel.Item>
    <Carousel.Item>
      <img src={RoomFourFive} className="d-block w-100" alt="Room 5" style={{ maxHeight: "500px", objectFit: "contain" }} />
    </Carousel.Item>
    <Carousel.Item>
      <img src={RoomFourSix} className="d-block w-100" alt="Room 5" style={{ maxHeight: "500px", objectFit: "contain" }} />
    </Carousel.Item>
  </Carousel>
  )
}

export default RoomThreeSlider