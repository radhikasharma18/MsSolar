import { IoReorderThreeOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { useLocation, useNavigate} from "react-router-dom";



const Navbar = () => {
  const navigate = useNavigate();
  const loc = useLocation();
   const isActive = (path:any) => loc.pathname === path;


  return (
    <nav className="absolute top-0 z-50 bg-tranparent text-white w-full p-4">
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="flex justify-between items-center w-full p-4 "
  >
    {loc.pathname !== "/more" && (
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <Zap className="text-amber-600" />
          <button
            onClick={() => navigate("/")}
            className="text-2xl font-bold "
          >
            MSFIN Solar
          </button>
        </div>

        {/* Navbar Menu */}
        <div className="lg:flex gap-6 text-lg hidden">
          
          {/* Residential */}
          <button
            onClick={() => navigate("/residential")}
            className={`font-manrope transition-colors ${
              isActive("/residential")
                ? "text-amber-600"
                : "hover:text-amber-600"
            }`}
          >
            Residential
          </button>

          {/* Commercial */}
          <button
            onClick={() => navigate("/commercial")}
            className={`font-manrope transition-colors ${
              isActive("/commercial")
                ? "text-amber-600"
                : "hover:text-amber-600"
            }`}
          >
            Commercial
          </button>

          {/* About Us */}
          <button
            onClick={() => navigate("/aboutus")}
            className={`font-manrope transition-colors ${
              isActive("/aboutus")
                ? "text-amber-600"
                : "hover:text-amber-600"
            }`}
          >
            About us
          </button>

          {/* Contact */}
          <button
            onClick={() => navigate("/contact")}
            className={`font-manrope transition-colors ${
              isActive("/contact")
                ? "text-amber-600"
                : "hover:text-amber-600"
            }`}
          >
            Contact
          </button>
        </div>
      </div>
    )}

    {/* More Button */}
    {loc.pathname !== "/more" && (
      <button
        onClick={() => navigate("/more")}
        className="text-3xl bg-gray-300 hover:bg-gray-400 rounded-full p-2 cursor-pointer transition-colors"
      >
        <IoReorderThreeOutline />
      </button>
    )}
  </motion.div>
</nav>

  );
};

export default Navbar;