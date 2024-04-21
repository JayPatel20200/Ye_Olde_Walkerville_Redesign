import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import RoomTwoOne from "../assests/Rooms/Room2/R2-1.jpeg";
import RoomTwoTwo from "../assests/Rooms/Room2/R2-2.jpg";
import RoomTwoThree from "../assests/Rooms/Room2/R2-3.jpg";
import RoomTwoFour from "../assests/Rooms/Room2/R2-4.jpg";
import RoomTwoFive from "../assests/Rooms/Room2/R2-5.jpg";

// const RoomTwoSlider = () => {
//   return (
//     <Carousel>
//       <Carousel.Item>
//         <img src={RoomTwoOne} />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img src={RoomTwoTwo} />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img src={RoomTwoThree} />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img src={RoomTwoFour} />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img src={RoomTwoFive} />
//       </Carousel.Item>
//     </Carousel>
//   )
// }

// export default RoomTwoSlider

const RoomTwoSlider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={RoomTwoOne} className="d-block w-100" alt="Room 2" style={{ maxHeight: "500px", objectFit: "cover" }} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={RoomTwoTwo} className="d-block w-100" alt="Room 2" style={{ maxHeight: "500px", objectFit: "cover" }} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={RoomTwoThree} className="d-block w-100" alt="Room 2" style={{ maxHeight: "500px", objectFit: "cover" }} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={RoomTwoFour} className="d-block w-100" alt="Room 2" style={{ maxHeight: "500px", objectFit: "cover" }} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={RoomTwoFive} className="d-block w-100" alt="Room 2" style={{ maxHeight: "500px", objectFit: "contain" }} />
      </Carousel.Item>
    </Carousel>
  );
};

export default RoomTwoSlider;