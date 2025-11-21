import solar from "../assets/solar1.jpg";
import { motion } from "framer-motion";
import CounterOnScroll from "./CounterOnScroll";
import house from "../assets/house.jpg";
import commercial from "../assets/commercial.jpg";
import Accordion from "../components/Accordion";
import { useState } from "react";
import forest from '../assets/forest.jpg'
import Footer from '../components/Footer'


const Home = () => {
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
      <section className="h-screen relative">
        {/* Background Image */}
        <motion.div
        initial={{ scale:0.8}}
        animate={{ scale:1}}
        transition={{ duration: 1, ease: "easeOut" }} className="absolute inset-0 z-0 m-4 ">
          <img 
            src={solar} 
            alt="Solar panels" 
            className="w-full h-full object-cover rounded-2xl"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/35 rounded-2xl"></div>
        </motion.div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-end">
          <div className="h-11/12 m-4 w-full">
            <div className="relative flex flex-col text-white justify-end px-16 p-2 h-full font-manrope rounded-4xl">
              {/* Hero Content */}
              <div className="relative z-10 flex flex-col  justify-end  h-full">
                <div className="mb-8">
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-2/5 backdrop-blur-2xl bg-white/35 p-2 rounded-t-2xl rounded-br-2xl text-lg"
                  >
                    Say goodbye to traditional electricity bills and hello to a
                    brighter and greener lifestyle with our solar panel solutions
                  </motion.div>

                  <div className="flex items-end">
                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="text-7xl w-4/5 font-manrope "
                    >
                      Light Up Your Home or Business with Solar Energy
                    </motion.div>

                    {/* Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 2, ease: "easeOut" }}
                      className="button-wrapper"
                    >
                      <a
                        href="/contact"
                        className="group inline-flex items-center gap-3 px-5 py-3 rounded-lg text-white relative overflow-hidden bg-amber-600"
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
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-screen">
        <div className="m-8 flex flex-col gap-32 h-screen">
          <div className="w-7/10">
            <motion.div
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 2, ease: "easeOut" }} className="font-serif text-amber-600 text-3xl">
              ABOUT COMPANY
            </motion.div>
            <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 2, ease: "easeOut" }}
            className="text-5xl font-sans mt-4">
              Our company is dedicated to harnessing the power of the sun to
              provide sustainable and eco-friendly energy solutions
            </motion.div>
          </div>
          <div className="flex justify-between font-semibold">
            <div className="text-amber-600 text-9xl">
              <CounterOnScroll end={40} />
              <span className="text-gray-300 text-lg">years of work</span>
            </div>
            <div className="text-amber-600 text-9xl">
              <CounterOnScroll end={380} />
              <span className="text-gray-300 text-lg">clients</span>
            </div>
            <div className="text-amber-600 text-9xl">
              <CounterOnScroll end={50} />
              <span className="text-gray-300 text-lg">workers</span>
            </div>
          </div>
          <div>
            <a
              href="/about-us"
              className="group inline-flex items-center gap-3 px-5 py-3 rounded-lg relative overflow-hidden text-amber-600 border-2 border-amber-600"
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
            </a>
          </div>
        </div>
      </section>

      <section className="h-screen m-8">
        <div>
          <div className="w-7/10 h-full">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 2, ease: "easeOut" }}className="font-serif text-amber-600 text-3xl mb-8">
              WE WORK WITH
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 2, ease: "easeOut" }}className="text-5xl mb-8">
              We install high-quality solar panels both in homes and in
              large-scale industries
            </motion.div>
          </div>
          <div className="flex w-full h-[60vh] gap-4">
            <div
              className="w-1/2 h-full bg-cover bg-center rounded-3xl p-8 flex flex-col justify-between"
              style={{ backgroundImage: `url(${house})` }}
            >
              <div className="text-4xl text-white font-semibold">House</div>
              <div>
                <a
                  href="/about-us"
                  className="group inline-flex items-center gap-3 px-5 py-3 rounded-lg relative overflow-hidden text-black bg-white"
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
                </a>
              </div>
            </div>
            <div
              className="w-1/2 h-full bg-cover bg-center rounded-3xl p-8 flex flex-col justify-between"
              style={{ backgroundImage: `url(${commercial})` }}
            >
              <div className="text-4xl text-white font-semibold">
                Commercial
              </div>
              <div>
                <a
                  href="/about-us"
                  className="group inline-flex items-center gap-3 px-5 py-3 rounded-lg relative overflow-hidden text-black bg-white"
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="m-8 flex justify-between my-32 h-full">
        <div className="font-serif text-amber-600 text-3xl w-1/2">ADVANTAGES</div>
         <div className="w-1/2 flex flex-col justify-between">
      <Accordion
        title="Saves money on electicity bill"
        open={activeIndex === 0}
        onToggle={() => handleToggle(0)}
      >
       Solar energy is a clean and renewable form of energy, unlike fossil fuels that release harmful emissions. By installing solar panels, individuals and businesses contribute to a greener future and a cleaner environment.
      </Accordion>

      <Accordion
        title="Renewable and sustainable energy source"
        open={activeIndex === 1}
        onToggle={() => handleToggle(1)}
      >
       Solar panels are a sustainable energy source, converting sunlight into electricity without emissions or resource depletion. They offer a reliable, low-maintenance solution, reducing reliance on fossil fuels and mitigating environmental impact.
      </Accordion>

      <Accordion
        title="Long-term investment"
        open={activeIndex === 2}
        onToggle={() => handleToggle(2)}
      >
        Solar panels are a smart long-term investment, providing clean energy for decades while reducing electricity bills and offering potential returns through incentives and savings.
      </Accordion>
       <Accordion
        title="Positive environmental impact"
        open={activeIndex === 3}
        onToggle={() => handleToggle(3)}
      >
        Solar panels reduce carbon emissions, combatting climate change by harnessing clean energy from sunlight, minimizing pollution, and preserving natural resources.
      </Accordion>
       <Accordion
        title="Low maintenance "
        open={activeIndex === 4}
        onToggle={() => handleToggle(4)}
      >
        Solar panels are low maintenance, needing occasional cleaning and inspection. With no moving parts, they require minimal upkeep, making them hassle-free and cost-effective.
      </Accordion>
       <Accordion
        title="Good ROI"
        open={activeIndex === 5}
        onToggle={() => handleToggle(5)}
      >
        Solar panels boast a low ROI due to reduced electricity bills, potential tax incentives, and long-term savings, making them a financially prudent investment for homeowners and businesses alike.
      </Accordion>
    </div>
      </section>
      <section className="h-[90vh] m-4 p-20 ">
      <div className="relative bg-center bg-cover h-full inset-0  rounded-2xl  flex items-end justify-center" 
       style={{ backgroundImage: `url(${forest})` }}>
          <div className="absolute inset-0 bg-black/35 rounded-2xl"></div>
          <div className="absolute flex flex-col justify-end gap-8 items-center h-full text-center ">
             <div className="text-5xl text-white">Are you ready not to pay for electricity anymore?</div>
 <div> <div>
                <a
                  href="/about-us"
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
                </a>
              </div></div>
           <div className="backdrop-blur-2xl bg-white/10 rounded-t-4xl h-1/2 w-[400px] text-white p-6 space-y-4">

      <div className="text-2xl font-semibold">Solar energy generated:</div>

      {/* Value Display */}
      <div className="text-4xl font-bold">
        {data[active]} kw/h
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-4">
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
