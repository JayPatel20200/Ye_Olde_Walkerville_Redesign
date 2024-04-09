import React from 'react';
import Logo from "../assests/img/Logo_YeOlde.png";
import addressIcon from "../assests/img/address-location-icon.png";
const ExploringWindsor = () => {
  return (
    <div>
      <div id="Exploring" className='bg-gray-400 p-36 lg:p-40 flex justify-center content-center text-2xl'>
      <h1 id="hero_heading">
        Exploring Windsor
      </h1>
      </div>
      <div className="p-5 lg:p-10">
        <h1 className="m-5 text-2xl">Local Area</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
          <div className="rounded-2xl border-2 p-2 text-xl">
            <p className="mb-0 mt-11">Transit Windsor</p>
            <p>Find your next bus in real-time.</p>
          </div>
          <div className="rounded-2xl border-2 p-2 text-xl">
            <p className="mb-0 mt-11">VIA Rail</p>
            <p>Windsor Train Station</p>
          </div>
          <div className="rounded-2xl border-2 p-2 text-xl">
            <p className="mb-0 mt-11">Tunnel Bus</p>
            <p>Downtown Windsor to/from Downtown Detroit</p>
          </div>
          <div className="rounded-2xl border-2 p-2 text-xl">
            <p className="mb-0 mt-11">Transit Windsor</p>
            <p>Find your next bus in real-time.</p>
          </div>
          <div className="rounded-2xl border-2 p-2 text-xl">
            <p className="mb-0 mt-11">VIA Rail</p>
            <p>Windsor Train Station</p>
          </div>
          <div className="rounded-2xl border-2 p-2 text-xl">
            <p className="mb-0 mt-11">VIA Rail</p>
            <p>Windsor Train Station</p>
          </div>
          <div className="rounded-2xl border-2 p-2 text-xl">
            <p className="mb-0 mt-11">VIA Rail</p>
            <p>Windsor Train Station</p>
          </div>
          <div className="rounded-2xl border-2 p-2 text-xl">
            <p className="mb-0 mt-11">VIA Rail</p>
            <p>Windsor Train Station</p>
          </div>
        </div>
        <h1 className="m-5 mt-10 text-2xl"> Surrounding Area</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
          <div className="rounded-2xl border-2 p-2 text-xl">
            <p className="mb-0 mt-11">Transit Windsor</p>
            <p>Find your next bus in real-time.</p>
          </div>
        </div>
        <h1 className="m-5 mt-10 text-2xl">Transportation</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
          <div className="rounded-2xl border-2 p-2 text-xl">
            <p className="mb-0 mt-11">Transit Windsor</p>
            <p>Find your next bus in real-time.</p>
          </div>
          <div className="rounded-2xl border-2 p-2 text-xl">
            <p className="mb-0 mt-11">Transit Windsor</p>
            <p>Find your next bus in real-time.</p>
          </div>
          <div className="rounded-2xl border-2 p-2 text-xl">
            <p className="mb-0 mt-11">Transit Windsor</p>
            <p>Find your next bus in real-time.</p>
          </div>
          <div className="rounded-2xl border-2 p-2 text-xl">
            <p className="mb-0 mt-11">Transit Windsor</p>
            <p>Find your next bus in real-time.</p>
          </div>
        </div>
      </div>
      {/* this is the footer section */}
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
  <div class="menu flex flex-wrap gap-2 p-14">
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
  );
};

export default ExploringWindsor;
