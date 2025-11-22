import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Zap } from "lucide-react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <section
      ref={ref}
      className="min-h-[70vh] flex items-end justify-center border-t border-gray-200 bg-white"
    >
      <motion.div
        style={{ scaleY, scale, opacity, y }}
        className="w-full min-h-[70vh] origin-bottom flex flex-col p-2 md:p-12"
      >
        {/* Top Content */}
        <div className="
          w-full h-full 
          flex flex-col md:flex-row 
          justify-between items-start 
          gap-10 md:gap-0
        ">
          {/* Brand */}
          <div className="space-y-4 md:space-y-6 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <Zap className="text-amber-600 w-[25px] h-[30px]" />
              <a href="#" className="text-2xl md:text-3xl font-extrabold text-amber-600">
                MS Solar
              </a>
            </div>

            <div className="text-base md:text-lg text-gray-500 hover:text-gray-700 transition">
              Privacy Policy
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4 md:space-y-6 w-full md:w-auto">
            <div className="
              flex flex-wrap md:flex-nowrap 
              text-lg md:text-xl gap-4 md:gap-6 
              font-semibold text-gray-700
            ">
              <a className="hover:text-amber-600 transition">Residential</a>
              <a className="hover:text-amber-600 transition">Commercial</a>
              <a className="hover:text-amber-600 transition">About Us</a>
              <a className="hover:text-amber-600 transition">Contact Us</a>
            </div>

            <div className="text-center text-base md:text-lg text-gray-500">
              © MSSolar 2025 — All Rights Reserved
            </div>
          </div>

          {/* Button + Social */}
          <div className="
            flex flex-col items-center md:items-end 
            space-y-6 md:space-y-8 w-full md:w-auto
          ">
            {/* CTA Button */}
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-amber-600 text-white font-semibold shadow-md hover:shadow-lg transition relative overflow-hidden ">
              <span className="tracking-wide">Book a Call</span>

              <div className="relative w-4 h-4">
                <svg
                  viewBox="0 0 15 14"
                  className="absolute inset-0 w-4 h-4 fill-current transition-transform duration-300 group-hover:translate-x-2"
                >
                  <path d="M-8.10623e-05 6.12375H10.668L5.7611 1.21689L7.00973 -0.00982666L14.0195 6.99998L7.00973 14.0098L5.7611 12.7831L10.668 7.8762H-8.10623e-05V6.12375Z" />
                </svg>

               
              </div>
            </a>

            {/* Social icons */}
            <div className="flex text-xl md:text-2xl gap-4">
              <div className="bg-gray-100 p-3 rounded-full hover:bg-amber-100 transition cursor-pointer">
                <FaInstagram />
              </div>
              <div className="bg-gray-100 p-3 rounded-full hover:bg-amber-100 transition cursor-pointer">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>

    
        <div className="
          flex  items-center justify-center 
          text-[90px] sm:text-[140px] md:text-[200px] 
          font-extrabold text-amber-600/10 
          select-none leading-none mt-10 md:mt-0
        ">
            
          <Zap className="w-[100px] h-20 md:w-[250px] md:h-[200px] mr-4" />
          MS Solar
        
        </div>
      </motion.div>
    </section>
  );
};

export default Footer;
