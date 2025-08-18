import React from 'react';
import type { Service } from '../types';
import { ArrowRightIcon } from '../constants';

interface ServiceCardProps {
  service: Service;
  onScheduleClick: (service: Service) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onScheduleClick }) => {
  return (
    <div className="group relative flex flex-col text-left p-6 bg-slate-800/50 rounded-xl shadow-lg border border-transparent hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105">
        <div className="absolute top-0 left-0 w-full h-full rounded-xl bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10 flex-grow">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-rose-400 animated-gradient-text">{service.title}</h3>
            <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-orange-500">R${service.price}</p>
            <p className="mt-4 text-sm text-slate-400 flex-grow">{service.description}</p>
        </div>
        <div className="relative z-10 mt-6">
            <button
                onClick={() => onScheduleClick(service)}
                className="w-full flex items-center justify-center gap-x-2 rounded-md bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:scale-105 transform transition-transform duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 glow-on-hover"
            >
                Agendar esta opção
                <ArrowRightIcon className="w-4 h-4"/>
            </button>
        </div>
    </div>
  );
};

export default ServiceCard;