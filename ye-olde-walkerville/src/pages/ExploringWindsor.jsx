import React from 'react';
import Logo from "../assests/img/Logo_YeOlde.png";
import addressIcon from "../assests/img/address-location-icon.png";
import Footer from '../components/Footer';
const ExploringWindsor = () => {
  return (
    <div>
      <div id="Exploring" className='bg-gray-400 p-36 lg:p-40 flex justify-center content-center text-2xl'>
      <h1 id="hero_heading" class="text-4xl font-semibold leading-8">
        Exploring Windsor
      </h1>
      </div>

      <div class="pt-20 ">
        <ul class="nav-links">
          <li><a href="#localarea" class="text-2xl">Local Area</a></li>
          <li><a href="#surroundingarea" class="text-2xl">Surrounding Area</a></li>
          <li><a href="#transportation" class="text-2xl">Transportation</a></li>
        </ul>
      </div>


      <div className="p-5 lg:p-10">
        <h1 className="m-5 text-2xl" id="localarea">Local Area</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
          
          <div className="rounded-2xl border-2 p-2" id="none-underline">
          <a href="https://www.citywindsor.ca/visitors" target="_blank" >
              <p className="mb-0 mt-11 font-semibold">The City of Windsor</p>
              <p>The official website for the City of Windsor.</p>
            </a>
          </div>
          
          <div className="rounded-2xl border-2 p-2" id="none-underline" >
          <a href="https://www.caesars.com/caesars-windsor" target="_blank">
              <p className="mb-0 mt-11 font-semibold">Caesars Windsor</p>
              <p>Canada's highest-rated casino.</p>
            </a>
          </div>

          <div className="rounded-2xl border-2 p-2" id="none-underline">
            <a href="https://www.citywindsor.ca/residents/culture/willistead-manor" target="_blank" >
              <p className="mb-0 mt-11 font-semibold">Willistead Manor</p>
              <p>A historic house located in the former town of Walkerville.</p>
            </a>
          </div>

          <div className="rounded-2xl border-2 p-2" id="none-underline">
          <a href="https://artwindsoressex.ca/" target="_blank" >
              <p className="mb-0 mt-11 font-semibold">Art Windsor-Essex</p>
              <p>AWE is the largest public art gallery in Southwestern Ontario.</p>
            </a>
          </div>

          <div className="rounded-2xl border-2 p-2" id="none-underline">
          <a href="https://www.adventurebay.ca/" target="_blank">
              <p className="mb-0 mt-11 font-semibold">Adventure Bay Family Water Park</p>
              <p>The indoor water park offers thrilling slides, exciting activities, and fabulous family fun!</p>
            </a>
          </div>

          <div className="rounded-2xl border-2 p-2" id="none-underline">
          <a href="https://www.ojibway.ca/index.htm" target="_blank">
              <p className="mb-0 mt-11 font-semibold">Ojibway Nature Centre</p>
              <p>Your guide to nature and wildlife in the Windsor Region.</p>
            </a>
          </div>

          <div className="rounded-2xl border-2 p-2" id="none-underline">
          <a href="https://www.visitwindsoressex.com/places/walkerville-bia/" target="_blank">
              <p className="mb-0 mt-11 font-semibold">Walkerville District</p>
              <p>The perfect blend of hip and historic! One of the most unique neighbourhoods you won't find anywhere.</p>
            </a>
          </div>

          <div className="rounded-2xl border-2 p-2" id="none-underline">
          <a href="https://visitwalkerville.com/" target="_blank">
              <p className="mb-0 mt-11 font-semibold">Visit Walkerville</p>
              <p>Walkerville self guided walking.</p>
            </a>
          </div>

          <div className="rounded-2xl border-2 p-2" id="none-underline">
          <a href="https://weather.gc.ca/city/pages/on-94_metric_e.html" target="_blank">
              <p className="mb-0 mt-11 font-semibold">Windsor Weather Forecasts</p>
              <p>Check current conditions and 7 day forecasts.</p>
            </a>
          </div>
      
      </div>
        <h1 className="m-5 mt-10 text-2xl" id="surroundingarea">Surrounding Area</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
          
          
          <div className="rounded-2xl border-2 p-2" id="none-underline">
          <a href="https://www.visitwindsoressex.com/" target="_blank">
              <p className="mb-0 mt-11 font-semibold">Tourism Windsor Essex</p>
              <p>Featuring the area's top places to dine, shop, stay, and explore.</p>
            </a>
          </div>

          <div className="rounded-2xl border-2 p-2" id="none-underline">
          <a href="https://www.peleeisland.com/" target="_blank">
              <p className="mb-0 mt-11 font-semibold">Pelee Island Winery Pavilion</p>
              <p>Canada's largest estate winery in the nation's most southerly grape-growing region.</p>
            </a>
          </div>

          <div className="rounded-2xl border-2 p-2" id="none-underline">
          <a href="https://grapevinetours.ca/" target="_blank">
              <p className="mb-0 mt-11 font-semibold">Essex County Winery Tours</p>
              <p>Enjoy animated tours, plan the perfect day trip & see special event listings.</p>
            </a>
          </div>

          <div className="rounded-2xl border-2 p-2" id="none-underline">
          <a href="https://parks.canada.ca/pn-np/on/pelee" target="_blank">
              <p className="mb-0 mt-11 font-semibold">Point Pelee National Park</p>
              <p>The most southern point on the Canadian mainland - Point Pelee National Park of Canada.</p>
            </a>
          </div>

          <div className="rounded-2xl border-2 p-2" id="none-underline">
          <a href="https://parks.canada.ca/lhn-nhs/on/malden" target="_blank">
              <p className="mb-0 mt-11 font-semibold">Fort Malden Historic National Park</p>
              <p>Fort Malden has witnessed and participated in the struggles which helped forge a new nation out of the North American wilderness.</p>
            </a>
          </div>

        </div>
        <h1 className="m-5 mt-10 text-2xl" id="transportation">Transportation</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
          
          <div className="rounded-2xl border-2 p-2" id="none-underline">
          <a href="https://windsor.mytransitride.com/" target="_blank">
              <p className="mb-0 mt-11 font-semibold">Transit Windsor</p>
              <p>Find your next bus in real-time to Windsor, Amhersrburg, LaSalle, Leamington, and Detroit.</p>
            </a>
          </div>
          
          
          <div className="rounded-2xl border-2 p-2" id="none-underline">
          <a href="https://www.citywindsor.ca/residents/transitwindsor/service-to-detroit/Pages/service-to-detroit.aspx" target="_blank">
              <p className="mb-0 mt-11 font-semibold">Service to Detroit</p>
              <p>The Tunnel Bus operates a short route through downtown Detroit, seven days a week.</p>
            </a>
          </div>
          
          <div className="rounded-2xl border-2 p-2" id="none-underline">
          <a href="https://www.viarail.ca/en/explore-our-destinations/stations/ontario/windsor" target="_blank">
              <p className="mb-0 mt-11 font-semibold">VIA Rail </p>
              <p>In the Quebec City-Windsor corridor, VIA Rail ensures passengers enjoy safe and reliable service.</p>
            </a>
          </div>
          
          <div className="rounded-2xl border-2 p-2" id="none-underline">
          <a href="https://www.ontarioferries.com/" target="_blank">
              <p className="mb-0 mt-11 font-semibold">Pelee Island Ferry</p>
              <p>Seasonal departures from Leamington or Kingsville Dock.</p>
            </a>
          </div>
        
          <div className="rounded-2xl border-2 p-2" id="none-underline">
          <a href="https://flyyqg.ca/" target="_blank">
              <p className="mb-0 mt-11 font-semibold">Windsor International Airport (YQG)</p>
              <p>Your quick gateway to the world.</p>
            </a>
          </div>

        </div>
      </div>
      {/* this is the footer section */}
<Footer />
    </div>
  );
};

export default ExploringWindsor;
