import React from 'react';
import {
  ArrowRight,
  MessageSquare
} from 'lucide-react';

interface HowICanHelpSectionProps {
  onContactClick: () => void;
}

export const HowICanHelpSection: React.FC<HowICanHelpSectionProps> = ({ onContactClick }) => {
  const serviceAreas = [
    {
      title: 'Desenvolvimento de Sites & Landing Pages',
      description:
        'Criação de páginas institucionais, páginas de venda e sites responsivos de alta performance para apresentar sua marca ou negócio com autoridade digital.'
    },
    {
      title: 'Design de Interfaces & UI/UX sob Medida',
      description:
        'Concepção visual pensada na experiência do usuário, aliando estética refinada, identidade moderna e facilidade de navegação antes de ir para o código.'
    },
    {
      title: 'Aplicações Web & Sistemas Personalizados',
      description:
        'Construção de painéis, plataformas de gestão, áreas de membros e ferramentas web dinâmicas estruturadas com tecnologias modernas como React e TypeScript.'
    },
    {
      title: 'Modernização & Reformulação Visual',
      description:
        'Se você já tem um site ou projeto antigo que precisa de renovação, atualizo o visual, corrijo problemas de usabilidade e otimizo para dispositivos móveis.'
    }
  ];

  return (
    <section
      id="como-posso-ajudar"
      className="py-24 border-t border-[#5E3A5C]/40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-16"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F3E9EC] font-heading tracking-tight">
            Como Posso Ajudar
          </h2>
          <p className="text-sm sm:text-base text-[#F3E9EC]/75 mt-3 leading-relaxed">
            Uno conhecimentos sólidos em <strong>Ciência da Computação</strong>, design de interfaces focado em <strong>usabilidade</strong> e desenvolvimento web moderno para transformar suas ideias em projetos digitais eficientes e profissionais.
          </p>
        </div>

        <button
          onClick={onContactClick}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-purple-950/40 cursor-pointer self-start md:self-auto shrink-0"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Falar Sobre Meu Projeto</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {serviceAreas.map((service, index) => (
          <div
            key={index}
            className="p-7 rounded-2xl bg-[#0B0E1A]/80 border border-[#5E3A5C]/40 hover:border-[#B47A9A]/60 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <h3 className="text-xl font-bold text-[#F3E9EC] font-heading mb-2.5">
                {service.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#F3E9EC]/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
