import React from 'react'

const RoomDetailsTemplate = () => {
  return (
    <div><div class="p-5">
    <div class="grid grid-flow-row-dense grid-cols-2 gap-4">
      <div class="slider col-auto bg-slate-500"></div>
      <div class="content bg-slate-300 p-3">
        <h2 class="">Samantha's Suite</h2>
        <p>Room #1</p>
        <p class="mt-7">Lorem ipsum dolor sit amet, perpetua complectitur ne sea, solum dissentias ut his. Per lorem scripta et, sadipscing consectetuer in eos. Ex nam invidunt convenire. Cum te natum detracto reprimique, dicit verear petentium duo no. Ad nam stet tibique, ne veri indoctum mediocritatem est.</p>
        <div class="mt-10">
          <div class="price flex justify-between">
            <h2>Room only</h2>
            <p>from $150</p>
          </div>
          <div class="price flex justify-between after:absolute after:inline-block after:h-px after:w-full after:bg-slate-600 after:content-['']">
            <h2>Room with breakfast</h2>
            <p>from $150</p>
          </div>
          <button class="mt-3 rounded-lg bg-black p-1 px-2 text-white">view more</button>
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
    <div class="border-b border-gray-900/10 pb-12">
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
            <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="" value="Samantha's Suite : Room #1" />
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
      <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
      <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
    </div>
    </div>
  </div>
  </div>
  )
}

export default RoomDetailsTemplate