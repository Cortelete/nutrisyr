
import React from 'react';
import { SYRLEAN_INSTAGRAM } from '../constants';

interface HeroProps {
    onBioClick: () => void;
    onScheduleClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBioClick, onScheduleClick }) => {
  return (
    <div className="text-center">
      <div className="relative inline-block mb-8 cursor-pointer group" onClick={onBioClick}>
        <img
          className="w-40 h-40 rounded-full mx-auto border-4 border-transparent group-hover:border-orange-500/50 transition-all duration-300"
          src="/profile.png"
          alt="Syrlean Biedermann"
        />
        <div className="absolute inset-0 rounded-full border-2 border-orange-500 animate-pulse group-hover:animate-none"></div>
         <div className="absolute bottom-4 right-4 w-5 h-5 bg-green-500 rounded-full border-2 border-slate-900"></div>
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-rose-400 animated-gradient-text">
        Syrlean Biedermann
      </h1>
      <p className="mt-2 text-base sm:text-lg font-semibold tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-rose-400 animated-gradient-text">
        Nutrição Esportiva
      </p>
      <p className="mt-6 text-base sm:text-lg leading-8 text-slate-400 max-w-2xl mx-auto">
        Transforme sua saúde e performance com um acompanhamento nutricional personalizado e humano.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-4 sm:gap-x-6">
        <button
          onClick={onScheduleClick}
          className="rounded-md bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:scale-105 transform transition-transform duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 glow-on-hover"
        >
          Agendar Consulta
        </button>
        <a href={SYRLEAN_INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold leading-6 text-slate-200 group">
          Conheça meu trabalho <span aria-hidden="true" className="group-hover:translate-x-1 inline-block transition-transform">→</span>
        </a>
      </div>
    </div>
  );
};

export default Hero;