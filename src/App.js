import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import AboutUs from './components/AboutUs';
import OurServices from './components/OurServices';
import ContactUs from './components/ContactUs';
import { Routes, Route, Link } from "react-router-dom"
import Footer from './components/Footer';

function App() {
  return (

    // <Landing />
    <div className="App">
      <header>
        <nav>
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/about-us" className="nav-item">About Us</Link>
          <Link to="/our-services" className="nav-item">Our Services</Link>
          <Link to="/contact-us" className="nav-item">Contact Us</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/our-services" element={<OurServices />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
