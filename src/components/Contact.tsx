import React, { useEffect, useState } from "react";
import contact from "../assets/contact.jpg";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "",
    details: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRadio = (value) => {
    setFormData({ ...formData, projectType: value });
  };

  // ✅ VALIDATION FUNCTION
  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be exactly 10 digits";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type";
    }

    if (!formData.details.trim()) {
      newErrors.details = "Project details are required";
    } else if (formData.details.trim().length < 10) {
      newErrors.details = "Details must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ⭐ WEB3FORMS SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formPayload = new FormData();
    formPayload.append("access_key", "3611bd3e-edf6-43b3-93f4-57700f1bae22");

    Object.entries(formData).forEach(([key, value]) => {
      formPayload.append(key, value);
    });

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formPayload,
    }).then((res) => res.json());

    if (res.success) {
      alert("Message sent successfully!");

      setErrors({});
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        projectType: "",
        details: "",
      });
    } else {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="w-full">
      {/* Top Image */}
      <motion.div
        initial={{ scale: 0.8, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-52 sm:h-64 md:h-72 lg:h-80 rounded-2xl bg-center bg-cover m-4 text-white flex items-end p-4 sm:p-6 md:p-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold"
        style={{ backgroundImage: `url(${contact})` }}
      >
        Contact us for a quote
      </motion.div>

      <section className="px-6 md:px-12 mt-16 h-full mb-16">
        {/* Heading */}
        <motion.h2
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-xl md:text-2xl text-amber-600"
        >
          CONTACT DETAILS
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-2 text-gray-700 text-2xl md:text-[2.5rem] md:w-1/2 w-full leading-tight mb-12"
        >
          Leave your contact details right here and we will call you
          <span className="text-amber-600 font-semibold"> within 1 day</span>.
        </motion.p>

        <div className="w-full flex flex-col lg:flex-row gap-8">
          {/* LEFT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 rounded-3xl"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gray-100 p-6 md:p-8 rounded-3xl shadow-xl w-full space-y-6"
            >
              {/* Row 1 */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full">
                  <input
                    name="firstName"
                    placeholder="Enter your name"
                    className="w-full p-3 rounded-lg outline-none bg-white"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div className="w-full">
                  <input
                    name="lastName"
                    placeholder="Enter last name"
                    className="w-full p-3 rounded-lg outline-none bg-white"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full">
                  <input
                    name="email"
                    placeholder="Email"
                    className="w-full p-3 bg-white rounded-lg outline-none"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="w-full">
                  <input
                    name="phone"
                    placeholder="Phone"
                    className="w-full p-3 bg-white rounded-lg outline-none"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Project Type */}
              <div className="bg-white p-4 rounded-lg">
                <p className="mb-2 font-medium">This project is:</p>

                <div className="flex gap-4 md:gap-6 flex-wrap">
                  {["Residential", "Commercial", "Industrial"].map((type) => (
                    <label
                      key={type}
                      className="flex gap-2 items-center cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="projectType"
                        checked={formData.projectType === type}
                        onChange={() => handleRadio(type)}
                      />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>

                {errors.projectType && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.projectType}
                  </p>
                )}
              </div>

              {/* Textarea */}
              <div>
                <textarea
                  name="details"
                  placeholder="Enter project details..."
                  className="w-full h-32 p-3 bg-white rounded-lg outline-none"
                  value={formData.details}
                  onChange={handleChange}
                />
                {errors.details && (
                  <p className="text-red-500 text-sm mt-1">{errors.details}</p>
                )}
              </div>

              {/* Submit */}
              <div className="text-right">
                <button
                  type="submit"
                  className="px-6 py-3 bg-amber-600 text-white rounded-xl shadow-md hover:bg-amber-600/90 hover:scale-105 flex items-center gap-2 duration-300"
                >
                  <Send size={18} /> Save
                </button>
              </div>
            </form>
          </motion.div>

          {/* RIGHT CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="w-full lg:w-1/2 bg-gray-100 rounded-3xl shadow-xl"
          >
            <div className="p-8 flex flex-col gap-10">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex gap-4"
              >
                <MapPin className="text-amber-600 w-8 h-8" />
                <div>
                  <div className="text-gray-400 text-xl">Jaipur Office:</div>
                  <div className="text-lg">
                    F-109-112, 1st Floor, Time Square, Central Spine,
                    <br />
                    Vidhyadhar Nagar, Jaipur, Rajasthan, India 302016
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="flex gap-4"
              >
                <Phone className="text-amber-600 w-8 h-8" />
                <div>
                  <div className="text-gray-400 text-xl">Phone no.:</div>
                  <div className="text-lg">+91-7230032601</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex gap-4"
              >
                <Mail className="text-amber-600 w-8 h-8" />
                <div>
                  <div className="text-gray-400 text-xl">Email:</div>
                  <div className="text-lg">info@msfin.in</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
                className="flex gap-4"
              >
                <Clock className="text-amber-600 w-8 h-8" />
                <div>
                  <div className="text-gray-400 text-xl">Business Hours:</div>
                  <div className="text-lg leading-relaxed">
                    Monday - Saturday: 10:00am to 6:30pm <br />
                    Sunday - Closed
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
