import React from 'react';
import { Dumbbell, Activity, Users, Zap } from 'lucide-react';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';

// --- EASY EDIT: REPLACE IMAGE LINKS BELOW ---
const SERVICE_IMAGES = Object.freeze({
  musculacion: "https://0170a6c2.assets-581.pages.dev/musculacion.jpg",
  recovery: "https://0170a6c2.assets-581.pages.dev/recovery.jpg",
  comunidad: "https://0170a6c2.assets-581.pages.dev/comunidad.jpg",
  beneficios: "https://0170a6c2.assets-581.pages.dev/beneficios.jpg"
});

const SERVICES_LAYOUT = Object.freeze({
  padding: "py-24 md:py-32 lg:py-40",
  titleSize: "text-4xl md:text-5xl",
  gridGap: "gap-6 md:gap-8 lg:gap-10"
});

export const Services: React.FC = React.memo(() => {
  const navigate = useNavigate();

  return (
    <section id="services" className={`${SERVICES_LAYOUT.padding} bg-black`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-titan-gold font-heading font-bold text-xl tracking-widest uppercase mb-2">Lo que ofrecemos</h2>
          <h3 className={`${SERVICES_LAYOUT.titleSize} font-heading font-bold text-white uppercase`}>
            Mucho más que <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Pesas</span>
          </h3>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ${SERVICES_LAYOUT.gridGap} mb-16`}>
          <div className="group relative overflow-hidden rounded-lg h-80">
            <img 
              src={SERVICE_IMAGES.musculacion}
              alt="Entrenamiento de musculación en Gimnasio Titans House Rengo" 
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <Dumbbell className="h-8 w-8 text-titan-gold mb-3" />
              <h4 className="text-2xl font-heading font-bold text-white mb-2 uppercase">Musculación</h4>
              <p className="text-sm text-gray-300">Equipamiento de alta gama para hipertrofia y fuerza.</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg h-80">
            <img 
              src={SERVICE_IMAGES.recovery}
              alt="Servicio de Masoterapia y Recovery muscular en Rengo" 
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <Activity className="h-8 w-8 text-titan-gold mb-3" />
              <h4 className="text-2xl font-heading font-bold text-white mb-2 uppercase">Recovery</h4>
              <p className="text-sm text-gray-300">Masoterapia y recuperación muscular post-entreno.</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg h-80">
            <img 
              src={SERVICE_IMAGES.comunidad}
              alt="Comunidad fitness Gym Titans House, gimnasio sin contratos" 
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <Users className="h-8 w-8 text-titan-gold mb-3" />
              <h4 className="text-2xl font-heading font-bold text-white mb-2 uppercase">Comunidad</h4>
              <p className="text-sm text-gray-300">Eventos, competencias y un ambiente familiar.</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg h-80">
            <img 
              src={SERVICE_IMAGES.beneficios}
              alt="Beneficios y descuentos en gimnasio económico Rengo" 
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <Zap className="h-8 w-8 text-titan-gold mb-3" />
              <h4 className="text-2xl font-heading font-bold text-white mb-2 uppercase">Beneficios</h4>
              <p className="text-sm text-gray-300">Descuentos exclusivos con nuestros partners locales.</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
            <Button 
                variant="outline" 
                onClick={() => navigate('/gimnasio')}
                className="px-8 py-3 tracking-widest text-lg"
            >
                VER GIMNASIO
            </Button>
        </div>
      </div>
    </section>
  );
});

Services.displayName = 'Services';