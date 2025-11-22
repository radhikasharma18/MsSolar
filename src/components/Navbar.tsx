import { IoReorderThreeOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="absolute top-0 z-50 bg-tranparent text-white w-full p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-between items-center w-full p-4 "
      >
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Zap className="text-amber-600" />
            <a href="/" className="text-2xl font-bold ">
              MS Solar
            </a>
          </div>

          <div className="lg:flex gap-6 text-lg hidden">
            <a href="/residential" className="font-manrope hover:text-amber-600 transition-colors">
              Residential
            </a>
            <a href="/commercial" className="hover:text-amber-600 transition-colors">
              Commercial
            </a>
          </div>
        </div>

        <div>
          <button className="text-3xl bg-gray-300 hover:bg-gray-400 rounded-full p-2 cursor-pointer transition-colors">
            <IoReorderThreeOutline />
          </button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;