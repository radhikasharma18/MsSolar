import solar from '../assets/solar1.jpg'
import { IoReorderThreeOutline } from "react-icons/io5"
import CountUp from "react-countup";
import CounterOnScroll from './CounterOnScroll';


const Home = () => {
  return (
    <div className='bg-white m-1 '>
        <section className='h-screen'>
          <div className=' relative flex flex-col bg-{solar} text-white justify-between px-16 p-8 bg-cover h-11/12 font-sans rounded-4xl m-4'
            style={{ backgroundImage: `url(${solar})` }}>
            <div className="absolute inset-0 bg-black/35 rounded-4xl"></div>          
            <div className='flex justify-between z-10  items-center'>
            <div className='flex justify-between w-2/5'>
            <a href='' className='text-2xl font-bold'>MS Solar</a>
            <div className='flex  font-bold text-xl justify-around  w-2/3 gap-4'>
              <a href=''>Residential</a>
              <a href=''>Commercial</a></div></div>
            <div className='flex font-bold text-xl'>
             
              <button className='text-4xl backdrop-blur-2xl bg-white/35 rounded-full p-2 cursor-pointer'><IoReorderThreeOutline /></button>
            </div>
            </div>
            <div className='z-10 mb-8 '>
              <div className='w-2/5 backdrop-blur-2xl bg-white/35 p-2 rounded-t-2xl rounded-br-2xl text-lg'>Say goodbye to traditional electricity bills and hello to a brighter and greener lifestyle with our solar panel solutions</div>
              <div className='flex items-end'>
              <div className='text-7xl w-4/5'>Light Up Your Home or Business with Solar Energy</div>
             

<div className="button-wrapper">
  <a
    href="/about-us"
    className="group inline-flex items-center gap-3  px-5 py-3 rounded-lg text-white relative overflow-hidden bg-amber-600"
  >
    <span className="tracking-wide">Order Installation</span>

  <div className="relative w-4 h-4">
  {/* Main arrow */}
  <svg
    viewBox="0 0 15 14"
    className="absolute inset-0 w-4 h-4 fill-current transition-transform duration-300 group-hover:translate-x-2"
  >
    <path d="M-8.10623e-05 6.12375H10.668L5.7611 1.21689L7.00973 -0.00982666L14.0195 6.99998L7.00973 14.0098L5.7611 12.7831L10.668 7.8762H-8.10623e-05V6.12375Z" />
  </svg>

  {/* Second arrow (hidden but still exists) */}
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
        <section className='h-screen '>
          <div className='m-8 flex flex-col gap-32 h-screen'>
            <div className='w-8/10'>
            <div className='font-mono text-amber-600 text-3xl '>ABOUT COMPANY</div>
            <div className='text-5xl font-sans  mt-4'>Our company is dedicated to harnessing the power of the sun to provide sustainable and eco-friendly energy solutions</div>
            </div>
            <div className='flex justify-between font-semibold'>
            <div className=' text-amber-600 text-9xl'><CounterOnScroll end={40}/> <span className='text-gray-300 text-lg'>years of work</span></div>
            <div className=' text-amber-600 text-9xl'><CounterOnScroll end={380}/><span className='text-gray-300 text-lg'>clients</span></div>
            <div className=' text-amber-600 text-9xl'><CounterOnScroll end={50}/><span className='text-gray-300 text-lg'>workers</span></div>
            </div>
            <div> 
              <a
    href="/about-us"
    className="group inline-flex items-center gap-3  px-5 py-3 rounded-lg relative overflow-hidden text-amber-600 border-2 border-amber-600">
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

  </a></div>
          </div>

        </section>
        
        <section className='h-screen'>
<div>  <div> 
          <div className='font-mono text-amber-600 text-3xl '>WE WORK WITH</div>
          <div>We install high-quality solar panels both in homes and in large-scale industries</div></div>
          <div></div></div>
        
         
        </section>



    </div>
  )
}

export default Home