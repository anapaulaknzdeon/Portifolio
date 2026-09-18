import React, { useState, useEffect } from 'react';
import { PORTFOLIO_INFO } from '../data/portfolioData';
import { Copy, Check, Menu, X, ArrowUpRight, Mail } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(PORTFOLIO_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { id: 'home', label: 'Início' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'como-posso-ajudar', label: 'Como Ajudar' },
    { id: 'formacao', label: 'Formação' },
    { id: 'contato', label: 'Contato' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0E1A]/90 backdrop-blur-md border-b border-[#5E3A5C]/40 shadow-xl shadow-[#00030E]/80 py-3.5'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand identity: Ana Paula in clean typography */}
        <button
          id="nav-brand-btn"
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 group focus:outline-none text-left"
        >
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#F3E9EC] group-hover:text-white transition-colors">
            Ana Paula<span className="text-[#B47A9A]">.</span>
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav-links" className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            const isActive =
              activeSection === link.id ||
              (link.id === 'sobre-mim' && activeSection === 'sobre-portfolio');
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => onNavigate(link.id)}
                className={`relative py-1 text-sm transition-all duration-200 focus:outline-none ${
                  isActive
                    ? 'text-[#F3E9EC] font-semibold'
                    : 'text-[#F3E9EC]/60 hover:text-[#B47A9A] font-medium'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-[#B47A9A] rounded-full shadow-[0_0_10px_rgba(180,122,154,0.9)]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            id="nav-cta-talk-btn"
            href={`mailto:${PORTFOLIO_INFO.email}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#B47A9A] hover:bg-[#c68dae] text-[#00030E] font-bold text-xs tracking-wide transition-all duration-200 shadow-md shadow-[#B47A9A]/30 active:scale-95 cursor-pointer"
            title={`Enviar e-mail para ${PORTFOLIO_INFO.email}`}
          >
            <span>Fale comigo</span>
            <Mail className="w-3.5 h-3.5" />
          </a>

          {/* Mobile menu trigger */}
          <button
            id="nav-mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#F3E9EC]/80 hover:text-[#F3E9EC] hover:bg-[#2C1B2F] focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="md:hidden bg-[#0B0E1A] border-b border-[#5E3A5C]/50 px-5 py-4 space-y-3 mt-3 shadow-2xl"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#2C1B2F] text-[#F3E9EC] font-semibold border-l-2 border-[#B47A9A]'
                      : 'text-[#F3E9EC]/70 hover:bg-[#2C1B2F]/50 hover:text-[#F3E9EC]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#B47A9A]"></span>}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#5E3A5C]/40 flex flex-col gap-2">
            <a
              href={`mailto:${PORTFOLIO_INFO.email}`}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-full bg-[#B47A9A] hover:bg-[#c68dae] text-[#00030E] font-bold text-xs tracking-wide transition-all text-center shadow-md shadow-[#B47A9A]/30 flex items-center justify-center gap-1.5"
              title={`Enviar e-mail para ${PORTFOLIO_INFO.email}`}
            >
              <span>Fale comigo</span>
              <Mail className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={handleCopyEmail}
              className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-[#2C1B2F]/60 border border-[#5E3A5C]/40 text-xs text-[#F3E9EC]/80"
            >
              {copied ? (
                <span className="text-[#B47A9A] flex items-center gap-1 font-medium">
                  <Check className="w-3.5 h-3.5" /> E-mail copiado!
                </span>
              ) : (
                <span className="flex items-center gap-1.5">
                  <Copy className="w-3.5 h-3.5 text-[#B47A9A]" />
                  {PORTFOLIO_INFO.email}
                </span>
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
