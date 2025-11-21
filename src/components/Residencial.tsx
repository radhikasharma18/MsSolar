import React from 'react'
import house from '../assets/house.jpg'
import Residentialprops from '../components/ResidencialProps'

const Residencial = () => {
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
         <div ><a
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

                        
                         
                        </div>
                      </a></div></div></div>
                      <section className='h-screen m-16'>
<div className='h-2/10 '>
<div className='text-amber-600 text-2xl'>YOUR OWN ENERGY</div>
<div className='text-4xl font-semibold'>Get on the path to energy independence</div></div>
<div className='h-8/10 w-full bg-green-900 flex justify-between'>
<div>
<div className='flex w-full h-40 '>
<div className='w-1/2 h-1/2 '>
<Residentialprops 
title='Utility Bills'
icon="🔆"
description='Reduce or in some cases, eliminate your home’s electric bill'/></div>
<div><Residentialprops 
title='Utility Bills'
icon="🔆"
description='Reduce or in some cases, eliminate your home’s electric bill'/></div></div>
<div className='flex w-full h-40 '>
<div><Residentialprops 
title='Utility Bills'
icon="🔆"
description='Reduce or in some cases, eliminate your home’s electric bill'/></div>
<div><Residentialprops 
title='Utility Bills'
icon="🔆"
description='Reduce or in some cases, eliminate your home’s electric bill'/></div></div></div>
<div>hii</div>


</div>

                      </section>


    </div>
  )
}

export default Residencial