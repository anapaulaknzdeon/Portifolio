import React, { useState } from 'react';
import { RESEARCH_DATA } from '../data/portfolioData';
import {
  Sparkles,
  Eye,
  Sliders,
  CheckCircle2,
  ArrowUpRight,
  Accessibility,
  Contrast,
  Type,
  FileCheck,
  X
} from 'lucide-react';

export const ResearchSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [contrastMode, setContrastMode] = useState<'normal' | 'high'>('normal');
  const [fontSizeMode, setFontSizeMode] = useState<'normal' | 'large'>('normal');
  const [testAltText, setTestAltText] = useState(false);

  return (
    <section id="pesquisa" className="relative py-24 border-t border-[#5E3A5C]/40 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F3E9EC] font-heading tracking-tight">
              {RESEARCH_DATA.title}
            </h2>
            <p className="text-sm text-[#F3E9EC]/70 mt-2 max-w-2xl">
              {RESEARCH_DATA.summary}
            </p>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="self-start md:self-auto px-4 py-2 rounded-lg bg-[#B47A9A] hover:bg-[#c68dae] text-[#00030E] font-bold text-xs font-mono flex items-center gap-2 transition-colors shadow-sm cursor-pointer"
          >
            <span>CONHEÇA A PESQUISA</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Two-column layout: The 4 Focus Pillars + Interactive Accessibility Lab */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* 4 Focus Areas */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {RESEARCH_DATA.focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#0B0E1A]/70 border border-[#5E3A5C]/40 hover:border-[#B47A9A]/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[11px] text-[#B47A9A] font-semibold px-2 py-0.5 rounded bg-[#2C1B2F] border border-[#5E3A5C]/40">
                    Pilar 0{idx + 1}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#B47A9A]/70"></span>
                </div>
                <h3 className="text-sm font-bold text-[#F3E9EC] font-heading mb-1.5">
                  {area.title}
                </h3>
                <p className="text-xs text-[#F3E9EC]/70 leading-relaxed">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Interactive Accessibility Sandbox demonstrating hands-on IHC & WCAG knowledge */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0B0E1A] border border-[#5E3A5C]/50 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-[#5E3A5C]/40 mb-4">
              <div className="flex items-center gap-2">
                <Accessibility className="w-4 h-4 text-[#B47A9A]" />
                <span className="text-xs font-bold text-[#F3E9EC] font-heading">
                  Laboratório Prático de Acessibilidade
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#B47A9A] px-2 py-0.5 rounded bg-[#2C1B2F] border border-[#5E3A5C]/50">
                WCAG 2.2 Live
              </span>
            </div>

            <p className="text-xs text-[#F3E9EC]/70 mb-4">
              Interaja com os controles abaixo para simular adaptações de usabilidade e acessibilidade digital em tempo real:
            </p>

            {/* Sandbox Controls */}
            <div className="space-y-3 mb-5">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-[#F3E9EC]/80 font-mono text-[11px]">
                  <Contrast className="w-3.5 h-3.5 text-[#B47A9A]" />
                  Taxa de Contraste (WCAG AAA)
                </span>
                <button
                  onClick={() => setContrastMode(contrastMode === 'normal' ? 'high' : 'normal')}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                    contrastMode === 'high'
                      ? 'bg-[#B47A9A] text-[#00030E] font-bold'
                      : 'bg-[#2C1B2F] text-[#F3E9EC]/80 hover:bg-[#5E3A5C]'
                  }`}
                >
                  {contrastMode === 'high' ? 'Alto Contraste' : 'Padrão'}
                </button>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-[#F3E9EC]/80 font-mono text-[11px]">
                  <Type className="w-3.5 h-3.5 text-[#B47A9A]" />
                  Escala Tipográfica Cognitiva
                </span>
                <button
                  onClick={() => setFontSizeMode(fontSizeMode === 'normal' ? 'large' : 'normal')}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                    fontSizeMode === 'large'
                      ? 'bg-[#B47A9A] text-[#00030E] font-bold'
                      : 'bg-[#2C1B2F] text-[#F3E9EC]/80 hover:bg-[#5E3A5C]'
                  }`}
                >
                  {fontSizeMode === 'large' ? 'Texto Ampliado (+25%)' : 'Texto Base'}
                </button>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-[#F3E9EC]/80 font-mono text-[11px]">
                  <Eye className="w-3.5 h-3.5 text-[#B47A9A]" />
                  Simulador de Rótulo Semântico (ARIA)
                </span>
                <button
                  onClick={() => setTestAltText(!testAltText)}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                    testAltText
                      ? 'bg-[#B47A9A] text-[#00030E] font-bold'
                      : 'bg-[#2C1B2F] text-[#F3E9EC]/80 hover:bg-[#5E3A5C]'
                  }`}
                >
                  {testAltText ? 'Rótulos Visíveis' : 'Oculto'}
                </button>
              </div>
            </div>

            {/* Preview Box affected by controls */}
            <div
              className={`p-4 rounded-xl border transition-all ${
                contrastMode === 'high'
                  ? 'bg-[#00030E] text-[#F3E9EC] border-[#B47A9A]'
                  : 'bg-[#00030E] text-[#F3E9EC]/90 border-[#5E3A5C]/40'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#B47A9A] font-semibold">
                  Amostra de Interface Testada
                </span>
                <span className="text-[10px] font-mono text-emerald-400">Status 100% legível</span>
              </div>
              <p
                className={`font-medium transition-all ${
                  fontSizeMode === 'large' ? 'text-base leading-relaxed' : 'text-xs'
                }`}
              >
                "A tecnologia deve ser inclusiva por princípio, permitindo que todas as pessoas naveguem com autonomia, segurança e dignidade."
              </p>
              {testAltText && (
                <div className="mt-2 pt-2 border-t border-dashed border-[#5E3A5C]/60 text-[10px] font-mono text-[#B47A9A] flex items-center gap-1.5">
                  <FileCheck className="w-3.5 h-3.5" />
                  <span>aria-label="Citação sobre os princípios de acessibilidade digital de Ana Paula"</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Research Modal Details */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#00030E]/85 backdrop-blur-md">
          <div
            className="relative w-full max-w-2xl bg-[#0B0E1A] border border-[#5E3A5C]/50 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#5E3A5C]/40">
              <div>
                <span className="font-mono text-xs text-[#B47A9A] uppercase tracking-wider font-semibold">
                  Pesquisa Científica & Tecnológica
                </span>
                <h3 className="text-xl font-bold text-[#F3E9EC] font-heading mt-1">
                  {RESEARCH_DATA.title}
                </h3>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1.5 rounded-lg text-[#F3E9EC]/70 hover:text-[#F3E9EC] hover:bg-[#2C1B2F] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#F3E9EC]/80 leading-relaxed">
              <p>
                A pesquisa desenvolvida no âmbito do <strong>Instituto Federal Catarinense (IFC) — Campus Videira</strong> investiga as barreiras enfrentadas por usuários na navegação de páginas web modernas e propõe diretrizes práticas de engenharia de software para superá-las.
              </p>
              <div className="p-4 rounded-xl bg-[#00030E] border border-[#5E3A5C]/40 space-y-2">
                <h4 className="font-mono text-xs text-[#B47A9A] font-semibold uppercase">
                  Metodologia & Aplicação:
                </h4>
                <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#F3E9EC]/70">
                  <li>Avaliação heurística de usabilidade baseada nos 10 princípios de Jakob Nielsen.</li>
                  <li>Inspeção automatizada e manual de conformidade com as diretrizes WCAG 2.2 níveis A e AA.</li>
                  <li>Prototipagem de componentes em React com foco em leitores de tela e navegação estrita por teclado.</li>
                  <li>Documentação de boas práticas para a comunidade estudantil e desenvolvedores iniciantes.</li>
                </ul>
              </div>
              <p className="text-xs text-[#F3E9EC]/70">
                O objetivo final é democratizar a web, demonstrando que acessibilidade não é um anexo opcional, mas o alicerce fundamental de qualquer código de qualidade.
              </p>
            </div>

            <div className="pt-4 border-t border-[#5E3A5C]/40 flex justify-end">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-[#B47A9A] hover:bg-[#c68dae] text-[#00030E] font-semibold text-xs font-mono cursor-pointer"
              >
                Fechar Detalhes
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
