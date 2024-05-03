import Carousel from 'react-bootstrap/Carousel';
import RoomOne from "../assests/Rooms/Room1/R1-1.jpeg";
import RoomOneTwo from "../assests/Rooms/Room1/R1-2.jpeg";
import RoomOneThree from "../assests/Rooms/Room1/R1-3.webp";
import RoomOneFour from "../assests/Rooms/Room1/R1-3.jpeg";
import RoomOneFive from "../assests/Rooms/Room1/R1-5.jpeg";
import RoomOneSix from "../assests/Rooms/Room1/R1-6.jpeg";
import RoomOneSeven from "../assests/Rooms/Room1/R1-7.jpeg";


function RoomOneSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={RoomOne} className="d-block w-100" alt="Room 1" style={{ maxHeight: "500px", objectFit: "cover" }} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={RoomOneTwo} className="d-block w-100" alt="Room 1" style={{ maxHeight: "500px", objectFit: "cover" }}  />
      </Carousel.Item>
      <Carousel.Item>
        <img src={RoomOneThree} className="d-block w-100" alt="Room 1" style={{ maxHeight: "500px", objectFit: "cover" }}  />
      </Carousel.Item>
      <Carousel.Item>
        <img src={RoomOneFour} className="d-block w-100" alt="Room 1" style={{ maxHeight: "500px", objectFit: "cover" }}  />
      </Carousel.Item>
      <Carousel.Item>
        <img src={RoomOneFive} className="d-block w-100" alt="Room 1" style={{ maxHeight: "500px", objectFit: "cover" }} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={RoomOneSix} className="d-block w-100" alt="Room 1" style={{ maxHeight: "500px", objectFit: "cover" }} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={RoomOneSeven} className="d-block w-100" alt="Room 1" style={{ maxHeight: "500px", objectFit: "contain" }} />
      </Carousel.Item>
    </Carousel>
  );
}

export default RoomOneSlider;