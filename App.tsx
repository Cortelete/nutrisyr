

import React, { useState, useEffect, useCallback } from 'react';
import type { Service } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialLinks from './components/SocialLinks';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { SYRLEAN_WHATSAPP, DEVELOPER_WHATSAPP } from './constants';

const App: React.FC = () => {
  const [isBioModalOpen, setIsBioModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [isDeveloperModalOpen, setIsDeveloperModalOpen] = useState(false);
  const [isComingSoonModalOpen, setIsComingSoonModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [developerContactName, setDeveloperContactName] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    scheduleDay: '',
    schedulePeriod: 'Manhã',
    experience: 'Sim',
    age: '',
    weight: '',
    payment: 'Pix',
  });
  const [contactFormData, setContactFormData] = useState({
    name: '',
    scheduleDay: '',
    schedulePeriod: 'Manhã',
    message: '',
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('dark');
    document.body.className = `antialiased text-slate-200 bg-slate-900 animated-bg`;
  }, []);

  const handleOpenConfirmationModal = useCallback((service: Service) => {
    setSelectedService(service);
    setIsConfirmationModalOpen(true);
  }, []);

  const handleCloseConfirmationModal = () => {
    setIsConfirmationModalOpen(false);
    setFormData({
        name: '',
        scheduleDay: '',
        schedulePeriod: 'Manhã',
        experience: 'Sim',
        age: '',
        weight: '',
        payment: 'Pix',
    });
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppMessage = (service: Service, data: typeof formData) => {
    const message = `Olá, Syrlean! Tenho interesse em agendar uma consulta.

*Plano Selecionado:* ${service.title}

*Minhas Informações:*
- Nome: ${data.name}
- Melhor dia: ${data.scheduleDay || 'A combinar'}
- Melhor período: ${data.schedulePeriod}
- Já treinou antes?: ${data.experience}
- Idade: ${data.age || 'Não informado'}
- Peso: ${data.weight ? `${data.weight} kg` : 'Não informado'}
- Forma de Pagamento: ${data.payment}

Aguardo seu retorno!`;
    return encodeURIComponent(message);
  };

  const handleWhatsAppRedirect = () => {
    if (selectedService && formData.name) {
      const message = generateWhatsAppMessage(selectedService, formData);
      window.open(`https://wa.me/${SYRLEAN_WHATSAPP}?text=${message}`, '_blank');
      handleCloseConfirmationModal();
    }
  };

  const handleDeveloperWhatsAppRedirect = () => {
    const clientName = "Biedermann Nutricionista";
    const userName = developerContactName || 'um visitante';
    const message = `Olá, vi o link de ${clientName} e quero um site igual! Meu nome é ${userName}. 🚀`;
    window.open(`https://wa.me/${DEVELOPER_WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank');
    setIsDeveloperModalOpen(false);
    setDeveloperContactName('');
  };
  
  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
    setContactFormData({ name: '', scheduleDay: '', schedulePeriod: 'Manhã', message: '' });
  };

  const handleContactFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setContactFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContactWhatsAppRedirect = () => {
    if (contactFormData.name) {
        const message = `Olá, Syrlean! Gostaria de entrar em contato.

- Nome: ${contactFormData.name}
- Melhor dia para contato: ${contactFormData.scheduleDay || 'A combinar'}
- Melhor período para contato: ${contactFormData.schedulePeriod}
- Mensagem: ${contactFormData.message}

Aguardo seu retorno!`;
        window.open(`https://wa.me/${SYRLEAN_WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank');
        handleCloseContactModal();
    }
  };

  const inputStyle = "w-full px-4 py-2 mt-1 text-slate-200 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none transition-colors";
  const labelStyle = "block text-sm font-medium text-slate-400 text-left";
  const textAreaStyle = `${inputStyle} resize-none`;

  return (
    <div className="min-h-screen font-sans dark">
      <div className="relative isolate px-4 sm:px-6 pt-6 lg:px-8">
        <Header 
          onBioClick={() => setIsBioModalOpen(true)}
          onReviewsClick={() => setIsComingSoonModalOpen(true)}
          onContactClick={() => setIsContactModalOpen(true)}
        />
        <main className="mx-auto max-w-4xl py-12 sm:py-20">
          <Hero onBioClick={() => setIsBioModalOpen(true)} onScheduleClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} />
          <SocialLinks onWhatsAppClick={() => setIsContactModalOpen(true)} onYouTubeClick={() => setIsComingSoonModalOpen(true)} />
          <p className="mt-8 text-center text-xs sm:text-base leading-7 sm:leading-8 text-slate-400 max-w-2xl mx-auto">
            Transforme sua saúde e performance com um acompanhamento nutricional personalizado e humano.
          </p>
          <ServicesSection onScheduleClick={handleOpenConfirmationModal} />
        </main>
        <Footer onCTAClick={() => setIsDeveloperModalOpen(true)} />
      </div>

      {/* Bio Modal */}
      <Modal isOpen={isBioModalOpen} onClose={() => setIsBioModalOpen(false)}>
        <div className="text-center">
          <img src="/profile.png" alt="Syrlean Biedermann" className="w-24 h-24 mx-auto rounded-full mb-4 border-2 border-orange-500" />
          <h3 className="text-xl sm:text-2xl font-bold mb-2">
            <div className="flex justify-center items-center gap-x-2">
              <img src="/logo.png" alt="Biedermann Nutricionista Logo" className="h-6 w-auto sm:h-8" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-rose-400 animated-gradient-text">
                Biedermann Nutricionista
              </span>
            </div>
          </h3>
          <p className="text-sm uppercase tracking-wider font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-rose-400 animated-gradient-text">Nutrição Esportiva</p>
          <div className="text-left space-y-3 text-slate-400 text-sm sm:text-base">
            <p>Formado em Nutrição pela Unicesumar em 2024, Syrlean é apaixonado por transformar vidas através da alimentação e do esporte.</p>
            <p>Com mais de 100 atendimentos realizados, ele se dedica a criar planos nutricionais personalizados que se alinham perfeitamente aos objetivos e estilo de vida de cada cliente, seja para ganho de performance, saúde ou bem-estar.</p>
            <p>Seu método combina ciência e empatia, garantindo um acompanhamento humano e eficaz para que você atinja seu máximo potencial.</p>
          </div>
        </div>
      </Modal>

      {/* Appointment Form Modal */}
      <Modal isOpen={isConfirmationModalOpen} onClose={handleCloseConfirmationModal}>
        {selectedService && (
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-rose-400 animated-gradient-text">
              {selectedService.title}
            </h3>
            <p className="mb-6 text-slate-400">Preencha os dados abaixo para agilizar seu atendimento.</p>

            <form onSubmit={(e) => { e.preventDefault(); handleWhatsAppRedirect(); }}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className={labelStyle}>Seu Nome Completo*</label>
                  <input type="text" name="name" id="name" value={formData.name} onChange={handleFormChange} className={inputStyle} required placeholder="Seu nome" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="scheduleDay" className={labelStyle}>Melhor dia</label>
                    <input type="text" name="scheduleDay" id="scheduleDay" value={formData.scheduleDay} onChange={handleFormChange} className={inputStyle} placeholder="Ex: Terça-feira" />
                  </div>
                  <div>
                    <label htmlFor="schedulePeriod" className={labelStyle}>Melhor período</label>
                    <select name="schedulePeriod" id="schedulePeriod" value={formData.schedulePeriod} onChange={handleFormChange} className={inputStyle}>
                      <option>Manhã</option>
                      <option>Tarde</option>
                      <option>Noite</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="age" className={labelStyle}>Idade</label>
                    <input type="number" name="age" id="age" value={formData.age} onChange={handleFormChange} className={inputStyle} placeholder="Ex: 25" />
                  </div>
                  <div>
                    <label htmlFor="weight" className={labelStyle}>Peso (kg)</label>
                    <input type="number" name="weight" id="weight" value={formData.weight} onChange={handleFormChange} className={inputStyle} placeholder="Ex: 70" />
                  </div>
                </div>
                 <div>
                  <label htmlFor="experience" className={labelStyle}>Já treinou antes?</label>
                  <select name="experience" id="experience" value={formData.experience} onChange={handleFormChange} className={inputStyle}>
                    <option>Sim</option>
                    <option>Não</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="payment" className={labelStyle}>Forma de Pagamento</label>
                  <select name="payment" id="payment" value={formData.payment} onChange={handleFormChange} className={inputStyle}>
                    <option>Pix</option>
                    <option>Cartão de Crédito</option>
                    <option>Dinheiro</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={!formData.name}
                className="w-full mt-8 bg-gradient-to-r from-green-500 to-teal-500 text-slate-900 font-bold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 glow-on-hover disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                Agendar Pelo WhatsApp
              </button>
            </form>
          </div>
        )}
      </Modal>

      {/* Developer Contact Modal */}
      <Modal isOpen={isDeveloperModalOpen} onClose={() => setIsDeveloperModalOpen(false)}>
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-rose-400 animated-gradient-text">
            Quer um Site Incrível?
          </h3>
          <p className="text-slate-400 mb-6">Para personalizar sua mensagem, por favor, insira seu nome abaixo.</p>
          <input
            type="text"
            value={developerContactName}
            onChange={(e) => setDeveloperContactName(e.target.value)}
            placeholder="Seu nome"
            className="w-full px-4 py-2 mb-4 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none text-slate-200"
          />
          <button
            onClick={handleDeveloperWhatsAppRedirect}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-slate-900 font-bold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 glow-on-hover"
          >
            Falar com Desenvolvedor 🚀
          </button>
        </div>
      </Modal>
      
      {/* "Coming Soon" Modal for YouTube */}
      <Modal isOpen={isComingSoonModalOpen} onClose={() => setIsComingSoonModalOpen(false)}>
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-rose-400 animated-gradient-text">
            Em Breve!
          </h3>
          <p className="text-slate-400 mt-4">
            Nosso canal no YouTube está em construção. Volte em breve para conferir vídeos e dicas incríveis sobre nutrição esportiva!
          </p>
        </div>
      </Modal>

      {/* General Contact Modal */}
      <Modal isOpen={isContactModalOpen} onClose={handleCloseContactModal}>
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-rose-400 animated-gradient-text">
            Entre em Contato
          </h3>
          <p className="mb-6 text-slate-400">Preencha os dados abaixo para iniciar nossa conversa.</p>
          <form onSubmit={(e) => { e.preventDefault(); handleContactWhatsAppRedirect(); }}>
            <div className="space-y-4">
              <div>
                <label htmlFor="contact-name" className={labelStyle}>Seu Nome Completo*</label>
                <input type="text" name="name" id="contact-name" value={contactFormData.name} onChange={handleContactFormChange} className={inputStyle} required placeholder="Seu nome" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-scheduleDay" className={labelStyle}>Melhor dia</label>
                  <input type="text" name="scheduleDay" id="contact-scheduleDay" value={contactFormData.scheduleDay} onChange={handleContactFormChange} className={inputStyle} placeholder="Ex: Terça-feira" />
                </div>
                <div>
                  <label htmlFor="contact-schedulePeriod" className={labelStyle}>Melhor período</label>
                  <select name="schedulePeriod" id="contact-schedulePeriod" value={contactFormData.schedulePeriod} onChange={handleContactFormChange} className={inputStyle}>
                    <option>Manhã</option>
                    <option>Tarde</option>
                    <option>Noite</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="contact-message" className={labelStyle}>Mensagem (opcional)</label>
                <textarea name="message" id="contact-message" value={contactFormData.message} onChange={handleContactFormChange} className={textAreaStyle} placeholder="Como posso te ajudar?" rows={3}></textarea>
              </div>
            </div>
            <button
              type="submit"
              disabled={!contactFormData.name}
              className="w-full mt-8 bg-gradient-to-r from-green-500 to-teal-500 text-slate-900 font-bold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 glow-on-hover disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              Enviar Mensagem no WhatsApp
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default App;