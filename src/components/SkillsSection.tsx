import React from 'react';
import { SKILLS_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="habilidades" className="relative py-24 border-t border-[#5E3A5C]/40 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F3E9EC] font-heading tracking-tight">
            Stack Tecnológica & Habilidades
          </h2>
          <p className="text-sm text-[#F3E9EC]/70 mt-2">
            Conjunto de ferramentas técnicas e competências comportamentais consolidadas.
          </p>
        </div>

        {/* Content Grids */}
        <div className="space-y-12">
          {/* HARD SKILLS (Tecnologias) */}
          <div>
            <div className="mb-5">
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#F3E9EC]/90 font-semibold">
                Tecnologias & Ferramentas
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {SKILLS_DATA.tech.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#0B0E1A]/70 border border-[#5E3A5C]/40 hover:border-[#B47A9A]/60 hover:bg-[#0B0E1A] transition-all duration-200 group flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-mono text-xs font-bold text-[#F3E9EC] group-hover:text-[#B47A9A] transition-colors mb-2">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#F3E9EC]/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SOFT SKILLS (Competências) */}
          <div>
            <div className="mb-5">
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#F3E9EC]/90 font-semibold">
                Competências Comportamentais (Soft Skills)
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {SKILLS_DATA.soft.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#0B0E1A]/70 border border-[#5E3A5C]/40 hover:border-[#B47A9A]/60 hover:bg-[#0B0E1A] transition-all duration-200 group"
                >
                  <h4 className="text-sm font-bold text-[#F3E9EC] font-heading group-hover:text-[#B47A9A] transition-colors mb-1.5">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#F3E9EC]/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
