
import type { ReactNode } from 'react';
import type { Service } from './types';

export const SYRLEAN_WHATSAPP = '+5542999360737';
export const DEVELOPER_WHATSAPP = '+5541988710303';
export const SYRLEAN_INSTAGRAM = 'https://www.instagram.com/nutricionista.biedermann/';
export const SYRLEAN_LINKEDIN = 'https://www.linkedin.com/in/syrlean-biedermann-69580126a';
export const SYRLEAN_YOUTUBE = '#'; // Placeholder
export const DEVELOPER_INSTAGRAM = 'https://www.instagram.com/inteligenciarte.ia/';

export const SERVICES: Service[] = [
  {
    id: 'presencial',
    title: 'Consulta Presencial',
    price: 180,
    description: 'Atendimento completo em consultório, com avaliação física detalhada e plano alimentar personalizado.'
  },
  {
    id: 'domicilio',
    title: 'Consulta em Domicílio',
    price: 200,
    description: 'A mesma qualidade do atendimento presencial, no conforto da sua casa. Ideal para quem tem uma rotina agitada.'
  },
  {
    id: 'online',
    title: 'Consulta Online',
    price: 160,
    description: 'Flexibilidade total para um atendimento de onde você estiver, com a mesma atenção e personalização.'
  }
];

export const InstagramIcon = ({ className = 'w-6 h-6' }: { className?: string }): ReactNode => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c-4.198 0-5.404.019-7.297.107A4.812 4.812 0 00.902 5.008C.813 6.901.794 8.108.794 12.315c0 4.198.019 5.404.108 7.297a4.812 4.812 0 004.108 4.108c1.893.089 3.099.107 7.297.107s5.404-.019 7.297-.107a4.812 4.812 0 004.108-4.108c.089-1.893.107-3.099.107-7.297s-.019-5.404-.107-7.297A4.812 4.812 0 0019.613.902C17.719.813 16.513.794 12.315.794h-.001zm0 2.163c4.142 0 5.298.016 7.165.105a2.647 2.647 0 011.858 1.858c.089 1.867.105 3.023.105 7.165s-.016 5.298-.105 7.165a2.647 2.647 0 01-1.858 1.858c-1.867.089-3.023.105-7.165.105s-5.298-.016-7.165-.105a2.647 2.647 0 01-1.858-1.858c-.089-1.867-.105-3.023-.105-7.165s.016-5.298.105-7.165a2.647 2.647 0 011.858-1.858c1.867-.089 3.023-.105 7.165-.105z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M12.315 7.185a5.13 5.13 0 100 10.26 5.13 5.13 0 000-10.26zm0 8.092a2.962 2.962 0 110-5.925 2.962 2.962 0 010 5.925z" clipRule="evenodd" />
    <path d="M17.605 6.395a1.232 1.232 0 11-2.464 0 1.232 1.232 0 012.464 0z" />
  </svg>
);

export const WhatsAppIcon = ({ className = 'w-6 h-6' }: { className?: string }): ReactNode => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.36 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2M12.04 3.67C16.56 3.67 20.28 7.39 20.28 11.91C20.28 16.43 16.56 20.15 12.04 20.15C10.48 20.15 8.99 19.7 7.74 18.89L7.41 18.69L4.8 19.45L5.58 17.03L5.36 16.66C4.53 15.3 4.06 13.63 4.06 11.91C4.06 7.39 7.78 3.67 12.04 3.67M9.22 7.55C9.05 7.55 8.8 7.55 8.61 7.82C8.42 8.09 7.9 8.58 7.9 9.54C7.9 10.5 8.63 11.42 8.78 11.59C8.93 11.76 10.13 13.82 12.11 14.59C13.78 15.26 14.18 15.15 14.55 15.11C15.02 15.06 15.86 14.55 16.08 14.01C16.3 13.47 16.3 13.01 16.2 12.86C16.1 12.72 15.93 12.63 15.66 12.5C15.39 12.37 14.28 11.83 14.06 11.74C13.84 11.66 13.67 11.61 13.51 11.88C13.34 12.15 12.92 12.64 12.78 12.81C12.63 12.98 12.48 13.03 12.21 12.9C11.94 12.77 11.13 12.5 10.15 11.63C9.39 10.96 8.89 10.13 8.78 9.91C8.67 9.68 8.79 9.54 8.91 9.42C9.01 9.33 9.13 9.17 9.25 9.03C9.37 8.89 9.41 8.8 9.5 8.66C9.58 8.52 9.54 8.35 9.47 8.24C9.4 8.12 9.22 7.55 9.22 7.55Z" /></svg>
);

export const LinkedInIcon = ({ className = 'w-6 h-6' }: { className?: string }): ReactNode => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4s1.39.63 1.39 1.4v4.93h2.8Z M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68Zm1.39 9.94v-8.37H5.5v8.37h2.77Z"/></svg>
);

export const YouTubeIcon = ({ className = 'w-6 h-6' }: { className?: string }): ReactNode => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.73,18.78 17.93,18.84C17.13,18.91 16.44,18.94 15.84,18.94L15,19C12.81,19 11.2,18.84 10.17,18.56C9.27,18.31 8.69,17.73 8.44,16.83C8.31,16.36 8.22,15.73 8.16,14.93C8.09,14.13 8.06,13.44 8.06,12.84L8,12C8,9.81 8.16,8.2 8.44,7.17C8.69,6.27 9.27,5.69 10.17,5.44C10.64,5.31 11.27,5.22 12.07,5.16C12.87,5.09 13.56,5.06 14.16,5.06L15,5C17.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z"/></svg>
);

export const ArrowRightIcon = ({ className = 'w-5 h-5' }: { className?: string }): ReactNode => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
);
