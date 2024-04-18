import React from 'react'
import  WeddingTwo  from "../assests/img/wedding_00.jpg";
import Logo from "../assests/img/Logo_YeOlde.png";
import addressIcon from "../assests/img/address-location-icon.png";
import Footer from '../components/Footer';
export const Wedding = () => {
  return (
    <div>
    <div class="weddingHero bg-gray-400 p-44 flex justify-center content-center text-4xl ">
      <h2 id='hero_heading' class="text-4xl font-semibold leading-8">Wedding & Events</h2>
    </div>
    
    <div className="flex justify-center content-center flex-wrap sm:flex-nowrap mx-auto max-w-7xl">
             
             
             <div className="p-10 flex justify-center">
              <img src={WeddingTwo} alt="" className="rounded-lg justify-content-center" style={{ width: '50%' }}/>
             </div>
    
              <div className="p-10 m-auto mx-auto max-w-7xl" >
                {/* <p className="mt-2 text-2xl">“Escape to the past” at Ye Olde Walkerville Bed & Breakfast</p> */}
                
                <p className="mt-2">For a unique and intimate wedding or special event, choose Ye Olde Walkerville B & B. 
                This 100 year-old Victorian Manor can accommodate up to 20 guests in a cozy and elegant setting. 
                You can enjoy the exclusive use of the rear gazebo or the exquisite dining room, followed by a gourmet
                buffet dinner and a warm guest reception.</p>
                
                <br/>
    
    
                <p className="mt-2">Please fill out your enquiry here for more information.</p>
                
                
                {/* <p className="mt-2">
    Experience the charm of a bygone era with Ye Olde Walkerville B & B, where timeless elegance meets modern romance. Say "I do" in style with our exclusive wedding package, designed for couples seeking a unique and intimate celebration.</p>
                <p className="mt-2">Step into the enchanting ambiance of our 100-year-old Victorian Manor, exclusively reserved for you and your 50 cherished guests. Choose between the picturesque rear gazebo or our exquisite dining room for your official wedding ceremony, setting the stage for unforgettable moments.Indulge in culinary delights with an elegant gourmet buffet dinner, crafted to perfection, followed by a cozy and intimate reception among your nearest and dearest.</p>
                <p className="mt-2">As the celebration winds down, retreat to the opulent Samantha's Suite for your honeymoon night, with additional guest rooms available for family and friends to share in the joyous occasion.</p>
                <p className="mt-2">Awaken to a new chapter of your love story with an intimate, romantic made-to-order breakfast for up to 10 people, setting the tone for a life filled with love, laughter, and cherished memories.</p>
                <p className="mt-2">At Ye Olde Walkerville B & B, we transform weddings into timeless affairs, where every detail is carefully curated to ensure your special day is nothing short of magical.</p> */}
    
    
              </div>
            </div>
    
    
    
    <div className="form px-5 lg:p-20 bg-slate-400 rounded-lg mx-auto max-w-7xl my-10">
    
      <div class="flex justify-center flex-col content-center px-12 text-center">
        <h2 class="text-2xl/[29px] mb-2 pt-10">Wedding & Events Enquiry Form</h2>
        <p>Please fill out the enquiry form. We will get back to you by phone or email as soon as possible. </p>
      </div>
              <form action="https://api.web3forms.com/submit" method="POST" className="p-5 lg:px-24">
                <div className="mt-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  <div className="col-span-full text-lg font-medium">
                  <input type="hidden" name="access_key" value="aa0962c5-5a44-4bd3-bb08-15cfbb2899a9" />
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900 my-2">First Name</label>
                    <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm px-3" />
                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900 my-2">Last Name</label>
                    <input type="text" name="last-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm px-3" />
                    <label htmlFor="Mobile-phone" className="block text-sm font-medium leading-6 text-gray-900 my-2">Mobile Phone</label>
                    <input type="text" name="Mobile-phone" id="first-name" autoComplete="given-name" className="block w-full rounded-md border py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm px-3" />
                    <label htmlFor="Email-Address" className="block text-sm font-medium leading-6 text-gray-900 my-2">Email Address</label>
                    <input type="text" name="Email-Address" id="first-name" autoComplete="given-name" className="block w-full rounded-md border py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm px-3" />
                  </div>
                  {/* Repeat for other input fields */}
                </div>
                <div className="col-span-full mt-5">
                  <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900 my-2">Your Equiry is</label>
                  <textarea id="message" name="about" rows="3" className="block w-full rounded-md border py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm px-3"></textarea>
                  {/* <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p> */}
                </div>
    
                <div class="mt-6 flex items-center justify-end gap-x-6">
                <button type="submit" className="rounded-md bg-red-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">Submit</button>
                <button type="button" class="text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-400">Cancel</button>
    
                </div>
              </form>
            </div>
{/* This is the footer section */}
<Footer />
 </div>
  )
}

export default Wedding