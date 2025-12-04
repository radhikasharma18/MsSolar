import { useNavigate } from 'react-router-dom'
import More1 from '../assets/more.jpg'
import { motion } from 'framer-motion'
import { IoAddSharp } from "react-icons/io5"
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6"
import { Zap } from 'lucide-react'

const More = () => {
  const navigate = useNavigate();

  return (
    <div className='min-h-screen flex flex-col md:flex-row'>

      {/* Left Image Section */}
      <div
        className='w-full md:w-2/5 h-64 md:h-auto bg-center bg-cover relative transform scale-x-[-1]'
        style={{ backgroundImage: `url(${More1})` }}
      >
        <div className='scale-x-[-1] flex m-6 md:m-8 text-2xl md:text-3xl items-center text-white font-bold'>
          <Zap className='text-amber-500' /> MSSolar
        </div>
      </div>

      {/* Right Section */}
      <div className='m-6 md:m-8 text-black w-full md:w-3/5 flex flex-col justify-between gap-10'>

        {/* Online + Close button */}
        <div className='flex justify-between items-start'>

          <div className='flex gap-3 items-center'>
            <motion.div
              initial={{ scale: 0.8, opacity: 0.8 }}
              animate={{ scale: [0.8, 1, 0.8], opacity: 1 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className='size-7 md:size-8 bg-green-200 rounded-full flex justify-center items-center'
            >
              <div className='size-5 md:size-6 bg-green-400 rounded-full flex justify-center items-center'>
                <div className='size-3 md:size-4 bg-green-500 rounded-full'></div>
              </div>
            </motion.div>
            <div className='text-sm md:text-base'>We are online right now</div>
          </div>

          <button
            onClick={() => navigate('/')}
            className='bg-gray-900 size-9 md:size-10 rounded-full text-white rotate-45 flex justify-center items-center cursor-pointer text-xl md:text-2xl z-60'
          >
            <IoAddSharp />
          </button>

        </div>

        {/* Menu Buttons */}
        <div className='text-2xl md:text-4xl font-semibold flex flex-col items-start gap-3 md:gap-4'>
          <button onClick={() => navigate('/')} className='cursor-pointer'>Home</button>
          <button onClick={() => navigate('/aboutus')} className='cursor-pointer'>About Us</button>
          <button onClick={() => navigate('/residential')} className='cursor-pointer'>Residential</button>
          <button onClick={() => navigate('/commercial')} className='cursor-pointer'>Commercial</button>
          <button onClick={() => navigate('/contact')} className='cursor-pointer'>Contact</button>
        </div>

        {/* Office details + Social */}
        <div className=' flex justify-between p-8'>

          <div>
            <div className='text-gray-400 font-semibold'>Office</div>
            <div>F-109-112, 1st Floor, Time Square, <br/>
                 Central Spine,Vidhyadhar Nagar, <br/>
                 Jaipur, Rajasthan, India 302016</div>

          </div>

          <div>
            <div className='text-gray-400 font-semibold'>Toll Free:</div>
            <div>8619818765</div>
          </div>

          <div>
            <div className='text-gray-400 font-semibold'>Email:</div>
            <div>info@mssolar.com</div>
          </div>

          <div className='flex text-xl gap-4'>
            <div className='bg-gray-100 size-10 flex justify-center items-center rounded-full hover:bg-amber-100 transition cursor-pointer'>
             <a href="https://www.instagram.com/msfinsolar/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
                </a>
            </div>
             
            <div className='bg-gray-100 size-10 flex justify-center items-center rounded-full hover:bg-amber-100 transition cursor-pointer'>
               <a href=" https://www.linkedin.com/company/msfin-credit-pvt-ltd/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
                </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default More
