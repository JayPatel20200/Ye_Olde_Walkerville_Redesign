import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import s01 from "../assests/img/Square/Story_01.jpeg";
import s02 from "../assests/img/Square/Story_02.jpeg";
import s03 from "../assests/img/Square/Story_03.jpeg";
import s04 from "../assests/img/Square/Story_04.jpeg";
import s05 from "../assests/img/Square/Story_05.jpg";
import s06 from "../assests/img/Square/Story_06.jpg";
import s07 from "../assests/img/Square/Story_07.jpg";
import s08 from "../assests/img/Square/Story_08.jpg";
import s09 from "../assests/img/Square/Story_09.jpg";
import s10 from "../assests/img/Square/Story_10.jpeg";
import s11 from "../assests/img/Square/Story_11.jpeg";
import s12 from "../assests/img/Square/Story_12.jpg";
const StorySlider = () => {
  return (
    <Carousel>
       <Carousel.Item>
       <div class="w-50 h-50 sm:w-56 sm:h-56 sm:p-0 px-20 py-10 rounded-lg">
    <img src={s01} alt="" className="rounded-lg"/>
    </div>
       </Carousel.Item>
       <Carousel.Item>
       <div class="w-50 h-50 sm:w-56 sm:h-56 sm:p-0 px-20 py-10 rounded-lg">
    <img src={s02} alt="" className="rounded-lg"/>
    </div>
       </Carousel.Item>
       <Carousel.Item>
       <div class="w-50 h-50 sm:w-56 sm:h-56 sm:p-0 px-20 py-10 rounded-lg">
    <img src={s03} alt="" className="rounded-lg"/>
    </div>
       </Carousel.Item>
       <Carousel.Item>
       <div class="w-50 h-50 sm:w-56 sm:h-56 sm:p-0 px-20 py-10 rounded-lg">
    <img src={s04} alt="" className="rounded-lg"/>
    </div>
       </Carousel.Item>
       <Carousel.Item>
       <div class="w-50 h-50 sm:w-56 sm:h-56 sm:p-0 px-20 py-10 rounded-lg">
    <img src={s05} alt="" className="rounded-lg"/>
    </div>
       </Carousel.Item>
       <Carousel.Item>
       <div class="w-50 h-50 sm:w-56 sm:h-56 sm:p-0 px-20 py-10 rounded-lg">
    <img src={s06} alt="" className="rounded-lg"/>
    </div>
       </Carousel.Item>
       <Carousel.Item>
       <div class="w-50 h-50 sm:w-56 sm:h-56 sm:p-0 px-20 py-10 rounded-lg">
    <img src={s07} alt="" className="rounded-lg"/>
    </div>
       </Carousel.Item>
       <Carousel.Item>
       <div class="w-50 h-50 sm:w-56 sm:h-56 sm:p-0 px-20 py-10 rounded-lg">
    <img src={s08} alt="" className="rounded-lg"/>
    </div>
       </Carousel.Item>
       <Carousel.Item>
       <div class="w-50 h-50 sm:w-56 sm:h-56 sm:p-0 px-20 py-10 rounded-lg">
    <img src={s09} alt="" className="rounded-lg"/>
    </div>
       </Carousel.Item>
       <Carousel.Item>
       <div class="w-50 h-50 sm:w-56 sm:h-56 sm:p-0 px-20 py-10 rounded-lg">
    <img src={s10} alt="" className="rounded-lg"/>
    </div>
       </Carousel.Item>
       <Carousel.Item>
       <div class="w-50 h-50 sm:w-56 sm:h-56 sm:p-0 px-20 py-10 rounded-lg">
    <img src={s11} alt="" className="rounded-lg"/>
    </div>
       </Carousel.Item>
       <Carousel.Item>
       <div class="w-50 h-50 sm:w-56 sm:h-56 sm:p-0 px-20 py-10 rounded-lg">
    <img src={s12} alt="" className="rounded-lg"/>
    </div>
       </Carousel.Item>
    </Carousel>
  )
}

export default StorySlider