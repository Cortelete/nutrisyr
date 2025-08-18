
import React from 'react';
import type { Service } from '../types';
import { SERVICES } from '../constants';
import ServiceCard from './ServiceCard';

interface ServicesSectionProps {
    onScheduleClick: (service: Service) => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ onScheduleClick }) => {
  return (
    <div id="services" className="mt-20 text-center">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-rose-400 animated-gradient-text">
        Opções de Atendimento
      </h2>
      <p className="mt-4 text-base sm:text-lg leading-8 text-slate-400 max-w-2xl mx-auto">
        Cada opção é pensada para se adaptar às suas necessidades. Escolha a que melhor se encaixa na sua rotina e vamos começar.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} onScheduleClick={onScheduleClick} />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;