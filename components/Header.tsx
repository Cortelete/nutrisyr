import React from 'react';

interface HeaderProps {
  onBioClick: () => void;
  onReviewsClick: () => void;
  onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBioClick, onReviewsClick, onContactClick }) => {
  const navLinks = [
    { name: 'Início', href: '#', onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }},
    { name: 'Consultas', href: '#services', onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    }},
    { name: 'Quem é Syrlean', href: '#', onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      onBioClick();
    }},
    { name: 'Avaliações', href: '#', onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      onReviewsClick();
    }},
    { name: 'Contato', href: '#', onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      onContactClick();
    }},
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'})}} className="-m-1.5 p-1.5 flex items-center gap-x-2">
            <img className="h-8 w-auto" src="/logo.png" alt="Biedermann Nutricionista Logo" />
            <div>
                <span className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-rose-400 animated-gradient-text">Biedermann Nutricionista</span>
                <span className="block text-xs text-orange-500 -mt-1">Nutrição</span>
            </div>
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navLinks.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={item.onClick}
              className="text-sm font-semibold leading-6 text-slate-200 hover:text-orange-400 transition-colors"
            >
              {item.name}
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
