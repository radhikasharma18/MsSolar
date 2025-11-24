import house from '../assets/house.jpg'
import Residentialprops from '../components/ResidencialProps'
import Footer from './Footer'
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { GiGreenhouse } from "react-icons/gi";
import { PiAsteriskSimpleBold } from "react-icons/pi";
import { RiBillFill } from "react-icons/ri";
import forest from '../assets/forest.jpg'
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Section, Zap } from 'lucide-react';
import commercial1 from '../assets/commercial1.jpg'
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { Bird } from 'lucide-react';
import { RiVoiceprintLine } from "react-icons/ri";
import Accordion from './Accordion';



const testimonials = [
  {
    text: "SolarBoost not only provided a top-notch solar system but also guided us on financial incentives. Proudly contributing to a greener planet with a hassle-free experience.",
    author: "Kelly",
  },
  {
    text: "SolarBoost delivered beyond expectations, slashing our energy bills. Our home is now part of a sustainable future. Amazing smooth experience!",
    author: "Alex",
  },
  {
    text: "Great support and a reliable installation team. The solar system works flawlessly and reduced our monthly expenses significantly.",
    author: "John",
  },
  {
    text: "Exceptional service and guidance throughout the process. Highly recommend SolarBoost for anyone looking to switch to solar energy.",
    author: "Sarah",
  },
];



const Residencial = () => {
   const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };
  const navigate=useNavigate();

const [index, setIndex] = useState(0);
  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };
    const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };
  return (
    <div className='w-full'>
<div
        className="h-124 rounded-2xl bg-center bg-cover m-4  font-semibold p-8 text-white flex items-end "
        style={{ backgroundImage: `url(${house})` }}
      >
         <div className="absolute inset-0 bg-black/40 rounded-2xl h-124 m-4"></div>
         <div className='flex flex-col gap-8'>
         <div className='relative z-10 flex flex-col gap-2'>
         <div className='text-6xl '>Solar for your home
</div>
         <div className='w-1/2 text-xl '>Say goodbye to traditional electricity bills and hello to a brighter and greener lifestyle with our solar panel solutions</div>
         </div>
         <div >
          <button
          onClick={()=>navigate('/contact')}
          className="group inline-flex items-center gap-3 p-4 rounded-lg text-white relative overflow-hidden bg-amber-600">
                        <span className="tracking-wide">Order Installation</span>

                        <div className="relative w-4 h-4">
                          {/* Arrow 1 */}
                          <svg
                            viewBox="0 0 15 14"
                            className="absolute inset-0 w-4 h-4 fill-current transition-transform duration-300 group-hover:translate-x-2"
                          >
                            <path d="M-8.10623e-05 6.12375H10.668L5.7611 1.21689L7.00973 -0.00982666L14.0195 6.99998L7.00973 14.0098L5.7611 12.7831L10.668 7.8762H-8.10623e-05V6.12375Z" />
                          </svg>

                        
                         
                  </div></button></div></div></div>
<section className="m-16 h-screen">

  
  <div className="mb-10">
    <div className="text-amber-600 text-2xl">YOUR OWN ENERGY</div>
    <div className="text-4xl font-semibold">
      Get on the path to energy independence
    </div>
  </div>

 
  <div className="flex gap-10">

  
    <div className="grid grid-cols-2 gap-6 flex-1">

      <div className="bg-[#f2f2f2] rounded-3xl">
        <Residentialprops 
          title="Utility Bills"
          icon={<RiBillFill />}
          description="Reduce or in some cases, eliminate your home’s electric bill"
        />
      </div>

      <div className="bg-[#f2f2f2]  rounded-3xl">
        <Residentialprops 
          title="Good ROI"
          icon={<RiMoneyRupeeCircleLine />}
          description="Generous incentives lets solar generate long-term savings and quick payback"
        />
      </div>

      <div className="bg-[#f2f2f2] rounded-3xl">
        <Residentialprops 
          title="Reliability"
          icon={<PiAsteriskSimpleBold />}
          description="Solar power requires little or no maintenance at all for 25 to 40 years"
        />
      </div>

      <div className="bg-[#f2f2f2]  rounded-3xl">
        <Residentialprops 
          title='"Green" Champion'
          icon={<GiGreenhouse />}
          description="Help curb climate change and reduce our collective dependence on fossil fuel."
        />
      </div>

    </div>

    <div className="w-1/3 rounded-3xl overflow-hidden">
      <img
        src={forest}
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</section>

 <section className='m-16 '>
  <div>
  <div className='text-amber-600 text-2xl'>TESTIMONIALS</div>
<div className='text-4xl font-semibold'>Here's what customers say about us</div>
  </div>
  <div className="bg-amber-600 h-80 rounded-2xl relative overflow-hidden p-6 text-white flex justify-center mt-16 drop-shadow-2xl font-serif">

      {/* Testimonial Text */}
      <div className="h-full flex flex-col transition-all duration-500">
        <p className="text-2xl sm:text-3xl lg:text-4xl mb-4">
          "{testimonials[index].text}"
        </p>
        <p className="text-lg font-semibold">- {testimonials[index].author}</p>
      </div>

      {/* Buttons */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-end gap-3 px-6">
        <button
          onClick={prevSlide}
          className="bg-white text-amber-600 font-bold rounded-full text-4xl p-2"
        >
          <IoIosArrowRoundBack />
        </button>

        <button
          onClick={nextSlide}
          className="bg-white text-amber-600 font-bold rounded-full text-4xl p-2"
        >
          <IoIosArrowRoundForward />
        </button>
      </div>
    </div>

 </section>
 <section className='m-16 flex flex-col gap-16'>

  <div className='text-4xl font-semibold'>How & why</div>
  <div className='flex gap-8'>
      <div className='bg-gray-200/50 w-1/2  p-8 flex flex-col gap-4 justify-between rounded-3xl group hover:bg-amber-600/70 transition duration-600' >
      <div>
      <div className='text-3xl text-amber-600 group-hover:text-white'>How we do it!</div>
      <div className='text-3xl group-hover:text-white'>Expertise and Premium Services</div></div>
      <div className='text-gray-500 text-xl group-hover:text-gray-100'>Our experience engineering and installing high quality solar systems and our uncompromising service has made us a growing industry leader. Our professional installation teams have extensive experience and will build your system to our high standards. We have installed numerous systems across Canada, saving homeowners thousands of dollars, and most of all, protecting the environment</div>
      <div><button
          onClick={()=>navigate('/contact')}
          className="group inline-flex items-center gap-3 p-4 rounded-lg relative overflow-hidden text-amber-600 border-[0.5px] border-amber-600 bg-white">
                        <span className="font-semibold">Learn More</span>

                        <div className="relative w-4 h-4">
                          <svg
                            viewBox="0 0 15 14"
                            className="absolute inset-0 w-4 h-4 fill-current transition-transform duration-300 group-hover:translate-x-2"
                          >
                            <path d="M-8.10623e-05 6.12375H10.668L5.7611 1.21689L7.00973 -0.00982666L14.0195 6.99998L7.00973 14.0098L5.7611 12.7831L10.668 7.8762H-8.10623e-05V6.12375Z" />
                          </svg>

                        
                         
                  </div></button></div>
    </div>
    <div className='bg-gray-200/50 w-1/2  p-8 flex flex-col gap-4 justify-between rounded-3xl group hover:bg-amber-600/70 transition duration-600' >
      <div>
      <div className='text-3xl text-amber-600 group-hover:text-white'>why choose solarboost?</div>
      <div className='text-3xl group-hover:text-white'>Your full turnkey solar system installer</div></div>
      <div className='text-gray-500 text-xl group-hover:text-gray-100'>SolarBoost is an all-in-one service provider, with everything you need to power your home with clean solar energy. We will oversee your entire project and provide a single point of contact and accountability throughout the life of your system. Our in-house engineering team will custom design your solar system based on your roof architecture and your projected power usage needs. Get in touch with our solar team!</div>
      <div><button
          onClick={()=>navigate('/contact')}
          className="group inline-flex items-center gap-3 p-4 rounded-lg relative overflow-hidden text-amber-600 border-[0.5px] border-amber-600 bg-white">
                        <span className="font-semibold">Let's get started </span>

                        <div className="relative w-4 h-4">
                          <svg
                            viewBox="0 0 15 14"
                            className="absolute inset-0 w-4 h-4 fill-current transition-transform duration-300 group-hover:translate-x-2"
                          >
                            <path d="M-8.10623e-05 6.12375H10.668L5.7611 1.21689L7.00973 -0.00982666L14.0195 6.99998L7.00973 14.0098L5.7611 12.7831L10.668 7.8762H-8.10623e-05V6.12375Z" />
                          </svg>

                        
                         
                  </div></button></div>
    </div>
  </div>
 </section>
  <section className="h-[70vh] md:p-16 p-6 ">
       <div className="relative bg-center bg-cover h-full inset-0  rounded-2xl  flex items-center justify-center text-white" 
        style={{ backgroundImage: `url(${commercial1})` }}>
           <div className="absolute inset-0 bg-black/35 rounded-2xl"></div>
          <div className='absolute'>
            <div className='text-center'>love with nature</div>
            <div className='flex  text-5xl items-center font-bold'><Zap />MS Solar</div>
          </div>
 

       </div>
 
       </section>
       <section className='m-16 flex flex-col gap-16 '>
        <div className='text-4xl font-semibold'>The SolarBoost advantage</div>
        <div className='flex justify-around w-full gap-8'>
        <div className='bg-gray-100 rounded-3xl p-8 flex  flex-col gap-4 w-1/3'>
        <div>
        <div className='text-2xl font-semibold'>Structural Engineering</div>
        <div className='text-xl'>To ensure the load on your roof is safe</div></div>
        <div className='text-amber-600 font-bold  flex justify-center'><IoShieldCheckmarkOutline className='w-60 h-60'/></div></div>
        <div className='bg-gray-100 rounded-3xl p-8 flex  flex-col gap-4 w-1/3'>
        <div>
        <div className='text-2xl font-semibold'>Critter Guard</div>
        <div className='text-xl'>To protect against animals</div></div>
        <div className='text-amber-600   flex justify-center'><Bird className='w-60 h-60'/></div></div>
        <div className='bg-gray-100 rounded-3xl p-8 flex  flex-col gap-4 w-1/3'>
        <div>
        <div className='text-2xl font-semibold'>Flashing</div>
        <div className='text-xl'>4 levels to protect against roof leakse</div></div>
        <div className='text-amber-600 font-bold  flex justify-center'><RiVoiceprintLine  className='w-60 h-60'/></div></div>
        </div>
        <div className='flex justify-center'><button
          onClick={()=>navigate('/contact')}
          className="group inline-flex items-center gap-3 p-4 rounded-lg relative overflow-hidden bg-amber-600 text-white">
                        <span className="font-semibold">Order Installation</span>

                        <div className="relative w-4 h-4">
                          <svg
                            viewBox="0 0 15 14"
                            className="absolute inset-0 w-4 h-4 fill-current transition-transform duration-300 group-hover:translate-x-2"
                          >
                            <path d="M-8.10623e-05 6.12375H10.668L5.7611 1.21689L7.00973 -0.00982666L14.0195 6.99998L7.00973 14.0098L5.7611 12.7831L10.668 7.8762H-8.10623e-05V6.12375Z" />
                          </svg>

                        
                         
                  </div></button></div>
       </section>
       <section className='m-16'>
        <div  className='text-4xl font-semibold'>FAQ</div>
        <div className='flex gap-8 justify-between w-full '>
        <div className='w-1/2'>
          <Accordion
      title="Why MS Solar?"
      open={activeIndex === 0}
      onToggle={() => handleToggle(0)}
    >
     We are your solar expert. We have our own installation crews with a ton of experience to ensure your system is installed to the highest quality. Our pricing is the most competitive and we even have a price match guarantee so you can feel confident you are receiving the best system for the best price. We also have the largest solar showroom in the Washington DC area. We invite you to come and visit to see the difference.
    </Accordion>
    <Accordion
      title="Will a solar power system reduce my electic bill?"
      open={activeIndex === 1}
      onToggle={() => handleToggle(1)}
    >
    When you install a solar energy system on your property, you save money on your electricity bills and protect yourself against rising electricity rates in the future. How much you can save depends on the utility rates and the available space you have.
    </Accordion>
    <Accordion
      title="Do solar panels work in a blackout?"
      open={activeIndex === 2}
      onToggle={() => handleToggle(2)}
    >
    If your solar panel system is connected to the grid, it will disconnect in the event of a blackout. This is to prevent emergency responders and electricity utility repair-people from being injured by your panels sending power back to the grid. However, there are certain inverters you can buy that provide backup power in a blackout when paired with a battery.
    </Accordion>
        </div>
        <div className='w-1/2'>
          <Accordion
      title="How much Will solar panel maintenance cost?"
      open={activeIndex === 3}
      onToggle={() => handleToggle(3)}
    >
    Solar panel systems are made of durable tempered glass and require little to no maintenance for the 25 to 35 years that they will generate power. In most cases, you don’t even need to clean your solar panels regularly. If something does happen, we have you covered with equipment manufacturers warranties.
    </Accordion>
    <Accordion
      title="How do Solar photovoltic(PV) panels work?"
      open={activeIndex === 4}
      onToggle={() => handleToggle(4)}
    >
     Solar panels absorb the sun's energy throughout the day and convert it into direct current (DC) electricity. Most homes and businesses run on alternating current (AC) electricity, so the DC electricity is then passed through an inverter to convert it to usable AC electricity. At that point, you either use the electricity in your home and business or send it back to the electric grid.


    </Accordion>
    <Accordion
      title="How much carbon will my solar energy system offset?"
      open={activeIndex === 5}
      onToggle={() => handleToggle(5)}
    >
    Solar panels offset tons of carbon every year, even smaller residential systems.  A 5kW or 13 module system  can offset upwards of 4,000kg of carbon every year.The U.S Department of Energy estimates that solar panels will offset ~0.63t of C02 for every MWh (1,000kWH) of solar energy. If you generate 6,900kWh/yr for 30 years, your solar panels will have offset over 130t of C02! This number may be even higher if you live in an area which burns coal for it's electricity, like Alberta. Carbon offsets are an ever growing concern given our current state of emissions.
    </Accordion></div></div>

       </section>
      <section className="min-h-screen m-16 flex flex-col gap-20">
  {/* Heading */}
  <div className="text-4xl font-semibold tracking-tight">
    Make your choice
  </div>

  {/* Card */}
  <div className="bg-gray-100 rounded-3xl p-10 flex flex-col gap-10 shadow-sm">

    {/* Electricity Produced */}
    <div>
      <div className="text-xl text-gray-500 font-semibold">Electricity produced per year:</div>
      <div className="text-4xl font-semibold text-gray-800">25 MWh</div>
    </div>

    {/* Bars */}
    <div className="flex gap-6 items-end">
      
      {/* Bar 1 */}
      <div className="w-1/2 flex flex-col gap-2">
        <div className="text-center text-gray-500 text-lg">JAN – JUNE</div>
        <div className="bg-amber-600 text-white rounded-t-3xl flex justify-center items-center h-44 shadow-md">
          <Zap className="w-16 h-16" />
        </div>
      </div>

      {/* Bar 2 */}
      <div className="w-1/2 flex flex-col gap-2">
        <div className="text-center text-gray-500 text-lg">JULY – DEC</div>
        <div className="bg-amber-600 text-white rounded-t-3xl flex justify-center items-center h-32 shadow-md">
          <Zap className="w-16 h-16" />
        </div>
      </div>

    </div>

    {/* Bottom Section */}
    <div className="flex justify-between items-center flex-wrap gap-6">

      {/* Text */}
      <div className="text-4xl font-semibold  leading-tight">
        See how much you could save with solar power
      </div>

      {/* Button */}
      <button
        onClick={() => navigate('/contact')}
        className="group inline-flex items-center gap-3 px-6 py-4 rounded-xl border border-amber-600 hover:bg-amber-600/70 hover:text-white transition duration-300 text-amber-600 font-semibold"
      >
        <span>Let's get started</span>

        <div className="relative w-4 h-4">
          <svg
            viewBox="0 0 15 14"
            className="absolute inset-0 w-4 h-4 fill-current transition-transform duration-300 group-hover:translate-x-2"
          >
            <path d="M0 6.12H10.668L5.761 1.217 7.01 0l7.01 7-7.01 7-1.249-1.217L10.668 7.876H0V6.124Z" />
          </svg>
        </div>
      </button>

    </div>
  </div>
</section>


                      <Footer />


    </div>
  )
}

export default Residencial