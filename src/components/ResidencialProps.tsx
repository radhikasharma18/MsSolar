import React from 'react'
import { ReactNode } from "react";

interface residentialprops{
    icon:ReactNode;
    title:string;
    description:string;

}

const Residentialprops: React.FC<residentialprops> = ({icon,title,description}) => {
  return (
    <div className='bg-gray-100  rounded-3xl my-2 p-8 flex flex-col justify-between gap-4' > 
     <div className='bg-white rounded-md size-9 flex justify-center items-center text-amber-600 text-2xl'>{icon}</div>
     <div className='flex flex-col gap-1'>
    <div className='text-2xl font-semibold '>{title}</div>
     <div className='text-xl text-gray-700'>{description}</div>
     </div>
    </div>
  )
}

export default Residentialprops