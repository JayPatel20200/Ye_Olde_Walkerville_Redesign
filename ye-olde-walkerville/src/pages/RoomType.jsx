import React from 'react'
import special_price from "../assests/img/special_price.jpg";
import quick_and_secure from "../assests/img/quick_and_secure.jpg";
import free_cancel from "../assests/img/free_cancel.jpg";
import R1 from '../assests/Rooms/R1.jpeg';
import R2 from '../assests/Rooms/R2.jpeg';
import R3 from '../assests/Rooms/R3.jpeg';
import R4 from '../assests/Rooms/R4.jpg';
import R5 from '../assests/Rooms/R5.jpg';
import specialPrice from "../assests/img/Special-price.png";
import freeCanceled from "../assests/img/Free-Canceled.png";
import quickSecure from "../assests/img/Quick&Secure.png";
import { Link } from 'react-router-dom';
export const RoomType = () => {
  return (
    <div>
      <span className="roomHero bg-gray-400 p-36 sm:p-44 flex justify-center content-center text-3xl">
      <div className="mx-auto max-w-7xl px-8 lg:px-6">
            <h2 className="text-center text-lg sm:text-4xl font-semibold leading-8 text-gray-900">
            Unlock Exclusive Benefits:<br />Book directly through our website
            </h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <img
                className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                src={specialPrice}
                alt="Transistor"
                width={474}
                height={144}
              />
              <img
                className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                src={freeCanceled}
                alt="Reform"
                width={474}
                height={144}
              />
              <img
                className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                src={quickSecure}
                alt="Tuple"
                width={474}
                height={144}
              /> 
            </div>
          </div>
      </span>
      <div className='p-10'>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
    <div class="image bg-slate-400 rounded-lg">
      <img src={R1} alt="" className="rounded-lg"/>
    </div>
    <div class="content flex flex-col content-center justify-cente p-3 rounded-lg">
      <h2 class="text-2xl">Samantha's Suite</h2>
      <p>Room #1</p>
      <div class="mt-3 grid grid-cols-2 gap-3">
        <div>
          <img src="" alt="" />
          <p>king size bed 1</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>king size bed 2</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>king size bed 3</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>king size bed 4</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>king size bed 5</p>
        </div>
      </div>
      <div class="mt-10">
        <div class="price flex justify-between">
          <h2>Room only</h2>
          <p>from $150</p>
        </div>
        <div class="price flex justify-between after:absolute after:inline-block after:h-px after:w-10/12 after:bg-slate-600 after:content-['']">
          <h2>Room with breakfast</h2>
          <p>from $150</p>
        </div>
       <Link to="/roomone" ><button class="mt-3 rounded-lg bg-black p-1 px-2 text-white">view more</button></Link>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
    <div class="image">
      <img src={R2} alt="" className="rounded-lg"/>
    </div>
    <div class="content flex flex-col content-center justify-center p-3">
      <h2 class="text-2xl">Corrina’s Chamber</h2>
      <p>Room #2</p>
      <div class="mt-3 grid grid-cols-2 gap-3">
        <div>
          <img src="" alt="" />
          <p>king size bed 1</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>king size bed 2</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>king size bed 3</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>king size bed 4</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>king size bed 5</p>
        </div>
      </div>
      <div class="mt-10">
        <div class="price flex justify-between">
          <h2>Room only</h2>
          <p>from $150</p>
        </div>
        <div class="price flex justify-between after:absolute after:inline-block after:h-px after:w-10/12 after:bg-slate-600 after:content-['']">
          <h2>Room with breakfast</h2>
          <p>from $150</p>
        </div>
       <Link to="/roomtwo"> <button class="mt-3 rounded-lg bg-black p-1 px-2 text-white">view more</button></Link>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
    <div class="image rounded-lg">
      <img src={R3} alt=""/>
    </div>
    <div class="content flex flex-col content-center justify-center p-3">
      <h2 class="text-2xl">Tyler’s Chamber</h2>
      <p>Room #3</p>
      <div class="mt-3 grid grid-cols-2 gap-3">
        <div>
          <img src="" alt="" />
          <p>king size bed 1</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>king size bed 2</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>king size bed 3</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>king size bed 4</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>king size bed 5</p>
        </div>
      </div>
      <div class="mt-10">
        <div class="price flex justify-between">
          <h2>Room only</h2>
          <p>from $150</p>
        </div>
        <div class="price flex justify-between after:absolute after:inline-block after:h-px after:w-10/12 after:bg-slate-600 after:content-['']">
          <h2>Room with breakfast</h2>
          <p>from $150</p>
        </div>
      <Link to="/roomthree">  <button class="mt-3 rounded-lg bg-black p-1 px-2 text-white">view more</button></Link>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
    <div class="image rounded-lg">
      <img src={R4} alt="" />
    </div>
    <div class="content flex flex-col content-center justify-center p-3">
      <h2 class="text-2xl">Bethany’s Room</h2>
      <p>Room #4</p>
      <div class="mt-3 grid grid-cols-2 gap-3">
        <div>
          <img src="" alt="" />
          <p>king size bed 1</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>king size bed 2</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>king size bed 3</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>king size bed 4</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>king size bed 5</p>
        </div>
      </div>
      <div class="mt-10">
        <div class="price flex justify-between">
          <h2>Room only</h2>
          <p>from $150</p>
        </div>
        <div class="price flex justify-between after:absolute after:inline-block after:h-px after:w-10/12 after:bg-slate-600 after:content-['']">
          <h2>Room with breakfast</h2>
          <p>from $150</p>
        </div>
       <Link to="/roomfour"> <button class="mt-3 rounded-lg bg-black p-1 px-2 text-white">view more</button></Link>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
    <div class="image rounded-lg">
      <img src={R5} alt="" />
    </div>
    <div class="content flex flex-col content-center justify-center p-3">
      <h2 class="text-2xl">Deanna’s Room</h2>
      <p>Room #5</p>
      <div class="mt-3 grid grid-cols-2 gap-3">
        <div>
          <img src="" alt="" />
          <p>king size bed 1</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>king size bed 2</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>king size bed 3</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>king size bed 4</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>king size bed 5</p>
        </div>
      </div>
      <div class="mt-10">
        <div class="price flex justify-between">
          <h2>Room only</h2>
          <p>from $150</p>
        </div>
        <div class="price flex justify-between after:absolute after:inline-block after:h-px after:w-10/12 after:bg-slate-600 after:content-['']">
          <h2>Room with breakfast</h2>
          <p>from $150</p>
        </div>
       <Link to="/roomfive"> <button class="mt-3 rounded-lg bg-black p-1 px-2 text-white">view more</button></Link>
      </div>
    </div>
  </div>
</div>
{/* This is the footer section */}
<div className="footer my-2">
        <div class="flex gap-4 justify-center items-center flex-wrap">
  <div class="flex flex-col justify-center items-center bg-zinc-50 w-60"><img src="https://cdn5.vectorstock.com/i/1000x1000/33/44/location-icon-vector-24263344.jpg" class="ustify-center content-center"alt="" height="100px" width="100px"/>
            <p class='text-center my-2'>1104 Monmouth Rd,
Windsor, ON N8Y 3L8</p></div>
  <div class="w-60">
    <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1708783200&semt=ais" alt="" />
  </div>
  <div class="w-60 flex flex-col gap-6 justify-center">
    <div class="first-line flex gap-2">
      <img src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-phone-icon-png-image_5065646.jpg" alt="" height="30px" width="30px" />
      <p>(519) 254-1507</p>
    </div>
    <div class="first-line flex gap-2">
      <img src="https://i.etsystatic.com/26743355/r/il/69fb44/3074704892/il_570xN.3074704892_qh7k.jpg" alt="" height="30px" width="30px" />
      <p>yeolde@walkervillebb.com</p>
    </div>
  </div>
</div>

<div class="flex my-3 items-center flex-col bg-slate-100 p-10">
  <div class="menu flex gap-2">
    <p>BOOK A ROOM</p>
    <p>WEDDING & EVENTS</p>
    <p>OUR STORY</p>
    <p>EXPLORING WINDSOR</p>
    <p>CONTACT</p>
  </div>
  <div class="copy text-center my-5">
    <p>© 1997-2024 </p>
    <p>Ye Olde Walkerville Bed & Breakfast.</p>
    <p>All rights reserved.</p>
  </div>
</div>
    </div>
</div>  
  )
}

// export default RoomType