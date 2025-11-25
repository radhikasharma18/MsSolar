
import Commercial1 from '../assets/commercial.jpg'
import { useNavigate } from 'react-router-dom'
import { Zap } from 'lucide-react';
import { Bird } from 'lucide-react';
import { RiVoiceprintLine } from "react-icons/ri";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useState } from 'react';
import forest from '../assets/forest.jpg'
import Footer from './Footer';
import Residentialprops from './ResidencialProps';
import {motion} from 'framer-motion'



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
        initial={{ scale: 0.8, y: -20 }}
  animate={{ scale: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="relative h-[500px] rounded-2xl bg-center bg-cover m-4 font-semibold p-8 text-white flex items-center"
  style={{ backgroundImage: `url(${Commercial1})` }}
>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col gap-8">

    <div className="flex flex-col gap-2">
      <div className="text-4xl md:text-6xl w-full md:w-2/3 font-bold">
        Solar for your commercial or industrial projects
      </div>

      <div className="text-lg md:text-xl w-full md:w-2/3">
        Say goodbye to traditional electricity bills and hello to a brighter 
        and greener lifestyle with our solar panel solutions.
      </div>
    </div>

    <div>
      <button
        onClick={() => navigate('/contact')}
        className="group inline-flex items-center gap-3 p-4 rounded-lg text-white bg-amber-600 relative overflow-hidden"
      >
        <span className="tracking-wide">Order Installation</span>

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



                  <section className=' m-16 h-screen flex flex-col gap-32'>
                    <div className='text-4xl font-semibold '>Our simplified process</div>
                    <div className="flex gap-10">

  
    <div className="grid grid-cols-3 gap-6 flex-1">

      <div className="bg-[#f2f2f2] rounded-3xl">
        <Residentialprops 
          title="Utility Bills"
          icon= "01"
          description=""
        />
      </div>

      <div className="bg-[#f2f2f2]  rounded-3xl">
        <Residentialprops 
          title="Good ROI"
          icon="02"
          description=""
        />
      </div>

      <div className="bg-[#f2f2f2] rounded-3xl">
        <Residentialprops 
          title="Reliability"
          icon='03'
          description=""
        />
      </div>

      <div className="bg-[#f2f2f2]  rounded-3xl">
        <Residentialprops 
          title='"Green" Champion'
          icon='04'
          description=""
        />
      </div>

    

   <div className="bg-[#f2f2f2]  rounded-3xl">
        <Residentialprops 
          title='"Green" Champion'
          icon='05'
          description=""
        />
      </div>
      <div className="bg-[#f2f2f2]  rounded-3xl">
        <Residentialprops 
          title='"Green" Champion'
          icon='06'
          description=''
        />
      </div>
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
        style={{ backgroundImage: `url(${Commercial1})` }}>
           <div className="absolute inset-0 bg-black/35 rounded-2xl"></div>
          <div className='absolute'>
            <div className='text-center'>love with nature</div>
            <div className='flex  text-5xl items-center font-bold'><Zap />MS Solar</div>
          </div>
 

       </div>
 
       </section> <section className='m-16 flex flex-col gap-16 '>
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
       </section> <section className='m-16 '>
         <div>
         <div className='text-amber-600 text-2xl'>TESTIMONIALS</div>
       <div className='text-4xl font-semibold'>Here's what customers say about us</div>
         </div>
         <div className="bg-amber-600/75 h-80 rounded-2xl relative overflow-hidden p-6 text-white flex justify-center mt-16 drop-shadow-2xl font-serif">
       
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
         <section className="h-[70vh] md:p-16 p-6 ">
       <div className="relative bg-center bg-cover h-full inset-0  rounded-2xl  flex items-center justify-center text-white" 
        style={{ backgroundImage: `url(${forest})` }}>
           <div className="absolute inset-0 bg-black/35 rounded-2xl"></div>
          <div className='absolute flex  flex-col gap-6 '>
            <div className='text-center text-5xl'>Get a pricing quote for a commercial or industrial panel installation</div>
            <div className='flex justify-center items-center'>
                <button
          onClick={()=>navigate('/contact')}
          className="group inline-flex items-center gap-3 p-4 rounded-lg relative overflow-hidden text-amber-600 bg-white">
                        <span className="font-semibold">Contact Us!</span>

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
 
       </section> <Footer/></div>
  )
}

export default Commercial