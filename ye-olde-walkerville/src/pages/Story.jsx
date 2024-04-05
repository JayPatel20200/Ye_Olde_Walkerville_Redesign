import React from 'react'
import StoryHero from "../assests/img/Story_00.jpg";
import Logo from "../assests/img/Logo_YeOlde.png";
import addressIcon from "../assests/img/address-location-icon.png";
export const Story = () => {
  return (
    <>
    <div className='storyHero p-44 flex justify-center content-center text-3xl'>
    <h2 id='hero_heading'>
      Our story
    </h2>
</div>
<div className="flex justify-center content-center flex-wrap sm:flex-nowrap p-10">
  <div className="w-full h-auto">
    <img src={StoryHero} alt="" className='rounded-lg'/>
  </div>
  <div class="p-4 px-10">
  <p class="mt-2">Our property was part of the Hiram Walker Distillery Estates, a whiskey producer that founded Walkerville in 1858. Robert Leishman, a machinist, bought the land in 1903 and built this Manor for his nine children. His family lived in the Manor until 1935, when Windsor annexed Walkerville. 
</p>
<p class="mt-2">The Manor was restored and renovated, keeping its charm and character, while adding modern amenities for our guests. We named it Ye Olde Walkerville Bed & Breakfast, to honor the area’s history and heritage, and to offer a cozy and friendly atmosphere.
</p>
<p class="mt-2">We welcome you to our lovely Bed & Breakfast, where you will enjoy a relaxing and memorable stay. You will appreciate the Manor’s beauty and elegance, the delicious homemade breakfast, the quiet and peaceful environment, and the personal and attentive service. You will also experience the culture and attractions of Windsor, a lively and diverse city that has something for everyone.</p>
  </div>
</div>
<div class="gallery">
  <h2 class="text-2xl text-center mt-10">Gallery</h2>
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 p-10">
    <div class="w-32 h-32 bg-slate-400 rounded-lg"></div>
    <div class="w-32 h-32 bg-slate-400 rounded-lg"></div>
    <div class="w-32 h-32 bg-slate-400 rounded-lg"></div>
    <div class="w-32 h-32 bg-slate-400 rounded-lg"></div>
    <div class="w-32 h-32 bg-slate-400 rounded-lg"></div>
    <div class="w-32 h-32 bg-slate-400 rounded-lg"></div>
    <div class="w-32 h-32 bg-slate-400 rounded-lg"></div>
    <div class="w-32 h-32 bg-slate-400 rounded-lg"></div>
    <div class="w-32 h-32 bg-slate-400 rounded-lg"></div>
    <div class="w-32 h-32 bg-slate-400 rounded-lg"></div>
    <div class="w-32 h-32 bg-slate-400 rounded-lg"></div>
    <div class="w-32 h-32 bg-slate-400 rounded-lg"></div>
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
    </>
  )
}

// export default Story