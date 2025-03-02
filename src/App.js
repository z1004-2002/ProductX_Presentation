import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import About from './components/About/about';
import FeaturesSection from './components/FeatureSection/FeatureSection';
import Pricing from './components/pricing/pricing';
import Contributors from './components/contributors/contributors';
import Developpers from './components/Developpers/developpers';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import Footer from './components/Footer/Footer';
import Temoignages from './components/temoignages/temoignages';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <About />
              <Developpers />
              <FeaturesSection />
              <Pricing />
              <Contributors />
              <Temoignages />
              <Footer />
            </>
          } />
          {/* <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;