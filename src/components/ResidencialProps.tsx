import React from 'react'
import { ReactNode } from "react";

interface residentialprops{
    icon:ReactNode;
    title:string;
    description:string;

}

const Residentialprops: React.FC<residentialprops> = ({icon,title,description}) => {
  return (
    <div className='bg-gray-200 w-full ' > 
     <div>{icon}</div>
     <div>
    <div>{title}</div>
     <div>{description}</div>
     </div>
    </div>
  )
}

export default Residentialprops