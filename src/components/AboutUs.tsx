
import forest from '../assets/forest.jpg'
import Footer from './Footer'
import { GiSolarPower } from "react-icons/gi";
import { RiTeamLine } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import {motion} from 'framer-motion'
import about1 from '../assets/about3.jpeg'
import about from '../assets/about1.jpeg'
import about2 from '../assets/about2 (2).jpeg'
import about3 from '../assets/about4.jpeg'
import about4 from '../assets/about5.jpeg'
import about5 from '../assets/about6.jpeg'
import about6 from '../assets/about7.jpeg'
import about7 from '../assets/about2.jpeg'
import panel from '../assets/panel.png'


const aboutPoints = [
  {
    icon: <GiSolarPower className='text-amber-600 text-4xl' />,
    title: "Our Mission",
    desc: "To make clean, reliable, and affordable solar energy accessible to everyone."
  },
  {
    icon: <RiTeamLine className='text-amber-600 text-4xl' />,
    title: "Our Team",
    desc: "A dedicated team committed to bringing sustainable energy solutions to your home."
  },
  {
    icon: <FaHandshake className='text-amber-600 text-4xl' />,
    title: "Our Promise",
    desc: "Honest guidance, premium-quality installation, and long-term service support."
  },
  {
    icon: <MdHistory className='text-amber-600 text-4xl' />,
    title: "Our Vision",
    desc: "A future where every household is energy-independent and environmentally responsible."
  }
]

const AboutUs = () => {
  return (
    <div className='w-full'>

      {/* HERO SECTION */}
      <motion.div
      initial={{scale: 0.8, y: -20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-124 rounded-2xl bg-center bg-cover m-4 font-semibold p-8 text-white flex items-end relative"
        style={{ backgroundImage: `url(${forest})` }}
      >
        <div className="absolute inset-0 bg-black/40 rounded-2xl h-124 "></div>
        <div className='relative z-10 flex flex-col gap-4'>
          <div className='text-6xl font-bold tracking-wide'>About Us</div>
          <div className='w-full lg:w-1/2 text-xl opacity-90'>
            Powering homes and businesses with clean, efficient, and sustainable solar solutions.
          </div>
        </div>
      </motion.div>


      {/* ABOUT SECTION */}
      <section className='m-16'>
        <div className='text-amber-600 text-2xl font-semibold'>WHO WE ARE</div>
        <div className='text-4xl font-bold mb-10'>Powering a Cleaner Tomorrow</div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
          {aboutPoints.map((p, i) => (
            <div
              key={i}
              className='p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300 bg-white'
            >
              <div>{p.icon}</div>
              <div className='text-2xl font-semibold mt-3'>{p.title}</div>
              <div className='text-gray-600 mt-2'>{p.desc}</div>
            </div>
          ))}
        </div>
      </section>


      {/* IMAGE + CONTENT SECTION */}
      <section className='m-16 flex flex-col lg:flex-row gap-12 items-center'>
        <img
          src={panel}
          className='h-[430px] w-[450px] rounded-2xl shadow-2xl object-cover hover:scale-105 transition duration-500'
        />

        <div className='flex flex-col gap-6 w-full lg:w-1/2'>
          <div className='text-amber-600 text-2xl font-semibold'>OUR STORY</div>
          <div className='text-4xl font-bold'>Why We Started</div>
          <div className='text-gray-700 text-lg leading-relaxed'>
            We started with a clear purpose—to reduce electricity dependency and make solar energy accessible for everyone. Our focus is on delivering reliable systems, transparent service, and long-term performance. We believe solar energy is not just a technology, but a movement toward a cleaner and more independent tomorrow.
          </div>

          <div className='text-gray-700 text-lg leading-relaxed'>
            With each installation, we aim to create a positive impact on both the environment and our customers' lives by reducing electricity bills and promoting energy freedom.
          </div>
        </div>
      </section>
      <section className='h-screen m-16'>
        <div className='text-4xl font-bold text-center mb-16 font-serif'>
          Inaugration
      
        </div>
    <div className="flex gap-4">
  
  
  <div className="flex-1 grid grid-rows-2 gap-4">
 
    <div className="grid grid-cols-2 gap-4">
      <img src={about1} className="w-full h-full object-cover rounded-2xl hover:scale-90 transition duration-300" />
      <img src={about2} className="w-full h-full object-cover rounded-2xl  hover:scale-90 transition duration-300" />
    </div>
 
    <div className="grid grid-cols-2 gap-4">
      <img src={about3} className="w-full h-full object-cover rounded-2xl hover:scale-90 transition duration-300" />
      <img src={about4} className="w-full h-full object-cover rounded-2xl hover:scale-90 transition duration-300" />
    </div>
  </div>


  <div className="w-1/3 flex justify-center items-center">
    <img src={about} className="w-full h-1/2 object-cover rounded-2xl hover:scale-90 transition duration-300" />
  </div>

 
  <div className="flex-1 grid grid-rows-2 gap-4">
 
    <div className="grid grid-cols-2 gap-4">
      <img src={about5} className="w-full h-full object-cover rounded-2xl hover:scale-90 transition duration-300" />
      <img src={about6} className="w-full h-full object-cover rounded-2xl hover:scale-90 transition duration-300" />
    </div>
   
    <div className="grid gap-4">
    <img src={about7} className="w-full h-full object-cover rounded-2xl hover:scale-90 transition duration-300" />
    </div>
  </div>

</div>




      </section>

      <Footer />
    </div>
  )
}

export default AboutUs;