import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ResourcesPage from './pages/ResourcesPage';
import WildfireInfoPage from './pages/WildfireInfoPage';
import LegalPage from './pages/LegalPage';
import FireClaimPage from './pages/FireClaimPage';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/wildfire-info" element={<WildfireInfoPage />} />
        <Route path="/fire-claim" element={<FireClaimPage />} />
        <Route path="/privacy" element={<LegalPage />} />
        <Route path="/terms" element={<LegalPage />} />
        <Route path="/disclaimer" element={<LegalPage />} />
      </Routes>
    </Router>
  );
}

export default App; 