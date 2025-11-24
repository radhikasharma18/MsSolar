import solar from "../assets/solar1.jpg";
import { motion } from "framer-motion";
import CounterOnScroll from "./CounterOnScroll";
import house from "../assets/house.jpg";
import commercial from "../assets/commercial.jpg";
import Accordion from "../components/Accordion";
import { useEffect, useState } from "react";
import forest from '../assets/forest.jpg'
import Footer from '../components/Footer'
import { useLocation, useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };
  const data = {
    today: 50,
    week: 320,
    month: 1280,
    year: 10000,
  };
  const [active, setActive] = useState<keyof typeof data>("today");


  return (
    <>
      <section className="h-screen relative p-8 lg:p-0">
  {/* Background */}
  <motion.div
    initial={{ scale: 0.8 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="absolute inset-0 z-0 m-2 sm:m-3 md:m-4"
  >
    <img
      src={solar}
      alt="Solar panels"
      className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
    />
    <div className="absolute inset-0 bg-black/35 rounded-xl sm:rounded-2xl"></div>
  </motion.div>

  {/* Content */}
  <div className="relative z-10 h-full flex items-end">
    <div className="h-11/12 w-full m-2 sm:m-4">
      <div className="relative flex flex-col text-white justify-end p-2 sm:px-8 sm:py-4 h-full font-manrope">
        <div className="flex flex-col justify-end h-full space-y-6">
          
          {/* Small tagline box */}
          <motion.div
           initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="
              backdrop-blur-2xl bg-white/35 p-2 rounded-t-xl rounded-br-xl text-sm 
              sm:text-xs md:text-lg
              w-full sm:w-4/5 md:w-2/5
            "
          >
            Say goodbye to traditional electricity bills and hello to a brighter
            and greener lifestyle with our solar panel solutions
          </motion.div>

          {/* Main Headline + Button Container */}
          <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
            
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="
                font-manrope 
                text-3xl sm:text-4xl md:text-6xl lg:text-7xl 
                leading-tight
                w-full md:w-4/5
              "
            >
              Light Up Your Home or Business with Solar Energy
            </motion.div>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <button
               onClick={() => navigate("/contact")}
               className="
                  group inline-flex items-center gap-3 
                  p-4 sm:px-5 sm:py-3
                  rounded-lg text-white bg-amber-600 
                  relative overflow-hidden text-sm sm:text-base absolute
                "
              >
                <span className="tracking-wide">Order Installation</span>

                <div className="relative w-4 h-4">
                  {/* Arrow 1 */}
                  <svg
                    viewBox="0 0 15 14"
                    className="absolute inset-0 w-4 h-4 fill-current transition-transform duration-300 group-hover:translate-x-2"
                  >
                    <path d="M-8.10623e-05 6.12375H10.668L5.7611 1.21689L7.00973 -0.00982666L14.0195 6.99998L7.00973 14.0098L5.7611 12.7831L10.668 7.8762H-8.10623e-05V6.12375Z" />
                  </svg>

                  {/* Arrow 2 */}
                  <svg
                    viewBox="0 0 15 14"
                    className="absolute inset-0 w-4 h-4 fill-current opacity-0 -translate-x-4 transition-transform duration-300 group-hover:translate-x-0"
                  >
                    <path d="M-8.10623e-05 6.12375H10.668L5.7611 1.21689L7.00973 -0.00982666L14.0195 6.99998L7.00973 14.0098L5.7611 12.7831L10.668 7.8762H-8.10623e-05V6.12375Z" />
                  </svg>
                </div>
              </button>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>


   <section className="h-auto py-10">
  <div className="mx-4 sm:mx-8 flex flex-col gap-20 sm:gap-28 lg:gap-32">

    {/* Heading Section */}
    <div className="w-full lg:w-7/10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="font-serif text-amber-600 text-xl sm:text-2xl md:text-3xl"
      >
        ABOUT COMPANY
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans mt-4 leading-snug"
      >
        Our company is dedicated to harnessing the power of the sun to provide
        sustainable and eco-friendly energy solutions
      </motion.div>
    </div>

    {/* Counter Section */}
    <div
      className="
        flex flex-col sm:flex-row justify-between 
        gap-12 sm:gap-4 text-center sm:text-left font-semibold
      "
    >
      {/* Years of work */}
      <div>
        <div className="text-amber-600 text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
          <CounterOnScroll end={40} />
        </div>
        <span className="text-gray-300 text-sm sm:text-base md:text-lg">
          years of work
        </span>
      </div>

      {/* Clients */}
      <div>
        <div className="text-amber-600 text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
          <CounterOnScroll end={380} />
        </div>
        <span className="text-gray-300 text-sm sm:text-base md:text-lg">
          clients
        </span>
      </div>

      {/* Workers */}
      <div>
        <div className="text-amber-600 text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
          <CounterOnScroll end={50} />
        </div>
        <span className="text-gray-300 text-sm sm:text-base md:text-lg">
          workers
        </span>
      </div>
    </div>

  
    <div>
      <button
        onClick={() => navigate("/aboutus")}
        className="group inline-flex items-center gap-3 px-4 sm:px-5 py-2 sm:py-3 rounded-lg 
        relative overflow-hidden text-amber-600 border-2 border-amber-600 text-sm sm:text-base"
      >
        <span className="tracking-wide">About Us</span>

        <div className="relative w-4 h-4">
          <svg
            viewBox="0 0 15 14"
            className="absolute inset-0 w-4 h-4 fill-current transition-transform duration-300 group-hover:translate-x-2"
          >
            <path d="M-8.10623e-05 6.12375H10.668L5.7611 1.21689L7.00973 -0.00982666L14.0195 6.99998L7.00973 14.0098L5.7611 12.7831L10.668 7.8762H-8.10623e-05V6.12375Z" />
          </svg>

          <svg
            viewBox="0 0 15 14"
            className="absolute inset-0 w-4 h-4 fill-current opacity-0 -translate-x-4 transition-transform duration-300 group-hover:translate-x-0"
          >
            <path d="M-8.10623e-05 6.12375H10.668L5.7611 1.21689L7.00973 -0.00982666L14.0195 6.99998L7.00973 14.0098L5.7611 12.7831L10.668 7.8762H-8.10623e-05V6.12375Z" />
          </svg>
        </div>
      </button>
    </div>
  </div>
</section>


     <section className="min-h-screen m-4 sm:m-6 lg:m-8 py-10">
  <div className="max-w-[1400px] mx-auto">

    {/* Heading Section */}
    <div className="w-full lg:w-[70%]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="font-serif text-amber-600 text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6"
      >
        WE WORK WITH
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 sm:mb-8 leading-snug"
      >
        We install high-quality solar panels both in homes and in
        large-scale industries
      </motion.div>
    </div>

    {/* Cards Section */}
    <div className="flex flex-col sm:flex-row w-full gap-4 sm:h-[60vh]">

      {/* HOUSE CARD */}
      <div
        className="
          w-full sm:w-1/2 
          min-h-[40vh] sm:h-full
          bg-cover bg-center 
          rounded-2xl sm:rounded-3xl 
          p-6 sm:p-8 
          flex flex-col justify-between
        "
        style={{ backgroundImage: `url(${house})` }}
      >
        <div className="text-3xl sm:text-4xl text-white font-semibold">
          House
        </div>

        <div>
          <button
           onClick={() => navigate("/aboutus")}
            className="group inline-flex items-center gap-3 px-4 sm:px-5 py-2 sm:py-3 
              rounded-lg relative overflow-hidden text-black bg-white text-sm sm:text-base"
          >
            <span className="tracking-wide">About Us</span>

            <div className="relative w-4 h-4">
              <svg
                viewBox="0 0 15 14"
                className="absolute inset-0 w-4 h-4 fill-current transition-transform duration-300 group-hover:translate-x-2"
              >
                <path d="M-8.10623e-05 6.12375H10.668L5.7611 1.21689L7.00973 -0.00982666L14.0195 6.99998L7.00973 14.0098L5.7611 12.7831L10.668 7.8762H-8.10623e-05V6.12375Z" />
              </svg>

              <svg
                viewBox="0 0 15 14"
                className="absolute inset-0 w-4 h-4 fill-current opacity-0 -translate-x-4 transition-transform duration-300 group-hover:translate-x-0"
              >
                <path d="M-8.10623e-05 6.12375H10.668L5.7611 1.21689L7.00973 -0.00982666L14.0195 6.99998L7.00973 14.0098L5.7611 12.7831L10.668 7.8762H-8.10623e-05V6.12375Z" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* COMMERCIAL CARD */}
      <div
        className="
          w-full sm:w-1/2 
          min-h-[40vh] sm:h-full
          bg-cover bg-center 
          rounded-2xl sm:rounded-3xl 
          p-6 sm:p-8 
          flex flex-col justify-between
        "
        style={{ backgroundImage: `url(${commercial})` }}
      >
        <div className="text-3xl sm:text-4xl text-white font-semibold">
          Commercial
        </div>

        <div>
          <button
           onClick={() => navigate("/aboutus")}
            className="group inline-flex items-center gap-3 px-4 sm:px-5 py-2 sm:py-3 
              rounded-lg relative overflow-hidden text-black bg-white text-sm sm:text-base"
          >
            <span className="tracking-wide">About Us</span>

            <div className="relative w-4 h-4">
              <svg
                viewBox="0 0 15 14"
                className="absolute inset-0 w-4 h-4 fill-current transition-transform duration-300 group-hover:translate-x-2"
              >
                <path d="M-8.10623e-05 6.12375H10.668L5.7611 1.21689L7.00973 -0.00982666L14.0195 6.99998L7.00973 14.0098L5.7611 12.7831L10.668 7.8762H-8.10623e-05V6.12375Z" />
              </svg>

              <svg
                viewBox="0 0 15 14"
                className="absolute inset-0 w-4 h-4 fill-current opacity-0 -translate-x-4 transition-transform duration-300 group-hover:translate-x-0"
              >
                <path d="M-8.10623e-05 6.12375H10.668L5.7611 1.21689L7.00973 -0.00982666L14.0195 6.99998L7.00973 14.0098L5.7611 12.7831L10.668 7.8762H-8.10623e-05V6.12375Z" />
              </svg>
            </div>
          </button>
        </div>
      </div>

    </div>

  </div>
</section>


      <section className="mx-8 my-32 h-full flex flex-col md:flex-row justify-between gap-10">
  {/* Left Title Section */}
  <div className="font-serif text-amber-600 text-4xl md:text-3xl w-full md:w-1/2">
    ADVANTAGES
  </div>

  {/* Right Accordion Section */}
  <div className="w-full md:w-1/2 flex flex-col gap-4">

    <Accordion
      title="Saves money on electricity bill"
      open={activeIndex === 0}
      onToggle={() => handleToggle(0)}
    >
      Solar energy is a clean and renewable form of energy, unlike fossil fuels that release harmful emissions. Installing solar panels helps save on electricity costs while supporting a cleaner environment.
    </Accordion>

    <Accordion
      title="Renewable and sustainable energy source"
      open={activeIndex === 1}
      onToggle={() => handleToggle(1)}
    >
      Solar panels convert sunlight into electricity without causing pollution. They are a sustainable solution that reduces reliance on fossil fuels.
    </Accordion>

    <Accordion
      title="Long-term investment"
      open={activeIndex === 2}
      onToggle={() => handleToggle(2)}
    >
      Solar panels provide long-term financial benefits by reducing bills and offering potential returns through incentives and savings.
    </Accordion>

    <Accordion
      title="Positive environmental impact"
      open={activeIndex === 3}
      onToggle={() => handleToggle(3)}
    >
      Solar power decreases carbon emissions and helps combat climate change while preserving natural resources.
    </Accordion>

    <Accordion
      title="Low maintenance"
      open={activeIndex === 4}
      onToggle={() => handleToggle(4)}
    >
      Solar systems require minimal maintenance with occasional cleaning and inspection due to having no moving parts.
    </Accordion>

    <Accordion
      title="Good ROI"
      open={activeIndex === 5}
      onToggle={() => handleToggle(5)}
    >
      Solar panels offer strong ROI through reduced electricity bills, tax incentives, and long-term financial savings.
    </Accordion>

  </div>
</section>

      <section className="h-[90vh] m-4 md:p-20 p-6 ">
      <div className="relative bg-center bg-cover h-full inset-0  rounded-2xl  flex items-end justify-center" 
       style={{ backgroundImage: `url(${forest})` }}>
          <div className="absolute inset-0 bg-black/35 rounded-2xl"></div>
          <div className="absolute flex flex-col justify-end gap-8 items-center h-full text-center ">
             <div className="md:text-5xl text-2xl text-white ">Are you ready not to pay for electricity anymore?</div>
 <div> <div>
                <button
                onClick={()=>navigate('/aboutus')}
                  className="group inline-flex items-center gap-3 px-5 py-3 rounded-lg relative overflow-hidden text-black bg-white"
                >
                  <span className="tracking-wide">Yes let's do it</span>

                  <div className="relative w-4 h-4">
                    <svg
                      viewBox="0 0 15 14"
                      className="absolute inset-0 w-4 h-4 fill-current transition-transform duration-300 group-hover:translate-x-2"
                    >
                      <path d="M-8.10623e-05 6.12375H10.668L5.7611 1.21689L7.00973 -0.00982666L14.0195 6.99998L7.00973 14.0098L5.7611 12.7831L10.668 7.8762H-8.10623e-05V6.12375Z" />
                    </svg>

                    <svg
                      viewBox="0 0 15 14"
                      className="absolute inset-0 w-4 h-4 fill-current opacity-0 -translate-x-4 transition-transform duration-300 group-hover:translate-x-0"
                    >
                      <path d="M-8.10623e-05 6.12375H10.668L5.7611 1.21689L7.00973 -0.00982666L14.0195 6.99998L7.00973 14.0098L5.7611 12.7831L10.668 7.8762H-8.10623e-05V6.12375Z" />
                    </svg>
                  </div>
                </button>
              </div></div>
           <div className="backdrop-blur-2xl bg-white/10 rounded-t-4xl h-1/2 md:w-[400px] w-[300px] text-white p-6 space-y-4">

      <div className="text-2xl font-semibold">Solar energy generated:</div>

      {/* Value Display */}
      <div className="text-4xl font-bold">
        {data[active]} kw/h
      </div>

      {/* Buttons */}
      <div className="flex md:gap-4 gap-1 md:text-base text-xs mt-4 ">
        {(["today", "week", "month", "year"] as const).map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`px-4 py-2 rounded-xl transition 
              ${active === item ? "bg-white text-green-950" : "bg-green-900/40"}`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>

    </div>
          </div>

 <div></div>
      </div>

      </section>
      <Footer/>
    
      
    </>
  );
};

export default Home;
