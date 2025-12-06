import React from 'react';
import { Dumbbell, Activity, Users, Zap } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-titan-gold font-heading font-bold text-base sm:text-lg md:text-xl tracking-widest uppercase mb-2">Lo que ofrecemos</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white uppercase">
            Mucho más que <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Pesas</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="group relative overflow-hidden rounded-lg h-60 sm:h-72 md:h-80">
            <img 
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop" 
              alt="Pesas" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90"></div>
            <div className="absolute bottom-0 left-0 p-4 sm:p-6">
              <Dumbbell className="h-6 sm:h-8 w-6 sm:w-8 text-titan-gold mb-2 sm:mb-3" />
              <h4 className="text-lg sm:text-2xl font-heading font-bold text-white mb-1 sm:mb-2 uppercase">Musculación</h4>
              <p className="text-xs sm:text-sm text-gray-300">Equipamiento de alta gama para hipertrofia y fuerza.</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg h-60 sm:h-72 md:h-80">
            <img 
              src="https://images.unsplash.com/photo-1544367563-12123d896889?q=80&w=2070&auto=format&fit=crop" 
              alt="Recovery" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90"></div>
            <div className="absolute bottom-0 left-0 p-4 sm:p-6">
              <Activity className="h-6 sm:h-8 w-6 sm:w-8 text-titan-gold mb-2 sm:mb-3" />
              <h4 className="text-lg sm:text-2xl font-heading font-bold text-white mb-1 sm:mb-2 uppercase">Recovery</h4>
              <p className="text-xs sm:text-sm text-gray-300">Masoterapia y recuperación muscular post-entreno.</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg h-60 sm:h-72 md:h-80">
            <img 
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop" 
              alt="Comunidad" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90"></div>
            <div className="absolute bottom-0 left-0 p-4 sm:p-6">
              <Users className="h-6 sm:h-8 w-6 sm:w-8 text-titan-gold mb-2 sm:mb-3" />
              <h4 className="text-lg sm:text-2xl font-heading font-bold text-white mb-1 sm:mb-2 uppercase">Comunidad</h4>
              <p className="text-xs sm:text-sm text-gray-300">Eventos, competencias y un ambiente familiar.</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg h-60 sm:h-72 md:h-80">
            <img 
              src="https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1974&auto=format&fit=crop" 
              alt="Alianzas" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <Zap className="h-8 w-8 text-titan-gold mb-3" />
              <h4 className="text-2xl font-heading font-bold text-white mb-2 uppercase">Beneficios</h4>
              <p className="text-sm text-gray-300">Descuentos exclusivos con nuestros partners locales.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
