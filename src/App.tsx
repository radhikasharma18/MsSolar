import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Residencial from "./components/Residencial";
import AboutUs from "./components/AboutUs";
import Commercial from "./components/Commercial";
import More from "./components/More";
import Layout from "./Layout/Layout";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/residential" element={<Residencial />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/more" element={<More />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
