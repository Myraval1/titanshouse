import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Landing } from './components/Landing';
import { PlanDetail } from './components/PlanDetail';
import { AllPlans } from './components/AllPlans';
import { GymGallery } from './components/GymGallery';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { Loader } from './components/Loader';

// Component to force download of images in background
const AssetWarmer = () => {
    return (
        <div className="absolute w-0 h-0 overflow-hidden opacity-0 pointer-events-none" aria-hidden="true">
            {/* Services */}
            <img src="https://0170a6c2.assets-581.pages.dev/musculacion.jpg" loading="eager" alt="" />
            <img src="https://0170a6c2.assets-581.pages.dev/recovery.jpg" loading="eager" alt="" />
            <img src="https://0170a6c2.assets-581.pages.dev/comunidad.jpg" loading="eager" alt="" />
            <img src="https://0170a6c2.assets-581.pages.dev/beneficios.jpg" loading="eager" alt="" />
            {/* Community */}
            <img src="https://0170a6c2.assets-581.pages.dev/2dafam1.jpg" loading="eager" alt="" />
            <img src="https://0170a6c2.assets-581.pages.dev/2dafam2.jpg" loading="eager" alt="" />
            <img src="https://0170a6c2.assets-581.pages.dev/2dafam3.jpg" loading="eager" alt="" />
            {/* Mobile Video Cache Warmer */}
            <video src="https://0170a6c2.assets-581.pages.dev/mobileherovideogit.mp4" preload="auto" muted playsInline />
        </div>
    )
}

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

  return (
    <>
      <AssetWarmer />
      
      {isLoading ? (
        <Loader />
      ) : (
        <Router>
          <div className="bg-black min-h-screen text-white font-sans selection:bg-titan-gold selection:text-black">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/planes" element={<AllPlans />} />
                <Route path="/plan/:planId" element={<PlanDetail />} />
                <Route path="/gimnasio" element={<GymGallery />} />
              </Routes>
            </main>
            <Footer />
            <WhatsAppWidget />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;