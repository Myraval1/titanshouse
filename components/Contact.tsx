import React from 'react';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';
import { Button } from './Button';

type FormData = {
  name: string;
  phone: string;
  goal: string;
};

export const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Construct WhatsApp message
    const text = `Hola Titans House, mi nombre es ${data.name}. Mi objetivo es ${data.goal} y me gustaría más información. Mi teléfono es ${data.phone}.`;
    window.open(`https://wa.me/56962169412?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white uppercase mb-6 sm:mb-8">
              ¿Listo para empezar? <span className="text-titan-gold">Contáctanos</span>
            </h2>
            <p className="text-gray-400 mb-8 sm:mb-10 text-sm sm:text-base md:text-lg">
              Ven a conocer nuestras instalaciones. La primera visita corre por nuestra cuenta. Estacionamiento privado disponible.
            </p>

            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-titan-dark p-2 sm:p-3 rounded-sm text-titan-gold border border-zinc-800 flex-shrink-0">
                  <MapPin size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-white font-bold uppercase mb-1 text-sm sm:text-base">Dirección</h4>
                  <p className="text-gray-400 text-sm sm:text-base">Rinconada de Malambo 1670-B</p>
                  <p className="text-gray-500 text-xs sm:text-sm">Rengo, O'Higgins, Chile</p>
                  <a href="https://maps.google.com/?q=Titans+House+Rengo" target="_blank" rel="noreferrer" className="text-titan-gold text-xs sm:text-sm underline mt-1 block hover:text-white">Ver en Google Maps</a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-titan-dark p-2 sm:p-3 rounded-sm text-titan-gold border border-zinc-800 flex-shrink-0">
                  <Clock size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-white font-bold uppercase mb-1 text-sm sm:text-base">Horarios</h4>
                  <div className="text-gray-400 space-y-1 text-xs sm:text-sm">
                    <p className="flex justify-between"><span>Lun - Vie:</span> <span className="text-white ml-2">08:00 - 23:00</span></p>
                    <p className="flex justify-between"><span>Sábado:</span> <span className="text-white ml-2">09:00 - 14:00</span></p>
                    <p className="flex justify-between"><span>Domingo:</span> <span className="text-white ml-2">10:00 - 14:00</span></p>
                    <p className="flex justify-between"><span>Festivos:</span> <span className="text-white ml-2">09:00 - 14:00</span></p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-titan-dark p-2 sm:p-3 rounded-sm text-titan-gold border border-zinc-800 flex-shrink-0">
                  <Phone size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-white font-bold uppercase mb-1 text-sm sm:text-base">Contacto</h4>
                  <p className="text-gray-400 text-sm sm:text-base">+56 9 6216 9412</p>
                  <div className="flex gap-3 sm:gap-4 mt-2">
                    <a href="https://www.instagram.com/titans_house_" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-titan-gold transition">
                      <Instagram size={20} className="sm:w-6 sm:h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-zinc-900 p-6 sm:p-8 rounded-sm shadow-2xl border-t-4 border-titan-red">
            <h3 className="text-lg sm:text-2xl font-bold text-white mb-4 sm:mb-6 uppercase">Solicita Información</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-2">Nombre Completo</label>
                <input
                  {...register("name", { required: true })}
                  className="w-full bg-black border border-zinc-700 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-sm text-sm focus:outline-none focus:border-titan-gold focus:ring-1 focus:ring-titan-gold transition"
                  placeholder="Tu nombre de guerrero"
                />
                {errors.name && <span className="text-titan-red text-xs">Este campo es requerido</span>}
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-2">Teléfono / WhatsApp</label>
                <input
                  {...register("phone", { required: true })}
                  className="w-full bg-black border border-zinc-700 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-sm text-sm focus:outline-none focus:border-titan-gold focus:ring-1 focus:ring-titan-gold transition"
                  placeholder="+56 9 ..."
                />
                {errors.phone && <span className="text-titan-red text-xs">Este campo es requerido</span>}
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-2">Objetivo Principal</label>
                <select
                  {...register("goal")}
                  className="w-full bg-black border border-zinc-700 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-sm text-sm focus:outline-none focus:border-titan-gold focus:ring-1 focus:ring-titan-gold transition"
                >
                  <option value="Perder Peso">Perder Peso</option>
                  <option value="Ganar Músculo">Ganar Músculo</option>
                  <option value="Mejorar Salud">Mejorar Salud</option>
                  <option value="Competición">Competición</option>
                </select>
              </div>

              <Button type="submit" fullWidth>
                Contactar por WhatsApp
              </Button>
              <p className="text-xs text-center text-gray-500 mt-3 sm:mt-4">
                Te responderemos lo antes posible para coordinar tu visita.
              </p>
            </form>
          </div>

        </div>

        {/* Map Embed */}
        <div className="mt-12 sm:mt-16 w-full h-60 sm:h-80 rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
           <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.866032158882!2d-70.8655829244309!3d-34.40989264870094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96637b3b3a3a3a3b%3A0x1a2b3c4d5e6f7g8h!2sRinconada%20de%20Malambo%201670%2C%20Rengo%2C%20O'Higgins!5e0!3m2!1ses!2sch!4v1700000000000!5m2!1ses!2sch" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa Gym Titans House"
           ></iframe>
        </div>

      </div>
    </section>
  );
};
