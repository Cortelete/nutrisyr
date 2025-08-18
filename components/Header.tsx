
import React from 'react';

const Header: React.FC = () => {
  const navLinks = ['Início', 'Consultas', 'Quem é Syrlean', 'Avaliações', 'Contato'];

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-rose-400 animated-gradient-text">Syrlean Biedermann</span>
            <span className="block text-xs text-orange-500 -mt-1">Nutrição</span>
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navLinks.map((item) => (
            <a key={item} href="#" className="text-sm font-semibold leading-6 text-slate-200 hover:text-orange-400 transition-colors">
              {item}
            </a>
          ))}
        </div>
        <div className="flex flex-1 justify-end">
          {/* Theme toggle button removed */}
        </div>
      </nav>
    </header>
  );
};

export default Header;