import React from 'react'
import RoomTwo from "../assests/Rooms/Room2/R2-1.jpeg";
import Logo from "../assests/img/Logo_YeOlde.png";
import addressIcon from "../assests/img/address-location-icon.png";
const RoomDetailsTwo = () => {
  return (
    <div><div class="p-5 mt-36">
    <div class="grid grid-flow-row-dense grid-cols-2 gap-4">
      <div class="slider col-auto rounded-xl p-1">
        <img src={RoomTwo}/>
      </div>
      <div class="content p-3">
        <h2 class="singleRoomFontSize">Corrina's Chamber</h2>
        <p>Room #2</p>
        <p class="mt-7">Embark on a journey of unmatched comfort and sophistication by reserving Corrina's Chamber. This is not just accommodation; it's an invitation to a world where every detail is crafted for your pleasure. Unwind, rejuvenate, and make your stay truly memorable. 
<br/>
        Corrina's Chamber offers a combination of lavish features and relaxing amenities at a reasonable price, providing a seamless blend of value and luxury.
</p>
        <div class="mt-10">
          <div class="price flex justify-between">
            <h2>Room only</h2>
            <p>from $148</p>
          </div>
          <div className='line-between'></div>
          <div class="price flex justify-between">
            <h2>Room with breakfast</h2>
            <p>from $158</p>
          </div>
          
        </div>
      </div>
    </div>
  
    <div id="Room Amenities" class="mt-10">
      <h2>Room Amenities</h2>
      <div class="mt-1 flex gap-3">
        <span>King Size bed</span>
        <span>Jacuzzi Tub with shower</span>
        <span>Working Desk</span>
        <span>Sitting area</span>
        <span>Cable TV</span>
      </div>
    </div>
    <div id="BNB features" class="mt-10">
      <h2>Room Amenities</h2>
      <div class="mt-1 flex gap-3">
        <span>Free Wifi</span>
        <span>Onsite self-praking</span>
        <span>24/7 Tea Kettle & Coffee Machine </span>
        <span>Irons</span>
      </div>
    </div>
    <div id="Booking Policies" class="mt-10">
      <h2>Room Amenities</h2>
      <div class="mt-1 flex gap-3">
        <span>Check-in 4 PM Check-out 11 PM.</span>
        <span>No smoking</span>
        <span>No pets</span>
      </div>
    </div>
  
    <div id="forThe"></div>
    <div class="border-b border-gray-900/10 pb-12 lg:px-40">
      <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
      <p class="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
  
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
          <div class="mt-2">
            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
          <div class="mt-2">
            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Mobile Phone</label>
          <div class="mt-2">
            <input type="tel" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
  
        <div class="sm:col-span-3">
          <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input type="email" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
  
        <div class="col-span-full">
          <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900"> Address</label>
          <div class="mt-2">
            <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="col-span-full">
          <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Room selected</label>
          <div class="mt-2">
            <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="" value="Corrina's Chamber : Room #2" />
          </div>
        </div>
  
        <div class="col-span-full">
          <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
          <div class="mt-2">
            <select id="price" name="price" autocomplete="room-price" class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <option>Room Only - from $150</option>
              <option>Room with Breakfast - from $160</option>
            </select>
          </div>
        </div>
         <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Number of Guests</label>
          <div class="mt-2">
            <input type="number" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
         <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Number of Nights</label>
          <div class="mt-2">
            <input type="number" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
         <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Check-in-date</label>
          <div class="mt-2">
            <input type="date" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
         <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Check-out-date</label>
          <div class="mt-2">
            <input type="date" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
         <div class="col-span-full">
          <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Special request</label>
          <div class="mt-2">
            <textarea type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
          </div>
        </div>
      </div>
      <div class="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" class="text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-400">Cancel</button>
      <button type="submit" class="rounded-md bg-red-400 hover:bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
    </div>
    </div>
  </div>
  {/* This is the footer section */}
  <div className="footer my-2">
        <div class="flex gap-4 justify-center items-center flex-wrap">
  <div class="flex flex-col justify-center items-center w-60"><img src={addressIcon} class="ustify-center content-center"alt="" height="100px" width="100px"/>
            <p class='text-center my-2'>1104 Monmouth Rd,
Windsor, ON N8Y 3L8</p></div>
  <div class="w-60">
    <img src={Logo} alt="" />
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

export default RoomDetailsTwo