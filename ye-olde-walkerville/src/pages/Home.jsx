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
import Logo from "../assests/img/Logo_YeOlde.png";
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
    title: '"Such a cute B&B. The location was prefect, prices were great, and decor was beautiful. This was put first stay out of the US, and it was so nice and special. Thank you for everything.',
    href: '#',
    // description:
    //   'Wow what a real pleasant surprise in getting to stay at this very well-preserved home. Our stay in the suite at the top was very comfortable and the breakfast was fantastic.',
    date: '2023',
    datetime: '2020-03-16',
    category: { title: 'Unknown', href: '#' },
    author: {
      name: '😇',
      role: '-',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 5,
    title: '"Thank You for everything. You have no idea how good make me stay here with you, I am greatfull. I wish you all the best."',
    href: '#',
    // description:
    //   'Wow what a real pleasant surprise in getting to stay at this very well-preserved home. Our stay in the suite at the top was very comfortable and the breakfast was fantastic.',
    date: '2023',
    datetime: '2020-03-16',
    category: { title: 'Unknown', href: '#' },
    author: {
      name: 'Isabel',
      role: '-',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 6,
    title: '"Thank you so much for making us feel like we were home. The Breakfast was Fabulous."',
    href: '#',
    // description:
    //   'Wow what a real pleasant surprise in getting to stay at this very well-preserved home. Our stay in the suite at the top was very comfortable and the breakfast was fantastic.',
    date: '2023',
    datetime: '2020-03-16',
    category: { title: 'Unknown', href: '#' },
    author: {
      name: 'Apul & Bay',
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
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 no-underline"
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
              
              

              <p className="mt-6 text-lg leading-8 text-gray-600 mb-6">At <strong>Ye Olde Walkerville Bed & Breakfast</strong>, we uphold the highest 
              standards of cleanliness, comfort, and quality in our facilities
              and equipment. We serve delicious and nutritious food and drinks,
              and we create a charming and elegant ambiance in our Bed & Breakfast facility. 
              Don’t wait, book your room today!  
              </p>
              <span className="flex justify-center lg:justify-start">
              <Link to="/story" ><button class="mt-3 rounded-lg bg-red-400 hover:bg-red-500 p-1 px-3 py-2 text-white">View Gallery</button></Link>
              </span>
            </div>
          </div>
          <img
            src={home_welcome}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
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
          <h2 className="order-first text-3xl font-semibold tracking-normal text-white sm:text-5xl">Morning delight</h2>
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
          <h1 class="mt-1 text-3xl font-semibold text-white">Samanth's Chamber</h1>
          <p class="text-xl font-medium leading-4 text-white">Room #1</p>
        </div>
        <div class="col-start-1 col-end-3 row-start-1 grid gap-4">
          <img src={R1} alt="" class="h-60 w-full rounded-lg object-cover" loading="lazy" />
        </div>
        <dl class="row-start-2 mt-4 grid grid-cols-2 text-xs font-medium">
          <dt class="sr-only">Reviews</dt>
          <dd class="flex items-center">
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
            <span class="mx-2">Spa Bath</span>
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
        <p class="col-start-1 mt-4 text-sm leading-6 dark:text-slate-400">Indulge in the epitome of opulence at Samantha's Suite, a lavish loft designed to elevate your stay to unparalleled heights. This expansive retreat boasts a vaulted ceiling, offering an airy and spacious ambiance that sets the stage for an unforgettable experience.</p>
        <div class="col-start-1 row-start-3 mt-4 self-center">
          {/* <button type="button" class="rounded-lg bg-black px-3 py-2 text-sm font-medium leading-6 text-white">Check Availability</button> */}
          <Link to="/roomone" ><button class="mt-3 rounded-lg bg-red-400 hover:bg-red-500 p-1 px-3 text-white py-2">View Details</button></Link>
        </div>
      </div>
    </div>
    <div className="px-4 py-6 item">
      <div class="mx-auto grid max-w-4xl grid-cols-1">
        <div class="relative col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 p-3">
          <h1 class="mt-1 text-3xl font-semibold text-white">Corrina's Chamber</h1>
          <p class="text-lx font-medium leading-4 text-white">Room #2</p>
        </div>
        <div class="col-start-1 col-end-3 row-start-1 grid gap-4">
          <img src={R2} alt="" class="h-60 w-full rounded-lg object-cover" loading="lazy" />
        </div>
        <dl class="row-start-2 mt-4 grid grid-cols-2 text-xs font-medium">
          <dt class="sr-only">Reviews</dt>
          <dd class="flex items-center">
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
            <span class="mx-2">Spa Bath</span>
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
        <p class="col-start-1 mt-4 text-sm leading-6 dark:text-slate-400">Step into a realm of luxury with Corrina's Chamber, a generously sized haven that redefines sophistication. This well-appointed room offers an indulgent experience, combining exquisite details with modern comforts.
</p>
        <div class="col-start-1 row-start-3 mt-4 self-center">
          {/* <button type="button" class="rounded-lg bg-black px-3 py-2 text-sm font-medium leading-6 text-white">Check Availability</button> */}
          <Link to="/roomtwo"> <button class="mt-3 rounded-lg bg-red-400 hover:bg-red-500 p-1 px-3 text-white  py-2">View Details</button></Link>
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
          <dd class="flex items-center">
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
            <span class="mx-2">Spa Bath</span>
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
        <p class="col-start-1 mt-4 text-sm leading-6 dark:text-slate-400">Welcome to Tyler's Chamber, an expansive retreat meticulously designed for those who seek the perfect blend of comfort and sophistication. This well-appointed haven goes beyond the ordinary, offering a haven of tranquility with every detail crafted to enhance your stay.</p>
        <div class="col-start-1 row-start-3 mt-4 self-center">
          {/* <button type="button" class="rounded-lg bg-black px-3 py-2 text-sm font-medium leading-6 text-white">Check Availability</button> */}
          <Link to="/roomthree">  <button class="mt-3 rounded-lg bg-red-400 hover:bg-red-500 p-1 px-3 text-white  py-2">View Details</button></Link>
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
            <span class="mx-2">Double or Twin Bed</span>
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
            <span class="mx-2">Spa Bath</span>
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
        <p class="col-start-1 mt-4 text-sm leading-6 dark:text-slate-400">Welcome to Bethany's Room, a capacious and meticulously designed retreat that seamlessly combines affordability with a touch of indulgence. This well-appointed haven surpasses expectations, providing a setting where comfort and sophistication converge seamlessly.</p>
        <div class="col-start-1 row-start-3 mt-4 self-center">
          {/* <button type="button" class="rounded-lg bg-black px-3 py-2 text-sm font-medium leading-6 text-white">Check Availability</button> */}
          <Link to="/roomfour"> <button class="mt-3 rounded-lg bg-red-400 hover:bg-red-500 p-1 px-3 text-white  py-2">View Details</button></Link>
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
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <rect width="30" height="30" fill="url(#pattern0)" />
              <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0_711_61" transform="scale(0.00195312)" />
                </pattern>
                <image
                  id="image0_711_61"
                  width="512"
                  height="512"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAgAElEQVR4Ae3df4ytW1kf8OeCKCioxFQpGgkRsEmtoGLupcZqINhWiRYrpGk0Lf0RqNbUajGoJUArbai1aVqLTdPWlCDWoH8Qo7EoSJvWVqpirXgJmP4QqEBFq4BwxXvpfO8+s8+ZMzP7zJ797net912flZycPTN773etz/O863n2OzN7qgwCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQOETg4VX1+Kp6clU9xT8GckAOyIEHcyB7YvbG7JEGgUUKfG5VPbeqvqWqXlFVr6qqn6qqt1bVb1XVx/xjIAfkgBzYmQPZK7NnZu/MHpq9NHtq9tbssQaB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AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQJ9CPx/JyA2Qn2BdD8AAAAASUVORK5CYII="
                />
              </defs>
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
            <span class="mx-2">Spa Bath</span>
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
        <p class="col-start-1 mt-4 text-sm leading-6 dark:text-slate-400">Welcome to Deanna's Room, an expansive and exquisitely designed haven that redefines the concept of affordable luxury. This well-appointed retreat goes beyond the ordinary, offering a sanctuary where comfort and sophistication converge effortlessly.</p>
        <div class="col-start-1 row-start-3 mt-4 self-center">
          {/* <button type="button" class="rounded-lg bg-black px-3 py-2 text-sm font-medium leading-6 text-white">Check Availability</button> */}
          <Link to="/roomfive"> <button class="mt-3 rounded-lg bg-red-400 hover:bg-red-500 p-1 px-3 text-white  py-2">View Details</button></Link>
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
                  the year. You can also admire the other grand homes in the neighborhood as you stroll around the “Olde Walkerville”.
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
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width={2432}
                height={1442}
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

      <p>1104 Monmouth Rd,Windsor, ON N8Y 3L8</p>
    </div>
    <div class="first-line flex gap-2">
    <svg width="30px" height="30px" viewBox="0 0 212 205" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M58.3518 84.3209C65.4892 96.7986 73.7032 108.807 84.3584 119.754C95.0619 130.753 108.315 140.776 125.549 149.273L125.566 149.281L125.57 149.273C126.826 149.895 128.021 149.88 129.144 149.471C130.773 148.879 132.469 147.564 134.118 145.973C135.376 144.756 136.953 142.747 138.658 140.569C145.293 132.096 153.497 121.622 165.078 126.833C165.323 126.942 165.554 127.069 165.772 127.212L204.371 148.76C204.509 148.837 204.642 148.919 204.768 149.006C209.885 152.42 211.974 157.678 211.997 163.565C212.021 169.636 209.704 176.432 206.348 182.177C201.923 189.751 195.329 194.756 187.783 198.148C180.588 201.38 172.604 203.1 164.894 204.197C152.836 205.916 141.468 204.824 129.891 201.36C118.591 197.978 107.159 192.331 94.6962 184.828L93.7887 184.282C88.0505 180.828 81.874 177.112 75.865 172.706C53.6695 156.426 31.0668 132.931 16.4107 107.145C4.07341 85.4393 -2.67753 62.0281 1.00245 39.7051C3.01928 27.4554 8.45557 16.3358 17.8272 8.97024C26.0429 2.51007 37.1294 -0.989112 51.3801 0.246586C53.0587 0.387425 54.4734 1.31797 55.2705 2.62576L55.2809 2.62073L79.9935 43.3132C83.6338 47.8704 84.0375 52.3923 82.069 56.8875C80.4421 60.6063 77.0795 64.0149 72.6215 67.2291C71.2654 68.3189 69.6747 69.4507 68.034 70.6176C62.5166 74.5427 56.2056 79.0311 58.3518 84.3209ZM77.0675 126.457C65.6738 114.751 56.9941 102.075 49.5064 88.972C49.3753 88.7658 49.258 88.5478 49.1579 88.3181C43.6819 75.8119 53.5056 68.8269 62.0853 62.7289C63.5431 61.6928 64.9544 60.6884 66.2276 59.6623L66.2311 59.6674C66.3053 59.607 66.3829 59.5483 66.464 59.4913C69.6437 57.2211 71.9348 55.0532 72.8095 53.058C73.3081 51.9195 73.1235 50.6671 72.0055 49.2603C71.814 49.0441 71.6381 48.806 71.4828 48.5511L47.9537 9.81192C37.8281 9.40785 29.9782 12.0268 24.1727 16.5923C16.8593 22.3416 12.5738 31.2782 10.933 41.2375C7.64643 61.1797 13.8936 82.4733 25.2389 102.436C39.1756 126.953 60.7361 149.343 81.9379 164.891C87.7675 169.167 93.6282 172.693 99.0732 175.969L99.9806 176.515C111.743 183.596 122.438 188.899 132.85 192.014C142.988 195.047 152.922 196.005 163.437 194.506C170.354 193.522 177.434 192.016 183.568 189.26C189.349 186.661 194.347 182.913 197.601 177.349C200.182 172.927 201.966 167.871 201.95 163.563C201.94 160.83 201.136 158.485 199.181 157.118L160.794 135.692C156.548 133.88 151.083 140.858 146.659 146.507C144.755 148.941 142.993 151.188 141.214 152.906C138.666 155.364 135.835 157.472 132.654 158.625C128.968 159.965 125.071 160.024 121 158.005L121.003 157.998C102.691 148.97 88.5456 138.252 77.0675 126.457Z" fill="black"/>
</svg>
      <p>(519) 254-1507</p>
    </div>
    <div class="first-line flex gap-2">
    <svg width="30px" height="30px" viewBox="0 0 265 277" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M229.995 69.5713L175.34 12.9403V12.3767H27.9456V103.703L104.88 172.688L105.218 173.004L131.185 196.269L236.043 104.515V81.9705L230.107 69.5938L229.995 69.5713ZM144.022 64.1156L144.225 63.1913L145.484 57.6229H160.839L152.003 99.4197C151.846 100.164 151.689 100.84 151.576 101.449C151.36 102.504 151.225 103.574 151.172 104.65C151.132 105.411 151.363 106.162 151.824 106.769C152.029 106.997 152.278 107.181 152.556 107.309C152.835 107.437 153.136 107.506 153.442 107.513C155.533 107.513 158.254 106.138 161.559 103.41C165.159 100.264 168.101 96.4327 170.214 92.1379C172.445 87.7222 173.695 82.874 173.877 77.9274C174.06 72.9807 173.171 68.0532 171.271 63.4843C169.513 59.4028 166.907 55.7443 163.627 52.7533C160.019 49.583 155.814 47.1685 151.262 45.6519C145.891 43.8662 140.26 42.9974 134.602 43.0819C128.716 43.0294 122.857 43.8731 117.223 45.5843C112.223 47.1342 107.54 49.5699 103.397 52.7759C99.3502 55.9041 95.9517 59.7943 93.3919 64.2283C90.9753 68.3359 89.1582 72.7695 87.9961 77.3941C86.746 82.2081 86.1188 87.1634 86.1301 92.1379C86.0263 98.4687 87.3723 104.739 90.0645 110.466C92.6962 116.005 96.669 120.795 101.62 124.399C107.095 128.35 113.351 131.079 119.966 132.402C127.96 133.994 136.154 134.313 144.247 133.349C150.542 132.75 156.695 131.113 162.458 128.502C167.405 126.151 171.738 122.678 175.115 118.357H187.503C185.534 122.533 182.873 126.344 179.634 129.629C176.289 132.951 172.452 135.734 168.258 137.88C163.638 140.212 158.733 141.925 153.667 142.975C147.87 144.183 141.961 144.765 136.041 144.711C127.322 144.838 118.64 143.567 110.321 140.946C103.198 138.742 96.6228 135.046 91.0312 130.102C85.8491 125.445 81.7966 119.662 79.183 113.194C76.4589 106.294 75.1071 98.9269 75.2036 91.5067C75.1121 83.5231 76.5153 75.5931 79.3404 68.1284C81.96 61.0294 86.0637 54.5745 91.3761 49.1969C96.6886 43.8194 103.087 39.6436 110.141 36.9499C118.019 33.8675 126.416 32.3366 134.872 32.441C141.751 32.3655 148.594 33.4633 155.106 35.6874C160.942 37.7008 166.299 40.9014 170.844 45.0883C175.194 49.0954 178.623 54.0032 180.893 59.4715C183.226 65.2567 184.395 71.4473 184.333 77.6871C184.334 82.9094 183.39 88.0884 181.545 92.9721C179.716 97.9295 177.004 102.513 173.542 106.499C170.137 110.437 165.978 113.65 161.311 115.945C156.589 118.295 151.385 119.507 146.113 119.484C143.575 119.624 141.048 119.063 138.806 117.861C137.915 117.283 137.151 116.529 136.559 115.645C135.968 114.762 135.562 113.767 135.367 112.721C134.503 113.532 133.586 114.285 132.624 114.975C131.86 115.533 131.064 116.045 130.241 116.508C128.22 117.662 126.026 118.477 123.743 118.92C119.466 119.803 115.024 119.371 110.996 117.68C106.906 115.963 103.461 112.997 101.148 109.204C98.4917 104.742 97.1726 99.6082 97.3488 94.4149C97.3687 88.1937 98.702 82.0471 101.261 76.3796C103.745 70.6778 107.609 65.6876 112.502 61.8612C117.158 58.1498 122.944 56.1525 128.892 56.2026C131.822 56.0268 134.748 56.6256 137.375 57.9391C140.003 59.2525 142.241 61.2346 143.865 63.6872L144.135 64.1156H144.022ZM112.232 94.3022C111.986 98.1027 113.006 101.877 115.132 105.033C116.009 106.22 117.156 107.18 118.478 107.831C119.8 108.482 121.259 108.806 122.731 108.776C124.562 108.75 126.367 108.335 128.026 107.558C129.685 106.781 131.16 105.659 132.354 104.267C133.175 103.404 133.927 102.476 134.602 101.494C135.088 100.819 135.538 100.119 135.951 99.3972C137.073 97.4433 137.978 95.3719 138.649 93.2201C140.049 89.1082 140.808 84.8041 140.897 80.4601V80.3023C140.899 79.4288 140.854 78.5558 140.762 77.6871C140.654 76.6948 140.459 75.714 140.178 74.7564C139.703 73.1794 138.94 71.7042 137.93 70.4054C137.025 69.2232 135.854 68.2729 134.512 67.6325C133.099 66.9941 131.565 66.6711 130.016 66.6856C128.29 66.7023 126.585 67.0661 125.001 67.7554C123.418 68.4447 121.989 69.4454 120.798 70.6985C117.934 73.5645 115.792 77.0729 114.548 80.9335C113.07 85.1809 112.31 89.646 112.3 94.1444L112.232 94.3022ZM248.273 93.716C249.769 92.3567 251.718 91.6087 253.736 91.6194C255.374 91.639 256.976 92.1067 258.368 92.9721C259.437 93.616 260.394 94.4308 261.2 95.3843C263.497 98.0728 264.834 101.452 265 104.988V264.24C264.985 267.621 263.645 270.86 261.268 273.258C258.882 275.649 255.648 276.995 252.275 277H12.7251C9.35364 276.985 6.12339 275.641 3.73211 273.258C2.54617 272.077 1.60566 270.672 0.965038 269.124C0.324416 267.576 -0.00358532 265.916 2.95569e-05 264.24V104.988C0.168614 101.396 1.53873 97.9651 3.88948 95.249C4.71846 94.3624 5.67292 93.6028 6.72226 92.9946C8.07968 92.1683 9.63108 91.7172 11.2187 91.6871C12.8112 91.6612 14.3757 92.1083 15.7152 92.9721V6.1771C15.715 4.55433 16.3517 2.99668 17.4876 1.84081C18.6235 0.684933 20.1673 0.02369 21.7855 0L177.364 0C178.268 0.000796693 179.161 0.203524 179.978 0.593468C180.794 0.983412 181.514 1.55079 182.085 2.25442L246.497 68.9626C247.619 70.1043 248.249 71.6427 248.251 73.246V75.0269C248.251 75.2749 248.251 75.5229 248.251 75.7934C248.251 76.064 248.251 76.2894 248.251 76.5374V93.7386L248.273 93.716ZM127.048 209.074L100.923 185.674L12.3204 263.541V264.24C12.2817 264.334 12.2817 264.439 12.3204 264.533C12.4156 264.563 12.5175 264.563 12.6127 264.533H252.252C252.348 264.563 252.45 264.563 252.545 264.533C252.583 264.439 252.583 264.334 252.545 264.24V263.767L162.862 184.862L135.209 209.12C134.087 210.116 132.639 210.667 131.14 210.667C129.64 210.667 128.193 210.116 127.071 209.12L127.048 209.074ZM91.6832 177.513L12.3204 106.296V247.152L91.6832 177.4V177.513ZM252.657 247.535V106.228L172.193 176.724L252.657 247.422V247.535Z" fill="black"/>
</svg>
      <p>yeolde@walkervillebb.com</p>
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