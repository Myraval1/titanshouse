import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { ArrowRight, MapPin, Car } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// --- EASY EDIT CONFIGURATION ---
const HERO_STYLE_GUIDE = {
  // Mobile | Tablet | Desktop
  // pt-20 = Mobile Padding
  // md:pt-32 = Tablet Padding
  // lg:pt-32 = Desktop Padding
  paddingTop: "pt-24 md:pt-24 lg:pt-24",
  titleSize: "text-5xl md:text-7xl",
  subtitleSize: "text-xl md:text-2xl",
  buttonSpacing: "gap-4",
  footerSpacing: "mt-12 flex flex-col items-start gap-2 md:gap-6 text-sm text-gray-400 font-medium w-full"
};

// Asset Constants
const MOBILE_ASSET_URL = "https://github.com/Myraval1/titanshouseassets/raw/187a94feda946d144898f7f504e16412839a8075/mobileherovideogit.mp4";
const DESKTOP_ASSET_URL = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop";

export const Hero: React.FC = () => {
  const [hoursText, setHoursText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const calculateHours = async () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const todayString = `${year}-${month}-${day}`;
      const dayOfWeek = now.getDay(); // 0 = Sun, 1 = Mon, ... 6 = Sat

      // 1. Determine standard closing time based on weekday
      let standardClosingTime = "";
      if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        standardClosingTime = "23:00"; // Mon-Fri
      } else {
        standardClosingTime = "14:00"; // Sat-Sun
      }

      // Initial render with standard time
      setHoursText(`Abierto Hoy hasta las ${standardClosingTime}`);

      // 2. Check if today is a holiday via API
      let isHoliday = false;

      try {
        const response = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/CL`);
        
        if (response.ok) {
          const data = await response.json();
          const holidayDates = data.map((h: any) => h.date);
          
          if (holidayDates.includes(todayString)) {
            isHoliday = true;
          }
        } else {
          throw new Error("Failed to fetch holidays");
        }
      } catch (error) {
        console.warn("Error fetching holidays API, using fallback data for 2025.", error);
        
        const fallbackHolidays2025 = [
          "2025-01-01", "2025-04-18", "2025-04-19", "2025-05-01", 
          "2025-05-21", "2025-06-20", "2025-06-29", "2025-07-16", 
          "2025-08-15", "2025-09-18", "2025-09-19", "2025-10-12", 
          "2025-10-31", "2025-11-01", "2025-12-08", "2025-12-25"
        ];
        
        if (year === 2025 && fallbackHolidays2025.includes(todayString)) {
          isHoliday = true;
        }
      }

      if (isHoliday) {
        setHoursText(`Abierto Hoy hasta las 14:00`);
      }
    };

    calculateHours();
  }, []);

  const openWhatsAppFreeTrial = () => {
    const message = "Hola! Quiero mi prueba gratuita en Titans House.";
    window.open(`https://wa.me/56962169412?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleViewPlans = () => {
    navigate('/planes');
  };

  return (
    <section id="home" className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-zinc-900 pb-32 md:pb-12">
      
      {/* 1. Mobile Asset (Video) */}
      <div className="absolute inset-0 z-0 block md:hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={MOBILE_ASSET_URL} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
      </div>

      {/* 2. Desktop/Tablet Asset (Image) */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <img
          src={DESKTOP_ASSET_URL}
          alt="Gimnasio Titans House en Rengo Chile - Entrenamiento funcional y pesas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* --- CONTENT --- */}
      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full ${HERO_STYLE_GUIDE.paddingTop}`}>
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-titan-gold/20 border border-titan-gold/30 rounded-full px-4 py-1 mb-6 backdrop-blur-sm animate-fade-in-up">
            <MapPin className="h-4 w-4 text-titan-gold" />
            <span className="text-titan-gold text-sm font-medium tracking-wide uppercase">Ubicados en Rengo, Chile</span>
          </div>
          
          <h1 className={`${HERO_STYLE_GUIDE.titleSize} font-heading font-bold text-white mb-6 leading-tight uppercase`}>
            Titans House | <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-titan-gold to-yellow-200">
               Prueba 1 Día Gratis
            </span>
          </h1>
          
          <p className={`${HERO_STYLE_GUIDE.subtitleSize} text-gray-300 mb-8 font-light max-w-2xl`}>
            Tu <strong>gimnasio en Rengo</strong> sin contratos forzosos. Disfruta de <strong>entrenamiento asistido</strong> o libre, con matrícula GRATIS y un ambiente que te impulsa a dar más.
          </p>

          <div className={`flex flex-col sm:flex-row ${HERO_STYLE_GUIDE.buttonSpacing}`}>
            <Button onClick={openWhatsAppFreeTrial} className="group flex items-center justify-center gap-2">
              PRUEBA GRATUITA
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" onClick={handleViewPlans}>
              VER PLANES
            </Button>
          </div>
          
          {/* Info Footer - Stacked on Mobile, Row on Desktop */}
          <div className={HERO_STYLE_GUIDE.footerSpacing}>
             
             {/* 1. Hours */}
             <div className="flex items-center gap-3">
                <div className="w-5 flex justify-center flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                </div>
                <span>{hoursText}</span>
             </div>
             
             {/* 2. Address */}
             <div className="flex items-center gap-3">
                 <div className="w-5 flex justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4 text-gray-500" />
                 </div>
                 <span>Rinconada de Malambo 1670-B</span>
             </div>
             
             {/* 3. Parking */}
             <div className="flex items-center gap-3 text-titan-gold font-bold">
                <div className="w-5 flex justify-center flex-shrink-0">
                    <Car className="h-4 w-4" />
                </div>
                <span>Estacionamiento Privado Gratuito</span>
             </div>

          </div>
        </div>
      </div>
    </section>
  );
};