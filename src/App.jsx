import "./App.css";
import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"
import Aboutme from "./components/Aboutme.js"
import Expertise from "./components/Expertise.js";
import Projects from "./components/Projects.js";
import Education from "./components/Education.js";
import Contact from "./components/contact.js";
import Footer from "./components/Footer.js";
function App() {
  return (
    <div className="bg-[#000319] w-[100%] overflow-hidden">
      <Navbar/>
      <Hero/>
      <Aboutme/>
      <Expertise/>
      <Projects/>
      <Education/>
      <Contact/>
      <Footer/>

    </div>
    
  );
}

export default App;
