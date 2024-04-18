import React from 'react'
import StoryHero from "../assests/img/Story_00.jpg";
import Logo from "../assests/img/Logo_YeOlde.png";
import addressIcon from "../assests/img/address-location-icon.png";
import StorySlider from '../components/StorySlider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
export const Story = () => {
  return (
    <>
    <div className='storyHero p-44 flex justify-center content-center text-3xl'>
    <h2 id='hero_heading' class="text-4xl font-semibold leading-8">
      Our Story
    </h2>
    </div>
<div className="flex justify-center content-center flex-wrap sm:flex-nowrap p-10">
  
  <div className="p-10 flex justify-center">
    <img src={StoryHero} alt="" className="rounded-lg justify-content-center" style={{ width: '50%' }}/>
  </div>
  <div class="p-10 m-auto mx-auto max-w-7xl
  ">
  <p class="mt-2">Our property was part of the Hiram Walker Distillery Estates, a whiskey producer that founded Walkerville in 1858. Robert Leishman, a machinist, bought the land in 1903 and built this Manor for his nine children. His family lived in the Manor until 1935, when Windsor annexed Walkerville. 
</p>
<p class="mt-2">The Manor was restored and renovated, keeping its charm and character, while adding modern amenities for our guests. We named it Ye Olde Walkerville Bed & Breakfast, to honor the area’s history and heritage, and to offer a cozy and friendly atmosphere.
</p>
<p class="mt-2">We welcome you to our lovely Bed & Breakfast, where you will enjoy a relaxing and memorable stay. You will appreciate the Manor's beauty and elegance, the delicious homemade breakfast, the quiet and peaceful environment, and the personal and attentive service. You will also experience the culture and attractions of Windsor, a lively and diverse city that has something for everyone.</p>
  </div>
</div>
<div class="gallery">
  <h2 class="text-4xl text-center mb-10">Gallery</h2>
  <div class="flex justify-center">

    <StorySlider />
    </div>
    {/* This is the footer section */}
<Footer />
</div>
    </>
  )
}

// export default Story