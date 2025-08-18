
import React from 'react';
import { DEVELOPER_INSTAGRAM } from '../constants';

interface FooterProps {
    onCTAClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onCTAClick }) => {
  return (
    <footer className="mt-24 py-8 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center space-y-4">
        <p className="text-sm text-slate-400">
          Desenvolvido por{' '}
          <a
            href={DEVELOPER_INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-orange-500 hover:text-orange-400 transition-colors"
          >
            InteligenciArte.IA ✨
          </a>
        </p>
        <button
          onClick={onCTAClick}
          className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500 transition-all"
        >
          Quer um site incrível como esse? Fale comigo! 🚀
        </button>
      </div>
    </footer>
  );
};

export default Footer;