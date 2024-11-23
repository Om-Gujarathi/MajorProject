import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Upload from './pages/Upload';
import Footer from './components/Footer';
import AnalysisPage from './pages/Analysis';
import LandingPage from './pages/Landing';
import Ranking from './pages/Ranking';
import Pricing from './components/Pricing';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/analysis" element={<AnalysisPage />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/plan" element={<Pricing />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
