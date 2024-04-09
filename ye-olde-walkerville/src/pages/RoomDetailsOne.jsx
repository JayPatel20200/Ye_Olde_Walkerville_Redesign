import React from 'react'
import RoomOne from "../assests/Rooms/Room1/R1-1.jpeg";
import specialPrice from "../assests/img/Special-price.png";
import freeCanceled from "../assests/img/Free-Canceled.png";
import quickSecure from "../assests/img/Quick&Secure.png";
import Logo from "../assests/img/Logo_YeOlde.png";
import addressIcon from "../assests/img/address-location-icon.png";
const RoomDetailsOne = () => {
  return (
    <div><div class="p-5 mt-36">
    <div class="grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="slider col-auto rounded-xl p-1">
        <img src={RoomOne}/>
      </div>
      <div class="content p-3">
        <h2 class="singleRoomFontSize">Samantha's Suite</h2>
        <p>Room #1</p>
        <p class="mt-7">Whether you're a business traveler looking for a comfortable and productive space or a couple seeking a romantic weekend escape, Samantha's Suite caters to all. The combination of sophistication, comfort, and thoughtful amenities ensures an exceptional stay.
        <br/>
Elevate your getaway by reserving Samantha's Suite today - where luxury meets lifestyle. Your escape to indulgence begins here.
</p>
        <div class="mt-10">
          <div class="price flex justify-between">
            <h2>Room only</h2>
            <p>from $186</p>
          </div>
          <div className='line-between'></div>
          <div class="price flex justify-between">
            <h2>Room with breakfast</h2>
            <p>from $196</p>
          </div>
        
        </div>
      </div>
    </div>
  
    <div id="Room Amenities" class="mt-10">
      <h2>Room Amenities</h2>
      <div class="mt-1 flex gap-3">
        <span>King Size Bed</span>
        <span>Spa bath</span>
        <span>Private Bathroom</span>
        <span>Working Desk</span>
        <span>Sitting area</span>
        <span>Cable TV</span>
        <span>Refrigerator</span>
        <span>Air Conditioning </span>
      </div>
    </div>
    <div id="BNB features" class="mt-10">
      <h2>BNB Features</h2>
      <div class="mt-1 flex gap-3">
        <span>Free Wifi</span>
        <span>Onsite self-parking</span>
        <span>24/7 Tea Kettle & Coffee Machine </span>
        <span>Irons</span>
      </div>
    </div>
    <div id="Booking Policies" class="mt-10">
      <h2>Booking Policies</h2>
      <div class="mt-1 flex gap-3">
        <span>Check-in 4 PM Check-out 11 PM.</span>
        <span>No smoking</span>
        <span>No pets</span>
      </div>
    </div>
  
    <div id="forThe"></div>
    <div class="border-b border-gray-900/10 pb-12 my-12 lg:px-40">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-4xl font-semibold leading-8 text-gray-900">
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
      <h2 class="text-2xl font-semibold leading-7 text-gray-900 text-center mt-10">Room Reservation Form</h2>
      <p class="mt-4 text-base leading-6 text-gray-600">Please complete the room reservation form. Once your request is processed, we will contact you via phone or email to confirm your reservation. A credit card will be required at that time to secure your booking.</p>
  
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
            <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="" value="Samantha's Suite : Room #1" />
          </div>
        </div>
  
        <div class="col-span-full">
          <label for="BreakfastOption" class="block text-sm font-medium leading-6 text-gray-900">Breakfast Option</label>
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

export default RoomDetailsOne