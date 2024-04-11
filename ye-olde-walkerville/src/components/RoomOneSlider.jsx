import Carousel from 'react-bootstrap/Carousel';
import RoomOne from "../assests/Rooms/Room1/R1-1.jpeg";
import RoomOneTwo from "../assests/Rooms/Room1/R1-2.jpeg";
import RoomOneThree from "../assests/Rooms/Room1/R1-3.jpeg";
import RoomOneFour from "../assests/Rooms/Room1/R1-6.jpeg";
import RoomOneFive from "../assests/Rooms/Room1/R1-5.jpeg";
import RoomOneSix from "../assests/Rooms/Room1/R1-3.webp";

function RoomOneSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={RoomOne} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={RoomOneTwo} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={RoomOneThree} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={RoomOneFour} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={RoomOneFive} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={RoomOneSix} />
      </Carousel.Item>
    </Carousel>
  );
}

export default RoomOneSlider;