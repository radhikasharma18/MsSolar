
import Commercial1 from '../assets/commercial.jpg'
import { useNavigate } from 'react-router-dom'
import { Zap } from 'lucide-react';
import { Leaf } from 'lucide-react';
import { BatteryFull } from 'lucide-react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useState } from 'react';
import forest from '../assets/forest.jpg'
import Footer from './Footer';
import Residentialprops from './ResidencialProps';
import {motion} from 'framer-motion'







const testimonials = [
  {
    text: "MSFIN Solar not only provided a top-notch solar system but also guided us on financial incentives. Proudly contributing to a greener planet with a hassle-free experience.",
    author: "Radhey Shyam",
  },
  {
    text: "MSFIN Solar delivered beyond expectations, slashing our energy bills. Our home is now part of a sustainable future. Amazing smooth experience!",
    author: "Anjali Devi",
  },
  {
    text: "Great support and a reliable installation team. The solar system works flawlessly and reduced our monthly expenses significantly.",
    author: "Vikram",
  },
  {
    text: "Exceptional service and guidance throughout the process. Highly recommend MSFIN Solar for anyone looking to switch to solar energy.",
    author: "Suman Gupta",
  },
];

const Commercial = () => {
    
    const [index, setIndex] = useState(0);
      const prevSlide = () => {
        setIndex((prev) =>
          prev === 0 ? testimonials.length - 1 : prev - 1
        );
      };
        const nextSlide = () => {
        setIndex((prev) => (prev + 1) % testimonials.length);
      };
    const navigate =useNavigate();
  return (
    <div>
    <motion.div
  initial={{ opacity: 0, scale: 0.9, y: 40 }}
  whileInView={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
  className="
    relative 
    h-[350px] 
    sm:h-[420px] 
    md:h-[500px] 
    rounded-2xl 
    bg-center bg-cover 
    m-4 
    p-6 sm:p-8 
    text-white 
    flex 
    items-center
  "
  style={{ backgroundImage: `url(${Commercial1})` }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col gap-6 sm:gap-8">

    {/* Heading & Text */}
    <div className="flex flex-col gap-2">

      <motion.div 
       initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="
        text-3xl 
        sm:text-4xl 
        md:text-6xl 
        font-bold 
        leading-tight 
        w-full md:w-2/3
      ">
        Solar for your commercial or industrial projects
      </motion.div>

      <div className="
        text-base 
        sm:text-lg 
        md:text-xl 
        w-full md:w-2/3
      ">
        Say goodbye to traditional electricity bills and hello to a brighter  
        and greener lifestyle with our solar panel solutions.
      </div>
    </div>

    {/* Button */}
    <div>
      <button
        onClick={() => navigate('/contact')}
        className="
          group 
          inline-flex 
          items-center 
          gap-3 
          px-5 py-3 
          sm:px-6 sm:py-4 
          rounded-lg 
          text-white 
          bg-amber-600 
          relative 
          overflow-hidden
          hover:bg-amber-600/90
          transition-all
        "
      >
        <span className="tracking-wide text-sm sm:text-base">
          Order Installation
        </span>

        <div className="relative w-4 h-4">
          <svg
            viewBox="0 0 15 14"
            className="
              absolute 
              inset-0 
              w-4 h-4 
              fill-current 
              transition-transform 
              duration-300 
              group-hover:translate-x-2
            "
          >
            <path d="M-8.10623e-05 6.12375H10.668L5.7611 1.21689L7.00973 -0.00982666L14.0195 6.99998L7.00973 14.0098L5.7611 12.7831L10.668 7.8762H-8.10623e-05V6.12375Z" />
          </svg>
        </div>
      </button>
    </div>

  </div>
</motion.div>



 <section className="m-6 md:m-16 py-10 flex flex-col gap-12">
  
  {/* Heading */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true }}
    className="text-3xl sm:text-4xl font-semibold"
  >
    Our Simplified Process
  </motion.div>

  {/* Grid Wrapper */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, ease: "easeOut" }}
    viewport={{ once: true }}
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
  >
    {/* Card 1 */}
    <div className="bg-[#f2f2f2] rounded-3xl p-4">
      <Residentialprops title="Survey" icon="01" description="" />
    </div>

    {/* Card 2 */}
    <div className="bg-[#f2f2f2] rounded-3xl p-4">
      <Residentialprops title="Design" icon="02" description="" />
    </div>

    {/* Card 3 */}
    <div className="bg-[#f2f2f2] rounded-3xl p-4">
      <Residentialprops title="Mounting" icon="03" description="" />
    </div>

    {/* Card 4 */}
    <div className="bg-[#f2f2f2] rounded-3xl p-4">
      <Residentialprops title='Wiring' icon="04" description="" />
    </div>

    {/* Card 5 */}
    <div className="bg-[#f2f2f2] rounded-3xl p-4">
      <Residentialprops title='Connection' icon="05" description="" />
    </div>

    {/* Card 6 */}
    <div className="bg-[#f2f2f2] rounded-3xl p-4">
      <Residentialprops title='Testing' icon="06" description="" />
    </div>
  </motion.div>

</section>

 <section className="m-6 md:m-16 flex flex-col gap-8 md:gap-16">

  <div className="text-3xl md:text-4xl font-semibold">How & why</div>

  {/* MAIN WRAPPER */}
  <div className="flex flex-col md:flex-row gap-6 md:gap-8">

    {/* LEFT CARD */}
    <div className="bg-gray-200/50 w-full md:w-1/2 p-6 md:p-8 flex flex-col gap-4 justify-between rounded-3xl group hover:bg-amber-600/70 transition duration-500">

      <div>
        <div className="text-2xl md:text-3xl text-amber-600 group-hover:text-white">
          How we do it!
        </div>
        <div className="text-2xl md:text-3xl group-hover:text-white">
          Expertise and Premium Services
        </div>
      </div>

      <div className="text-gray-600 text-lg md:text-xl group-hover:text-gray-100">
        Our experience engineering and installing high quality solar systems and our
        uncompromising service has made us a growing industry leader. Our professional
        installation teams have extensive experience and will build your system to our
        high standards.
      </div>

      <div>
        <button
          onClick={() => navigate('/contact')}
          className="group inline-flex items-center gap-3 p-3 md:p-4 rounded-lg relative overflow-hidden text-amber-600 border border-amber-600 bg-white"
        >
          <span className="font-semibold">Learn More</span>
          <svg
            viewBox="0 0 15 14"
            className="w-4 h-4 fill-current transition-transform duration-300 group-hover:translate-x-2"
          >
            <path d="M-8.10623e-05 6.12375H10.668L5.7611 1.21689L7.00973 -0.00982666L14.0195 6.99998L7.00973 14.0098L5.7611 12.7831L10.668 7.8762H-8.10623e-05V6.12375Z" />
          </svg>
        </button>
      </div>

    </div>

    {/* RIGHT CARD */}
    <div className="bg-gray-200/50 w-full md:w-1/2 p-6 md:p-8 flex flex-col gap-4 justify-between rounded-3xl group hover:bg-amber-600/70 transition duration-500">

      <div>
        <div className="text-2xl md:text-3xl text-amber-600 group-hover:text-white">
          Why choose MSSolar?
        </div>
        <div className="text-2xl md:text-3xl group-hover:text-white">
          Your full turnkey solar installer
        </div>
      </div>

      <div className="text-gray-600 text-lg md:text-xl group-hover:text-gray-100">
        MSSolar is an all-in-one service provider. We will oversee your entire
        project with a single point of contact. Our in-house engineering team will
        custom design your solar system based on your home and energy needs.
      </div>

      <div>
        <button
          onClick={() => navigate('/contact')}
          className="group inline-flex items-center gap-3 p-3 md:p-4 rounded-lg relative overflow-hidden text-amber-600 border border-amber-600 bg-white"
        >
          <span className="font-semibold">Let's get started</span>
          <svg
            viewBox="0 0 15 14"
            className="w-4 h-4 fill-current transition-transform duration-300 group-hover:translate-x-2"
          >
            <path d="M-8.10623e-05 6.12375H10.668L5.7611 1.21689L7.00973 -0.00982666L14.0195 6.99998L7.00973 14.0098L5.7611 12.7831L10.668 7.8762H-8.10623e-05V6.12375Z" />
          </svg>
        </button>
      </div>

    </div>

  </div>
</section>



<section className="h-[70vh] md:p-16 p-6">
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="relative bg-center bg-cover h-full rounded-2xl flex items-center justify-center text-white"
    style={{ backgroundImage: `url(${Commercial1})` }}
  >
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/35 rounded-2xl"></div>

    {/* Content */}
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.9}}
      className="relative text-center flex flex-col gap-4 items-center"
    >
      <div className="text-2xl md:text-xl uppercase tracking-wide font-serif">Love with Nature</div>
      <div className="flex items-center text-5xl md:text-6xl font-bold gap-3">
        <Zap className="w-10 h-10 md:w-12 md:h-12 text-amber-400 animate-pulse" />
        MS Solar
      </div>
    </motion.div>
  </motion.div>
</section>

   <section className='m-6 md:m-16 flex flex-col gap-12 md:gap-16'>

  <div className='text-3xl md:text-4xl font-semibold text-center md:text-left'>
    The MSFIN advantage
  </div>

  <div className='flex flex-col md:flex-row justify-around gap-6 md:gap-8'>

    {/* Card 1 */}
    <div className='bg-gray-100 rounded-3xl p-6 md:p-8 flex flex-col gap-4 items-center md:w-1/3'>
      <div className='text-center'>
        <div className='text-xl md:text-2xl font-semibold'>Control energy costs</div>
        <div className='text-lg md:text-xl'>With solar you can secure predictable electricity costs for years to come</div>
      </div>
      <div className='text-amber-600 font-bold flex justify-center mt-4'>
        <Zap className='w-32 h-32 md:w-60 md:h-60' />
      </div>
    </div>

    {/* Card 2 */}
    <div className='bg-gray-100 rounded-3xl p-6 md:p-8 flex flex-col gap-4 items-center md:w-1/3'>
      <div className='text-center'>
        <div className='text-xl md:text-2xl font-semibold'>Help the environments</div>
        <div className='text-lg md:text-xl'>Solar creates 91% less CO2 pollution than natural gas and 96% less CO2 than coal</div>
      </div>
      <div className='text-amber-600 flex justify-center mt-4'>
        <Leaf  className='w-32 h-32 md:w-60 md:h-60' />
      </div>
    </div>

    {/* Card 3 */}
    <div className='bg-gray-100 rounded-3xl p-6 md:p-8 flex flex-col gap-4 items-center md:w-1/3'>
      <div className='text-center'>
        <div className='text-xl md:text-2xl font-semibold'>Energy independence</div>
        <div className='text-lg md:text-xl'>Clean solar energy provides us with an unlimited, reliable source of energy</div>
      </div>
      <div className='text-amber-600 font-bold flex justify-center mt-4'>
        <BatteryFull  className='w-32 h-32 md:w-60 md:h-60' />
      </div>
    </div>

  </div>

  <div className='flex justify-center mt-8'>
    <button
      onClick={() => navigate('/contact')}
      className='group inline-flex items-center gap-3 p-3 md:p-4 rounded-lg relative overflow-hidden bg-amber-600 text-white hover:bg-amber-600/90 transition duration-300'
    >
      <span className='font-semibold'>Order Installation</span>
      <svg
        viewBox='0 0 15 14'
        className='w-4 h-4 fill-current transition-transform duration-300 group-hover:translate-x-2'
      >
        <path d='M-8.10623e-05 6.12375H10.668L5.7611 1.21689L7.00973 -0.00982666L14.0195 6.99998L7.00973 14.0098L5.7611 12.7831L10.668 7.8762H-8.10623e-05V6.12375Z' />
      </svg>
    </button>
  </div>

</section>

      <section className='m-6 md:m-16 flex flex-col gap-8 md:gap-12'>

  {/* Header */}
  <div className='text-center md:text-left'>
    <div className='text-amber-600 text-xl md:text-2xl font-semibold'>TESTIMONIALS</div>
    <div className='text-3xl md:text-4xl font-semibold mt-2'>Here's what customers say about us</div>
  </div>

  {/* Testimonial Card */}
  <div className="bg-amber-600/75 rounded-2xl relative overflow-hidden p-4 md:p-6 text-white flex flex-col justify-center items-center md:h-80 drop-shadow-2xl font-serif transition-all duration-500">

    {/* Testimonial Text */}
    <div className="flex flex-col items-center text-center md:text-left">
      <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4">
        "{testimonials[index].text}"
      </p>
      <p className="text-base md:text-lg font-semibold">- {testimonials[index].author}</p>
    </div>

    {/* Navigation Buttons */}
    <div className="absolute bottom-4 right-4 flex gap-3">
      <button
        onClick={prevSlide}
        className="bg-white text-amber-600 font-bold rounded-full text-3xl sm:text-4xl p-2 sm:p-3 hover:scale-110 transition-transform duration-300"
      >
        <IoIosArrowRoundBack />
      </button>

      <button
        onClick={nextSlide}
        className="bg-white text-amber-600 font-bold rounded-full text-3xl sm:text-4xl p-2 sm:p-3 hover:scale-110 transition-transform duration-300"
      >
        <IoIosArrowRoundForward />
      </button>
    </div>

  </div>

</section>

        <section className="h-[70vh] md:p-16 p-6 flex items-center justify-center">

  <div
    className="relative bg-center bg-cover h-full w-full rounded-2xl flex items-center justify-center text-white"
    style={{ backgroundImage: `url(${forest})` }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/35 rounded-2xl"></div>

    {/* Content */}
    <div className="absolute flex flex-col gap-6 px-4 text-center md:px-16">
      <div className="text-2xl md:text-4xl lg:text-5xl font-semibold">
        Get a pricing quote for a commercial or industrial panel installation
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => navigate('/contact')}
          className="group inline-flex items-center gap-3 p-3 md:p-4 rounded-lg relative overflow-hidden text-amber-600 bg-white font-semibold hover:scale-105 transition-transform duration-300"
        >
          <span>Contact Us!</span>
          <svg
            viewBox="0 0 15 14"
            className="w-4 h-4 fill-current transition-transform duration-300 group-hover:translate-x-2"
          >
            <path d="M-8.10623e-05 6.12375H10.668L5.7611 1.21689L7.00973 -0.00982666L14.0195 6.99998L7.00973 14.0098L5.7611 12.7831L10.668 7.8762H-8.10623e-05V6.12375Z" />
          </svg>
        </button>
      </div>
    </div>
  </div>

</section>

       <Footer/></div>
  )
}

export default Commercial