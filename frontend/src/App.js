import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Upload from './pages/Upload';
import Footer from './components/Footer';
import AnalysisPage from './pages/Analysis';
import LandingPage from './pages/Landing';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/analysis" element={<AnalysisPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
