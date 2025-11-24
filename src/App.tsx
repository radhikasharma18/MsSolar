import Home from './components/Home'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import Contact from './components/Contact';
import Residencial from './components/Residencial';
import AboutUs from './components/AboutUs';
import Commercial from './components/Commercial';

const App = () => {
  return (
    <div className="overflow-hidden">
    <Navbar/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path ="/residential" element={<Residencial/>} />
      <Route path ="/aboutus" element={<AboutUs/>}/>
      <Route path= "/commercial" element={<Commercial/>}/>
      
    </Routes>
    
    </div>
  )
}

export default App