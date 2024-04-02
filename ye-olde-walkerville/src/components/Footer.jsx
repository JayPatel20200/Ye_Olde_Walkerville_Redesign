import React from 'react'
import Logo from "../assests/img/Logo_YeOlde.png";
import addressIcon from "../assests/img/address-location-icon.png";
const Footer = () => {
  return (
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
  )
}

export default Footer