
import React from 'react';
import { 
    InstagramIcon, WhatsAppIcon, LinkedInIcon, YouTubeIcon,
    SYRLEAN_INSTAGRAM, SYRLEAN_LINKEDIN
} from '../constants';

interface SocialLinksProps {
    onWhatsAppClick: () => void;
    onYouTubeClick: () => void;
}

const socialLinks = [
    { id: 'instagram', name: 'Instagram', href: SYRLEAN_INSTAGRAM, icon: InstagramIcon, style: 'bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400' },
    { id: 'whatsapp', name: 'WhatsApp', href: '#', icon: WhatsAppIcon, style: 'bg-gradient-to-br from-green-500 to-teal-400' },
    { id: 'linkedin', name: 'LinkedIn', href: SYRLEAN_LINKEDIN, icon: LinkedInIcon, style: 'bg-gradient-to-br from-sky-600 to-blue-700' },
    { id: 'youtube', name: 'YouTube', href: '#', icon: YouTubeIcon, style: 'bg-gradient-to-br from-red-600 to-red-700' },
];

const SocialLinks: React.FC<SocialLinksProps> = ({ onWhatsAppClick, onYouTubeClick }) => {
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (id === 'whatsapp' || id === 'youtube') {
      e.preventDefault();
      if (id === 'whatsapp') onWhatsAppClick();
      if (id === 'youtube') onYouTubeClick();
    }
  };

  return (
    <div className="mt-16 flow-root">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {socialLinks.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => handleClick(e, item.id)}
            target={item.id !== 'whatsapp' && item.id !== 'youtube' ? '_blank' : undefined}
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-x-3 rounded-lg p-4 text-center text-sm font-semibold leading-6 text-slate-900 shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 glow-on-hover ${item.style}`}
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
