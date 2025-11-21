import Home from './components/Home'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import Contact from './components/Contact';
import Residencial from './components/Residencial';

const App = () => {
  return (
    <>
    <Navbar/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path ="/residential" element={<Residencial/>} />
      
    </Routes>
    
    </>
  )
}

export default App