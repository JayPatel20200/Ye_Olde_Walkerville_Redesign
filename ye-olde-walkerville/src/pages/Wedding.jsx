import React from 'react'
import  WeddingTwo  from "../assests/img/wedding_00.jpg";
import Logo from "../assests/img/Logo_YeOlde.png";
import addressIcon from "../assests/img/address-location-icon.png";
export const Wedding = () => {
  return (
   <div>
<div class="weddingHero bg-gray-400 p-44 flex justify-center content-center text-3xl">
  <h2>Wedding & Events</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-5">
          <div className="image flex justify-center items-center p-2 max-h-96 max-w-96">
            <img src={WeddingTwo} alt="Wedding" />
          </div>
          <div className="p-4">
            <p className="mt-2">“Escape to the past” at Ye Olde Walkerville Bed & Breakfast</p>
            <p className="mt-2">For a unique and intimate wedding or special event, choose Ye Olde Walkerville B & B. This 100-year-old Victorian Manor can accommodate up to 20 guests in a cozy and elegant setting. You can enjoy the exclusive use of the rear gazebo or the exquisite dining room, followed by a gourmet buffet dinner and a warm guest reception.</p>
          </div>
        </div>
<div class="flex justify-center flex-col content-center p-12 text-center mb-5">
  <h2 class="text-2xl/[29px] mb-4">Wedding & Events Enquiry Form</h2>
  <p>Please fill out your enquiry here for more information. </p>
</div>
<div className="form mt-5 p-5 lg:p-20">
          <form action="" className="p-5 lg:p-24">
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="col-span-full">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm" />
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm" />
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Mobile Phone</label>
                <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm" />
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Email Address</label>
                <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm" />
              </div>
              {/* Repeat for other input fields */}
            </div>
            <div className="col-span-full mt-5">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">About</label>
              <textarea id="about" name="about" rows="3" className="block w-full rounded-md border py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm"></textarea>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
            </div>
            <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">Submit</button>
          </form>
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
export default Wedding