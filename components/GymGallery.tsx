import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';

// --- EASY EDIT: REPLACE GALLERY LINKS BELOW ---
// Instructions: Paste your image address (URL) inside the quotes for each slot.
const GALLERY_URLS = Object.freeze({
  img1: "https://0170a6c2.assets-581.pages.dev/gym1.jpg",
  img2: "https://0170a6c2.assets-581.pages.dev/gym2.jpg",
  img3: "https://0170a6c2.assets-581.pages.dev/gym3.jpg",
  img4: "https://0170a6c2.assets-581.pages.dev/gym4.jpg",
  img5: "https://0170a6c2.assets-581.pages.dev/gym5.JPG",
  img6: "https://0170a6c2.assets-581.pages.dev/gym6.jpg",
  img7: "https://0170a6c2.assets-581.pages.dev/gym7.jpg",
  img8: "https://0170a6c2.assets-581.pages.dev/gym8.JPG",
  img9: "https://0170a6c2.assets-581.pages.dev/gym9.JPG",
  img10: "https://0170a6c2.assets-581.pages.dev/gym10.jpg"
});

// Map the URLs to the structure used by the page
const GALLERY_IMAGES = [
  { url: GALLERY_URLS.img1, alt: "Gym interior wide", type: "horizontal" },
  { url: GALLERY_URLS.img2, alt: "Weights area vertical", type: "vertical" },
  { url: GALLERY_URLS.img3, alt: "Dumbbells rack", type: "horizontal" },
  { url: GALLERY_URLS.img4, alt: "Workout session", type: "horizontal" },
  { url: GALLERY_URLS.img5, alt: "Gym vibes vertical", type: "vertical" },
  { url: GALLERY_URLS.img6, alt: "Crossfit style", type: "horizontal" },
  { url: GALLERY_URLS.img7, alt: "Gym lighting", type: "horizontal" },
  { url: GALLERY_URLS.img8, alt: "Trainer assisting vertical", type: "vertical" },
  { url: GALLERY_URLS.img9, alt: "Gym equipment detail", type: "vertical" },
  { url: GALLERY_URLS.img10, alt: "Fitness community", type: "horizontal" },
];

export const GymGallery: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 pt-32 md:pt-40 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Back Button */}
        <div className="mb-12">
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center text-gray-400 hover:text-titan-gold transition mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Inicio
          </button>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase text-center mb-4">
            Nuestras Instalaciones
          </h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            Un espacio diseñado para superar tus límites. Equipamiento profesional, zona de peso libre y el mejor ambiente de Rengo.
          </p>
        </div>

        {/* Masonry Grid Layout using CSS Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {GALLERY_IMAGES.map((img, idx) => (
            <div key={idx} className="break-inside-avoid relative group overflow-hidden rounded-sm">
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold tracking-widest uppercase text-sm border-b-2 border-titan-gold pb-1">Titans House</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white uppercase mb-6">¿Te gusta lo que ves?</h3>
          <Button onClick={() => navigate('/planes')} className="px-8 py-3">
            Ver Planes Disponibles
          </Button>
        </div>

      </div>
    </div>
  );
};