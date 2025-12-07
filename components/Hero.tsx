import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { ArrowRight, MapPin, Car } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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

      // Initial render with standard time (prevents layout shift/delay)
      setHoursText(`Abierto Hoy hasta las ${standardClosingTime}`);

      // 2. Check if today is a holiday via API
      let isHoliday = false;

      try {
        // Fetch public holidays from Nager.Date API (more reliable/CORS friendly)
        const response = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/CL`);
        
        if (response.ok) {
          const data = await response.json();
          // The API returns an array of objects where the date is in 'date' property: "2025-01-01"
          const holidayDates = data.map((h: any) => h.date);
          
          if (holidayDates.includes(todayString)) {
            isHoliday = true;
          }
        } else {
          throw new Error("Failed to fetch holidays");
        }
      } catch (error) {
        console.warn("Error fetching holidays API, using fallback data for 2025.", error);
        
        // Fallback data for 2025 to ensure robustness if API fails
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

      // 3. If it is a holiday, override the time to 14:00
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
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="Gimnasio Titans House en Rengo Chile - Entrenamiento funcional y pesas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 md:pt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-titan-gold/20 border border-titan-gold/30 rounded-full px-4 py-1 mb-6 backdrop-blur-sm animate-fade-in-up">
            <MapPin className="h-4 w-4 text-titan-gold" />
            <span className="text-titan-gold text-sm font-medium tracking-wide uppercase">Ubicados en Rengo, Chile</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight uppercase">
            Titans House | <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-titan-gold to-yellow-200">
               Prueba 1 Día Gratis
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light max-w-2xl">
            Tu <strong>gimnasio en Rengo</strong> sin contratos forzosos. Disfruta de <strong>entrenamiento asistido</strong> o libre, con matrícula GRATIS y un ambiente que te impulsa a dar más.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={openWhatsAppFreeTrial} className="group flex items-center justify-center gap-2">
              PRUEBA GRATUITA
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" onClick={handleViewPlans}>
              VER PLANES
            </Button>
          </div>
          
          {/* Info Footer */}
          <div className="mt-8 flex flex-col items-start gap-3 text-sm text-gray-400 font-medium w-full">
             
             {/* Hours and Address Group */}
             <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 w-full md:w-auto">
                {/* Hours */}
                <div className="flex items-center gap-3">
                    <div className="w-5 flex justify-center flex-shrink-0">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    </div>
                    <span>{hoursText}</span>
                </div>
                
                <div className="hidden md:block text-zinc-600">|</div>
                
                {/* Address */}
                <div className="flex items-center gap-3">
                     <div className="w-5 flex justify-center flex-shrink-0 md:hidden">
                        <MapPin className="h-4 w-4 text-gray-500" />
                     </div>
                     <span>Rinconada de Malambo 1670-B</span>
                </div>
             </div>
             
             {/* Parking */}
             <div className="flex items-center gap-3 text-titan-gold font-bold bg-black/30 md:bg-transparent px-2 py-2 md:p-0 rounded-sm md:rounded-none w-full md:w-auto mt-1 md:mt-0">
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