import React from 'react';
import { Wallet, Unlock, Award } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Wallet className="h-10 w-10 text-titan-gold" />,
      title: "Matrícula GRATIS",
      description: "Olvídate de pagar por inscribirte. En Titans House, tu inversión va directo a tu entrenamiento y bienestar desde el primer día."
    },
    {
      icon: <Unlock className="h-10 w-10 text-titan-gold" />,
      title: "Sin Cláusula de Permanencia",
      description: "Creemos en la libertad. Entrena porque quieres, no porque un contrato te obliga. Cancela cuando lo necesites sin multas."
    },
    {
      icon: <Award className="h-10 w-10 text-titan-gold" />,
      title: "Entrenadores Certificados",
      description: "No estás solo. Nuestro equipo de profesionales te guiará con planes personalizados para alcanzar tus metas de forma segura."
    }
  ];

  return (
    <section id="features" className="py-12 sm:py-20 bg-titan-dark relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10 -mt-0 sm:-mt-32">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-zinc-900 border-b-4 border-titan-gold p-6 sm:p-8 rounded-sm shadow-xl hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="bg-zinc-800 w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <span className="scale-75 sm:scale-100 origin-center">{feature.icon}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-3 sm:mb-4 uppercase">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
