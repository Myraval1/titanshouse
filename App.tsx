import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Landing } from './components/Landing';
import { PlanDetail } from './components/PlanDetail';
import { AllPlans } from './components/AllPlans';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { Loader } from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the user has visited in this session
    const hasVisited = sessionStorage.getItem('hasVisitedTitans');

    if (hasVisited) {
      // If already visited, skip loader
      setIsLoading(false);
    } else {
      // If first time, show loader for a set time
      // increased to 2.0 seconds
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('hasVisitedTitans', 'true');
      }, 2000); 

      return () => clearTimeout(timer);
    }
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="bg-black min-h-screen text-white font-sans selection:bg-titan-gold selection:text-black">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/planes" element={<AllPlans />} />
            <Route path="/plan/:planId" element={<PlanDetail />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppWidget />
      </div>
    </Router>
  );
}

export default App;