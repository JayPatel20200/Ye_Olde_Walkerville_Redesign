import React from 'react'
import StoryHero from "../assests/img/Story_00.jpg";
export const Story = () => {
  return (
    <>
    <div class="storyHero bg-gray-400 p-44 flex justify-center content-center text-3xl text-white">
  Our story
</div>

<div class="grid grid-cols-2 gap-2 ">
  <div class="image flex justify-center content-center p-2">
    <img src={StoryHero} alt="" />
  </div>
  <div class="p-4">
  <p class="mt-2">Our property was part of the Hiram Walker Distillery Estates, a whiskey producer that founded Walkerville in 1858. Robert Leishman, a machinist, bought the land in 1903 and built this Manor for his nine children. His family lived in the Manor until 1935, when Windsor annexed Walkerville. 
</p>
<p class="mt-2">The Manor was restored and renovated, keeping its charm and character, while adding modern amenities for our guests. We named it Ye Olde Walkerville Bed & Breakfast, to honor the area’s history and heritage, and to offer a cozy and friendly atmosphere.
</p>
<p class="mt-2">We welcome you to our lovely Bed & Breakfast, where you will enjoy a relaxing and memorable stay. You will appreciate the Manor’s beauty and elegance, the delicious homemade breakfast, the quiet and peaceful environment, and the personal and attentive service. You will also experience the culture and attractions of Windsor, a lively and diverse city that has something for everyone.</p>
  </div>
</div>
<div class="gallery">
  <h2 class="text-2xl text-center mt-10">Gallery</h2>
  <div class="grid grid-cols-4 gap-3 p-10">
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
        <div class="flex gap-4 justify-center items-center">
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
    </>
  )
}

// export default Story