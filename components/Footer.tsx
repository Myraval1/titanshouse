import React from 'react';
import { Dumbbell, Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        
        <div className="flex items-center mb-6 md:mb-0">
          <div className="bg-titan-gold p-2 rounded-full mr-3">
            <Dumbbell className="h-5 w-5 text-black" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-heading font-bold text-white tracking-widest leading-none">TITANS</span>
            <span className="text-[10px] font-heading font-bold text-titan-gold tracking-widest leading-none">HOUSE</span>
          </div>
        </div>

        <div className="text-gray-500 text-sm mb-6 md:mb-0 text-center md:text-left">
          &copy; {new Date().getFullYear()} Gym Titans House. Todos los derechos reservados.<br/>
          Rengo, Chile.
        </div>

        <div className="flex space-x-6">
          <a href="https://www.instagram.com/titans_house_" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-titan-gold transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-titan-gold transition-colors">
            <Facebook size={24} />
          </a>
        </div>

      </div>
    </footer>
  );
};