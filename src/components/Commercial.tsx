
import Commercial1 from '../assets/commercial.jpg'
import { useNavigate } from 'react-router-dom'

const Commercial = () => {
    const navigate =useNavigate();
  return (
    <div>
        <div
        className="h-124 rounded-2xl bg-center bg-cover m-4  font-semibold p-8 text-white flex items-center"
        style={{ backgroundImage: `url(${Commercial1})` }}
      >
         <div className="absolute inset-0 bg-black/40 rounded-2xl h-124 m-4"></div>
         <div className='flex flex-col gap-8'>
         <div className='relative z-10 flex flex-col gap-2'>
         <div className='text-6xl '>
Solar for your commercial or industrial projects
</div>
         <div className='text-xl '>Say goodbye to traditional electricity bills and hello to a brighter and greener lifestyle with our solar panel solutions</div>
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
    </div>
  )
}

export default Commercial