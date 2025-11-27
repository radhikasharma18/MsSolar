import { IoReorderThreeOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { useLocation, useNavigate} from "react-router-dom";



const Navbar = () => {
  const navigate = useNavigate();
  const loc = useLocation();

  return (
    <nav className="absolute top-0 z-50 bg-tranparent text-white w-full p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-between items-center w-full p-4 "
      >
        {loc.pathname != "/more" && 
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Zap className="text-amber-600" />
              <button
              onClick={()=>navigate('/')}
              className="text-2xl font-bold ">
                MSFIN Solar
              </button>
            </div>

            <div className="lg:flex gap-6 text-lg hidden">
              <button
              onClick={()=>navigate('/residential')}
                className="font-manrope hover:text-amber-600 transition-colors">
                Residential
              </button>
              <button 
              onClick={()=>navigate('/commercial')}
            className="hover:text-amber-600 transition-colors">
                Commercial
              </button>
              <button
              onClick={()=>navigate('/aboutus')}
                className="font-manrope hover:text-amber-600 transition-colors">
                About us
              </button>
              <button 
              onClick={()=>navigate('/contact')}
            className="hover:text-amber-600 transition-colors">
                Contact
              </button>
            </div>
          </div>
        }

        <div>{loc.pathname != "/more" && 
          <button 
          onClick={()=>navigate('/more')}
          className="text-3xl bg-gray-300 hover:bg-gray-400 rounded-full p-2 cursor-pointer transition-colors">
            <IoReorderThreeOutline />

          </button>}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;