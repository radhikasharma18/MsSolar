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
import { Zap } from 'lucide-react';
import commercial1 from '../assets/commercial1.jpg'
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { Bird } from 'lucide-react';
import { RiVoiceprintLine } from "react-icons/ri";
import Accordion from './Accordion';
import {motion} from 'framer-motion'



const testimonials = [
  {
    text: "MSFIN not only provided a top-notch solar system but also guided us on financial incentives. Proudly contributing to a greener planet with a hassle-free experience.",
    author: "Radhe Shyam",
  },
  {
    text: "MSFIN delivered beyond expectations, slashing our energy bills. Our home is now part of a sustainable future. Amazing smooth experience!",
    author: "Anjali Kumari",
  },
  {
    text: "Great support and a reliable installation team. The solar system works flawlessly and reduced our monthly expenses significantly.",
    author: "Vikram",
  },
  {
    text: "Exceptional service and guidance throughout the process. Highly recommend MSFIN Solar for anyone looking to switch to solar energy.",
    author: "Sita Devi",
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
    <section className='w-full  '>
<motion.div
  initial={{ scale: 0.9, y: -20 }}
  animate={{ scale: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="relative 
             h-80 sm:h-[400px] md:h-[500px] 
             rounded-2xl bg-center bg-cover 
             font-semibold p-4 sm:p-6 md:p-8 
             text-white flex items-end m-4"
  style={{ backgroundImage: `url(${house})` }}
>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col gap-4 sm:gap-6 md:gap-8 w-full">

    {/* Text Section */}
    <div className="flex flex-col gap-2 w-full">

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight"
      >
        Solar for your home
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-sm sm:text-base md:text-lg w-full md:w-1/2"
      >
        Say goodbye to traditional electricity bills and hello to a brighter and greener lifestyle with our solar panel solutions. </motion.div>
    </div>

    {/* Button */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <button
        onClick={() => navigate('/contact')}
        className="group inline-flex items-center gap-2 sm:gap-3 
                   px-3 py-2 sm:px-4 sm:py-3 
                   rounded-lg text-white bg-amber-600 
                   text-xs sm:text-sm md:text-base 
                   relative overflow-hidden"
      >
        <span className="tracking-wide">Order Installation</span>

        <div className="relative w-3 h-3 sm:w-4 sm:h-4">
          <svg
            viewBox="0 0 15 14"
            className="absolute inset-0 w-full h-full fill-current transition-transform duration-300 group-hover:translate-x-2"
          >
            <path d="M-8.10623e-05 6.12375H10.668L5.7611 1.21689L7.00973 -0.00982666L14.0195 6.99998L7.00973 14.0098L5.7611 12.7831L10.668 7.8762H-8.10623e-05V6.12375Z" />
          </svg>
        </div>
      </button>
    </motion.div>

  </div>
</motion.div>




<section className="px-4 sm:px-8 md:px-16 py-12 md:py-20">

  {/* Heading */}
  <div className="mb-10">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="text-amber-600 text-lg sm:text-xl"
    >
      YOUR OWN ENERGY
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2 }}
      className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight"
    >
      Get on the path to energy independence
    </motion.div>
  </div>

  {/* Content */}
  <div className="flex flex-col-reverse lg:flex-row gap-10">

    {/* GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">

      <div className="bg-[#f2f2f2] rounded-3xl p-4 sm:p-6">
        <Residentialprops 
          title="Utility Bills"
          icon={<RiBillFill />}
          description="Reduce or eliminate your home’s electric bill"
        />
      </div>

      <div className="bg-[#f2f2f2] rounded-3xl p-4 sm:p-6">
        <Residentialprops 
          title="Good ROI"
          icon={<RiMoneyRupeeCircleLine />}
          description="Generous incentives deliver long-term savings"
        />
      </div>

      <div className="bg-[#f2f2f2] rounded-3xl p-4 sm:p-6">
        <Residentialprops 
          title="Reliability"
          icon={<PiAsteriskSimpleBold />}
          description="Solar needs little or no maintenance for decades"
        />
      </div>

      <div className="bg-[#f2f2f2] rounded-3xl p-4 sm:p-6">
        <Residentialprops 
          title='"Green" Champion'
          icon={<GiGreenhouse />}
          description="Help curb climate change and reduce fossil fuel use"
        />
      </div>

    </div>

    {/* IMAGE */}
    <div className="w-full lg:w-1/3 rounded-3xl overflow-hidden">
      <img
        src={forest}
        className="w-full h-64 sm:h-80 md:h-full object-cover"
        alt="forest"
      />
    </div>

  </div>
</section>


 <section className="px-4 sm:px-8 md:px-16 py-16">

  {/* Heading */}
  <div>
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className="text-amber-600 text-lg sm:text-xl md:text-2xl"
    >
      TESTIMONIALS
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
      className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight"
    >
      Here's what customers say about us
    </motion.div>
  </div>

  {/* Testimonial Slider */}
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 3 }}
    className="
      bg-amber-600/80 
      rounded-2xl 
      relative 
      overflow-hidden 
      p-6 
      text-white 
      flex 
      items-center 
      justify-center 
      mt-12 
      drop-shadow-2xl 
      font-serif
      min-h-[260px] sm:min-h-[320px] md:h-80
    "
  >

    {/* Testimonial Text */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3 }}
      className="flex flex-col text-center md:text-left"
    >
      <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 leading-snug">
        "{testimonials[index].text}"
      </p>
      <p className="text-base sm:text-lg font-semibold">
        - {testimonials[index].author}
      </p>
    </motion.div>

    {/* Navigation Buttons */}
    <div className="absolute bottom-4 left-0 right-0 flex justify-center md:justify-end gap-3 px-6">
      <button
        onClick={prevSlide}
        className="bg-white text-amber-600 font-bold rounded-full text-2xl sm:text-3xl p-2"
      >
        <IoIosArrowRoundBack />
      </button>

      <button
        onClick={nextSlide}
        className="bg-white text-amber-600 font-bold rounded-full text-2xl sm:text-3xl p-2"
      >
        <IoIosArrowRoundForward />
      </button>
    </div>

  </motion.div>
</section>

<section className="px-4 sm:px-8 md:px-16 py-16 flex flex-col gap-12">

  {/* Heading */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.5 }}
    className="text-3xl sm:text-4xl font-semibold"
  >
    How & why
  </motion.div>

  {/* Cards */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.5 }}
    className="flex flex-col lg:flex-row gap-6 lg:gap-8"
  >

    {/* Card 1 */}
    <div
      className="bg-gray-200/50 w-full lg:w-1/2 p-6 sm:p-8 flex flex-col gap-4 justify-between rounded-3xl 
      group hover:bg-amber-600/70 transition duration-500"
    >
      <div>
        <div className="text-2xl sm:text-3xl text-amber-600 group-hover:text-white">
          How we do it!
        </div>
        <div className="text-2xl sm:text-3xl group-hover:text-white">
          Expertise and Premium Services
        </div>
      </div>

      <div className="text-gray-600 text-base sm:text-xl group-hover:text-gray-100 leading-relaxed">
        Our experience engineering and installing high quality solar systems
        and our uncompromising service has made us a growing industry leader.
        Our professional installation teams have extensive experience and will
        build your system to our high standards. We have installed numerous
        systems across Canada, saving homeowners thousands and protecting the environment.
      </div>

      <div>
        <button
          onClick={() => navigate('/contact')}
          className="group inline-flex items-center gap-3 p-3 sm:p-4 rounded-lg 
          text-amber-600 border border-amber-600 bg-white"
        >
          <span className="font-semibold">Learn More</span>

          <div className="relative w-4 h-4">
            <svg
              viewBox="0 0 15 14"
              className="absolute inset-0 w-4 h-4 fill-current transition-transform duration-300 group-hover:translate-x-2"
            >
              <path d="M-8.10623e-05 6.12375H10.668L5.7611 1.21689L7.00973 -0.00982666L14.0195 6.99998L7.00973 14.0098L5.7611 12.7831L10.668 7.8762H-8.10623e-05V6.12375Z" />
            </svg>
          </div>
        </button>
      </div>
    </div>

    {/* Card 2 */}
    <div
      className="bg-gray-200/50 w-full lg:w-1/2 p-6 sm:p-8 flex flex-col gap-4 justify-between rounded-3xl 
      group hover:bg-amber-600/70 transition duration-500"
    >
      <div>
        <div className="text-2xl sm:text-3xl text-amber-600 group-hover:text-white">
          why choose MSFIN?
        </div>
        <div className="text-2xl sm:text-3xl group-hover:text-white">
          Your full turnkey solar system installer
        </div>
      </div>

      <div className="text-gray-600 text-base sm:text-xl group-hover:text-gray-100 leading-relaxed">
        MSFIN is an all-in-one service provider with everything you need
        to power your home with clean solar energy. We oversee your entire
        project and provide a single point of contact throughout. Our in-house
        engineering team designs your system based on your roof and power usage.
      </div>

      <div>
        <button
          onClick={() => navigate('/contact')}
          className="group inline-flex items-center gap-3 p-3 sm:p-4 rounded-lg 
          text-amber-600 border border-amber-600 bg-white"
        >
          <span className="font-semibold">Let's get started</span>

          <div className="relative w-4 h-4">
            <svg
              viewBox="0 0 15 14"
              className="absolute inset-0 w-4 h-4 fill-current transition-transform duration-300 group-hover:translate-x-2"
            >
              <path d="M-8.10623e-05 6.12375H10.668L5.7611 1.21689L7.00973 -0.00982666L14.0195 6.99998L7.00973 14.0098L5.7611 12.7831L10.668 7.8762H-8.10623e-05V6.12375Z" />
            </svg>
          </div>
        </button>
      </div>
    </div>

  </motion.div>
</section>

 <section className="h-[60vh] sm:h-[70vh] md:p-16 p-6">
  <div
    className="relative bg-center bg-cover h-full rounded-2xl flex items-center justify-center text-white"
    style={{ backgroundImage: `url(${commercial1})` }}
  >
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

    {/* Content */}
    <div className="relative text-center">
      <div className="text-sm sm:text-lg tracking-wide uppercase">
        Love With Nature
      </div>

      <div className="flex items-center justify-center gap-2 text-4xl sm:text-5xl md:text-6xl font-bold mt-2">
        <Zap className="w-10 h-10 sm:w-12 sm:h-12" />
        MS Solar
      </div>
    </div>
  </div>
</section>

       <section className="md:m-16 m-6 flex flex-col gap-12">
  {/* Heading */}
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className="text-3xl sm:text-4xl font-semibold"
  >
    The MSFIN Solar advantage
  </motion.div>

  {/* Feature Cards */}
  <div className="flex flex-col md:flex-row justify-between w-full gap-6">

    {/* Card 1 */}
    <div className="bg-gray-100 rounded-3xl p-6 flex flex-col gap-4 w-full md:w-1/3">
      <div>
        <div className="text-xl sm:text-2xl font-semibold">Structural Engineering</div>
        <div className="text-lg sm:text-xl">To ensure the load on your roof is safe</div>
      </div>
      <div className="text-amber-600 flex justify-center">
        <IoShieldCheckmarkOutline className="w-28 h-28 sm:w-40 sm:h-40 lg:w-52 lg:h-52" />
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-gray-100 rounded-3xl p-6 flex flex-col gap-4 w-full md:w-1/3">
      <div>
        <div className="text-xl sm:text-2xl font-semibold">Critter Guard</div>
        <div className="text-lg sm:text-xl">To protect against animals</div>
      </div>
      <div className="text-amber-600 flex justify-center">
        <Bird className="w-28 h-28 sm:w-40 sm:h-40 lg:w-52 lg:h-52" />
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-gray-100 rounded-3xl p-6 flex flex-col gap-4 w-full md:w-1/3">
      <div>
        <div className="text-xl sm:text-2xl font-semibold">Flashing</div>
        <div className="text-lg sm:text-xl">4 levels to protect against roof leaks</div>
      </div>
      <div className="text-amber-600 flex justify-center">
        <RiVoiceprintLine className="w-28 h-28 sm:w-40 sm:h-40 lg:w-52 lg:h-52" />
      </div>
    </div>
  </div>

  {/* Button */}
  <div className="flex justify-center mt-4">
    <button
      onClick={() => navigate('/contact')}
      className="group inline-flex items-center gap-3 p-4 rounded-lg bg-amber-600 text-white relative overflow-hidden"
    >
      <span className="font-semibold">Order Installation</span>
      <div className="relative w-4 h-4">
        <svg
          viewBox="0 0 15 14"
          className="absolute inset-0 w-4 h-4 fill-current transition-transform duration-300 group-hover:translate-x-2"
        >
          <path d="M-8.10623e-05 6.12375H10.668L5.7611 1.21689L7.00973 -0.00982666L14.0195 6.99998L7.00973 14.0098L5.7611 12.7831L10.668 7.8762H-8.10623e-05V6.12375Z" />
        </svg>
      </div>
    </button>
  </div>
</section>

       <section className="md:m-16 m-6">
  {/* Heading */}
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className="text-3xl md:text-4xl font-semibold mb-8"
  >
    FAQ
  </motion.div>

  {/* FAQ Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">

    {/* Left Column */}
    <div className="flex flex-col gap-6">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Accordion
          title="Why MS Solar?"
          open={activeIndex === 0}
          onToggle={() => handleToggle(0)}
        >
          We are your solar expert. We have our own installation crews with a ton of experience to ensure your system is installed to the highest quality...
        </Accordion>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Accordion
          title="Will a solar power system reduce my electric bill?"
          open={activeIndex === 1}
          onToggle={() => handleToggle(1)}
        >
          When you install a solar energy system on your property, you save money on electricity...
        </Accordion>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
      >
        <Accordion
          title="Do solar panels work in a blackout?"
          open={activeIndex === 2}
          onToggle={() => handleToggle(2)}
        >
          If your system is grid-tied, it disconnects during a blackout for safety reasons...
        </Accordion>
      </motion.div>
    </div>

    {/* Right Column */}
    <div className="flex flex-col gap-6">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Accordion
          title="How much will solar panel maintenance cost?"
          open={activeIndex === 3}
          onToggle={() => handleToggle(3)}
        >
          Solar panels are durable and require little to no maintenance for 25–35 years...
        </Accordion>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Accordion
          title="How do solar photovoltaic (PV) panels work?"
          open={activeIndex === 4}
          onToggle={() => handleToggle(4)}
        >
          Solar panels absorb sunlight and convert it into DC power...
        </Accordion>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
      >
        <Accordion
          title="How much carbon will my solar energy system offset?"
          open={activeIndex === 5}
          onToggle={() => handleToggle(5)}
        >
          Solar panels offset tons of carbon every year depending on the system size...
        </Accordion>
      </motion.div>
    </div>
  </div>
</section>

    <section className="min-h-screen md:m-16 m-6 flex flex-col gap-16">

  {/* Heading */}
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className="text-3xl md:text-4xl font-semibold tracking-tight"
  >
    Make your choice
  </motion.div>

  {/* Card */}
  <div className="bg-gray-100 rounded-3xl p-6 md:p-10 flex flex-col gap-10 shadow-sm">

    {/* Electricity Produced */}
    <div>
      <div className="text-lg md:text-xl text-gray-500 font-semibold">
        Electricity produced per year:
      </div>
      <div className="text-3xl md:text-4xl font-semibold text-gray-800">
        25 MWh
      </div>
    </div>

    {/* Bars */}
    <div className="flex flex-col md:flex-row gap-8 md:gap-6 items-center md:items-end">

      {/* Bar 1 */}
      <div className="w-full md:w-1/2 flex flex-col gap-2">
        <div className="text-center text-gray-500 text-lg">JAN – JUNE</div>
        <div className="bg-amber-600 text-white rounded-t-3xl flex justify-center items-center h-40 md:h-44 shadow-md">
          <Zap className="w-14 h-14 md:w-16 md:h-16" />
        </div>
      </div>

      {/* Bar 2 */}
      <div className="w-full md:w-1/2 flex flex-col gap-2">
        <div className="text-center text-gray-500 text-lg">JULY – DEC</div>
        <div className="bg-amber-600 text-white rounded-t-3xl flex justify-center items-center h-28 md:h-32 shadow-md">
          <Zap className="w-14 h-14 md:w-16 md:h-16" />
        </div>
      </div>

    </div>

    {/* Bottom Section */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

      {/* Text */}
      <div className="text-3xl md:text-4xl font-semibold leading-tight">
        See how much you could save with solar power
      </div>

      {/* Button */}
      <button
        onClick={() => navigate('/contact')}
        className="group inline-flex items-center gap-3 px-6 py-4 rounded-xl border border-amber-600 hover:bg-amber-600 hover:text-white transition duration-300 text-amber-600 font-semibold w-fit"
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


    </section>
  )
}

export default Residencial