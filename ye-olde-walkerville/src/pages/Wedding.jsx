import React from 'react'
import  WeddingTwo  from "../assests/img/wedding_00.jpg";
import Logo from "../assests/img/Logo_YeOlde.png";
import addressIcon from "../assests/img/address-location-icon.png";
export const Wedding = () => {
  return (
   <div>
<div class="weddingHero bg-gray-400 p-44 flex justify-center content-center text-3xl">
  <h2 id='hero_heading'>Wedding & Events</h2>
</div>

<div className="flex justify-center content-center flex-wrap sm:flex-nowrap">
         <div className="p-10">
          <img src={WeddingTwo} alt="" className="rounded-lg"/>
         </div>

          <div className="p-10 m-auto" >
            <p className="mt-2 text-2xl">“Escape to the past” at Ye Olde Walkerville Bed & Breakfast</p>
            <p className="mt-2">
Experience the charm of a bygone era with Ye Olde Walkerville B & B, where timeless elegance meets modern romance. Say "I do" in style with our exclusive wedding package, designed for couples seeking a unique and intimate celebration.</p>
            <p className="mt-2">Step into the enchanting ambiance of our 100-year-old Victorian Manor, exclusively reserved for you and your 50 cherished guests. Choose between the picturesque rear gazebo or our exquisite dining room for your official wedding ceremony, setting the stage for unforgettable moments.Indulge in culinary delights with an elegant gourmet buffet dinner, crafted to perfection, followed by a cozy and intimate reception among your nearest and dearest.</p>
            <p className="mt-2">As the celebration winds down, retreat to the opulent Samantha's Suite for your honeymoon night, with additional guest rooms available for family and friends to share in the joyous occasion.</p>
            <p className="mt-2">Awaken to a new chapter of your love story with an intimate, romantic made-to-order breakfast for up to 10 people, setting the tone for a life filled with love, laughter, and cherished memories.</p>
            <p className="mt-2">At Ye Olde Walkerville B & B, we transform weddings into timeless affairs, where every detail is carefully curated to ensure your special day is nothing short of magical.</p>
          </div>
        </div>
<div class="flex justify-center flex-col content-center px-12 text-center">
  <h2 class="text-2xl/[29px] mb-2">Wedding & Events Enquiry Form</h2>
  <p>Please fill out your enquiry here for more information. </p>
</div>
<div className="form p-5 lg:p-20">
          <form action="" className="p-5 lg:px-24">
            <div className="mt-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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