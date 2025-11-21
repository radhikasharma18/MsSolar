import React from 'react'
import contact from '../assets/contact.jpg'
import Footer from './Footer'
import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";


const Contact = () => {
  const [formData, setFormData] = useState({
     firstName: "",
     lastName: "",
     email: "",
     phone: "",
     projectType: "",
     details: "",
   });
   const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
     const handleRadio = (value: string) => {
    setFormData({ ...formData, projectType: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log(formData);
      alert("Form saved!");
    };

  return (
    <div className="w-full">

      {/* Top Image */}
      <div
        className="h-80 rounded-2xl bg-center bg-cover m-4 text-5xl font-semibold p-8 text-white flex items-end "
        style={{ backgroundImage: `url(${contact})` }}
      >Contact us for a quote</div>

      {/* Text Below the Image */}
      <section className=" px-12 mt-16 h-full mb-16">
        <h2 className="text-2xl  text-amber-600 ">CONTACT DETAILS</h2>

        <p className="mt-2 text-gray-700 text-[2.5rem] w-1/2 mb-16">
          Leave your contact details right here and we will call you 
          <span className="text-amber-600 font-semibold"> within 1 day</span>.
        </p>
        <div className='w-full flex gap-8 '>
        <div className='w-1/2 rounded-3xl'>
         
         
      
  
     
          <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded-3xl shadow-xl h-full  max-w-3xl mx-auto w-full space-y-6">
            {/* Row 1 */}
            <div className="flex gap-4">
              <input
                name="firstName"
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg outline-none bg-white"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                name="lastName"
                placeholder="Enter last name"
                className="w-full p-3 rounded-lg outline-none bg-white"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
    
            {/* Row 2 */}
            <div className="flex gap-4">
              <input
                name="email"
                placeholder="Email"
                className="w-full p-3 bg-white rounded-lg outline-none"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                name="phone"
                placeholder="Phone"
                className="w-full p-3 bg-white rounded-lg outline-none"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
    
            {/* Project Type */}
            <div className="bg-white p-4 rounded-lg">
              <p className="mb-2 font-medium">This project is:</p>
    
              <div className="flex gap-6">
                <label className="flex gap-2 items-center cursor-pointer">
                  <input
                    type="radio"
                    name="projectType"
                    checked={formData.projectType === "Residential"}
                    onChange={() => handleRadio("Residential")}
                  />
                  <span>Residential</span>
                </label>
    
                <label className="flex gap-2 items-center cursor-pointer">
                  <input
                    type="radio"
                    name="projectType"
                    checked={formData.projectType === "Commercial"}
                    onChange={() => handleRadio("Commercial")}
                  />
                  <span>Commercial</span>
                </label>
    
                <label className="flex gap-2 items-center cursor-pointer">
                  <input
                    type="radio"
                    name="projectType"
                    checked={formData.projectType === "Industrial"}
                    onChange={() => handleRadio("Industrial")}
                  />
                  <span>Industrial</span>
                </label>
              </div>
            </div>
    
            {/* Textarea */}
            <textarea
              name="details"
              placeholder="Enter project details..."
              className="w-full h-32 p-3 bg-white rounded-lg outline-none"
              value={formData.details}
              onChange={handleChange}
            />
    
            {/* Submit Button */}
            <div className="text-right">
              <button type="submit"
                className="px-6 py-3 bg-amber-600 text-white rounded-xl 
                           shadow-md hover:bg-amber-600/90  hover:scale-105 flex items-center gap-2 hover:shadow-2xl"
              >
                <Send size={18} /> Save
              </button>
            </div>
          </form>
      
    </div>
        <div className='w-1/2 bg-gray-100 rounded-3xl shadow-xl'>
        <div></div>
        <div>
        <div className='w-1/2 m-8  h-140 flex flex-col justify-between' >
        <div>
        <div className='text-gray-400 text-xl'>Jaipur Office:</div>
        <div className='text-lg'>F-109-112, 1st Floor, Time Square, Central Spine, Vidhyadhar Nagar, Jaipur, Rajasthan India 302039</div></div>
       <div>
        <div className='text-gray-400 text-xl'>Phone no.:</div>
        <div className='text-lg'>+91-7230032601</div></div>
       <div>
        <div className='text-gray-400 text-xl'>Email:</div>
        <div className='text-lg'>info@msfin.in</div></div>
        <div>
        <div className='text-gray-400 text-xl'>Business Hours:</div>
        <div className='text-lg'>Monday - Friday 8am to 4:30pm
Saturday - By Appointment
Sunday - Closed</div></div>
        <div>
        <div className='text-gray-400 text-xl'>Jaipur Office:</div>
        <div className='text-lg'>F-109-112, 1st Floor, Time Square, Central Spine, Vidhyadhar Nagar, Jaipur, Rajasthan India 302039</div>
        </div></div>
        </div>
        </div></div>
      </section>
      <Footer/>
</div>


  )
}

export default Contact
