import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Hero from './Components/Hero.jsx';
import Services from './Components/Services.jsx';
import WhyUs from './Components/WhyUs.jsx';
import Reviews from './Components/Reviews.jsx';
import CreateAccount from './Components/CreateAccount.jsx';
import ServicesPage from './Components/ServicesPage.jsx';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={
                    <>
                        <Hero />
                        <Services />
                        <WhyUs />
                        <Reviews />
                    </>
                } />
                 <Route path="/services" element={<ServicesPage />} /> {}
                <Route path="/create-account" element={<CreateAccount />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;