import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Project";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import Gallery from "./pages/Gallary";
import FacilitiesPage from './pages/DetailsPage';
import HolidayComponent from './components/Holiday';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/facilities" element={<FacilitiesPage/>} />
            <Route path="/holiday" element ={<HolidayComponent/>}/>
            <Route path ='/contact' element = {<ContactPage/>}/>



          </Routes>
        </main>

        {/* Footer and Scroll to Top */}
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
