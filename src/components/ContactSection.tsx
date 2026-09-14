import React, { useState } from 'react';
import { PORTFOLIO_INFO } from '../data/portfolioData';
import {
  Github,
  Linkedin,
  Copy,
  Check,
  ArrowUpRight
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PORTFOLIO_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contato" className="relative py-24 border-t border-[#5E3A5C]/40 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F3E9EC] font-heading tracking-tight">
            Entre em Contato
          </h2>
          <p className="text-sm text-[#F3E9EC]/70 mt-3 leading-relaxed">
            Estou sempre aberta a conversar sobre projetos práticos, oportunidades acadêmicas, desenvolvimento web e ideias na área de tecnologia.
          </p>
        </div>

        {/* Direct channels (Email, GitHub, LinkedIn) */}
        <div className="max-w-xl mx-auto space-y-4">
          {/* Email Card with 1-click copy */}
          <div className="p-6 rounded-2xl bg-[#0B0E1A]/80 border border-[#5E3A5C]/40 hover:border-[#B47A9A]/50 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#F3E9EC]/60">
                E-mail Oficial
              </span>
              <span className="text-[10px] font-mono text-[#B47A9A]">Resposta Rápida</span>
            </div>
            <div className="flex items-center justify-between gap-2 p-3 bg-[#00030E] rounded-xl border border-[#5E3A5C]/40">
              <span className="font-mono text-xs text-[#F3E9EC] truncate select-all">
                {PORTFOLIO_INFO.email}
              </span>
              <button
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-lg bg-[#B47A9A] hover:bg-[#c68dae] text-[#00030E] text-xs font-bold flex items-center gap-1.5 transition-all shrink-0 active:scale-95 cursor-pointer"
                title="Copiar endereço de e-mail"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social / Profiles */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href={PORTFOLIO_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-xl bg-[#0B0E1A]/80 border border-[#5E3A5C]/40 hover:border-[#B47A9A]/60 hover:bg-[#0B0E1A] flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-2.5">
                <Github className="w-4 h-4 text-[#B47A9A] group-hover:text-[#F3E9EC] transition-colors" />
                <span className="text-xs font-medium text-[#F3E9EC]">GitHub</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B47A9A]/70 group-hover:text-[#F3E9EC] transition-colors" />
            </a>

            <a
              href={PORTFOLIO_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-xl bg-[#0B0E1A]/80 border border-[#5E3A5C]/40 hover:border-[#B47A9A]/60 hover:bg-[#0B0E1A] flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-2.5">
                <Linkedin className="w-4 h-4 text-[#B47A9A] group-hover:text-[#F3E9EC] transition-colors" />
                <span className="text-xs font-medium text-[#F3E9EC]">LinkedIn</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B47A9A]/70 group-hover:text-[#F3E9EC] transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
