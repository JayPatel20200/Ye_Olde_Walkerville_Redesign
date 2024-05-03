import React from 'react'
// import Hero from '../components/Hero';
// import Awards from '../components/Awards';
// import About from '../components/About';
// import Feature from '../components/Feature';
// import Aminities from '../components/Aminities';
// import Reviews from '../components/Reviews';
// import Explore from '../components/Explore';
// import Maps from '../components/Maps';
// import Footer from '../components/Footer';
// import Rooms from '../components/Rooms';
import logoBooking from '../assests/img/BookingAward.png';
import logoTWE from '../assests/img/tourismWindsorEssex.png';
import home_welcome from '../assests/img/home_welcome.jpg';
import R1 from '../assests/Rooms/R1.jpeg';
import R2 from '../assests/Rooms/R2.jpeg';
import R3 from '../assests/Rooms/R3.jpeg';
import R4 from '../assests/Rooms/R4.jpg';
import R5 from '../assests/Rooms/R5.jpg';
import home_exploringWindsor from '../assests/img/home_exploringWindsor.jpg';
import quick_and_secure from "../assests/img/quick_and_secure.jpg";
import free_cancel from "../assests/img/free_cancel.jpg";
import tourismWindsorEssex from "../assests/img/tourismWindsorEssex.png";
import Logo from "../assests/img/Logo.png";
import addressIcon from "../assests/img/address-location-icon.png";
import specialPrice from "../assests/img/Special-price.png";
import freeCanceled from "../assests/img/Free-Canceled.png";
import quickSecure from "../assests/img/Quick&Secure.png"; 
import { Link } from 'react-router-dom';
const posts = [
  {
    id: 1,
    title: '"Wonderful hospitality – great food and friendly host and staff. A good place to stay."',
    href: '#',
    // description:
    //   'Wonderful hospitality – great food and friendly host and staff. A good place to stay.',
    date: '2023',
    datetime: '2020-03-16',
    category: { title: 'Unknown', href: '#' },
    author: {
      name: 'Dan & Joyce',
      role: 'Quebec',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: '"Yet another fantastic experience & stay! Thank you Renee & Richard for always making it feel like I’m coming home to visit. 😊"',
    href: '#',
    // description:
    //   'Yet another fantastic experience & stay! Thank you Renee & Richard for always making it feel like I’m coming home to visit. 😊',
    date: '2023',
    datetime: '2020-03-16',
    category: { title: 'Unknown', href: '#' },
    author: {
      name: 'Talin A.',
      role: ' - ',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: '"Wow what a real pleasant surprise in getting to stay at this very well-preserved home. Our stay in the suite at the top was very comfortable and the breakfast was fantastic."',
    href: '#',
    // description:
    //   'Wow what a real pleasant surprise in getting to stay at this very well-preserved home. Our stay in the suite at the top was very comfortable and the breakfast was fantastic.',
    date: '2023',
    datetime: '2020-03-16',
    category: { title: 'Unknown', href: '#' },
    author: {
      name: 'Mike & Cathy',
      role: '-',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 4,
    title: '"Such a cute B & B. The location was perfect, prices were great, and décor was beautiful. This was our first stay outside of the US. And it was so nice and special.',
    href: '#',
    // description:
    //   'Wow what a real pleasant surprise in getting to stay at this very well-preserved home. Our stay in the suite at the top was very comfortable and the breakfast was fantastic.',
    date: '2023',
    datetime: '2020-03-16',
    category: { title: 'Unknown', href: '#' },
    author: {
      name: 'Anonymous',
      role: '-',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 5,
    title: '"Splendid accomodations! Love the house 😊 and cheery service."',
    href: '#',
    // description:
    //   'Wow what a real pleasant surprise in getting to stay at this very well-preserved home. Our stay in the suite at the top was very comfortable and the breakfast was fantastic.',
    date: '2023',
    datetime: '2020-03-16',
    category: { title: 'Unknown', href: '#' },
    author: {
      name: 'Jon & Carol',
      role: '-',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 6,
    title: '"Had the absolute best time here and the best breakfast I have had in a long time. The conversation at the table with a varied range of people was a sure bonus."',
    href: '#',
    // description:
    //   'Wow what a real pleasant surprise in getting to stay at this very well-preserved home. Our stay in the suite at the top was very comfortable and the breakfast was fantastic.',
    date: '2023',
    datetime: '2020-03-16',
    category: { title: 'Unknown', href: '#' },
    author: {
      name: 'Anonymous',
      role: '-',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  }
]

const stats = [
  { id: 1, name: 'Indulge in a nutrient-rich morning with our wholesome breakfast options.', value: 'Morning Delights' },
  { id: 2, name: 'Enjoy our warm hospitality and friendly service throughout your stay.', value: 'Feel Like home' },
  { id: 3, name: 'Make your wedding or  special occasion extraordinary.', value: 'Signature Celebrations' },
]
export const Home = () => {
 
  return (
    <div>
      <>
      {/* This is the Hero section */}
      <div className="bg-white">
      <div id = "home_hero" className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div id="hero_heading" className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Welcome to Ye Olde Walkerville Bed & Breakfast
            </h1>
            
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/room"
                className="rounded-md bg-red-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 no-underline"
              >
               Book a Room
              </Link>
             
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
    {/* This is the end of the Hero section */}
    {/* This is the start of the Awards Section */}
    <div className="bg-white py-10 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-1 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <img
                className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
                src={logoBooking}
                alt="Transistor"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
                src={logoTWE}
                alt="Reform"
                width={158}
                height={48}
              />
            </div>
          </div>
        </div>
    {/* This is the end of the Awards Section */}
    {/* This is the start of the About Section */}
    <div className="overflow-hidden bg-white py-32 sm:py-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Welcome to 
Ye Olde Walkerville
Bed & Breakfast</h1>
<p className="mt-6 text-lg leading-8 text-gray-600 mb-6">
              We aim to make your stay with us a delightful experience. 
              Whether you are here for business, leisure, or a romantic getaway,
              we offer you a cozy, friendly, and relaxing environment that respects
              your personal needs and preferences.</p>
              
              

              <p className="mt-6 text-lg leading-8 text-gray-600 mb-6">At Ye Olde Walkerville Bed & Breakfast, we uphold the highest 
              standards of cleanliness, comfort, and quality in our facilities
              and equipment. We serve delicious and nutritious food and drinks,
              and we create a charming and elegant ambiance in our Bed & Breakfast facility.  
               <strong> Don’t wait, book your room today! </strong> 
              </p>
              <span className="flex justify-center lg:justify-start">
              <Link to="/story" ><button class="mt-3 rounded-lg bg-red-400 hover:bg-red-500 p-1 px-3 py-2 text-white"><strong>View Gallery</strong></button></Link>
              </span>
            </div>
          </div>
          <img
              src={home_welcome}
              alt="Product screenshot"
              className="w-120 h-120 max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
              width={600}
              height={600}
          />

        </div>
      </div>
    </div>
    {/* This is the end of the About Section */}
    {/* This is the start of the Feature Section */}
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 ">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4 bg-neutral-300 p-10 rounded-lg">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl> */}
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
        <div className="featureOne mx-auto flex max-w-xs flex-col gap-y-4 bg-neutral-300 p-10 rounded-lg">
          <p className="text-base leading-7 text-white ">
          Indulge in a nutrient-rich morning with our wholesome breakfast options.
          </p>
          <h2 className="order-first text-3xl font-semibold tracking-normal text-white sm:text-5xl">Morning Delight</h2>
        </div>
        <div className="featureTwo mx-auto flex max-w-xs flex-col gap-y-4 bg-neutral-300 p-10 rounded-lg">
          <p className="text-base leading-7 text-white">
          Enjoy our warm hospitality and friendly service throughout your stay.
          </p>
          <h2 className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">Feel Like Home</h2>
        </div>
        <div className="featureThree mx-auto flex max-w-xs flex-col gap-y-4 bg-neutral-300 p-10 rounded-lg">
          <p className="text-base leading-7 text-white">
          Make your wedding or  special occasion extraordinary.
          </p>
          <h2 className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">Signature Celebrations</h2>
        </div>
      </div>
      </div>
    </div>
    {/* This is the end of the Feature Section */}
    {/* This is the start of the Aminities Section */}
    <div className="bg-white py-20 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-4xl font-semibold leading-8 text-gray-900">
            Unlock Exclusive Benefits:<br />Book directly through our website
            </h2>
            <span className="flex justify-center">
    <Link to="/room" className="text-center mt-4 text-slate-950 text-xl">View All Rooms</Link>
    </span>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 place-items-center gap-x-4 gap-y-10 sm:max-w-xl sm:grid-cols-1 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
        </div>
    {/* This is the end of Aminities Section */}
    
    {/* This is the start of Room Section */}
    <div id="continer" class="flex sm:flex-row flex-wrap flex-col content-center justify-center px-10">
    <div className="px-4 py-6 item">
      <div class="mx-auto grid max-w-4xl grid-cols-1">
        <div class="relative col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 p-3">
          <h1 class="mt-1 text-3xl font-semibold text-white">Samantha's Suite</h1>
          <p class="text-xl font-medium leading-4 text-white">Room #1</p>
        </div>
        <div class="col-start-1 col-end-3 row-start-1 grid gap-4">
          <img src={R1} alt="" class="h-60 w-full rounded-lg object-cover" loading="lazy" />
        </div>
        <dl class="row-start-2 mt-4 grid grid-cols-2 text-xs font-medium">
          <dt class="sr-only">Reviews</dt>


          {/* <dd class="flex items-center">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <rect width="30" height="30" fill="url(#pattern0)" />
              <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0_711_61" transform="scale(0.00195312)" />
                </pattern>
                
                <svg width="273" height="189" viewBox="0 0 273 189" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40.875 188.417H27.25L18.3937 161.5H0V93.8719C0 86.4698 2.66823 80.1892 8.00469 75.0302C13.3411 69.8712 19.7562 67.2917 27.25 67.2917V26.9167C27.25 19.5146 29.9182 13.178 35.2547 7.90677C40.5911 2.63559 47.0062 0 54.5 0H218C225.494 0 231.909 2.63559 237.245 7.90677C242.582 13.178 245.25 19.5146 245.25 26.9167V67.2917C252.744 67.2917 259.159 69.9273 264.495 75.1984C269.832 80.4696 272.5 86.8063 272.5 94.2083V161.5H254.106L245.25 188.417H231.625L222.769 161.5H49.7312L40.875 188.417ZM149.875 67.2917H218V26.9167H149.875V67.2917ZM54.5 67.2917H122.625V26.9167H54.5V67.2917ZM27.25 134.583H245.25V94.2083H27.25V134.583Z" fill="black"/>
                </svg>
              </defs>
            </svg>
            <span class="mx-2">King size bed</span>
          </dd>
          <dt class="sr-only">Location</dt>
          <dd class="mx-3 flex items-center">
            <svg width="30" height="30" viewBox="0 0 276 164" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M218.163 136.951C225.463 136.951 231.37 138.207 231.37 139.754C231.37 141.302 225.463 142.558 218.163 142.558C210.863 142.558 204.956 141.302 204.956 139.754C204.956 138.207 210.863 136.951 218.163 136.951ZM56.332 33.0377V159.335C56.332 160.636 55.793 161.802 54.9619 162.654C54.1084 163.507 52.9404 164.022 51.6377 164.022H29.3564C28.0762 164.022 26.9082 163.507 26.0547 162.654C25.2012 161.802 24.6846 160.636 24.6846 159.357V33.0377H6.64844C4.80664 33.0377 3.14453 32.2976 1.9541 31.0864C0.741211 29.8753 0 28.2155 0 26.3988V6.63895C0 4.79978 0.741211 3.14004 1.9541 1.95131C3.16699 0.762582 4.80664 0 6.64844 0H269.352C271.193 0 272.855 0.740153 274.046 1.95131C275.236 3.16247 276 4.82221 276 6.63895V26.3988C276 28.238 275.259 29.8977 274.046 31.0864C272.833 32.2976 271.171 33.0377 269.352 33.0377H268.925V159.335C268.925 160.613 268.386 161.78 267.555 162.632L267.532 162.654C266.679 163.507 265.511 164.022 264.23 164.022H173.354C172.051 164.022 170.883 163.507 170.029 162.654C169.872 162.497 169.737 162.34 169.603 162.161C168.996 161.376 168.637 160.389 168.637 159.335V33.0377H56.332ZM176.408 68.7221H261.176V33.0377H176.408V68.7221ZM261.176 76.4601H176.408V112.817H261.176V76.4601ZM261.176 120.555H176.408V156.284H261.176V120.555ZM268.251 7.73796H7.74902V25.2998H268.251V7.73796ZM48.583 33.0377H32.3887V156.262H48.583V33.0377ZM218.163 47.7062C225.463 47.7062 231.37 48.895 231.37 50.3753C231.37 51.8556 225.463 53.0443 218.163 53.0443C210.863 53.0443 204.956 51.8556 204.956 50.3753C204.956 48.895 210.863 47.7062 218.163 47.7062ZM218.163 92.25C225.463 92.25 231.37 93.506 231.37 95.0536C231.37 96.6012 225.463 97.8572 218.163 97.8572C210.863 97.8572 204.956 96.6012 204.956 95.0536C204.956 93.506 210.863 92.25 218.163 92.25Z" fill="black" />
            </svg>
            <span class="mx-2">Working Desk</span>
          </dd> */}

            {/* Used the icons sets of Room #4 */}

            <dd class="flex items-center">
                      <svg width="30px" height="30px" viewBox="0 0 223 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.1573 2.30785e-05H192.838C197.921 2.30785e-05 202.547 2.09179 205.887 5.44824C209.232 8.80907 211.314 13.4608 211.314 18.5634V103.836C212.847 104.886 214.267 106.054 215.552 107.341L215.84 107.66C220.265 112.242 223 118.185 223 125.274V195.077C223 197.794 220.805 200 218.1 200H209.502C207.198 200 205.265 198.398 204.742 196.241C201.645 187.362 198.592 182.246 194.533 179.529C190.391 176.763 184.585 176.072 176.14 176.08L39.5781 176.282C33.5981 176.146 29.7522 177.84 27.0126 180.907C23.881 184.412 21.712 189.913 19.4951 196.617C18.8243 198.674 16.9123 199.978 14.8696 199.978L4.8999 200C2.19516 200 0 197.794 0 195.077V122.946C0 116.307 2.60893 110.794 6.79453 106.584L7.11684 106.291C8.49316 104.952 10.035 103.757 11.7031 102.711L11.6814 18.3796C11.6814 13.2814 13.7676 8.68654 17.1213 5.36072C20.5944 1.91867 25.2789 -0.00769089 30.1573 2.30785e-05ZM10.0786 143.667L9.79545 143.658V190.158H11.3896C13.637 183.809 16.1022 178.452 19.739 174.374C24.3993 169.153 30.5623 166.278 39.7654 166.484L176.14 166.278C186.488 166.269 193.853 167.284 199.925 171.345C205.386 174.999 209.337 180.807 212.908 190.158H213.205V143.658L212.917 143.667H10.0786ZM9.79545 133.834L10.0786 133.825H212.917L213.205 133.834V125.274C213.205 120.959 211.545 117.336 208.867 114.531L208.623 114.303C206.48 112.15 203.736 110.457 200.648 109.275C195.081 108.08 189.646 106.991 184.323 106.002C178.317 105.061 172.494 104.221 166.823 103.481C166.124 103.605 165.406 103.574 164.719 103.389L162.524 102.934C143.744 100.624 126.522 99.4508 109.47 99.4377C99.0129 99.4289 88.5815 99.8578 77.8496 100.724C58.9513 102.619 39.3081 106.015 17.6353 110.846C17.4306 110.89 17.2215 110.925 17.0212 110.942C15.8975 111.638 14.8609 112.426 13.9506 113.301L13.7241 113.546C11.3024 115.975 9.79545 119.148 9.79545 122.946V133.834ZM23.9943 98.068C33.7941 96.3132 43.1148 94.8384 52.1263 93.6306L52.1132 73.9295C52.1132 67.3216 54.8049 61.3045 59.1342 56.9591L59.4565 56.6659C63.7641 52.4867 69.6091 49.9092 76.0247 49.9092H146.975C153.556 49.9092 159.536 52.6136 163.861 56.9635C168.191 61.3133 170.887 67.326 170.887 73.9295V93.7794C175.665 94.5146 180.521 95.3329 185.469 96.2431C189.128 96.8164 192.847 97.4247 196.645 98.068C198.304 98.3524 199.933 98.7331 201.519 99.2101V18.5634C201.519 16.1784 200.534 13.9947 198.962 12.4106C197.39 10.8308 195.216 9.84183 192.838 9.84183H30.1573C27.7313 9.84183 25.5361 10.8002 23.9681 12.3581C22.4307 13.8809 21.4812 16.0077 21.4812 18.3796V98.6106C22.3087 98.4049 23.1493 98.2211 23.9943 98.068ZM114.052 89.0314C127.093 89.0926 139.832 89.8103 151.13 91.2019C154.419 91.5476 157.742 91.9458 161.087 92.3834V73.9295C161.087 70.0436 159.493 66.4946 156.932 63.9214C154.375 61.3527 150.847 59.751 146.975 59.751H76.0247C72.2572 59.751 68.8208 61.252 66.2815 63.6807L66.0594 63.9214C63.5027 66.4902 61.913 70.0392 61.913 73.9295V92.3747C77.9193 90.0772 96.2689 88.9438 114.052 89.0314Z" fill="black"/>
            </svg>
                        <span class="mx-2">King Size Bed</span>
                      </dd>
                      <dt class="sr-only">Location</dt>
                      <dd class="mx-3 flex items-center">
                        <svg width="30" height="30" viewBox="0 0 276 164" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M218.163 136.951C225.463 136.951 231.37 138.207 231.37 139.754C231.37 141.302 225.463 142.558 218.163 142.558C210.863 142.558 204.956 141.302 204.956 139.754C204.956 138.207 210.863 136.951 218.163 136.951ZM56.332 33.0377V159.335C56.332 160.636 55.793 161.802 54.9619 162.654C54.1084 163.507 52.9404 164.022 51.6377 164.022H29.3564C28.0762 164.022 26.9082 163.507 26.0547 162.654C25.2012 161.802 24.6846 160.636 24.6846 159.357V33.0377H6.64844C4.80664 33.0377 3.14453 32.2976 1.9541 31.0864C0.741211 29.8753 0 28.2155 0 26.3988V6.63895C0 4.79978 0.741211 3.14004 1.9541 1.95131C3.16699 0.762582 4.80664 0 6.64844 0H269.352C271.193 0 272.855 0.740153 274.046 1.95131C275.236 3.16247 276 4.82221 276 6.63895V26.3988C276 28.238 275.259 29.8977 274.046 31.0864C272.833 32.2976 271.171 33.0377 269.352 33.0377H268.925V159.335C268.925 160.613 268.386 161.78 267.555 162.632L267.532 162.654C266.679 163.507 265.511 164.022 264.23 164.022H173.354C172.051 164.022 170.883 163.507 170.029 162.654C169.872 162.497 169.737 162.34 169.603 162.161C168.996 161.376 168.637 160.389 168.637 159.335V33.0377H56.332ZM176.408 68.7221H261.176V33.0377H176.408V68.7221ZM261.176 76.4601H176.408V112.817H261.176V76.4601ZM261.176 120.555H176.408V156.284H261.176V120.555ZM268.251 7.73796H7.74902V25.2998H268.251V7.73796ZM48.583 33.0377H32.3887V156.262H48.583V33.0377ZM218.163 47.7062C225.463 47.7062 231.37 48.895 231.37 50.3753C231.37 51.8556 225.463 53.0443 218.163 53.0443C210.863 53.0443 204.956 51.8556 204.956 50.3753C204.956 48.895 210.863 47.7062 218.163 47.7062ZM218.163 92.25C225.463 92.25 231.37 93.506 231.37 95.0536C231.37 96.6012 225.463 97.8572 218.163 97.8572C210.863 97.8572 204.956 96.6012 204.956 95.0536C204.956 93.506 210.863 92.25 218.163 92.25Z" fill="black" />
                        </svg>
              
                        <span class="mx-2">Working Area</span>
                      </dd>

          <dt class="sr-only">Reviews</dt>
          <dd class="flex items-center">
            <svg width="30" height="30" viewBox="0 0 292 217" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_973_14)">
                <path d="M225.952 50.8497L225.815 50.6675C225.107 49.6423 223.692 49.4144 222.687 50.1207L205.336 62.2408C204.309 62.947 204.08 64.3595 204.788 65.362L204.925 65.5442C205.633 66.5694 207.048 66.7972 208.053 66.091L225.404 53.9709C226.408 53.2646 226.66 51.8521 225.952 50.8497ZM271.704 119.196L262.298 162.983C259.969 173.873 254.695 182.189 247.207 187.884C242.024 191.826 235.837 194.446 228.874 195.744L235.038 208.912C236.362 211.76 235.13 215.155 232.276 216.476C229.422 217.797 226.02 216.567 224.696 213.719L216.706 196.678H80.1345L72.1439 213.719C70.8197 216.567 67.418 217.797 64.5642 216.476C61.7104 215.155 60.4776 211.76 61.8017 208.912L67.6235 196.473C58.7196 195.699 51.4139 192.851 45.5237 187.975C38.6518 182.28 33.9487 174.01 31.1406 163.234L19.5656 119.196H10.5248C7.64816 119.196 5.02267 118.012 3.10493 116.121V116.098L3.0821 116.121C1.18718 114.207 0 111.587 0 108.694V99.1479C0 96.2545 1.18718 93.6346 3.0821 91.7209C3.21908 91.5842 3.37889 91.4247 3.5387 91.3108C5.38796 89.6477 7.83081 88.6453 10.502 88.6453H11.8946C12.2827 84.499 13.8808 80.5804 16.3465 77.1631C18.8579 73.6546 22.3281 70.6702 26.2777 68.6198C30.2502 66.5466 34.7478 65.3847 39.291 65.5214C43.2863 65.6581 47.2588 66.7517 50.9345 69.0754C52.5326 66.7517 54.5188 64.6785 56.8019 62.9698C61.2766 59.6208 66.8701 57.616 72.9201 57.616C77.9428 57.616 82.6458 58.9829 86.6411 61.3523C89.7689 63.1976 92.4629 65.6809 94.5632 68.597C100.933 69.0982 106.686 71.8093 111.001 75.9557C114.54 79.373 117.097 83.7471 118.215 88.6225H271.749V32.1228C268.416 15.788 258.965 11.3455 246.339 13.1453C252.024 23.0327 251.294 33.0796 243.234 43.3316C244.262 44.9947 244.17 46.8173 243.052 48.7538L240.54 51.6471C239.536 52.6723 238.28 52.7634 236.659 51.4648L198.076 12.5757C197.026 11.3227 197.231 10.2291 198.464 9.27229C201.204 5.92332 201.546 5.35376 206.409 6.17392C217.231 -0.842981 227.527 -2.096 237.23 3.46284C261.59 -6.51574 282.32 6.01445 285.128 31.5305V89.306C286.566 89.83 287.845 90.6729 288.895 91.7209C290.79 93.6118 291.977 96.2545 291.977 99.1479V108.694C291.977 111.587 290.79 114.207 288.895 116.121C287 118.012 284.352 119.196 281.475 119.196H271.704ZM204.103 32.1228L203.966 31.9405C203.258 30.9153 201.843 30.6875 200.838 31.3938L183.487 43.5139C182.46 44.2201 182.232 45.6326 182.939 46.635L183.076 46.8173C183.784 47.8425 185.2 48.0703 186.204 47.3641L203.555 35.2439C204.583 34.5377 204.811 33.1252 204.103 32.1228ZM194.126 22.0986L193.989 21.9164C193.282 20.8912 191.866 20.6634 190.862 21.3696L173.511 33.4897C172.483 34.196 172.255 35.6085 172.963 36.6109L173.1 36.7931C173.807 37.8183 175.223 38.0462 176.227 37.3399L193.578 25.2198C194.583 24.5136 194.834 23.1011 194.126 22.0986ZM214.057 41.8052L213.92 41.623C213.213 40.5978 211.797 40.3699 210.792 41.0762L193.441 53.1963C192.414 53.9025 192.186 55.315 192.894 56.3174L193.031 56.4997C193.738 57.5249 195.154 57.7527 196.158 57.0465L213.532 44.9264C214.514 44.2201 214.765 42.8304 214.057 41.8052ZM23.4924 88.6453H106.252C105.522 86.9594 104.449 85.4558 103.125 84.2028C100.408 81.5828 96.6408 79.9653 92.4629 79.9653C91.8236 79.9653 92.5085 79.9425 92.0748 79.9425L91.6866 79.9653C89.5406 80.0564 87.4174 78.9401 86.3672 76.9125C85.1343 74.5659 83.2166 72.5839 80.865 71.1942C78.582 69.85 75.8652 69.0527 72.9658 69.0527C69.4499 69.0527 66.2308 70.1918 63.6966 72.0827C61.1625 73.9964 59.2676 76.6619 58.4457 79.7147C58.1717 80.8766 57.5096 81.9701 56.5051 82.7903C54.0622 84.7723 50.455 84.4078 48.4688 81.9701C45.6607 78.53 42.2818 77.0264 38.9714 76.9125C36.46 76.8214 33.903 77.5048 31.5972 78.7123C29.2685 79.9425 27.2138 81.7195 25.6841 83.8155C24.6111 85.3191 23.8349 86.9594 23.4924 88.6453ZM19.4058 100.082C18.4926 100.31 17.5794 100.287 16.7118 100.082H11.4608V107.737H280.539V100.082H19.4058ZM31.3689 119.196L42.1905 160.364C44.3822 168.747 47.8524 175.058 52.8294 179.159C57.6923 183.191 64.2446 185.242 72.7603 185.242H218.304C227.116 185.242 234.627 183.077 240.244 178.817C245.586 174.762 249.353 168.679 251.088 160.614L259.992 119.196H31.3689Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_973_14">
                  <rect width="292" height="217" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span class="mx-2">Jacuzzi Tub with Shower</span>
          </dd>
          <dt class="sr-only">Location</dt>
          <dd class="mx-3 flex items-center">
            <svg width="30" height="30" viewBox="0 0 345 183" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_973_17)">
                <path d="M39.3065 164.638C39.3725 163.698 39.1924 162.756 38.7839 161.906C38.3754 161.055 37.7524 160.326 36.9762 159.789C33.8878 157.294 30.5467 154.546 30.5467 144.819C30.5467 139.437 30.9398 134.671 31.3329 130.186C32.1752 120.318 32.8771 111.936 28.2445 101.396C26.4536 101.574 24.6525 101.631 22.8539 101.564C17.0486 101.471 11.4812 99.2452 7.21544 95.3125C3.58653 91.8242 1.20033 87.2462 0.421009 82.2771C0.0554195 80.2523 -0.0858121 78.1935 -0.000133367 76.1379C0.104021 70.8408 2.01561 65.7379 5.41857 61.6728C9.13466 57.479 14.1425 54.6387 19.6532 53.5993C22.5801 53.0057 25.5736 52.8077 28.5533 53.0106V44.8529C28.6124 32.9754 33.3642 21.6011 41.7759 13.2023C50.1876 4.80344 61.5794 0.0589469 73.4752 0L270.008 0C281.904 0.0589469 293.296 4.80344 301.708 13.2023C310.12 21.6011 314.871 32.9754 314.93 44.8529V52.9825C316.319 52.8247 317.716 52.7499 319.114 52.7583C325.293 52.5752 331.354 54.4708 336.324 58.1406C338.933 60.146 341.054 62.7143 342.529 65.6535C344.9 70.5782 345.561 76.1505 344.41 81.4922C343.672 85.1331 342.18 88.58 340.03 91.6121C337.776 94.7569 334.789 97.3066 331.327 99.0409C326.635 101.297 321.359 102.051 316.222 101.199C311.561 111.768 312.263 120.15 313.105 130.046C313.498 134.531 313.892 139.296 313.892 144.679C313.892 154.406 310.55 157.154 307.462 159.648C306.643 160.184 305.985 160.93 305.555 161.809C305.125 162.687 304.94 163.664 305.019 164.638C305.019 165.163 304.915 165.683 304.713 166.168C304.511 166.653 304.215 167.093 303.842 167.463C303.469 167.833 303.026 168.126 302.539 168.324C302.052 168.522 301.53 168.623 301.005 168.619H286.658C286.658 168.619 286.658 168.843 286.658 168.927V178.683C286.658 179.828 286.202 180.926 285.391 181.736C284.58 182.545 283.481 183 282.334 183H255.325C254.183 182.993 253.09 182.535 252.285 181.726C251.481 180.917 251.029 179.823 251.029 178.683V168.619H93.9708V178.683C93.9708 179.823 93.5192 180.917 92.7144 181.726C91.9096 182.535 90.817 182.993 89.6752 183H62.5817C61.4398 182.993 60.3472 182.535 59.5424 181.726C58.7377 180.917 58.286 179.823 58.286 178.683V168.619H43.4337C42.8985 168.638 42.3649 168.549 41.8649 168.357C41.3648 168.166 40.9086 167.875 40.5234 167.504C40.1382 167.132 39.8319 166.687 39.6228 166.195C39.4138 165.702 39.3062 165.173 39.3065 164.638ZM283.569 93.1259C283.612 93.4797 283.612 93.8374 283.569 94.1912V119.813C283.569 120.34 283.465 120.861 283.264 121.348C283.062 121.834 282.766 122.276 282.393 122.648C282.02 123.02 281.578 123.316 281.091 123.517C280.604 123.718 280.082 123.822 279.554 123.822H65.4735C64.4087 123.822 63.3875 123.4 62.6345 122.648C61.8816 121.896 61.4586 120.877 61.4586 119.813V94.8359C60.0492 90.8649 58.4278 86.9721 56.6014 83.1742C54.999 79.8642 53.1207 76.6946 50.9862 73.699C47.0072 68.1487 41.286 64.0839 34.7301 62.1494C30.3641 60.8159 25.7383 60.5658 21.2535 61.4205C17.4926 62.1064 14.066 64.0192 11.5111 66.8589C9.28291 69.5739 8.04535 72.9645 8.00158 76.4743C7.98818 77.9613 8.12932 79.4456 8.42272 80.9035C8.93203 84.1611 10.4775 87.1686 12.8307 89.4816C15.7192 92.0564 19.459 93.4742 23.3312 93.4623C25.5794 93.5273 27.8283 93.3582 30.0414 92.9577C30.8831 92.8168 31.7478 92.9474 32.5102 93.3305C33.2725 93.7136 33.8928 94.3293 34.2809 95.0882C41.2999 108.937 40.4576 118.832 39.4469 130.69C39.0538 134.979 38.6888 139.549 38.6888 144.707C38.6888 150.65 40.4857 152.136 42.1703 153.509C44.6929 155.164 46.4821 157.723 47.1678 160.658H297.607C298.293 157.723 300.082 155.164 302.605 153.509C304.289 152.136 306.086 150.706 306.086 144.707C306.086 139.577 305.721 135.007 305.328 130.69C304.346 118.888 303.503 109.021 310.382 95.2845C310.722 94.5334 311.283 93.9032 311.99 93.4777C312.697 93.0521 313.517 92.8512 314.341 92.9017H315.745H316.25C320.196 93.83 324.339 93.4054 328.014 91.6962C330.254 90.5239 332.18 88.8319 333.629 86.7624C335.12 84.6535 336.152 82.2568 336.661 79.7261C337.444 76.109 337.009 72.3352 335.426 68.9894C334.514 67.1273 333.189 65.4974 331.551 64.2238C327.979 61.6557 323.654 60.3443 319.254 60.4954C314.122 60.5527 309.071 61.78 304.486 64.0836C300.715 65.9521 297.407 68.633 294.8 71.9329C292.407 75.0727 290.32 78.4332 288.567 81.9688C286.736 85.6114 285.114 89.3552 283.71 93.182L283.569 93.1259ZM69.4603 98.1158V115.721H275.792V98.1158C242.494 98.5924 209.111 98.7606 175.841 99.6576H172.247L163.319 99.4334L69.4603 98.1158ZM168.26 8.15763V7.98943H73.6156C63.8277 8.01892 54.4482 11.9104 47.5218 18.8157C40.5954 25.721 36.6837 35.0801 36.6393 44.8529V54.3842L37.0885 54.5244C45.3411 56.9675 52.543 62.0869 57.556 69.0735C59.9188 72.4306 62.0034 75.9745 63.7889 79.67C65.3331 82.8658 66.8492 86.3699 68.2811 90.2385C101.579 90.7431 135.018 90.8833 168.288 91.7803C168.274 91.575 168.274 91.3689 168.288 91.1636V8.15763H168.26ZM176.234 7.98943V91.1636C176.249 91.3689 176.249 91.575 176.234 91.7803C209.504 90.8833 242.943 90.7431 276.241 90.2385C277.733 86.2304 279.448 82.3089 281.379 78.4927C283.37 74.5294 285.749 70.7733 288.483 67.2794C291.858 63.1049 296.114 59.7259 300.948 57.3837C302.922 56.4057 304.968 55.581 307.069 54.9168V44.8529C307.025 35.0801 303.113 25.721 296.186 18.8157C289.26 11.9104 279.881 8.01892 270.093 7.98943H176.234Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_973_17">
                  <rect width="345" height="183" fill="white" />
                </clipPath>
              </defs>
            </svg>
  
            <span class="mx-2">Sitting Area</span>
          </dd>
        </dl>
        
        <p class="col-start-1 mt-4 text-sm leading-6 dark:text-slate-400">Samantha's, Lavish, large loft features vaulted ceiling, sitting area, king size bed, working desk, and jacuzzi tub with shower. This room includes a sofa couch that can be converted into a queen-size bed. </p>
        <div class="col-start-1 row-start-3 mt-4 self-center">

          <div class="price flex justify-between">
              <p>Room only</p>
              <p className='text-red-400'><strong>$158.10 (+tax)</strong></p>
            </div>
            <div className='border-top border-secondary'></div>
            <div class="price flex justify-between pt-2">
              <p>Room with breakfast</p>
              <p className='text-red-400'><strong>$186 (+tax)</strong></p>
            </div>

          {/* <button type="button" class="rounded-lg bg-black px-3 py-2 text-sm font-medium leading-6 text-white">Check Availability</button> */}
          <span className="flex justify-center lg:justify-start">
          <Link to="/roomone" ><button class="mt-3 rounded-lg bg-red-400 hover:bg-red-500 p-1 px-3 text-white py-2">View Details</button></Link>
          </span>
        </div>
      </div>
    </div>
    <div className="px-4 py-6 item">
      <div class="mx-auto grid max-w-4xl grid-cols-1">
        <div class="relative col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 p-3">
          <h1 class="mt-1 text-3xl font-semibold text-white">Corrina's Chamber</h1>
          <p class="text-xl font-medium leading-4 text-white">Room #2</p>
        </div>
        <div class="col-start-1 col-end-3 row-start-1 grid gap-4">
          <img src={R2} alt="" class="h-60 w-full rounded-lg object-cover" loading="lazy" />
        </div>
        <dl class="row-start-2 mt-4 grid grid-cols-2 text-xs font-medium">
          <dt class="sr-only">Reviews</dt>
         
         
         
          {/* <dd class="flex items-center">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <rect width="30" height="30" fill="url(#pattern0)" />
              <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0_711_61" transform="scale(0.00195312)" />
                </pattern>
                <svg width="273" height="189" viewBox="0 0 273 189" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40.875 188.417H27.25L18.3937 161.5H0V93.8719C0 86.4698 2.66823 80.1892 8.00469 75.0302C13.3411 69.8712 19.7562 67.2917 27.25 67.2917V26.9167C27.25 19.5146 29.9182 13.178 35.2547 7.90677C40.5911 2.63559 47.0062 0 54.5 0H218C225.494 0 231.909 2.63559 237.245 7.90677C242.582 13.178 245.25 19.5146 245.25 26.9167V67.2917C252.744 67.2917 259.159 69.9273 264.495 75.1984C269.832 80.4696 272.5 86.8063 272.5 94.2083V161.5H254.106L245.25 188.417H231.625L222.769 161.5H49.7312L40.875 188.417ZM149.875 67.2917H218V26.9167H149.875V67.2917ZM54.5 67.2917H122.625V26.9167H54.5V67.2917ZM27.25 134.583H245.25V94.2083H27.25V134.583Z" fill="black"/>
          </svg>
              </defs>
            </svg>
            <span class="mx-2">Deluxe Queen Size Bed</span>
          </dd>
          <dt class="sr-only">Location</dt>
          <dd class="mx-3 flex items-center">
            <svg width="30" height="30" viewBox="0 0 276 164" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M218.163 136.951C225.463 136.951 231.37 138.207 231.37 139.754C231.37 141.302 225.463 142.558 218.163 142.558C210.863 142.558 204.956 141.302 204.956 139.754C204.956 138.207 210.863 136.951 218.163 136.951ZM56.332 33.0377V159.335C56.332 160.636 55.793 161.802 54.9619 162.654C54.1084 163.507 52.9404 164.022 51.6377 164.022H29.3564C28.0762 164.022 26.9082 163.507 26.0547 162.654C25.2012 161.802 24.6846 160.636 24.6846 159.357V33.0377H6.64844C4.80664 33.0377 3.14453 32.2976 1.9541 31.0864C0.741211 29.8753 0 28.2155 0 26.3988V6.63895C0 4.79978 0.741211 3.14004 1.9541 1.95131C3.16699 0.762582 4.80664 0 6.64844 0H269.352C271.193 0 272.855 0.740153 274.046 1.95131C275.236 3.16247 276 4.82221 276 6.63895V26.3988C276 28.238 275.259 29.8977 274.046 31.0864C272.833 32.2976 271.171 33.0377 269.352 33.0377H268.925V159.335C268.925 160.613 268.386 161.78 267.555 162.632L267.532 162.654C266.679 163.507 265.511 164.022 264.23 164.022H173.354C172.051 164.022 170.883 163.507 170.029 162.654C169.872 162.497 169.737 162.34 169.603 162.161C168.996 161.376 168.637 160.389 168.637 159.335V33.0377H56.332ZM176.408 68.7221H261.176V33.0377H176.408V68.7221ZM261.176 76.4601H176.408V112.817H261.176V76.4601ZM261.176 120.555H176.408V156.284H261.176V120.555ZM268.251 7.73796H7.74902V25.2998H268.251V7.73796ZM48.583 33.0377H32.3887V156.262H48.583V33.0377ZM218.163 47.7062C225.463 47.7062 231.37 48.895 231.37 50.3753C231.37 51.8556 225.463 53.0443 218.163 53.0443C210.863 53.0443 204.956 51.8556 204.956 50.3753C204.956 48.895 210.863 47.7062 218.163 47.7062ZM218.163 92.25C225.463 92.25 231.37 93.506 231.37 95.0536C231.37 96.6012 225.463 97.8572 218.163 97.8572C210.863 97.8572 204.956 96.6012 204.956 95.0536C204.956 93.506 210.863 92.25 218.163 92.25Z" fill="black" />
            </svg>
  
            <span class="mx-2">Working Desk</span>
          </dd> */}

          {/* Used the icons sets of Room #4 */}

          <dd class="flex items-center">
                      <svg width="30px" height="30px" viewBox="0 0 223 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.1573 2.30785e-05H192.838C197.921 2.30785e-05 202.547 2.09179 205.887 5.44824C209.232 8.80907 211.314 13.4608 211.314 18.5634V103.836C212.847 104.886 214.267 106.054 215.552 107.341L215.84 107.66C220.265 112.242 223 118.185 223 125.274V195.077C223 197.794 220.805 200 218.1 200H209.502C207.198 200 205.265 198.398 204.742 196.241C201.645 187.362 198.592 182.246 194.533 179.529C190.391 176.763 184.585 176.072 176.14 176.08L39.5781 176.282C33.5981 176.146 29.7522 177.84 27.0126 180.907C23.881 184.412 21.712 189.913 19.4951 196.617C18.8243 198.674 16.9123 199.978 14.8696 199.978L4.8999 200C2.19516 200 0 197.794 0 195.077V122.946C0 116.307 2.60893 110.794 6.79453 106.584L7.11684 106.291C8.49316 104.952 10.035 103.757 11.7031 102.711L11.6814 18.3796C11.6814 13.2814 13.7676 8.68654 17.1213 5.36072C20.5944 1.91867 25.2789 -0.00769089 30.1573 2.30785e-05ZM10.0786 143.667L9.79545 143.658V190.158H11.3896C13.637 183.809 16.1022 178.452 19.739 174.374C24.3993 169.153 30.5623 166.278 39.7654 166.484L176.14 166.278C186.488 166.269 193.853 167.284 199.925 171.345C205.386 174.999 209.337 180.807 212.908 190.158H213.205V143.658L212.917 143.667H10.0786ZM9.79545 133.834L10.0786 133.825H212.917L213.205 133.834V125.274C213.205 120.959 211.545 117.336 208.867 114.531L208.623 114.303C206.48 112.15 203.736 110.457 200.648 109.275C195.081 108.08 189.646 106.991 184.323 106.002C178.317 105.061 172.494 104.221 166.823 103.481C166.124 103.605 165.406 103.574 164.719 103.389L162.524 102.934C143.744 100.624 126.522 99.4508 109.47 99.4377C99.0129 99.4289 88.5815 99.8578 77.8496 100.724C58.9513 102.619 39.3081 106.015 17.6353 110.846C17.4306 110.89 17.2215 110.925 17.0212 110.942C15.8975 111.638 14.8609 112.426 13.9506 113.301L13.7241 113.546C11.3024 115.975 9.79545 119.148 9.79545 122.946V133.834ZM23.9943 98.068C33.7941 96.3132 43.1148 94.8384 52.1263 93.6306L52.1132 73.9295C52.1132 67.3216 54.8049 61.3045 59.1342 56.9591L59.4565 56.6659C63.7641 52.4867 69.6091 49.9092 76.0247 49.9092H146.975C153.556 49.9092 159.536 52.6136 163.861 56.9635C168.191 61.3133 170.887 67.326 170.887 73.9295V93.7794C175.665 94.5146 180.521 95.3329 185.469 96.2431C189.128 96.8164 192.847 97.4247 196.645 98.068C198.304 98.3524 199.933 98.7331 201.519 99.2101V18.5634C201.519 16.1784 200.534 13.9947 198.962 12.4106C197.39 10.8308 195.216 9.84183 192.838 9.84183H30.1573C27.7313 9.84183 25.5361 10.8002 23.9681 12.3581C22.4307 13.8809 21.4812 16.0077 21.4812 18.3796V98.6106C22.3087 98.4049 23.1493 98.2211 23.9943 98.068ZM114.052 89.0314C127.093 89.0926 139.832 89.8103 151.13 91.2019C154.419 91.5476 157.742 91.9458 161.087 92.3834V73.9295C161.087 70.0436 159.493 66.4946 156.932 63.9214C154.375 61.3527 150.847 59.751 146.975 59.751H76.0247C72.2572 59.751 68.8208 61.252 66.2815 63.6807L66.0594 63.9214C63.5027 66.4902 61.913 70.0392 61.913 73.9295V92.3747C77.9193 90.0772 96.2689 88.9438 114.052 89.0314Z" fill="black"/>
            </svg>
                 <span class="mx-2">Deluxe Queen Size Bed</span>
           </dd>
                      <dt class="sr-only">Location</dt>
                      <dd class="mx-3 flex items-center">
                        <svg width="30" height="30" viewBox="0 0 276 164" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M218.163 136.951C225.463 136.951 231.37 138.207 231.37 139.754C231.37 141.302 225.463 142.558 218.163 142.558C210.863 142.558 204.956 141.302 204.956 139.754C204.956 138.207 210.863 136.951 218.163 136.951ZM56.332 33.0377V159.335C56.332 160.636 55.793 161.802 54.9619 162.654C54.1084 163.507 52.9404 164.022 51.6377 164.022H29.3564C28.0762 164.022 26.9082 163.507 26.0547 162.654C25.2012 161.802 24.6846 160.636 24.6846 159.357V33.0377H6.64844C4.80664 33.0377 3.14453 32.2976 1.9541 31.0864C0.741211 29.8753 0 28.2155 0 26.3988V6.63895C0 4.79978 0.741211 3.14004 1.9541 1.95131C3.16699 0.762582 4.80664 0 6.64844 0H269.352C271.193 0 272.855 0.740153 274.046 1.95131C275.236 3.16247 276 4.82221 276 6.63895V26.3988C276 28.238 275.259 29.8977 274.046 31.0864C272.833 32.2976 271.171 33.0377 269.352 33.0377H268.925V159.335C268.925 160.613 268.386 161.78 267.555 162.632L267.532 162.654C266.679 163.507 265.511 164.022 264.23 164.022H173.354C172.051 164.022 170.883 163.507 170.029 162.654C169.872 162.497 169.737 162.34 169.603 162.161C168.996 161.376 168.637 160.389 168.637 159.335V33.0377H56.332ZM176.408 68.7221H261.176V33.0377H176.408V68.7221ZM261.176 76.4601H176.408V112.817H261.176V76.4601ZM261.176 120.555H176.408V156.284H261.176V120.555ZM268.251 7.73796H7.74902V25.2998H268.251V7.73796ZM48.583 33.0377H32.3887V156.262H48.583V33.0377ZM218.163 47.7062C225.463 47.7062 231.37 48.895 231.37 50.3753C231.37 51.8556 225.463 53.0443 218.163 53.0443C210.863 53.0443 204.956 51.8556 204.956 50.3753C204.956 48.895 210.863 47.7062 218.163 47.7062ZM218.163 92.25C225.463 92.25 231.37 93.506 231.37 95.0536C231.37 96.6012 225.463 97.8572 218.163 97.8572C210.863 97.8572 204.956 96.6012 204.956 95.0536C204.956 93.506 210.863 92.25 218.163 92.25Z" fill="black" />
                        </svg>
              
                        <span class="mx-2">Working Desk</span>
                      </dd>




          <dt class="sr-only">Reviews</dt>
          <dd class="flex items-center">
            <svg width="30" height="30" viewBox="0 0 292 217" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_973_14)">
                <path d="M225.952 50.8497L225.815 50.6675C225.107 49.6423 223.692 49.4144 222.687 50.1207L205.336 62.2408C204.309 62.947 204.08 64.3595 204.788 65.362L204.925 65.5442C205.633 66.5694 207.048 66.7972 208.053 66.091L225.404 53.9709C226.408 53.2646 226.66 51.8521 225.952 50.8497ZM271.704 119.196L262.298 162.983C259.969 173.873 254.695 182.189 247.207 187.884C242.024 191.826 235.837 194.446 228.874 195.744L235.038 208.912C236.362 211.76 235.13 215.155 232.276 216.476C229.422 217.797 226.02 216.567 224.696 213.719L216.706 196.678H80.1345L72.1439 213.719C70.8197 216.567 67.418 217.797 64.5642 216.476C61.7104 215.155 60.4776 211.76 61.8017 208.912L67.6235 196.473C58.7196 195.699 51.4139 192.851 45.5237 187.975C38.6518 182.28 33.9487 174.01 31.1406 163.234L19.5656 119.196H10.5248C7.64816 119.196 5.02267 118.012 3.10493 116.121V116.098L3.0821 116.121C1.18718 114.207 0 111.587 0 108.694V99.1479C0 96.2545 1.18718 93.6346 3.0821 91.7209C3.21908 91.5842 3.37889 91.4247 3.5387 91.3108C5.38796 89.6477 7.83081 88.6453 10.502 88.6453H11.8946C12.2827 84.499 13.8808 80.5804 16.3465 77.1631C18.8579 73.6546 22.3281 70.6702 26.2777 68.6198C30.2502 66.5466 34.7478 65.3847 39.291 65.5214C43.2863 65.6581 47.2588 66.7517 50.9345 69.0754C52.5326 66.7517 54.5188 64.6785 56.8019 62.9698C61.2766 59.6208 66.8701 57.616 72.9201 57.616C77.9428 57.616 82.6458 58.9829 86.6411 61.3523C89.7689 63.1976 92.4629 65.6809 94.5632 68.597C100.933 69.0982 106.686 71.8093 111.001 75.9557C114.54 79.373 117.097 83.7471 118.215 88.6225H271.749V32.1228C268.416 15.788 258.965 11.3455 246.339 13.1453C252.024 23.0327 251.294 33.0796 243.234 43.3316C244.262 44.9947 244.17 46.8173 243.052 48.7538L240.54 51.6471C239.536 52.6723 238.28 52.7634 236.659 51.4648L198.076 12.5757C197.026 11.3227 197.231 10.2291 198.464 9.27229C201.204 5.92332 201.546 5.35376 206.409 6.17392C217.231 -0.842981 227.527 -2.096 237.23 3.46284C261.59 -6.51574 282.32 6.01445 285.128 31.5305V89.306C286.566 89.83 287.845 90.6729 288.895 91.7209C290.79 93.6118 291.977 96.2545 291.977 99.1479V108.694C291.977 111.587 290.79 114.207 288.895 116.121C287 118.012 284.352 119.196 281.475 119.196H271.704ZM204.103 32.1228L203.966 31.9405C203.258 30.9153 201.843 30.6875 200.838 31.3938L183.487 43.5139C182.46 44.2201 182.232 45.6326 182.939 46.635L183.076 46.8173C183.784 47.8425 185.2 48.0703 186.204 47.3641L203.555 35.2439C204.583 34.5377 204.811 33.1252 204.103 32.1228ZM194.126 22.0986L193.989 21.9164C193.282 20.8912 191.866 20.6634 190.862 21.3696L173.511 33.4897C172.483 34.196 172.255 35.6085 172.963 36.6109L173.1 36.7931C173.807 37.8183 175.223 38.0462 176.227 37.3399L193.578 25.2198C194.583 24.5136 194.834 23.1011 194.126 22.0986ZM214.057 41.8052L213.92 41.623C213.213 40.5978 211.797 40.3699 210.792 41.0762L193.441 53.1963C192.414 53.9025 192.186 55.315 192.894 56.3174L193.031 56.4997C193.738 57.5249 195.154 57.7527 196.158 57.0465L213.532 44.9264C214.514 44.2201 214.765 42.8304 214.057 41.8052ZM23.4924 88.6453H106.252C105.522 86.9594 104.449 85.4558 103.125 84.2028C100.408 81.5828 96.6408 79.9653 92.4629 79.9653C91.8236 79.9653 92.5085 79.9425 92.0748 79.9425L91.6866 79.9653C89.5406 80.0564 87.4174 78.9401 86.3672 76.9125C85.1343 74.5659 83.2166 72.5839 80.865 71.1942C78.582 69.85 75.8652 69.0527 72.9658 69.0527C69.4499 69.0527 66.2308 70.1918 63.6966 72.0827C61.1625 73.9964 59.2676 76.6619 58.4457 79.7147C58.1717 80.8766 57.5096 81.9701 56.5051 82.7903C54.0622 84.7723 50.455 84.4078 48.4688 81.9701C45.6607 78.53 42.2818 77.0264 38.9714 76.9125C36.46 76.8214 33.903 77.5048 31.5972 78.7123C29.2685 79.9425 27.2138 81.7195 25.6841 83.8155C24.6111 85.3191 23.8349 86.9594 23.4924 88.6453ZM19.4058 100.082C18.4926 100.31 17.5794 100.287 16.7118 100.082H11.4608V107.737H280.539V100.082H19.4058ZM31.3689 119.196L42.1905 160.364C44.3822 168.747 47.8524 175.058 52.8294 179.159C57.6923 183.191 64.2446 185.242 72.7603 185.242H218.304C227.116 185.242 234.627 183.077 240.244 178.817C245.586 174.762 249.353 168.679 251.088 160.614L259.992 119.196H31.3689Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_973_14">
                  <rect width="292" height="217" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span class="mx-2">Jacuzzi Tub with Shower</span>
          </dd>
          <dt class="sr-only">Location</dt>
          <dd class="mx-3 flex items-center">
            <svg width="30" height="30" viewBox="0 0 345 183" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_973_17)">
                <path d="M39.3065 164.638C39.3725 163.698 39.1924 162.756 38.7839 161.906C38.3754 161.055 37.7524 160.326 36.9762 159.789C33.8878 157.294 30.5467 154.546 30.5467 144.819C30.5467 139.437 30.9398 134.671 31.3329 130.186C32.1752 120.318 32.8771 111.936 28.2445 101.396C26.4536 101.574 24.6525 101.631 22.8539 101.564C17.0486 101.471 11.4812 99.2452 7.21544 95.3125C3.58653 91.8242 1.20033 87.2462 0.421009 82.2771C0.0554195 80.2523 -0.0858121 78.1935 -0.000133367 76.1379C0.104021 70.8408 2.01561 65.7379 5.41857 61.6728C9.13466 57.479 14.1425 54.6387 19.6532 53.5993C22.5801 53.0057 25.5736 52.8077 28.5533 53.0106V44.8529C28.6124 32.9754 33.3642 21.6011 41.7759 13.2023C50.1876 4.80344 61.5794 0.0589469 73.4752 0L270.008 0C281.904 0.0589469 293.296 4.80344 301.708 13.2023C310.12 21.6011 314.871 32.9754 314.93 44.8529V52.9825C316.319 52.8247 317.716 52.7499 319.114 52.7583C325.293 52.5752 331.354 54.4708 336.324 58.1406C338.933 60.146 341.054 62.7143 342.529 65.6535C344.9 70.5782 345.561 76.1505 344.41 81.4922C343.672 85.1331 342.18 88.58 340.03 91.6121C337.776 94.7569 334.789 97.3066 331.327 99.0409C326.635 101.297 321.359 102.051 316.222 101.199C311.561 111.768 312.263 120.15 313.105 130.046C313.498 134.531 313.892 139.296 313.892 144.679C313.892 154.406 310.55 157.154 307.462 159.648C306.643 160.184 305.985 160.93 305.555 161.809C305.125 162.687 304.94 163.664 305.019 164.638C305.019 165.163 304.915 165.683 304.713 166.168C304.511 166.653 304.215 167.093 303.842 167.463C303.469 167.833 303.026 168.126 302.539 168.324C302.052 168.522 301.53 168.623 301.005 168.619H286.658C286.658 168.619 286.658 168.843 286.658 168.927V178.683C286.658 179.828 286.202 180.926 285.391 181.736C284.58 182.545 283.481 183 282.334 183H255.325C254.183 182.993 253.09 182.535 252.285 181.726C251.481 180.917 251.029 179.823 251.029 178.683V168.619H93.9708V178.683C93.9708 179.823 93.5192 180.917 92.7144 181.726C91.9096 182.535 90.817 182.993 89.6752 183H62.5817C61.4398 182.993 60.3472 182.535 59.5424 181.726C58.7377 180.917 58.286 179.823 58.286 178.683V168.619H43.4337C42.8985 168.638 42.3649 168.549 41.8649 168.357C41.3648 168.166 40.9086 167.875 40.5234 167.504C40.1382 167.132 39.8319 166.687 39.6228 166.195C39.4138 165.702 39.3062 165.173 39.3065 164.638ZM283.569 93.1259C283.612 93.4797 283.612 93.8374 283.569 94.1912V119.813C283.569 120.34 283.465 120.861 283.264 121.348C283.062 121.834 282.766 122.276 282.393 122.648C282.02 123.02 281.578 123.316 281.091 123.517C280.604 123.718 280.082 123.822 279.554 123.822H65.4735C64.4087 123.822 63.3875 123.4 62.6345 122.648C61.8816 121.896 61.4586 120.877 61.4586 119.813V94.8359C60.0492 90.8649 58.4278 86.9721 56.6014 83.1742C54.999 79.8642 53.1207 76.6946 50.9862 73.699C47.0072 68.1487 41.286 64.0839 34.7301 62.1494C30.3641 60.8159 25.7383 60.5658 21.2535 61.4205C17.4926 62.1064 14.066 64.0192 11.5111 66.8589C9.28291 69.5739 8.04535 72.9645 8.00158 76.4743C7.98818 77.9613 8.12932 79.4456 8.42272 80.9035C8.93203 84.1611 10.4775 87.1686 12.8307 89.4816C15.7192 92.0564 19.459 93.4742 23.3312 93.4623C25.5794 93.5273 27.8283 93.3582 30.0414 92.9577C30.8831 92.8168 31.7478 92.9474 32.5102 93.3305C33.2725 93.7136 33.8928 94.3293 34.2809 95.0882C41.2999 108.937 40.4576 118.832 39.4469 130.69C39.0538 134.979 38.6888 139.549 38.6888 144.707C38.6888 150.65 40.4857 152.136 42.1703 153.509C44.6929 155.164 46.4821 157.723 47.1678 160.658H297.607C298.293 157.723 300.082 155.164 302.605 153.509C304.289 152.136 306.086 150.706 306.086 144.707C306.086 139.577 305.721 135.007 305.328 130.69C304.346 118.888 303.503 109.021 310.382 95.2845C310.722 94.5334 311.283 93.9032 311.99 93.4777C312.697 93.0521 313.517 92.8512 314.341 92.9017H315.745H316.25C320.196 93.83 324.339 93.4054 328.014 91.6962C330.254 90.5239 332.18 88.8319 333.629 86.7624C335.12 84.6535 336.152 82.2568 336.661 79.7261C337.444 76.109 337.009 72.3352 335.426 68.9894C334.514 67.1273 333.189 65.4974 331.551 64.2238C327.979 61.6557 323.654 60.3443 319.254 60.4954C314.122 60.5527 309.071 61.78 304.486 64.0836C300.715 65.9521 297.407 68.633 294.8 71.9329C292.407 75.0727 290.32 78.4332 288.567 81.9688C286.736 85.6114 285.114 89.3552 283.71 93.182L283.569 93.1259ZM69.4603 98.1158V115.721H275.792V98.1158C242.494 98.5924 209.111 98.7606 175.841 99.6576H172.247L163.319 99.4334L69.4603 98.1158ZM168.26 8.15763V7.98943H73.6156C63.8277 8.01892 54.4482 11.9104 47.5218 18.8157C40.5954 25.721 36.6837 35.0801 36.6393 44.8529V54.3842L37.0885 54.5244C45.3411 56.9675 52.543 62.0869 57.556 69.0735C59.9188 72.4306 62.0034 75.9745 63.7889 79.67C65.3331 82.8658 66.8492 86.3699 68.2811 90.2385C101.579 90.7431 135.018 90.8833 168.288 91.7803C168.274 91.575 168.274 91.3689 168.288 91.1636V8.15763H168.26ZM176.234 7.98943V91.1636C176.249 91.3689 176.249 91.575 176.234 91.7803C209.504 90.8833 242.943 90.7431 276.241 90.2385C277.733 86.2304 279.448 82.3089 281.379 78.4927C283.37 74.5294 285.749 70.7733 288.483 67.2794C291.858 63.1049 296.114 59.7259 300.948 57.3837C302.922 56.4057 304.968 55.581 307.069 54.9168V44.8529C307.025 35.0801 303.113 25.721 296.186 18.8157C289.26 11.9104 279.881 8.01892 270.093 7.98943H176.234Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_973_17">
                  <rect width="345" height="183" fill="white" />
                </clipPath>
              </defs>
            </svg>
  
            <span class="mx-2">Single Chair</span>
          </dd>
        </dl>
        <p class="col-start-1 mt-4 text-sm leading-6 dark:text-slate-400">A deluxe large, well appointed room, Corrina's chamber features a cable TV, queen size bed, private 4-piece bath with jacuzzi tub and shower.
</p>
        <div class="col-start-1 row-start-3 mt-4 self-center">

          <div class="price flex justify-between">
              <p>Room only</p>
              <p className='text-red-400'><strong>$125.80 (+tax)</strong></p>
            </div>
            <div className='border-top border-secondary'></div>
            <div class="price flex justify-between pt-2">
              <p>Room with breakfast</p>
              <p className='text-red-400'><strong>$148 (+tax)</strong></p>
            </div>

          {/* <button type="button" class="rounded-lg bg-black px-3 py-2 text-sm font-medium leading-6 text-white">Check Availability</button> */}
          <span className="flex justify-center lg:justify-start">
          <Link to="/roomtwo"> <button class="mt-3 rounded-lg bg-red-400 hover:bg-red-500 p-1 px-3 text-white  py-2">View Details</button></Link>
          </span>
        </div>
      </div>
    </div>
    <div className="px-4 py-6 item">
      <div class="mx-auto grid max-w-4xl grid-cols-1">
        <div class="relative col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 p-3">
          <h1 class="mt-1 text-3xl font-semibold text-white">Tyler's Chamber</h1>
          <p class="text-xl font-medium leading-4 text-white">Room #3</p>
        </div>
        <div class="col-start-1 col-end-3 row-start-1 grid gap-4">
          <img src={R3} alt="" class="h-60 w-full rounded-lg object-cover" loading="lazy" />
        </div>
        <dl class="row-start-2 mt-4 grid grid-cols-2 text-xs font-medium">
          <dt class="sr-only">Reviews</dt>


          {/* <dd class="flex items-center">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <rect width="30" height="30" fill="url(#pattern0)" />
              <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0_711_61" transform="scale(0.00195312)" />
                </pattern>
                <svg width="273" height="189" viewBox="0 0 273 189" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40.875 188.417H27.25L18.3937 161.5H0V93.8719C0 86.4698 2.66823 80.1892 8.00469 75.0302C13.3411 69.8712 19.7562 67.2917 27.25 67.2917V26.9167C27.25 19.5146 29.9182 13.178 35.2547 7.90677C40.5911 2.63559 47.0062 0 54.5 0H218C225.494 0 231.909 2.63559 237.245 7.90677C242.582 13.178 245.25 19.5146 245.25 26.9167V67.2917C252.744 67.2917 259.159 69.9273 264.495 75.1984C269.832 80.4696 272.5 86.8063 272.5 94.2083V161.5H254.106L245.25 188.417H231.625L222.769 161.5H49.7312L40.875 188.417ZM149.875 67.2917H218V26.9167H149.875V67.2917ZM54.5 67.2917H122.625V26.9167H54.5V67.2917ZM27.25 134.583H245.25V94.2083H27.25V134.583Z" fill="black"/>
</svg>
              </defs>
            </svg>
            <span class="mx-2">Deluxe Queen size bed</span>
          </dd>
          
          <dt class="sr-only">Location</dt>
          <dd class="mx-3 flex items-center">
            <svg width="30" height="30" viewBox="0 0 276 164" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M218.163 136.951C225.463 136.951 231.37 138.207 231.37 139.754C231.37 141.302 225.463 142.558 218.163 142.558C210.863 142.558 204.956 141.302 204.956 139.754C204.956 138.207 210.863 136.951 218.163 136.951ZM56.332 33.0377V159.335C56.332 160.636 55.793 161.802 54.9619 162.654C54.1084 163.507 52.9404 164.022 51.6377 164.022H29.3564C28.0762 164.022 26.9082 163.507 26.0547 162.654C25.2012 161.802 24.6846 160.636 24.6846 159.357V33.0377H6.64844C4.80664 33.0377 3.14453 32.2976 1.9541 31.0864C0.741211 29.8753 0 28.2155 0 26.3988V6.63895C0 4.79978 0.741211 3.14004 1.9541 1.95131C3.16699 0.762582 4.80664 0 6.64844 0H269.352C271.193 0 272.855 0.740153 274.046 1.95131C275.236 3.16247 276 4.82221 276 6.63895V26.3988C276 28.238 275.259 29.8977 274.046 31.0864C272.833 32.2976 271.171 33.0377 269.352 33.0377H268.925V159.335C268.925 160.613 268.386 161.78 267.555 162.632L267.532 162.654C266.679 163.507 265.511 164.022 264.23 164.022H173.354C172.051 164.022 170.883 163.507 170.029 162.654C169.872 162.497 169.737 162.34 169.603 162.161C168.996 161.376 168.637 160.389 168.637 159.335V33.0377H56.332ZM176.408 68.7221H261.176V33.0377H176.408V68.7221ZM261.176 76.4601H176.408V112.817H261.176V76.4601ZM261.176 120.555H176.408V156.284H261.176V120.555ZM268.251 7.73796H7.74902V25.2998H268.251V7.73796ZM48.583 33.0377H32.3887V156.262H48.583V33.0377ZM218.163 47.7062C225.463 47.7062 231.37 48.895 231.37 50.3753C231.37 51.8556 225.463 53.0443 218.163 53.0443C210.863 53.0443 204.956 51.8556 204.956 50.3753C204.956 48.895 210.863 47.7062 218.163 47.7062ZM218.163 92.25C225.463 92.25 231.37 93.506 231.37 95.0536C231.37 96.6012 225.463 97.8572 218.163 97.8572C210.863 97.8572 204.956 96.6012 204.956 95.0536C204.956 93.506 210.863 92.25 218.163 92.25Z" fill="black" />
            </svg>
  
            <span class="mx-2">Working Desk</span>
          </dd> */}


          {/* Used the icons sets of Room #4 */}

          <dd class="flex items-center">
                      <svg width="30px" height="30px" viewBox="0 0 223 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.1573 2.30785e-05H192.838C197.921 2.30785e-05 202.547 2.09179 205.887 5.44824C209.232 8.80907 211.314 13.4608 211.314 18.5634V103.836C212.847 104.886 214.267 106.054 215.552 107.341L215.84 107.66C220.265 112.242 223 118.185 223 125.274V195.077C223 197.794 220.805 200 218.1 200H209.502C207.198 200 205.265 198.398 204.742 196.241C201.645 187.362 198.592 182.246 194.533 179.529C190.391 176.763 184.585 176.072 176.14 176.08L39.5781 176.282C33.5981 176.146 29.7522 177.84 27.0126 180.907C23.881 184.412 21.712 189.913 19.4951 196.617C18.8243 198.674 16.9123 199.978 14.8696 199.978L4.8999 200C2.19516 200 0 197.794 0 195.077V122.946C0 116.307 2.60893 110.794 6.79453 106.584L7.11684 106.291C8.49316 104.952 10.035 103.757 11.7031 102.711L11.6814 18.3796C11.6814 13.2814 13.7676 8.68654 17.1213 5.36072C20.5944 1.91867 25.2789 -0.00769089 30.1573 2.30785e-05ZM10.0786 143.667L9.79545 143.658V190.158H11.3896C13.637 183.809 16.1022 178.452 19.739 174.374C24.3993 169.153 30.5623 166.278 39.7654 166.484L176.14 166.278C186.488 166.269 193.853 167.284 199.925 171.345C205.386 174.999 209.337 180.807 212.908 190.158H213.205V143.658L212.917 143.667H10.0786ZM9.79545 133.834L10.0786 133.825H212.917L213.205 133.834V125.274C213.205 120.959 211.545 117.336 208.867 114.531L208.623 114.303C206.48 112.15 203.736 110.457 200.648 109.275C195.081 108.08 189.646 106.991 184.323 106.002C178.317 105.061 172.494 104.221 166.823 103.481C166.124 103.605 165.406 103.574 164.719 103.389L162.524 102.934C143.744 100.624 126.522 99.4508 109.47 99.4377C99.0129 99.4289 88.5815 99.8578 77.8496 100.724C58.9513 102.619 39.3081 106.015 17.6353 110.846C17.4306 110.89 17.2215 110.925 17.0212 110.942C15.8975 111.638 14.8609 112.426 13.9506 113.301L13.7241 113.546C11.3024 115.975 9.79545 119.148 9.79545 122.946V133.834ZM23.9943 98.068C33.7941 96.3132 43.1148 94.8384 52.1263 93.6306L52.1132 73.9295C52.1132 67.3216 54.8049 61.3045 59.1342 56.9591L59.4565 56.6659C63.7641 52.4867 69.6091 49.9092 76.0247 49.9092H146.975C153.556 49.9092 159.536 52.6136 163.861 56.9635C168.191 61.3133 170.887 67.326 170.887 73.9295V93.7794C175.665 94.5146 180.521 95.3329 185.469 96.2431C189.128 96.8164 192.847 97.4247 196.645 98.068C198.304 98.3524 199.933 98.7331 201.519 99.2101V18.5634C201.519 16.1784 200.534 13.9947 198.962 12.4106C197.39 10.8308 195.216 9.84183 192.838 9.84183H30.1573C27.7313 9.84183 25.5361 10.8002 23.9681 12.3581C22.4307 13.8809 21.4812 16.0077 21.4812 18.3796V98.6106C22.3087 98.4049 23.1493 98.2211 23.9943 98.068ZM114.052 89.0314C127.093 89.0926 139.832 89.8103 151.13 91.2019C154.419 91.5476 157.742 91.9458 161.087 92.3834V73.9295C161.087 70.0436 159.493 66.4946 156.932 63.9214C154.375 61.3527 150.847 59.751 146.975 59.751H76.0247C72.2572 59.751 68.8208 61.252 66.2815 63.6807L66.0594 63.9214C63.5027 66.4902 61.913 70.0392 61.913 73.9295V92.3747C77.9193 90.0772 96.2689 88.9438 114.052 89.0314Z" fill="black"/>
            </svg>
                 <span class="mx-2">Deluxe Queen Size Bed</span>
           </dd>
                      <dt class="sr-only">Location</dt>
                      <dd class="mx-3 flex items-center">
                        <svg width="30" height="30" viewBox="0 0 276 164" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M218.163 136.951C225.463 136.951 231.37 138.207 231.37 139.754C231.37 141.302 225.463 142.558 218.163 142.558C210.863 142.558 204.956 141.302 204.956 139.754C204.956 138.207 210.863 136.951 218.163 136.951ZM56.332 33.0377V159.335C56.332 160.636 55.793 161.802 54.9619 162.654C54.1084 163.507 52.9404 164.022 51.6377 164.022H29.3564C28.0762 164.022 26.9082 163.507 26.0547 162.654C25.2012 161.802 24.6846 160.636 24.6846 159.357V33.0377H6.64844C4.80664 33.0377 3.14453 32.2976 1.9541 31.0864C0.741211 29.8753 0 28.2155 0 26.3988V6.63895C0 4.79978 0.741211 3.14004 1.9541 1.95131C3.16699 0.762582 4.80664 0 6.64844 0H269.352C271.193 0 272.855 0.740153 274.046 1.95131C275.236 3.16247 276 4.82221 276 6.63895V26.3988C276 28.238 275.259 29.8977 274.046 31.0864C272.833 32.2976 271.171 33.0377 269.352 33.0377H268.925V159.335C268.925 160.613 268.386 161.78 267.555 162.632L267.532 162.654C266.679 163.507 265.511 164.022 264.23 164.022H173.354C172.051 164.022 170.883 163.507 170.029 162.654C169.872 162.497 169.737 162.34 169.603 162.161C168.996 161.376 168.637 160.389 168.637 159.335V33.0377H56.332ZM176.408 68.7221H261.176V33.0377H176.408V68.7221ZM261.176 76.4601H176.408V112.817H261.176V76.4601ZM261.176 120.555H176.408V156.284H261.176V120.555ZM268.251 7.73796H7.74902V25.2998H268.251V7.73796ZM48.583 33.0377H32.3887V156.262H48.583V33.0377ZM218.163 47.7062C225.463 47.7062 231.37 48.895 231.37 50.3753C231.37 51.8556 225.463 53.0443 218.163 53.0443C210.863 53.0443 204.956 51.8556 204.956 50.3753C204.956 48.895 210.863 47.7062 218.163 47.7062ZM218.163 92.25C225.463 92.25 231.37 93.506 231.37 95.0536C231.37 96.6012 225.463 97.8572 218.163 97.8572C210.863 97.8572 204.956 96.6012 204.956 95.0536C204.956 93.506 210.863 92.25 218.163 92.25Z" fill="black" />
                        </svg>
              
                        <span class="mx-2">Working Desk</span>
                      </dd>



          
          <dt class="sr-only">Reviews</dt>
          <dd class="flex items-center">
            <svg width="30" height="30" viewBox="0 0 292 217" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_973_14)">
                <path d="M225.952 50.8497L225.815 50.6675C225.107 49.6423 223.692 49.4144 222.687 50.1207L205.336 62.2408C204.309 62.947 204.08 64.3595 204.788 65.362L204.925 65.5442C205.633 66.5694 207.048 66.7972 208.053 66.091L225.404 53.9709C226.408 53.2646 226.66 51.8521 225.952 50.8497ZM271.704 119.196L262.298 162.983C259.969 173.873 254.695 182.189 247.207 187.884C242.024 191.826 235.837 194.446 228.874 195.744L235.038 208.912C236.362 211.76 235.13 215.155 232.276 216.476C229.422 217.797 226.02 216.567 224.696 213.719L216.706 196.678H80.1345L72.1439 213.719C70.8197 216.567 67.418 217.797 64.5642 216.476C61.7104 215.155 60.4776 211.76 61.8017 208.912L67.6235 196.473C58.7196 195.699 51.4139 192.851 45.5237 187.975C38.6518 182.28 33.9487 174.01 31.1406 163.234L19.5656 119.196H10.5248C7.64816 119.196 5.02267 118.012 3.10493 116.121V116.098L3.0821 116.121C1.18718 114.207 0 111.587 0 108.694V99.1479C0 96.2545 1.18718 93.6346 3.0821 91.7209C3.21908 91.5842 3.37889 91.4247 3.5387 91.3108C5.38796 89.6477 7.83081 88.6453 10.502 88.6453H11.8946C12.2827 84.499 13.8808 80.5804 16.3465 77.1631C18.8579 73.6546 22.3281 70.6702 26.2777 68.6198C30.2502 66.5466 34.7478 65.3847 39.291 65.5214C43.2863 65.6581 47.2588 66.7517 50.9345 69.0754C52.5326 66.7517 54.5188 64.6785 56.8019 62.9698C61.2766 59.6208 66.8701 57.616 72.9201 57.616C77.9428 57.616 82.6458 58.9829 86.6411 61.3523C89.7689 63.1976 92.4629 65.6809 94.5632 68.597C100.933 69.0982 106.686 71.8093 111.001 75.9557C114.54 79.373 117.097 83.7471 118.215 88.6225H271.749V32.1228C268.416 15.788 258.965 11.3455 246.339 13.1453C252.024 23.0327 251.294 33.0796 243.234 43.3316C244.262 44.9947 244.17 46.8173 243.052 48.7538L240.54 51.6471C239.536 52.6723 238.28 52.7634 236.659 51.4648L198.076 12.5757C197.026 11.3227 197.231 10.2291 198.464 9.27229C201.204 5.92332 201.546 5.35376 206.409 6.17392C217.231 -0.842981 227.527 -2.096 237.23 3.46284C261.59 -6.51574 282.32 6.01445 285.128 31.5305V89.306C286.566 89.83 287.845 90.6729 288.895 91.7209C290.79 93.6118 291.977 96.2545 291.977 99.1479V108.694C291.977 111.587 290.79 114.207 288.895 116.121C287 118.012 284.352 119.196 281.475 119.196H271.704ZM204.103 32.1228L203.966 31.9405C203.258 30.9153 201.843 30.6875 200.838 31.3938L183.487 43.5139C182.46 44.2201 182.232 45.6326 182.939 46.635L183.076 46.8173C183.784 47.8425 185.2 48.0703 186.204 47.3641L203.555 35.2439C204.583 34.5377 204.811 33.1252 204.103 32.1228ZM194.126 22.0986L193.989 21.9164C193.282 20.8912 191.866 20.6634 190.862 21.3696L173.511 33.4897C172.483 34.196 172.255 35.6085 172.963 36.6109L173.1 36.7931C173.807 37.8183 175.223 38.0462 176.227 37.3399L193.578 25.2198C194.583 24.5136 194.834 23.1011 194.126 22.0986ZM214.057 41.8052L213.92 41.623C213.213 40.5978 211.797 40.3699 210.792 41.0762L193.441 53.1963C192.414 53.9025 192.186 55.315 192.894 56.3174L193.031 56.4997C193.738 57.5249 195.154 57.7527 196.158 57.0465L213.532 44.9264C214.514 44.2201 214.765 42.8304 214.057 41.8052ZM23.4924 88.6453H106.252C105.522 86.9594 104.449 85.4558 103.125 84.2028C100.408 81.5828 96.6408 79.9653 92.4629 79.9653C91.8236 79.9653 92.5085 79.9425 92.0748 79.9425L91.6866 79.9653C89.5406 80.0564 87.4174 78.9401 86.3672 76.9125C85.1343 74.5659 83.2166 72.5839 80.865 71.1942C78.582 69.85 75.8652 69.0527 72.9658 69.0527C69.4499 69.0527 66.2308 70.1918 63.6966 72.0827C61.1625 73.9964 59.2676 76.6619 58.4457 79.7147C58.1717 80.8766 57.5096 81.9701 56.5051 82.7903C54.0622 84.7723 50.455 84.4078 48.4688 81.9701C45.6607 78.53 42.2818 77.0264 38.9714 76.9125C36.46 76.8214 33.903 77.5048 31.5972 78.7123C29.2685 79.9425 27.2138 81.7195 25.6841 83.8155C24.6111 85.3191 23.8349 86.9594 23.4924 88.6453ZM19.4058 100.082C18.4926 100.31 17.5794 100.287 16.7118 100.082H11.4608V107.737H280.539V100.082H19.4058ZM31.3689 119.196L42.1905 160.364C44.3822 168.747 47.8524 175.058 52.8294 179.159C57.6923 183.191 64.2446 185.242 72.7603 185.242H218.304C227.116 185.242 234.627 183.077 240.244 178.817C245.586 174.762 249.353 168.679 251.088 160.614L259.992 119.196H31.3689Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_973_14">
                  <rect width="292" height="217" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span class="mx-2">Jacuzzi Tub with Shower</span>
          </dd>
          <dt class="sr-only">Location</dt>
          <dd class="mx-3 flex items-center">
            <svg width="30" height="30" viewBox="0 0 345 183" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_973_17)">
                <path d="M39.3065 164.638C39.3725 163.698 39.1924 162.756 38.7839 161.906C38.3754 161.055 37.7524 160.326 36.9762 159.789C33.8878 157.294 30.5467 154.546 30.5467 144.819C30.5467 139.437 30.9398 134.671 31.3329 130.186C32.1752 120.318 32.8771 111.936 28.2445 101.396C26.4536 101.574 24.6525 101.631 22.8539 101.564C17.0486 101.471 11.4812 99.2452 7.21544 95.3125C3.58653 91.8242 1.20033 87.2462 0.421009 82.2771C0.0554195 80.2523 -0.0858121 78.1935 -0.000133367 76.1379C0.104021 70.8408 2.01561 65.7379 5.41857 61.6728C9.13466 57.479 14.1425 54.6387 19.6532 53.5993C22.5801 53.0057 25.5736 52.8077 28.5533 53.0106V44.8529C28.6124 32.9754 33.3642 21.6011 41.7759 13.2023C50.1876 4.80344 61.5794 0.0589469 73.4752 0L270.008 0C281.904 0.0589469 293.296 4.80344 301.708 13.2023C310.12 21.6011 314.871 32.9754 314.93 44.8529V52.9825C316.319 52.8247 317.716 52.7499 319.114 52.7583C325.293 52.5752 331.354 54.4708 336.324 58.1406C338.933 60.146 341.054 62.7143 342.529 65.6535C344.9 70.5782 345.561 76.1505 344.41 81.4922C343.672 85.1331 342.18 88.58 340.03 91.6121C337.776 94.7569 334.789 97.3066 331.327 99.0409C326.635 101.297 321.359 102.051 316.222 101.199C311.561 111.768 312.263 120.15 313.105 130.046C313.498 134.531 313.892 139.296 313.892 144.679C313.892 154.406 310.55 157.154 307.462 159.648C306.643 160.184 305.985 160.93 305.555 161.809C305.125 162.687 304.94 163.664 305.019 164.638C305.019 165.163 304.915 165.683 304.713 166.168C304.511 166.653 304.215 167.093 303.842 167.463C303.469 167.833 303.026 168.126 302.539 168.324C302.052 168.522 301.53 168.623 301.005 168.619H286.658C286.658 168.619 286.658 168.843 286.658 168.927V178.683C286.658 179.828 286.202 180.926 285.391 181.736C284.58 182.545 283.481 183 282.334 183H255.325C254.183 182.993 253.09 182.535 252.285 181.726C251.481 180.917 251.029 179.823 251.029 178.683V168.619H93.9708V178.683C93.9708 179.823 93.5192 180.917 92.7144 181.726C91.9096 182.535 90.817 182.993 89.6752 183H62.5817C61.4398 182.993 60.3472 182.535 59.5424 181.726C58.7377 180.917 58.286 179.823 58.286 178.683V168.619H43.4337C42.8985 168.638 42.3649 168.549 41.8649 168.357C41.3648 168.166 40.9086 167.875 40.5234 167.504C40.1382 167.132 39.8319 166.687 39.6228 166.195C39.4138 165.702 39.3062 165.173 39.3065 164.638ZM283.569 93.1259C283.612 93.4797 283.612 93.8374 283.569 94.1912V119.813C283.569 120.34 283.465 120.861 283.264 121.348C283.062 121.834 282.766 122.276 282.393 122.648C282.02 123.02 281.578 123.316 281.091 123.517C280.604 123.718 280.082 123.822 279.554 123.822H65.4735C64.4087 123.822 63.3875 123.4 62.6345 122.648C61.8816 121.896 61.4586 120.877 61.4586 119.813V94.8359C60.0492 90.8649 58.4278 86.9721 56.6014 83.1742C54.999 79.8642 53.1207 76.6946 50.9862 73.699C47.0072 68.1487 41.286 64.0839 34.7301 62.1494C30.3641 60.8159 25.7383 60.5658 21.2535 61.4205C17.4926 62.1064 14.066 64.0192 11.5111 66.8589C9.28291 69.5739 8.04535 72.9645 8.00158 76.4743C7.98818 77.9613 8.12932 79.4456 8.42272 80.9035C8.93203 84.1611 10.4775 87.1686 12.8307 89.4816C15.7192 92.0564 19.459 93.4742 23.3312 93.4623C25.5794 93.5273 27.8283 93.3582 30.0414 92.9577C30.8831 92.8168 31.7478 92.9474 32.5102 93.3305C33.2725 93.7136 33.8928 94.3293 34.2809 95.0882C41.2999 108.937 40.4576 118.832 39.4469 130.69C39.0538 134.979 38.6888 139.549 38.6888 144.707C38.6888 150.65 40.4857 152.136 42.1703 153.509C44.6929 155.164 46.4821 157.723 47.1678 160.658H297.607C298.293 157.723 300.082 155.164 302.605 153.509C304.289 152.136 306.086 150.706 306.086 144.707C306.086 139.577 305.721 135.007 305.328 130.69C304.346 118.888 303.503 109.021 310.382 95.2845C310.722 94.5334 311.283 93.9032 311.99 93.4777C312.697 93.0521 313.517 92.8512 314.341 92.9017H315.745H316.25C320.196 93.83 324.339 93.4054 328.014 91.6962C330.254 90.5239 332.18 88.8319 333.629 86.7624C335.12 84.6535 336.152 82.2568 336.661 79.7261C337.444 76.109 337.009 72.3352 335.426 68.9894C334.514 67.1273 333.189 65.4974 331.551 64.2238C327.979 61.6557 323.654 60.3443 319.254 60.4954C314.122 60.5527 309.071 61.78 304.486 64.0836C300.715 65.9521 297.407 68.633 294.8 71.9329C292.407 75.0727 290.32 78.4332 288.567 81.9688C286.736 85.6114 285.114 89.3552 283.71 93.182L283.569 93.1259ZM69.4603 98.1158V115.721H275.792V98.1158C242.494 98.5924 209.111 98.7606 175.841 99.6576H172.247L163.319 99.4334L69.4603 98.1158ZM168.26 8.15763V7.98943H73.6156C63.8277 8.01892 54.4482 11.9104 47.5218 18.8157C40.5954 25.721 36.6837 35.0801 36.6393 44.8529V54.3842L37.0885 54.5244C45.3411 56.9675 52.543 62.0869 57.556 69.0735C59.9188 72.4306 62.0034 75.9745 63.7889 79.67C65.3331 82.8658 66.8492 86.3699 68.2811 90.2385C101.579 90.7431 135.018 90.8833 168.288 91.7803C168.274 91.575 168.274 91.3689 168.288 91.1636V8.15763H168.26ZM176.234 7.98943V91.1636C176.249 91.3689 176.249 91.575 176.234 91.7803C209.504 90.8833 242.943 90.7431 276.241 90.2385C277.733 86.2304 279.448 82.3089 281.379 78.4927C283.37 74.5294 285.749 70.7733 288.483 67.2794C291.858 63.1049 296.114 59.7259 300.948 57.3837C302.922 56.4057 304.968 55.581 307.069 54.9168V44.8529C307.025 35.0801 303.113 25.721 296.186 18.8157C289.26 11.9104 279.881 8.01892 270.093 7.98943H176.234Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_973_17">
                  <rect width="345" height="183" fill="white" />
                </clipPath>
              </defs>
            </svg>
  
            <span class="mx-2">Single Chair</span>
          </dd>
        </dl>
        <p class="col-start-1 mt-4 text-sm leading-6 dark:text-slate-400">Another deluxe large, well appointed room, Tyler's chamber features a cable TV, queen size bed, private 4-piece bath with jacuzzi tub and shower.
</p>
        <div class="col-start-1 row-start-3 mt-4 self-center">

          <div class="price flex justify-between">
              <p>Room only</p>
              <p className='text-red-400'><strong>$125.80 (+tax)</strong></p>
            </div>
            <div className='border-top border-secondary'></div>
            <div class="price flex justify-between pt-2">
              <p>Room with breakfast</p>
              <p className='text-red-400'><strong>$148 (+tax)</strong></p>
            </div>


          {/* <button type="button" class="rounded-lg bg-black px-3 py-2 text-sm font-medium leading-6 text-white">Check Availability</button> */}
          <span className="flex justify-center lg:justify-start">
          <Link to="/roomthree">  <button class="mt-3 rounded-lg bg-red-400 hover:bg-red-500 p-1 px-3 text-white  py-2">View Details</button></Link>
          </span>        
        </div>
      </div>
    </div>
    <div className="px-4 py-6 item">
      <div class="mx-auto grid max-w-4xl grid-cols-1">
        <div class="relative col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 p-3">
          <h1 class="mt-1 text-3xl font-semibold text-white">Bethany's Room</h1>
          <p class="text-xl font-medium leading-4 text-white">Room #4</p>
        </div>
        <div class="col-start-1 col-end-3 row-start-1 grid gap-4">
          <img src={R4} alt="" class="h-60 w-full rounded-lg object-cover" loading="lazy" />
        </div>
        <dl class="row-start-2 mt-4 grid grid-cols-2 text-xs font-medium">
          <dt class="sr-only">Reviews</dt>
          <dd class="flex items-center">
          <svg width="30px" height="30px" viewBox="0 0 223 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.1573 2.30785e-05H192.838C197.921 2.30785e-05 202.547 2.09179 205.887 5.44824C209.232 8.80907 211.314 13.4608 211.314 18.5634V103.836C212.847 104.886 214.267 106.054 215.552 107.341L215.84 107.66C220.265 112.242 223 118.185 223 125.274V195.077C223 197.794 220.805 200 218.1 200H209.502C207.198 200 205.265 198.398 204.742 196.241C201.645 187.362 198.592 182.246 194.533 179.529C190.391 176.763 184.585 176.072 176.14 176.08L39.5781 176.282C33.5981 176.146 29.7522 177.84 27.0126 180.907C23.881 184.412 21.712 189.913 19.4951 196.617C18.8243 198.674 16.9123 199.978 14.8696 199.978L4.8999 200C2.19516 200 0 197.794 0 195.077V122.946C0 116.307 2.60893 110.794 6.79453 106.584L7.11684 106.291C8.49316 104.952 10.035 103.757 11.7031 102.711L11.6814 18.3796C11.6814 13.2814 13.7676 8.68654 17.1213 5.36072C20.5944 1.91867 25.2789 -0.00769089 30.1573 2.30785e-05ZM10.0786 143.667L9.79545 143.658V190.158H11.3896C13.637 183.809 16.1022 178.452 19.739 174.374C24.3993 169.153 30.5623 166.278 39.7654 166.484L176.14 166.278C186.488 166.269 193.853 167.284 199.925 171.345C205.386 174.999 209.337 180.807 212.908 190.158H213.205V143.658L212.917 143.667H10.0786ZM9.79545 133.834L10.0786 133.825H212.917L213.205 133.834V125.274C213.205 120.959 211.545 117.336 208.867 114.531L208.623 114.303C206.48 112.15 203.736 110.457 200.648 109.275C195.081 108.08 189.646 106.991 184.323 106.002C178.317 105.061 172.494 104.221 166.823 103.481C166.124 103.605 165.406 103.574 164.719 103.389L162.524 102.934C143.744 100.624 126.522 99.4508 109.47 99.4377C99.0129 99.4289 88.5815 99.8578 77.8496 100.724C58.9513 102.619 39.3081 106.015 17.6353 110.846C17.4306 110.89 17.2215 110.925 17.0212 110.942C15.8975 111.638 14.8609 112.426 13.9506 113.301L13.7241 113.546C11.3024 115.975 9.79545 119.148 9.79545 122.946V133.834ZM23.9943 98.068C33.7941 96.3132 43.1148 94.8384 52.1263 93.6306L52.1132 73.9295C52.1132 67.3216 54.8049 61.3045 59.1342 56.9591L59.4565 56.6659C63.7641 52.4867 69.6091 49.9092 76.0247 49.9092H146.975C153.556 49.9092 159.536 52.6136 163.861 56.9635C168.191 61.3133 170.887 67.326 170.887 73.9295V93.7794C175.665 94.5146 180.521 95.3329 185.469 96.2431C189.128 96.8164 192.847 97.4247 196.645 98.068C198.304 98.3524 199.933 98.7331 201.519 99.2101V18.5634C201.519 16.1784 200.534 13.9947 198.962 12.4106C197.39 10.8308 195.216 9.84183 192.838 9.84183H30.1573C27.7313 9.84183 25.5361 10.8002 23.9681 12.3581C22.4307 13.8809 21.4812 16.0077 21.4812 18.3796V98.6106C22.3087 98.4049 23.1493 98.2211 23.9943 98.068ZM114.052 89.0314C127.093 89.0926 139.832 89.8103 151.13 91.2019C154.419 91.5476 157.742 91.9458 161.087 92.3834V73.9295C161.087 70.0436 159.493 66.4946 156.932 63.9214C154.375 61.3527 150.847 59.751 146.975 59.751H76.0247C72.2572 59.751 68.8208 61.252 66.2815 63.6807L66.0594 63.9214C63.5027 66.4902 61.913 70.0392 61.913 73.9295V92.3747C77.9193 90.0772 96.2689 88.9438 114.052 89.0314Z" fill="black"/>
</svg>
            <span class="mx-2">Double/Twin Bed</span>
          </dd>
          <dt class="sr-only">Location</dt>
          <dd class="mx-3 flex items-center">
            <svg width="30" height="30" viewBox="0 0 276 164" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M218.163 136.951C225.463 136.951 231.37 138.207 231.37 139.754C231.37 141.302 225.463 142.558 218.163 142.558C210.863 142.558 204.956 141.302 204.956 139.754C204.956 138.207 210.863 136.951 218.163 136.951ZM56.332 33.0377V159.335C56.332 160.636 55.793 161.802 54.9619 162.654C54.1084 163.507 52.9404 164.022 51.6377 164.022H29.3564C28.0762 164.022 26.9082 163.507 26.0547 162.654C25.2012 161.802 24.6846 160.636 24.6846 159.357V33.0377H6.64844C4.80664 33.0377 3.14453 32.2976 1.9541 31.0864C0.741211 29.8753 0 28.2155 0 26.3988V6.63895C0 4.79978 0.741211 3.14004 1.9541 1.95131C3.16699 0.762582 4.80664 0 6.64844 0H269.352C271.193 0 272.855 0.740153 274.046 1.95131C275.236 3.16247 276 4.82221 276 6.63895V26.3988C276 28.238 275.259 29.8977 274.046 31.0864C272.833 32.2976 271.171 33.0377 269.352 33.0377H268.925V159.335C268.925 160.613 268.386 161.78 267.555 162.632L267.532 162.654C266.679 163.507 265.511 164.022 264.23 164.022H173.354C172.051 164.022 170.883 163.507 170.029 162.654C169.872 162.497 169.737 162.34 169.603 162.161C168.996 161.376 168.637 160.389 168.637 159.335V33.0377H56.332ZM176.408 68.7221H261.176V33.0377H176.408V68.7221ZM261.176 76.4601H176.408V112.817H261.176V76.4601ZM261.176 120.555H176.408V156.284H261.176V120.555ZM268.251 7.73796H7.74902V25.2998H268.251V7.73796ZM48.583 33.0377H32.3887V156.262H48.583V33.0377ZM218.163 47.7062C225.463 47.7062 231.37 48.895 231.37 50.3753C231.37 51.8556 225.463 53.0443 218.163 53.0443C210.863 53.0443 204.956 51.8556 204.956 50.3753C204.956 48.895 210.863 47.7062 218.163 47.7062ZM218.163 92.25C225.463 92.25 231.37 93.506 231.37 95.0536C231.37 96.6012 225.463 97.8572 218.163 97.8572C210.863 97.8572 204.956 96.6012 204.956 95.0536C204.956 93.506 210.863 92.25 218.163 92.25Z" fill="black" />
            </svg>
  
            <span class="mx-2">Working Desk</span>
          </dd>
          <dt class="sr-only">Reviews</dt>
          <dd class="flex items-center">
          <svg width="30px" height="30px" viewBox="0 0 257 178" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M135.109 116.604L135.402 116.185C137.033 113.856 140.254 113.29 142.555 114.926L182.167 142.719C184.489 144.355 185.053 147.564 183.422 149.893L183.129 150.312C181.498 152.64 178.277 153.207 175.976 151.571L136.364 123.778C134.042 122.163 133.478 118.932 135.109 116.604ZM0 72.3453V177.979H30.5355V73.6877C38.1694 36.2251 59.6906 26.0099 88.5111 30.1841C75.523 52.8588 77.2171 75.9111 95.6012 99.4249C93.2587 103.263 93.4469 107.417 96.0404 111.864L101.792 118.513C104.093 120.862 106.958 121.051 110.639 118.072L198.711 28.8626C201.095 25.9889 200.614 23.4928 197.832 21.3113C191.6 13.6342 190.805 12.3128 179.678 14.2006C154.999 -1.90879 131.47 -4.78246 109.321 7.99175C53.7508 -14.9137 6.42082 13.865 0 72.3453ZM184.928 73.6667L185.221 73.2472C186.852 70.9189 190.052 70.3526 192.374 71.9887L231.986 99.8025C234.308 101.439 234.872 104.669 233.241 106.976L232.948 107.396C231.317 109.724 228.117 110.29 225.795 108.654L186.204 80.8404C183.882 79.2043 183.317 75.9741 184.928 73.6667ZM207.746 50.6773L208.039 50.2578C209.67 47.9295 212.891 47.3632 215.191 48.9993L254.804 76.8131C257.125 78.4492 257.69 81.6795 256.059 83.9868L255.766 84.4063C254.135 86.7346 250.914 87.301 248.613 85.6649L209.001 57.851C206.7 56.2149 206.115 52.9847 207.746 50.6773ZM162.256 95.901L162.549 95.4815C164.181 93.1532 167.401 92.5868 169.702 94.2229L209.314 122.037C211.636 123.673 212.201 126.882 210.59 129.21L210.297 129.63C208.666 131.958 205.445 132.525 203.145 130.889L163.511 103.075C161.211 101.439 160.646 98.2293 162.256 95.901Z" fill="black"/>
</svg>
            <span class="mx-2">Shower</span>
          </dd>
          <dt class="sr-only">Location</dt>
          <dd class="mx-3 flex items-center">
            <svg width="30" height="30" viewBox="0 0 345 183" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_973_17)">
                <path d="M39.3065 164.638C39.3725 163.698 39.1924 162.756 38.7839 161.906C38.3754 161.055 37.7524 160.326 36.9762 159.789C33.8878 157.294 30.5467 154.546 30.5467 144.819C30.5467 139.437 30.9398 134.671 31.3329 130.186C32.1752 120.318 32.8771 111.936 28.2445 101.396C26.4536 101.574 24.6525 101.631 22.8539 101.564C17.0486 101.471 11.4812 99.2452 7.21544 95.3125C3.58653 91.8242 1.20033 87.2462 0.421009 82.2771C0.0554195 80.2523 -0.0858121 78.1935 -0.000133367 76.1379C0.104021 70.8408 2.01561 65.7379 5.41857 61.6728C9.13466 57.479 14.1425 54.6387 19.6532 53.5993C22.5801 53.0057 25.5736 52.8077 28.5533 53.0106V44.8529C28.6124 32.9754 33.3642 21.6011 41.7759 13.2023C50.1876 4.80344 61.5794 0.0589469 73.4752 0L270.008 0C281.904 0.0589469 293.296 4.80344 301.708 13.2023C310.12 21.6011 314.871 32.9754 314.93 44.8529V52.9825C316.319 52.8247 317.716 52.7499 319.114 52.7583C325.293 52.5752 331.354 54.4708 336.324 58.1406C338.933 60.146 341.054 62.7143 342.529 65.6535C344.9 70.5782 345.561 76.1505 344.41 81.4922C343.672 85.1331 342.18 88.58 340.03 91.6121C337.776 94.7569 334.789 97.3066 331.327 99.0409C326.635 101.297 321.359 102.051 316.222 101.199C311.561 111.768 312.263 120.15 313.105 130.046C313.498 134.531 313.892 139.296 313.892 144.679C313.892 154.406 310.55 157.154 307.462 159.648C306.643 160.184 305.985 160.93 305.555 161.809C305.125 162.687 304.94 163.664 305.019 164.638C305.019 165.163 304.915 165.683 304.713 166.168C304.511 166.653 304.215 167.093 303.842 167.463C303.469 167.833 303.026 168.126 302.539 168.324C302.052 168.522 301.53 168.623 301.005 168.619H286.658C286.658 168.619 286.658 168.843 286.658 168.927V178.683C286.658 179.828 286.202 180.926 285.391 181.736C284.58 182.545 283.481 183 282.334 183H255.325C254.183 182.993 253.09 182.535 252.285 181.726C251.481 180.917 251.029 179.823 251.029 178.683V168.619H93.9708V178.683C93.9708 179.823 93.5192 180.917 92.7144 181.726C91.9096 182.535 90.817 182.993 89.6752 183H62.5817C61.4398 182.993 60.3472 182.535 59.5424 181.726C58.7377 180.917 58.286 179.823 58.286 178.683V168.619H43.4337C42.8985 168.638 42.3649 168.549 41.8649 168.357C41.3648 168.166 40.9086 167.875 40.5234 167.504C40.1382 167.132 39.8319 166.687 39.6228 166.195C39.4138 165.702 39.3062 165.173 39.3065 164.638ZM283.569 93.1259C283.612 93.4797 283.612 93.8374 283.569 94.1912V119.813C283.569 120.34 283.465 120.861 283.264 121.348C283.062 121.834 282.766 122.276 282.393 122.648C282.02 123.02 281.578 123.316 281.091 123.517C280.604 123.718 280.082 123.822 279.554 123.822H65.4735C64.4087 123.822 63.3875 123.4 62.6345 122.648C61.8816 121.896 61.4586 120.877 61.4586 119.813V94.8359C60.0492 90.8649 58.4278 86.9721 56.6014 83.1742C54.999 79.8642 53.1207 76.6946 50.9862 73.699C47.0072 68.1487 41.286 64.0839 34.7301 62.1494C30.3641 60.8159 25.7383 60.5658 21.2535 61.4205C17.4926 62.1064 14.066 64.0192 11.5111 66.8589C9.28291 69.5739 8.04535 72.9645 8.00158 76.4743C7.98818 77.9613 8.12932 79.4456 8.42272 80.9035C8.93203 84.1611 10.4775 87.1686 12.8307 89.4816C15.7192 92.0564 19.459 93.4742 23.3312 93.4623C25.5794 93.5273 27.8283 93.3582 30.0414 92.9577C30.8831 92.8168 31.7478 92.9474 32.5102 93.3305C33.2725 93.7136 33.8928 94.3293 34.2809 95.0882C41.2999 108.937 40.4576 118.832 39.4469 130.69C39.0538 134.979 38.6888 139.549 38.6888 144.707C38.6888 150.65 40.4857 152.136 42.1703 153.509C44.6929 155.164 46.4821 157.723 47.1678 160.658H297.607C298.293 157.723 300.082 155.164 302.605 153.509C304.289 152.136 306.086 150.706 306.086 144.707C306.086 139.577 305.721 135.007 305.328 130.69C304.346 118.888 303.503 109.021 310.382 95.2845C310.722 94.5334 311.283 93.9032 311.99 93.4777C312.697 93.0521 313.517 92.8512 314.341 92.9017H315.745H316.25C320.196 93.83 324.339 93.4054 328.014 91.6962C330.254 90.5239 332.18 88.8319 333.629 86.7624C335.12 84.6535 336.152 82.2568 336.661 79.7261C337.444 76.109 337.009 72.3352 335.426 68.9894C334.514 67.1273 333.189 65.4974 331.551 64.2238C327.979 61.6557 323.654 60.3443 319.254 60.4954C314.122 60.5527 309.071 61.78 304.486 64.0836C300.715 65.9521 297.407 68.633 294.8 71.9329C292.407 75.0727 290.32 78.4332 288.567 81.9688C286.736 85.6114 285.114 89.3552 283.71 93.182L283.569 93.1259ZM69.4603 98.1158V115.721H275.792V98.1158C242.494 98.5924 209.111 98.7606 175.841 99.6576H172.247L163.319 99.4334L69.4603 98.1158ZM168.26 8.15763V7.98943H73.6156C63.8277 8.01892 54.4482 11.9104 47.5218 18.8157C40.5954 25.721 36.6837 35.0801 36.6393 44.8529V54.3842L37.0885 54.5244C45.3411 56.9675 52.543 62.0869 57.556 69.0735C59.9188 72.4306 62.0034 75.9745 63.7889 79.67C65.3331 82.8658 66.8492 86.3699 68.2811 90.2385C101.579 90.7431 135.018 90.8833 168.288 91.7803C168.274 91.575 168.274 91.3689 168.288 91.1636V8.15763H168.26ZM176.234 7.98943V91.1636C176.249 91.3689 176.249 91.575 176.234 91.7803C209.504 90.8833 242.943 90.7431 276.241 90.2385C277.733 86.2304 279.448 82.3089 281.379 78.4927C283.37 74.5294 285.749 70.7733 288.483 67.2794C291.858 63.1049 296.114 59.7259 300.948 57.3837C302.922 56.4057 304.968 55.581 307.069 54.9168V44.8529C307.025 35.0801 303.113 25.721 296.186 18.8157C289.26 11.9104 279.881 8.01892 270.093 7.98943H176.234Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_973_17">
                  <rect width="345" height="183" fill="white" />
                </clipPath>
              </defs>
            </svg>
  
            <span class="mx-2">Single Chair</span>
          </dd>
        </dl>
        <p class="col-start-1 mt-4 text-sm leading-6 dark:text-slate-400">Perfect for your business trip, Bethany’s contains two twin XL beds that, when put together, form a king bed. The room has a private bath with a shower.</p>
        <div class="col-start-1 row-start-3 mt-4 self-center">

          <div class="price flex justify-between">
              <p>Room only</p>
              <p className='text-red-400'><strong>$115.60 (+tax)</strong></p>
            </div>
            <div className='border-top border-secondary'></div>
            <div class="price flex justify-between pt-2">
              <p>Room with breakfast</p>
              <p className='text-red-400'><strong>$136 (+tax)</strong></p>
            </div>


          {/* <button type="button" class="rounded-lg bg-black px-3 py-2 text-sm font-medium leading-6 text-white">Check Availability</button> */}
          <span className="flex justify-center lg:justify-start">
          <Link to="/roomfour"> <button class="mt-3 rounded-lg bg-red-400 hover:bg-red-500 p-1 px-3 text-white  py-2">View Details</button></Link>
          </span>
        </div>
      </div>
    </div>
    <div className="px-4 py-6 item">
      <div class="mx-auto grid max-w-4xl grid-cols-1">
        <div class="relative col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 p-3">
          <h1 class="mt-1 text-3xl font-semibold text-white">Deanna's Room</h1>
          <p class="text-xl font-medium leading-4 text-white">Room #5</p>
        </div>
        <div class="col-start-1 col-end-3 row-start-1 grid gap-4">
          <img src={R5} alt="" class="h-60 w-full rounded-lg object-cover" loading="lazy" />
        </div>
        <dl class="row-start-2 mt-4 grid grid-cols-2 text-xs font-medium">
          <dt class="sr-only">Reviews</dt>
          <dd class="flex items-center">
          <svg width="30px" height="30px" viewBox="0 0 223 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.1573 2.30785e-05H192.838C197.921 2.30785e-05 202.547 2.09179 205.887 5.44824C209.232 8.80907 211.314 13.4608 211.314 18.5634V103.836C212.847 104.886 214.267 106.054 215.552 107.341L215.84 107.66C220.265 112.242 223 118.185 223 125.274V195.077C223 197.794 220.805 200 218.1 200H209.502C207.198 200 205.265 198.398 204.742 196.241C201.645 187.362 198.592 182.246 194.533 179.529C190.391 176.763 184.585 176.072 176.14 176.08L39.5781 176.282C33.5981 176.146 29.7522 177.84 27.0126 180.907C23.881 184.412 21.712 189.913 19.4951 196.617C18.8243 198.674 16.9123 199.978 14.8696 199.978L4.8999 200C2.19516 200 0 197.794 0 195.077V122.946C0 116.307 2.60893 110.794 6.79453 106.584L7.11684 106.291C8.49316 104.952 10.035 103.757 11.7031 102.711L11.6814 18.3796C11.6814 13.2814 13.7676 8.68654 17.1213 5.36072C20.5944 1.91867 25.2789 -0.00769089 30.1573 2.30785e-05ZM10.0786 143.667L9.79545 143.658V190.158H11.3896C13.637 183.809 16.1022 178.452 19.739 174.374C24.3993 169.153 30.5623 166.278 39.7654 166.484L176.14 166.278C186.488 166.269 193.853 167.284 199.925 171.345C205.386 174.999 209.337 180.807 212.908 190.158H213.205V143.658L212.917 143.667H10.0786ZM9.79545 133.834L10.0786 133.825H212.917L213.205 133.834V125.274C213.205 120.959 211.545 117.336 208.867 114.531L208.623 114.303C206.48 112.15 203.736 110.457 200.648 109.275C195.081 108.08 189.646 106.991 184.323 106.002C178.317 105.061 172.494 104.221 166.823 103.481C166.124 103.605 165.406 103.574 164.719 103.389L162.524 102.934C143.744 100.624 126.522 99.4508 109.47 99.4377C99.0129 99.4289 88.5815 99.8578 77.8496 100.724C58.9513 102.619 39.3081 106.015 17.6353 110.846C17.4306 110.89 17.2215 110.925 17.0212 110.942C15.8975 111.638 14.8609 112.426 13.9506 113.301L13.7241 113.546C11.3024 115.975 9.79545 119.148 9.79545 122.946V133.834ZM23.9943 98.068C33.7941 96.3132 43.1148 94.8384 52.1263 93.6306L52.1132 73.9295C52.1132 67.3216 54.8049 61.3045 59.1342 56.9591L59.4565 56.6659C63.7641 52.4867 69.6091 49.9092 76.0247 49.9092H146.975C153.556 49.9092 159.536 52.6136 163.861 56.9635C168.191 61.3133 170.887 67.326 170.887 73.9295V93.7794C175.665 94.5146 180.521 95.3329 185.469 96.2431C189.128 96.8164 192.847 97.4247 196.645 98.068C198.304 98.3524 199.933 98.7331 201.519 99.2101V18.5634C201.519 16.1784 200.534 13.9947 198.962 12.4106C197.39 10.8308 195.216 9.84183 192.838 9.84183H30.1573C27.7313 9.84183 25.5361 10.8002 23.9681 12.3581C22.4307 13.8809 21.4812 16.0077 21.4812 18.3796V98.6106C22.3087 98.4049 23.1493 98.2211 23.9943 98.068ZM114.052 89.0314C127.093 89.0926 139.832 89.8103 151.13 91.2019C154.419 91.5476 157.742 91.9458 161.087 92.3834V73.9295C161.087 70.0436 159.493 66.4946 156.932 63.9214C154.375 61.3527 150.847 59.751 146.975 59.751H76.0247C72.2572 59.751 68.8208 61.252 66.2815 63.6807L66.0594 63.9214C63.5027 66.4902 61.913 70.0392 61.913 73.9295V92.3747C77.9193 90.0772 96.2689 88.9438 114.052 89.0314Z" fill="black"/>
</svg>
            <span class="mx-2">Queen Size Bed</span>
          </dd>
          <dt class="sr-only">Location</dt>
          <dd class="mx-3 flex items-center">
            <svg width="30" height="30" viewBox="0 0 276 164" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M218.163 136.951C225.463 136.951 231.37 138.207 231.37 139.754C231.37 141.302 225.463 142.558 218.163 142.558C210.863 142.558 204.956 141.302 204.956 139.754C204.956 138.207 210.863 136.951 218.163 136.951ZM56.332 33.0377V159.335C56.332 160.636 55.793 161.802 54.9619 162.654C54.1084 163.507 52.9404 164.022 51.6377 164.022H29.3564C28.0762 164.022 26.9082 163.507 26.0547 162.654C25.2012 161.802 24.6846 160.636 24.6846 159.357V33.0377H6.64844C4.80664 33.0377 3.14453 32.2976 1.9541 31.0864C0.741211 29.8753 0 28.2155 0 26.3988V6.63895C0 4.79978 0.741211 3.14004 1.9541 1.95131C3.16699 0.762582 4.80664 0 6.64844 0H269.352C271.193 0 272.855 0.740153 274.046 1.95131C275.236 3.16247 276 4.82221 276 6.63895V26.3988C276 28.238 275.259 29.8977 274.046 31.0864C272.833 32.2976 271.171 33.0377 269.352 33.0377H268.925V159.335C268.925 160.613 268.386 161.78 267.555 162.632L267.532 162.654C266.679 163.507 265.511 164.022 264.23 164.022H173.354C172.051 164.022 170.883 163.507 170.029 162.654C169.872 162.497 169.737 162.34 169.603 162.161C168.996 161.376 168.637 160.389 168.637 159.335V33.0377H56.332ZM176.408 68.7221H261.176V33.0377H176.408V68.7221ZM261.176 76.4601H176.408V112.817H261.176V76.4601ZM261.176 120.555H176.408V156.284H261.176V120.555ZM268.251 7.73796H7.74902V25.2998H268.251V7.73796ZM48.583 33.0377H32.3887V156.262H48.583V33.0377ZM218.163 47.7062C225.463 47.7062 231.37 48.895 231.37 50.3753C231.37 51.8556 225.463 53.0443 218.163 53.0443C210.863 53.0443 204.956 51.8556 204.956 50.3753C204.956 48.895 210.863 47.7062 218.163 47.7062ZM218.163 92.25C225.463 92.25 231.37 93.506 231.37 95.0536C231.37 96.6012 225.463 97.8572 218.163 97.8572C210.863 97.8572 204.956 96.6012 204.956 95.0536C204.956 93.506 210.863 92.25 218.163 92.25Z" fill="black" />
            </svg>
  
            <span class="mx-2">Working Desk</span>
          </dd>
          <dt class="sr-only">Reviews</dt>
          <dd class="flex items-center">
          <svg width="30px" height="30px" viewBox="0 0 257 178" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M135.109 116.604L135.402 116.185C137.033 113.856 140.254 113.29 142.555 114.926L182.167 142.719C184.489 144.355 185.053 147.564 183.422 149.893L183.129 150.312C181.498 152.64 178.277 153.207 175.976 151.571L136.364 123.778C134.042 122.163 133.478 118.932 135.109 116.604ZM0 72.3453V177.979H30.5355V73.6877C38.1694 36.2251 59.6906 26.0099 88.5111 30.1841C75.523 52.8588 77.2171 75.9111 95.6012 99.4249C93.2587 103.263 93.4469 107.417 96.0404 111.864L101.792 118.513C104.093 120.862 106.958 121.051 110.639 118.072L198.711 28.8626C201.095 25.9889 200.614 23.4928 197.832 21.3113C191.6 13.6342 190.805 12.3128 179.678 14.2006C154.999 -1.90879 131.47 -4.78246 109.321 7.99175C53.7508 -14.9137 6.42082 13.865 0 72.3453ZM184.928 73.6667L185.221 73.2472C186.852 70.9189 190.052 70.3526 192.374 71.9887L231.986 99.8025C234.308 101.439 234.872 104.669 233.241 106.976L232.948 107.396C231.317 109.724 228.117 110.29 225.795 108.654L186.204 80.8404C183.882 79.2043 183.317 75.9741 184.928 73.6667ZM207.746 50.6773L208.039 50.2578C209.67 47.9295 212.891 47.3632 215.191 48.9993L254.804 76.8131C257.125 78.4492 257.69 81.6795 256.059 83.9868L255.766 84.4063C254.135 86.7346 250.914 87.301 248.613 85.6649L209.001 57.851C206.7 56.2149 206.115 52.9847 207.746 50.6773ZM162.256 95.901L162.549 95.4815C164.181 93.1532 167.401 92.5868 169.702 94.2229L209.314 122.037C211.636 123.673 212.201 126.882 210.59 129.21L210.297 129.63C208.666 131.958 205.445 132.525 203.145 130.889L163.511 103.075C161.211 101.439 160.646 98.2293 162.256 95.901Z" fill="black"/>
</svg>
            <span class="mx-2">Shower</span>
          </dd>
          <dt class="sr-only">Location</dt>
          <dd class="mx-3 flex items-center">
            <svg width="30" height="30" viewBox="0 0 345 183" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_973_17)">
                <path d="M39.3065 164.638C39.3725 163.698 39.1924 162.756 38.7839 161.906C38.3754 161.055 37.7524 160.326 36.9762 159.789C33.8878 157.294 30.5467 154.546 30.5467 144.819C30.5467 139.437 30.9398 134.671 31.3329 130.186C32.1752 120.318 32.8771 111.936 28.2445 101.396C26.4536 101.574 24.6525 101.631 22.8539 101.564C17.0486 101.471 11.4812 99.2452 7.21544 95.3125C3.58653 91.8242 1.20033 87.2462 0.421009 82.2771C0.0554195 80.2523 -0.0858121 78.1935 -0.000133367 76.1379C0.104021 70.8408 2.01561 65.7379 5.41857 61.6728C9.13466 57.479 14.1425 54.6387 19.6532 53.5993C22.5801 53.0057 25.5736 52.8077 28.5533 53.0106V44.8529C28.6124 32.9754 33.3642 21.6011 41.7759 13.2023C50.1876 4.80344 61.5794 0.0589469 73.4752 0L270.008 0C281.904 0.0589469 293.296 4.80344 301.708 13.2023C310.12 21.6011 314.871 32.9754 314.93 44.8529V52.9825C316.319 52.8247 317.716 52.7499 319.114 52.7583C325.293 52.5752 331.354 54.4708 336.324 58.1406C338.933 60.146 341.054 62.7143 342.529 65.6535C344.9 70.5782 345.561 76.1505 344.41 81.4922C343.672 85.1331 342.18 88.58 340.03 91.6121C337.776 94.7569 334.789 97.3066 331.327 99.0409C326.635 101.297 321.359 102.051 316.222 101.199C311.561 111.768 312.263 120.15 313.105 130.046C313.498 134.531 313.892 139.296 313.892 144.679C313.892 154.406 310.55 157.154 307.462 159.648C306.643 160.184 305.985 160.93 305.555 161.809C305.125 162.687 304.94 163.664 305.019 164.638C305.019 165.163 304.915 165.683 304.713 166.168C304.511 166.653 304.215 167.093 303.842 167.463C303.469 167.833 303.026 168.126 302.539 168.324C302.052 168.522 301.53 168.623 301.005 168.619H286.658C286.658 168.619 286.658 168.843 286.658 168.927V178.683C286.658 179.828 286.202 180.926 285.391 181.736C284.58 182.545 283.481 183 282.334 183H255.325C254.183 182.993 253.09 182.535 252.285 181.726C251.481 180.917 251.029 179.823 251.029 178.683V168.619H93.9708V178.683C93.9708 179.823 93.5192 180.917 92.7144 181.726C91.9096 182.535 90.817 182.993 89.6752 183H62.5817C61.4398 182.993 60.3472 182.535 59.5424 181.726C58.7377 180.917 58.286 179.823 58.286 178.683V168.619H43.4337C42.8985 168.638 42.3649 168.549 41.8649 168.357C41.3648 168.166 40.9086 167.875 40.5234 167.504C40.1382 167.132 39.8319 166.687 39.6228 166.195C39.4138 165.702 39.3062 165.173 39.3065 164.638ZM283.569 93.1259C283.612 93.4797 283.612 93.8374 283.569 94.1912V119.813C283.569 120.34 283.465 120.861 283.264 121.348C283.062 121.834 282.766 122.276 282.393 122.648C282.02 123.02 281.578 123.316 281.091 123.517C280.604 123.718 280.082 123.822 279.554 123.822H65.4735C64.4087 123.822 63.3875 123.4 62.6345 122.648C61.8816 121.896 61.4586 120.877 61.4586 119.813V94.8359C60.0492 90.8649 58.4278 86.9721 56.6014 83.1742C54.999 79.8642 53.1207 76.6946 50.9862 73.699C47.0072 68.1487 41.286 64.0839 34.7301 62.1494C30.3641 60.8159 25.7383 60.5658 21.2535 61.4205C17.4926 62.1064 14.066 64.0192 11.5111 66.8589C9.28291 69.5739 8.04535 72.9645 8.00158 76.4743C7.98818 77.9613 8.12932 79.4456 8.42272 80.9035C8.93203 84.1611 10.4775 87.1686 12.8307 89.4816C15.7192 92.0564 19.459 93.4742 23.3312 93.4623C25.5794 93.5273 27.8283 93.3582 30.0414 92.9577C30.8831 92.8168 31.7478 92.9474 32.5102 93.3305C33.2725 93.7136 33.8928 94.3293 34.2809 95.0882C41.2999 108.937 40.4576 118.832 39.4469 130.69C39.0538 134.979 38.6888 139.549 38.6888 144.707C38.6888 150.65 40.4857 152.136 42.1703 153.509C44.6929 155.164 46.4821 157.723 47.1678 160.658H297.607C298.293 157.723 300.082 155.164 302.605 153.509C304.289 152.136 306.086 150.706 306.086 144.707C306.086 139.577 305.721 135.007 305.328 130.69C304.346 118.888 303.503 109.021 310.382 95.2845C310.722 94.5334 311.283 93.9032 311.99 93.4777C312.697 93.0521 313.517 92.8512 314.341 92.9017H315.745H316.25C320.196 93.83 324.339 93.4054 328.014 91.6962C330.254 90.5239 332.18 88.8319 333.629 86.7624C335.12 84.6535 336.152 82.2568 336.661 79.7261C337.444 76.109 337.009 72.3352 335.426 68.9894C334.514 67.1273 333.189 65.4974 331.551 64.2238C327.979 61.6557 323.654 60.3443 319.254 60.4954C314.122 60.5527 309.071 61.78 304.486 64.0836C300.715 65.9521 297.407 68.633 294.8 71.9329C292.407 75.0727 290.32 78.4332 288.567 81.9688C286.736 85.6114 285.114 89.3552 283.71 93.182L283.569 93.1259ZM69.4603 98.1158V115.721H275.792V98.1158C242.494 98.5924 209.111 98.7606 175.841 99.6576H172.247L163.319 99.4334L69.4603 98.1158ZM168.26 8.15763V7.98943H73.6156C63.8277 8.01892 54.4482 11.9104 47.5218 18.8157C40.5954 25.721 36.6837 35.0801 36.6393 44.8529V54.3842L37.0885 54.5244C45.3411 56.9675 52.543 62.0869 57.556 69.0735C59.9188 72.4306 62.0034 75.9745 63.7889 79.67C65.3331 82.8658 66.8492 86.3699 68.2811 90.2385C101.579 90.7431 135.018 90.8833 168.288 91.7803C168.274 91.575 168.274 91.3689 168.288 91.1636V8.15763H168.26ZM176.234 7.98943V91.1636C176.249 91.3689 176.249 91.575 176.234 91.7803C209.504 90.8833 242.943 90.7431 276.241 90.2385C277.733 86.2304 279.448 82.3089 281.379 78.4927C283.37 74.5294 285.749 70.7733 288.483 67.2794C291.858 63.1049 296.114 59.7259 300.948 57.3837C302.922 56.4057 304.968 55.581 307.069 54.9168V44.8529C307.025 35.0801 303.113 25.721 296.186 18.8157C289.26 11.9104 279.881 8.01892 270.093 7.98943H176.234Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_973_17">
                  <rect width="345" height="183" fill="white" />
                </clipPath>
              </defs>
            </svg>
  
            <span class="mx-2">Single Chair</span>
          </dd>
        </dl>
        <p class="col-start-1 mt-4 text-sm leading-6 dark:text-slate-400">The standard queen room, Deanna’s, is well-appointed and features cable TV, a queen-size bed, and a private bath with a shower.</p>
        <div class="col-start-1 row-start-3 mt-4 self-center">

          <div class="price flex justify-between">
              <p>Room only</p>
              <p className='text-red-400'><strong>$113.90 (+tax)</strong></p>
            </div>
            <div className='border-top border-secondary'></div>
            <div class="price flex justify-between pt-2">
              <p>Room with breakfast</p>
              <p className='text-red-400'><strong>$134 (+tax)</strong></p>
            </div>


          {/* <button type="button" class="rounded-lg bg-black px-3 py-2 text-sm font-medium leading-6 text-white">Check Availability</button>
          <Link to="/roomfive"> <button class="mt-3 rounded-lg bg-red-400 hover:bg-red-500 p-1 px-3 text-white py-2"><strong>View Details</strong></button></Link>
         */}
          <span className="flex justify-center lg:justify-start">
          <Link to="/roomfive"> <button class="mt-3 rounded-lg bg-red-400 hover:bg-red-500 p-1 px-3 text-white py-2">View Details</button></Link>
          </span>
        </div>
      </div>
    </div>
  </div> 
    {/* This is the end of Room Section */}
    {/* This is the start of Reviews Section */}
    <div className="bg-white py-20 sm:py-20">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-full lg:mx-0 w-full">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl text-center">Reviews</h2> 
      </div>
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
            <div className="flex items-center gap-x-4 text-xs">
              {/* <time dateTime={post.datetime} className="text-gray-500">
                {post.date}
              </time> */}
              {/* <a
                href={post.category.href}
                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              >
                {post.category.title}
              </a> */}
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <p href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </p>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4">
              {/* <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" /> */}
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                  <p href={post.author.href}>
                    <span className="absolute inset-0" />
                    {post.author.name}
                  </p>
                </p>
                {/* <p className="text-gray-600">{post.author.role}</p> */}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
    {/* This is the end of Reviews Section */}
    {/* This is the start of Explore Sectino */}
    <div className="overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Exploring Windsor</h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600 mb-6">
                  If you love history and architecture, you will be amazed by the Walker mansion, Willistead Manor, 
                  which is just a block away from our B&B. This stunning park and venue hosts many special events throughout
                  the year. You can also admire the other grand homes in the neighborhood as you stroll around the <strong>“Ye Olde Walkerville”</strong>.
                  </p>

                  <p className="mt-6 text-lg leading-8 text-gray-600 mb-6">
                  For a more urban experience, you can visit Ottawa Street, where you will find a variety of upscale shops,
                  cafes, bars, and restaurants to suit your taste and budget..
                  </p>

                  <p className="mt-6 text-lg leading-8 text-gray-600 mb-6">
                  Whatever you are looking for, we are here to help you discover the best of Windsor. Click here to view
                  a list of helpful links to attractions in and around the Windsor, Ontario area.
                  </p>
                  <span className="flex justify-center lg:justify-start">
                  <Link to="/explore" ><button class="mt-3 rounded-lg bg-red-400 hover:bg-red-500 py-2 px-3 text-white">View Details</button></Link>
                  </span>
                </div>
              </div>
              <img
                  src={home_exploringWindsor}
                  alt="Product screenshot"
                  className="w-100 h-100 max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
                  width={500}
                  height={500}
              />
            </div>
          </div>
        </div>
    {/* This is the end of Explore Section */}
    {/* This is the start of Maps Section */}
    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl text-center my-10">Get Directions</h2> 
    <div style={{ width: '100%' }}>
        <iframe
            width="100%"
            height="400"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=1104%20Monmouth%20Rd,%20Windsor,%20ON%20N8Y%203L8+(Ye%20Olde%20Walkerville%20Bed%20&amp;%20Breakfast%20-%20Windsor)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
</div>

    {/* This is the end of Maps Section */}
    {/* This is the start of Footer Section */}
    <div className="footer my-10">
        <div class="flex gap-14 justify-center items-center flex-wrap">
  <div class="w-60">
    <img src={Logo} alt="" />
  </div>
  <div class="w-60 flex flex-col gap-6 justify-center">
  <div class="first-line flex gap-2">
  <svg width="50px" height="50px" viewBox="0 0 289 277" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M185.352 195.066C175.122 206.307 163.198 216.392 149.792 224.545C148.145 225.747 145.911 225.912 144.077 224.734C124.297 212.127 107.669 196.975 94.6165 180.527C76.601 157.882 65.2414 132.762 61.3608 108.585C57.4096 84.0543 61.1021 60.4663 73.2848 41.2848C78.0827 33.697 84.2211 26.7927 91.7001 20.8309C108.892 7.09279 128.531 -0.141489 148.075 -0.000102747C166.913 0.141284 185.493 7.18705 201.557 21.8677C207.201 27.0047 211.952 32.8959 215.833 39.2818C228.933 60.8904 231.755 88.4608 225.993 116.408C220.325 144.002 206.214 172.067 185.352 194.996V195.066ZM59.5498 175.649C64.2065 175.649 67.9931 179.443 67.9931 184.109C67.9931 188.775 64.2065 192.569 59.5498 192.569H43.6981L22.8133 260.128H265.575L242.903 192.569H229.803C225.146 192.569 221.36 188.775 221.36 184.109C221.36 179.443 225.146 175.649 229.803 175.649H254.968L288.977 277H0L31.3272 175.649H59.5498ZM144.359 43.6177C167.596 43.6177 186.411 62.4928 186.411 85.7273C186.411 109.009 167.572 127.861 144.359 127.861C121.122 127.861 102.331 109.009 102.331 85.7273C102.284 62.4692 121.122 43.6177 144.359 43.6177Z" fill="black"/>
</svg>

      <p>1104 Monmouth Rd., Windsor, ON N8Y 3L8</p>
    </div>
    <div class="first-line flex gap-2">
    <svg width="30px" height="30px" viewBox="0 0 212 205" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M58.3518 84.3209C65.4892 96.7986 73.7032 108.807 84.3584 119.754C95.0619 130.753 108.315 140.776 125.549 149.273L125.566 149.281L125.57 149.273C126.826 149.895 128.021 149.88 129.144 149.471C130.773 148.879 132.469 147.564 134.118 145.973C135.376 144.756 136.953 142.747 138.658 140.569C145.293 132.096 153.497 121.622 165.078 126.833C165.323 126.942 165.554 127.069 165.772 127.212L204.371 148.76C204.509 148.837 204.642 148.919 204.768 149.006C209.885 152.42 211.974 157.678 211.997 163.565C212.021 169.636 209.704 176.432 206.348 182.177C201.923 189.751 195.329 194.756 187.783 198.148C180.588 201.38 172.604 203.1 164.894 204.197C152.836 205.916 141.468 204.824 129.891 201.36C118.591 197.978 107.159 192.331 94.6962 184.828L93.7887 184.282C88.0505 180.828 81.874 177.112 75.865 172.706C53.6695 156.426 31.0668 132.931 16.4107 107.145C4.07341 85.4393 -2.67753 62.0281 1.00245 39.7051C3.01928 27.4554 8.45557 16.3358 17.8272 8.97024C26.0429 2.51007 37.1294 -0.989112 51.3801 0.246586C53.0587 0.387425 54.4734 1.31797 55.2705 2.62576L55.2809 2.62073L79.9935 43.3132C83.6338 47.8704 84.0375 52.3923 82.069 56.8875C80.4421 60.6063 77.0795 64.0149 72.6215 67.2291C71.2654 68.3189 69.6747 69.4507 68.034 70.6176C62.5166 74.5427 56.2056 79.0311 58.3518 84.3209ZM77.0675 126.457C65.6738 114.751 56.9941 102.075 49.5064 88.972C49.3753 88.7658 49.258 88.5478 49.1579 88.3181C43.6819 75.8119 53.5056 68.8269 62.0853 62.7289C63.5431 61.6928 64.9544 60.6884 66.2276 59.6623L66.2311 59.6674C66.3053 59.607 66.3829 59.5483 66.464 59.4913C69.6437 57.2211 71.9348 55.0532 72.8095 53.058C73.3081 51.9195 73.1235 50.6671 72.0055 49.2603C71.814 49.0441 71.6381 48.806 71.4828 48.5511L47.9537 9.81192C37.8281 9.40785 29.9782 12.0268 24.1727 16.5923C16.8593 22.3416 12.5738 31.2782 10.933 41.2375C7.64643 61.1797 13.8936 82.4733 25.2389 102.436C39.1756 126.953 60.7361 149.343 81.9379 164.891C87.7675 169.167 93.6282 172.693 99.0732 175.969L99.9806 176.515C111.743 183.596 122.438 188.899 132.85 192.014C142.988 195.047 152.922 196.005 163.437 194.506C170.354 193.522 177.434 192.016 183.568 189.26C189.349 186.661 194.347 182.913 197.601 177.349C200.182 172.927 201.966 167.871 201.95 163.563C201.94 160.83 201.136 158.485 199.181 157.118L160.794 135.692C156.548 133.88 151.083 140.858 146.659 146.507C144.755 148.941 142.993 151.188 141.214 152.906C138.666 155.364 135.835 157.472 132.654 158.625C128.968 159.965 125.071 160.024 121 158.005L121.003 157.998C102.691 148.97 88.5456 138.252 77.0675 126.457Z" fill="black"/>
</svg>
      <p>(519) 254-1507</p>
    </div>
    
    {/* <div class="first-line flex gap-2">
    <svg width="30px" height="30px" viewBox="0 0 265 277" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M229.995 69.5713L175.34 12.9403V12.3767H27.9456V103.703L104.88 172.688L105.218 173.004L131.185 196.269L236.043 104.515V81.9705L230.107 69.5938L229.995 69.5713ZM144.022 64.1156L144.225 63.1913L145.484 57.6229H160.839L152.003 99.4197C151.846 100.164 151.689 100.84 151.576 101.449C151.36 102.504 151.225 103.574 151.172 104.65C151.132 105.411 151.363 106.162 151.824 106.769C152.029 106.997 152.278 107.181 152.556 107.309C152.835 107.437 153.136 107.506 153.442 107.513C155.533 107.513 158.254 106.138 161.559 103.41C165.159 100.264 168.101 96.4327 170.214 92.1379C172.445 87.7222 173.695 82.874 173.877 77.9274C174.06 72.9807 173.171 68.0532 171.271 63.4843C169.513 59.4028 166.907 55.7443 163.627 52.7533C160.019 49.583 155.814 47.1685 151.262 45.6519C145.891 43.8662 140.26 42.9974 134.602 43.0819C128.716 43.0294 122.857 43.8731 117.223 45.5843C112.223 47.1342 107.54 49.5699 103.397 52.7759C99.3502 55.9041 95.9517 59.7943 93.3919 64.2283C90.9753 68.3359 89.1582 72.7695 87.9961 77.3941C86.746 82.2081 86.1188 87.1634 86.1301 92.1379C86.0263 98.4687 87.3723 104.739 90.0645 110.466C92.6962 116.005 96.669 120.795 101.62 124.399C107.095 128.35 113.351 131.079 119.966 132.402C127.96 133.994 136.154 134.313 144.247 133.349C150.542 132.75 156.695 131.113 162.458 128.502C167.405 126.151 171.738 122.678 175.115 118.357H187.503C185.534 122.533 182.873 126.344 179.634 129.629C176.289 132.951 172.452 135.734 168.258 137.88C163.638 140.212 158.733 141.925 153.667 142.975C147.87 144.183 141.961 144.765 136.041 144.711C127.322 144.838 118.64 143.567 110.321 140.946C103.198 138.742 96.6228 135.046 91.0312 130.102C85.8491 125.445 81.7966 119.662 79.183 113.194C76.4589 106.294 75.1071 98.9269 75.2036 91.5067C75.1121 83.5231 76.5153 75.5931 79.3404 68.1284C81.96 61.0294 86.0637 54.5745 91.3761 49.1969C96.6886 43.8194 103.087 39.6436 110.141 36.9499C118.019 33.8675 126.416 32.3366 134.872 32.441C141.751 32.3655 148.594 33.4633 155.106 35.6874C160.942 37.7008 166.299 40.9014 170.844 45.0883C175.194 49.0954 178.623 54.0032 180.893 59.4715C183.226 65.2567 184.395 71.4473 184.333 77.6871C184.334 82.9094 183.39 88.0884 181.545 92.9721C179.716 97.9295 177.004 102.513 173.542 106.499C170.137 110.437 165.978 113.65 161.311 115.945C156.589 118.295 151.385 119.507 146.113 119.484C143.575 119.624 141.048 119.063 138.806 117.861C137.915 117.283 137.151 116.529 136.559 115.645C135.968 114.762 135.562 113.767 135.367 112.721C134.503 113.532 133.586 114.285 132.624 114.975C131.86 115.533 131.064 116.045 130.241 116.508C128.22 117.662 126.026 118.477 123.743 118.92C119.466 119.803 115.024 119.371 110.996 117.68C106.906 115.963 103.461 112.997 101.148 109.204C98.4917 104.742 97.1726 99.6082 97.3488 94.4149C97.3687 88.1937 98.702 82.0471 101.261 76.3796C103.745 70.6778 107.609 65.6876 112.502 61.8612C117.158 58.1498 122.944 56.1525 128.892 56.2026C131.822 56.0268 134.748 56.6256 137.375 57.9391C140.003 59.2525 142.241 61.2346 143.865 63.6872L144.135 64.1156H144.022ZM112.232 94.3022C111.986 98.1027 113.006 101.877 115.132 105.033C116.009 106.22 117.156 107.18 118.478 107.831C119.8 108.482 121.259 108.806 122.731 108.776C124.562 108.75 126.367 108.335 128.026 107.558C129.685 106.781 131.16 105.659 132.354 104.267C133.175 103.404 133.927 102.476 134.602 101.494C135.088 100.819 135.538 100.119 135.951 99.3972C137.073 97.4433 137.978 95.3719 138.649 93.2201C140.049 89.1082 140.808 84.8041 140.897 80.4601V80.3023C140.899 79.4288 140.854 78.5558 140.762 77.6871C140.654 76.6948 140.459 75.714 140.178 74.7564C139.703 73.1794 138.94 71.7042 137.93 70.4054C137.025 69.2232 135.854 68.2729 134.512 67.6325C133.099 66.9941 131.565 66.6711 130.016 66.6856C128.29 66.7023 126.585 67.0661 125.001 67.7554C123.418 68.4447 121.989 69.4454 120.798 70.6985C117.934 73.5645 115.792 77.0729 114.548 80.9335C113.07 85.1809 112.31 89.646 112.3 94.1444L112.232 94.3022ZM248.273 93.716C249.769 92.3567 251.718 91.6087 253.736 91.6194C255.374 91.639 256.976 92.1067 258.368 92.9721C259.437 93.616 260.394 94.4308 261.2 95.3843C263.497 98.0728 264.834 101.452 265 104.988V264.24C264.985 267.621 263.645 270.86 261.268 273.258C258.882 275.649 255.648 276.995 252.275 277H12.7251C9.35364 276.985 6.12339 275.641 3.73211 273.258C2.54617 272.077 1.60566 270.672 0.965038 269.124C0.324416 267.576 -0.00358532 265.916 2.95569e-05 264.24V104.988C0.168614 101.396 1.53873 97.9651 3.88948 95.249C4.71846 94.3624 5.67292 93.6028 6.72226 92.9946C8.07968 92.1683 9.63108 91.7172 11.2187 91.6871C12.8112 91.6612 14.3757 92.1083 15.7152 92.9721V6.1771C15.715 4.55433 16.3517 2.99668 17.4876 1.84081C18.6235 0.684933 20.1673 0.02369 21.7855 0L177.364 0C178.268 0.000796693 179.161 0.203524 179.978 0.593468C180.794 0.983412 181.514 1.55079 182.085 2.25442L246.497 68.9626C247.619 70.1043 248.249 71.6427 248.251 73.246V75.0269C248.251 75.2749 248.251 75.5229 248.251 75.7934C248.251 76.064 248.251 76.2894 248.251 76.5374V93.7386L248.273 93.716ZM127.048 209.074L100.923 185.674L12.3204 263.541V264.24C12.2817 264.334 12.2817 264.439 12.3204 264.533C12.4156 264.563 12.5175 264.563 12.6127 264.533H252.252C252.348 264.563 252.45 264.563 252.545 264.533C252.583 264.439 252.583 264.334 252.545 264.24V263.767L162.862 184.862L135.209 209.12C134.087 210.116 132.639 210.667 131.14 210.667C129.64 210.667 128.193 210.116 127.071 209.12L127.048 209.074ZM91.6832 177.513L12.3204 106.296V247.152L91.6832 177.4V177.513ZM252.657 247.535V106.228L172.193 176.724L252.657 247.422V247.535Z" fill="black"/>
    </svg>
      <p>yeolde@walkervillebb.com</p>

    </div> */}

      <div class="first-line flex gap-2">
          <svg width="30px" height="30px" viewBox="0 0 265 277" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M229.995 69.5713L175.34 12.9403V12.3767H27.9456V103.703L104.88 172.688L105.218 173.004L131.185 196.269L236.043 104.515V81.9705L230.107 69.5938L229.995 69.5713ZM144.022 64.1156L144.225 63.1913L145.484 57.6229H160.839L152.003 99.4197C151.846 100.164 151.689 100.84 151.576 101.449C151.36 102.504 151.225 103.574 151.172 104.65C151.132 105.411 151.363 106.162 151.824 106.769C152.029 106.997 152.278 107.181 152.556 107.309C152.835 107.437 153.136 107.506 153.442 107.513C155.533 107.513 158.254 106.138 161.559 103.41C165.159 100.264 168.101 96.4327 170.214 92.1379C172.445 87.7222 173.695 82.874 173.877 77.9274C174.06 72.9807 173.171 68.0532 171.271 63.4843C169.513 59.4028 166.907 55.7443 163.627 52.7533C160.019 49.583 155.814 47.1685 151.262 45.6519C145.891 43.8662 140.26 42.9974 134.602 43.0819C128.716 43.0294 122.857 43.8731 117.223 45.5843C112.223 47.1342 107.54 49.5699 103.397 52.7759C99.3502 55.9041 95.9517 59.7943 93.3919 64.2283C90.9753 68.3359 89.1582 72.7695 87.9961 77.3941C86.746 82.2081 86.1188 87.1634 86.1301 92.1379C86.0263 98.4687 87.3723 104.739 90.0645 110.466C92.6962 116.005 96.669 120.795 101.62 124.399C107.095 128.35 113.351 131.079 119.966 132.402C127.96 133.994 136.154 134.313 144.247 133.349C150.542 132.75 156.695 131.113 162.458 128.502C167.405 126.151 171.738 122.678 175.115 118.357H187.503C185.534 122.533 182.873 126.344 179.634 129.629C176.289 132.951 172.452 135.734 168.258 137.88C163.638 140.212 158.733 141.925 153.667 142.975C147.87 144.183 141.961 144.765 136.041 144.711C127.322 144.838 118.64 143.567 110.321 140.946C103.198 138.742 96.6228 135.046 91.0312 130.102C85.8491 125.445 81.7966 119.662 79.183 113.194C76.4589 106.294 75.1071 98.9269 75.2036 91.5067C75.1121 83.5231 76.5153 75.5931 79.3404 68.1284C81.96 61.0294 86.0637 54.5745 91.3761 49.1969C96.6886 43.8194 103.087 39.6436 110.141 36.9499C118.019 33.8675 126.416 32.3366 134.872 32.441C141.751 32.3655 148.594 33.4633 155.106 35.6874C160.942 37.7008 166.299 40.9014 170.844 45.0883C175.194 49.0954 178.623 54.0032 180.893 59.4715C183.226 65.2567 184.395 71.4473 184.333 77.6871C184.334 82.9094 183.39 88.0884 181.545 92.9721C179.716 97.9295 177.004 102.513 173.542 106.499C170.137 110.437 165.978 113.65 161.311 115.945C156.589 118.295 151.385 119.507 146.113 119.484C143.575 119.624 141.048 119.063 138.806 117.861C137.915 117.283 137.151 116.529 136.559 115.645C135.968 114.762 135.562 113.767 135.367 112.721C134.503 113.532 133.586 114.285 132.624 114.975C131.86 115.533 131.064 116.045 130.241 116.508C128.22 117.662 126.026 118.477 123.743 118.92C119.466 119.803 115.024 119.371 110.996 117.68C106.906 115.963 103.461 112.997 101.148 109.204C98.4917 104.742 97.1726 99.6082 97.3488 94.4149C97.3687 88.1937 98.702 82.0471 101.261 76.3796C103.745 70.6778 107.609 65.6876 112.502 61.8612C117.158 58.1498 122.944 56.1525 128.892 56.2026C131.822 56.0268 134.748 56.6256 137.375 57.9391C140.003 59.2525 142.241 61.2346 143.865 63.6872L144.135 64.1156H144.022ZM112.232 94.3022C111.986 98.1027 113.006 101.877 115.132 105.033C116.009 106.22 117.156 107.18 118.478 107.831C119.8 108.482 121.259 108.806 122.731 108.776C124.562 108.75 126.367 108.335 128.026 107.558C129.685 106.781 131.16 105.659 132.354 104.267C133.175 103.404 133.927 102.476 134.602 101.494C135.088 100.819 135.538 100.119 135.951 99.3972C137.073 97.4433 137.978 95.3719 138.649 93.2201C140.049 89.1082 140.808 84.8041 140.897 80.4601V80.3023C140.899 79.4288 140.854 78.5558 140.762 77.6871C140.654 76.6948 140.459 75.714 140.178 74.7564C139.703 73.1794 138.94 71.7042 137.93 70.4054C137.025 69.2232 135.854 68.2729 134.512 67.6325C133.099 66.9941 131.565 66.6711 130.016 66.6856C128.29 66.7023 126.585 67.0661 125.001 67.7554C123.418 68.4447 121.989 69.4454 120.798 70.6985C117.934 73.5645 115.792 77.0729 114.548 80.9335C113.07 85.1809 112.31 89.646 112.3 94.1444L112.232 94.3022ZM248.273 93.716C249.769 92.3567 251.718 91.6087 253.736 91.6194C255.374 91.639 256.976 92.1067 258.368 92.9721C259.437 93.616 260.394 94.4308 261.2 95.3843C263.497 98.0728 264.834 101.452 265 104.988V264.24C264.985 267.621 263.645 270.86 261.268 273.258C258.882 275.649 255.648 276.995 252.275 277H12.7251C9.35364 276.985 6.12339 275.641 3.73211 273.258C2.54617 272.077 1.60566 270.672 0.965038 269.124C0.324416 267.576 -0.00358532 265.916 2.95569e-05 264.24V104.988C0.168614 101.396 1.53873 97.9651 3.88948 95.249C4.71846 94.3624 5.67292 93.6028 6.72226 92.9946C8.07968 92.1683 9.63108 91.7172 11.2187 91.6871C12.8112 91.6612 14.3757 92.1083 15.7152 92.9721V6.1771C15.715 4.55433 16.3517 2.99668 17.4876 1.84081C18.6235 0.684933 20.1673 0.02369 21.7855 0L177.364 0C178.268 0.000796693 179.161 0.203524 179.978 0.593468C180.794 0.983412 181.514 1.55079 182.085 2.25442L246.497 68.9626C247.619 70.1043 248.249 71.6427 248.251 73.246V75.0269C248.251 75.2749 248.251 75.5229 248.251 75.7934C248.251 76.064 248.251 76.2894 248.251 76.5374V93.7386L248.273 93.716ZM127.048 209.074L100.923 185.674L12.3204 263.541V264.24C12.2817 264.334 12.2817 264.439 12.3204 264.533C12.4156 264.563 12.5175 264.563 12.6127 264.533H252.252C252.348 264.563 252.45 264.563 252.545 264.533C252.583 264.439 252.583 264.334 252.545 264.24V263.767L162.862 184.862L135.209 209.12C134.087 210.116 132.639 210.667 131.14 210.667C129.64 210.667 128.193 210.116 127.071 209.12L127.048 209.074ZM91.6832 177.513L12.3204 106.296V247.152L91.6832 177.4V177.513ZM252.657 247.535V106.228L172.193 176.724L252.657 247.422V247.535Z" fill="black"/>
          </svg>
          <a href="mailto:yeolde@walkervillebb.com">
              yeolde@walkervillebb.com
          </a>
      </div>

  </div>
</div>

<div class="flex my-3 items-center flex-col bg-slate-100 p-10">
  <div class="menu flex flex-wrap gap-5 p-14">
    <p><Link to="/room">BOOK A ROOM</Link></p>
    <p><Link to="/wedding">WEDDING & EVENTS</Link></p>
    <p><Link to="/story">OUR STORY</Link></p>
    <p><Link to="/explore">EXPLORING WINDSOR</Link></p>
    <p><Link to="/contact">CONTACT</Link></p>
  </div>
  <div class="copy text-center my-5">
    <p>© 1997-2024 </p>
    <p>Ye Olde Walkerville Bed & Breakfast.</p>
    <p>All rights reserved.</p>
  </div>
</div>
    </div>
    {/* This is the end of Footer Section */}
      </>
{/*     
    <Hero />
    <Awards />
    <About />
    <Feature />
    <Aminities />
    <Rooms />
    <Reviews />
    <Explore />
    <Maps />
    <Footer /> */}
    </div>
  )
}