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
          <a
             href="/contact"
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

                        
                         
                  </div></a></div></div></div><section className='h-screen m-16'>
<div className='h-2/10 '>
<div className='text-amber-600 text-2xl'>YOUR OWN ENERGY</div>
<div className='text-4xl font-semibold'>Get on the path to energy independence</div></div>
<div className='h-8/10 w-full  flex justify-between'>

<div className='flex flex-col  gap-4'>
<div className=' '>
<Residentialprops 
title='Utility Bills'
icon={ <RiBillFill/> }
description='Reduce or in some cases, eliminate your home’s electric bill'/></div>
<div><Residentialprops 
title='Good ROI'
icon={<RiMoneyRupeeCircleLine/>}
description='Generous incentives lets solar generate long-term savings and quick payback'/></div></div>
<div className='flex flex-col gap-4'>
<div><Residentialprops 
title='Reliability'
icon={ <PiAsteriskSimpleBold />} 

description='Solar power requires little or no maintenance at all for 25 to 40 years'/></div>
<div><Residentialprops 
title='"Green" Champion'
icon={< GiGreenhouse />} 
description='Help curb climate change and reduce our collective dependence on fossil fuel.'/></div></div>
<div className='bg-center bg-cover h-[500px]  p-2 rounded-2xl '><img src={forest} className='h-[430px]  w-[450px] rounded-2xl'/></div>


</div>
 </section>
 <section className='m-16 '>
  <div>
  <div className='text-amber-600 text-2xl'>TESTIMONIALS</div>
<div className='text-4xl font-semibold'>Here's what customers say about us</div>
  </div>
  <div className="bg-amber-600 h-60 rounded-2xl relative overflow-hidden p-6 text-white flex justify-center mt-16 drop-shadow-2xl font-serif">

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
 <section className='h-screen'>hii</section>
                      <Footer />


    </div>
  )
}

export default Residencial