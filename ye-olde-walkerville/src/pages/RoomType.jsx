import React from 'react'
import special_price from "../assests/img/special_price.jpg";
import quick_and_secure from "../assests/img/quick_and_secure.jpg";
import free_cancel from "../assests/img/free_cancel.jpg";
import R1 from '../assests/Rooms/R1.jpeg';
import R2 from '../assests/Rooms/R2.jpeg';
import R3 from '../assests/Rooms/R3.jpeg';
import R4 from '../assests/Rooms/R4.jpg';
import R5 from '../assests/Rooms/R5.jpg';
import specialPrice from "../assests/img/Special-price2.png";
import freeCanceled from "../assests/img/Free-Canceled2.png";
import quickSecure from "../assests/img/Quick&Secure2.png";
import Logo from "../assests/img/Logo_YeOlde.png";
import addressIcon from "../assests/img/address-location-icon.png";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
export const RoomType = () => {
  return (
    <div>
      <span className="roomHero bg-gray-400 p-36 flex justify-center content-center text-3xl">
      <div className="py-18 sm:py-18">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-4xl font-semibold leading-8 text-gray-900">
            Unlock Exclusive Benefits:<br />Book directly through our website
            </h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 place-items-center gap-x-4 gap-y-10 sm:max-w-xl sm:grid-cols-1 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
        </div>
      </span>
      <div className='p-10'>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
    <div class="image bg-slate-400 rounded-lg">
      <img src={R1} alt="" className="rounded-lg"/>
    </div>
    <div class="content flex flex-col content-center justify-center p-3 rounded-lg">
      <h2 class="roomTypeFontSize">Samantha's Suite</h2>
      <h2>Room #1</h2>
      <div class="mt-3 grid grid-cols-2 gap-3">
        <div>
          <img src="" alt="" />
          <p>King size Bed</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Spa Bath</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Private Bathroom</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Working Desk</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Cable TV</p>
        </div>
      </div>
      <div class="mt-10">
        <div class="price flex justify-between">
          <h2>Room only</h2>
          <h2 className='text-red-400'>from $186</h2>
        </div>
        <div className='line-between'></div>
        <div class="price flex justify-between">
          <h2>Room with breakfast</h2>
          <h2 className='text-red-400'>from $196</h2>
        </div>
       <Link to="/roomone" ><button class="mt-3 rounded-lg bg-red-400 hover:bg-red-500 p-1 px-3 py-2 text-white">View Details</button></Link>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
    <div class="image">
      <img src={R2} alt="" className="rounded-lg"/>
    </div>
    <div class="content flex flex-col content-center justify-center p-3">
      <h2 class="roomTypeFontSize">Corrina's Chamber</h2>
      <h2>Room #2</h2>
      <div class="mt-3 grid grid-cols-2 gap-3">
        <div>
          <img src="" alt="" />
          <p>Deluxe Queen Size Bed</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Spa Bath</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Private Bathroom</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Working Desk</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Cable TV</p>
        </div>
      </div>
      <div class="mt-10">
        <div class="price flex justify-between">
          <h2>Room only</h2>
          <h2 className='text-red-400'>from $148</h2>
        </div>
        <div className='line-between'></div>
        <div class="price flex justify-between">
          <h2>Room with breakfast</h2>
          <h2 className='text-red-400'>from $158</h2>
        </div>
       <Link to="/roomtwo"> <button class="mt-3 rounded-lg bg-red-400 hover:bg-red-500 p-1 px-3 py-2 text-white">View Details</button></Link>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
    <div class="image rounded-lg">
      <img src={R3} alt="" className="rounded-lg"/>
    </div>
    <div class="content flex flex-col content-center justify-center p-3">
      <h2 class="roomTypeFontSize">Tyler's Chamber</h2>
      <h2>Room #3</h2>
      <div class="mt-3 grid grid-cols-2 gap-3">
      <div>
          <img src="" alt="" />
          <p>Deluxe Queen Size Bed</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Spa Bath</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Private Bathroom</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Working Desk</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Cable TV</p>
        </div>
      </div>
      <div class="mt-10">
        <div class="price flex justify-between">
          <h2>Room only</h2>
          <h2 className='text-red-400 '>from $148</h2>
        </div>
          <div className='line-between'></div>
        <div class="price flex justify-between">
          <h2>Room with breakfast</h2>
          <h2 className='text-red-400 '>from $158</h2>
        </div>
      <Link to="/roomthree">  <button class="mt-3 rounded-lg bg-red-400 hover:bg-red-500 p-1 px-3 py-2 text-white">View Details</button></Link>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
    <div class="image rounded-lg">
      <img src={R4} alt="" className="rounded-lg"/>
    </div>
    <div class="content flex flex-col content-center justify-center p-3">
      <h2 class="roomTypeFontSize">Bethany's Room</h2>
      <h2>Room #4</h2>
      <div class="mt-3 grid grid-cols-2 gap-3">
        <div>
          <img src="" alt="" />
          <p>Double or Twin Bed</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Bath</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Private Bathroom</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Working Desk</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Cable TV</p>
        </div>
      </div>
      <div class="mt-10">
        <div class="price flex justify-between">
          <h2>Room only</h2>
          <h2 className='text-red-400'>from $136</h2>
        </div>
        <div className='line-between'></div>
        <div class="price flex justify-between">
          <h2>Room with breakfast</h2>
          <h2 className='text-red-400'>from $146</h2>
        </div>
       <Link to="/roomfour"> <button class="mt-3 rounded-lg bg-red-400 hover:bg-red-500 p-1 px-3 py-2 text-white">View Details</button></Link>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
    <div class="image rounded-lg">
      <img src={R5} alt="" className="rounded-lg"/>
    </div>
    <div class="content flex flex-col content-center justify-center p-3">
      <h2 class="roomTypeFontSize">Deanna's Room</h2>
      <h2>Room #5</h2>
      <div class="mt-3 grid grid-cols-2 gap-3">
        <div>
          <img src="" alt="" />
          <p>Queen Size Bed</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Bath</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Private Bathroom</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Working Desk</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Cable TV</p>
        </div>
      </div>
      <div class="mt-10">
        <div class="price flex justify-between">
          <h2>Room only</h2>
          <h2 className='text-red-400'>from $134</h2>
        </div>
        <div className='line-between'></div>
        <div class="price flex justify-between">
          <h2>Room with breakfast</h2>
          <h2 className='text-red-400'>from $144</h2>
        </div>
       <Link to="/roomfive"> <button class="mt-3 rounded-lg bg-red-400 hover:bg-red-500 p-1 px-3 py-2 text-white">View Details</button></Link>
      </div>
    </div>
  </div>
</div>
{/* This is the footer section */}
<Footer />
</div>  
  )
}