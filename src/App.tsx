import React, { useState, useEffect } from 'react';
import {
  PORTFOLIO_INFO,
  PROJECTS,
  EDUCATION_DATA,
  FUTURE_GOALS,
  Project
} from './data/portfolioData';

import { Navbar } from './components/Navbar';
import { ProfileCard } from './components/ProfileCard';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import { SkillsSection } from './components/SkillsSection';
import { HowICanHelpSection } from './components/HowICanHelpSection';
import { ContactSection } from './components/ContactSection';

import {
  ArrowRight,
  ArrowDown,
  Terminal,
  Layers,
  GraduationCap,
  HeartHandshake,
  CheckCircle2,
  Code2,
  BookOpen,
  Compass,
  ArrowUp,
  Cpu,
  Github,
  Linkedin,
  Instagram,
  Mail,
  ArrowUpRight
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Smooth scroll handler
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const sections = [
      'home',
      'habilidades',
      'projetos',
      'como-posso-ajudar',
      'formacao',
      'objetivos',
      'contato'
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#00030E] text-[#F3E9EC] selection:bg-[#B47A9A]/30 selection:text-[#F3E9EC] tech-linear-grid overflow-x-hidden">
      {/* Top Fixed Header */}
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      <main className="pt-16">
        {/* ========================================================
            01. HOME — HERO SECTION (Minimalist & Refined)
        ======================================================== */}
        <section
          id="home"
          className="relative min-h-[88vh] flex items-center justify-center py-20 lg:py-28 overflow-hidden border-b border-[#5E3A5C]/30 bg-[#00030E]"
        >
          {/* Subtle ambient light aura */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B47A9A]/[0.06] rounded-full blur-[160px] pointer-events-none"></div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Minimalist Typography & Actions */}
              <div className="lg:col-span-7 space-y-6 text-left order-last lg:order-first">
                {/* Minimal Header */}
                <div className="space-y-3">
                  <p className="text-xs sm:text-sm font-mono tracking-widest text-[#B47A9A] uppercase">
                    Ciência da Computação
                  </p>

                  <h1 className="font-serif-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal text-[#F3E9EC] tracking-tight leading-[1.05]">
                    Ana Paula
                  </h1>

                  <p className="text-sm sm:text-base text-[#F3E9EC]/75 font-light tracking-wide">
                    Desenvolvedora Web & UI/UX Designer
                  </p>
                </div>

                {/* Short, clear bio description */}
                <p className="text-sm sm:text-base text-[#F3E9EC]/70 font-normal leading-relaxed max-w-lg">
                  {PORTFOLIO_INFO.bioIntro}
                </p>

                {/* Minimalist Action Controls */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    id="hero-cta-projects"
                    onClick={() => scrollToSection('projetos')}
                    className="px-6 py-3 rounded-full bg-[#B47A9A] hover:bg-[#c48ba9] text-[#00030E] font-semibold text-xs sm:text-sm tracking-wide transition-all transform active:scale-95 shadow-sm cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>Ver Projetos</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button
                    id="hero-cta-talk"
                    onClick={() => scrollToSection('contato')}
                    className="px-6 py-3 rounded-full border border-[#5E3A5C]/70 hover:border-[#B47A9A] text-[#F3E9EC] font-medium text-xs sm:text-sm tracking-wide transition-all active:scale-95 cursor-pointer inline-flex items-center gap-2 hover:bg-[#2C1B2F]/30"
                  >
                    <span>Fale Comigo</span>
                  </button>

                  {/* Clean, minimalist social icons without heavy boxes */}
                  <div className="flex items-center gap-1 sm:ml-2">
                    <a
                      id="social-github"
                      href={PORTFOLIO_INFO.github}
                      target="_blank"
                      rel="noreferrer"
                      title="GitHub"
                      className="p-2.5 text-[#F3E9EC]/60 hover:text-[#B47A9A] hover:bg-[#2C1B2F]/40 rounded-full transition-colors active:scale-95"
                    >
                      <Github className="w-4 h-4" />
                    </a>

                    <a
                      id="social-linkedin"
                      href={PORTFOLIO_INFO.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      title="LinkedIn"
                      className="p-2.5 text-[#F3E9EC]/60 hover:text-[#B47A9A] hover:bg-[#2C1B2F]/40 rounded-full transition-colors active:scale-95"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>

                    <a
                      id="social-instagram"
                      href="https://instagram.com"
                      target="_blank"
                      rel="noreferrer"
                      title="Instagram"
                      className="p-2.5 text-[#F3E9EC]/60 hover:text-[#B47A9A] hover:bg-[#2C1B2F]/40 rounded-full transition-colors active:scale-95"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>

                    <a
                      id="social-email"
                      href={`mailto:${PORTFOLIO_INFO.email}`}
                      title={`Enviar E-mail (${PORTFOLIO_INFO.email})`}
                      className="p-2.5 text-[#F3E9EC]/60 hover:text-[#B47A9A] hover:bg-[#2C1B2F]/40 rounded-full transition-colors active:scale-95"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Clean Minimal Portrait Frame */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative z-10 order-first lg:order-last">
                <ProfileCard variant="hero" />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            05. HABILIDADES
        ======================================================== */}
        <SkillsSection />

        {/* ========================================================
            06. PROJETOS
        ======================================================== */}
        <section
          id="projetos"
          className="py-24 border-t border-[#5E3A5C]/40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-16"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F3E9EC] font-heading tracking-tight">
                Projetos e Aplicações
              </h2>
              <p className="text-sm text-[#F3E9EC]/70 mt-2 max-w-2xl">
                Soluções construídas aplicando lógica estruturada, design centrado no usuário e tecnologias web modernas.
              </p>
            </div>
            <span className="text-xs font-mono text-[#B47A9A]">
              Clique em qualquer card para abrir o simulador
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        </section>

        {/* ========================================================
            07. COMO POSSO AJUDAR
        ======================================================== */}
        <HowICanHelpSection onContactClick={() => scrollToSection('contato')} />

        {/* ========================================================
            08. FORMAÇÃO
        ======================================================== */}
        <section
          id="formacao"
          className="py-24 border-t border-[#5E3A5C]/40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-16"
        >
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F3E9EC] font-heading tracking-tight">
              Educação e Programas
            </h2>
            <p className="text-sm text-[#F3E9EC]/70 mt-2">
              Bases sólidas construídas em instituição pública federal de referência e programas de liderança feminina em tecnologia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION_DATA.map((edu, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-[#0B0E1A]/70 border border-[#5E3A5C]/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-[#B47A9A] font-semibold px-2.5 py-1 rounded bg-[#2C1B2F] border border-[#5E3A5C]/50">
                      {edu.period}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F3E9EC] font-heading mb-1.5">
                    {edu.title}
                  </h3>

                  <p className="text-xs font-mono text-[#B47A9A] mb-4">
                    {edu.institution}
                  </p>

                  <p className="text-xs text-[#F3E9EC]/70 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            09. OBJETIVOS
        ======================================================== */}
        <section
          id="objetivos"
          className="py-24 border-t border-[#5E3A5C]/40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-16"
        >
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F3E9EC] font-heading tracking-tight">
              O Que Estou Construindo Para o Futuro
            </h2>
            <p className="text-sm text-[#F3E9EC]/70 mt-2">
              Direções claras de evolução técnica, pesquisa aplicada e inserção no ecossistema profissional de desenvolvimento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FUTURE_GOALS.map((goal, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0B0E1A]/70 border border-[#5E3A5C]/40 hover:border-[#B47A9A]/50 transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-[#B47A9A]"></div>
                  <h3 className="text-sm font-bold text-[#F3E9EC] font-heading">
                    {goal.category}
                  </h3>
                </div>
                <p className="text-xs text-[#F3E9EC]/70 leading-relaxed">
                  {goal.goal}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            12. CONTATO
        ======================================================== */}
        <ContactSection />
      </main>

      {/* ========================================================
          13. FOOTER
      ======================================================== */}
      <footer className="border-t border-[#5E3A5C]/40 bg-[#00030E] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="text-xs text-[#F3E9EC]/70">
                <span className="font-semibold text-[#F3E9EC]">Ana Paula</span> — Portfólio de Tecnologia & Desenvolvimento
              </div>
            </div>

            <div className="flex items-center gap-6 text-xs text-[#F3E9EC]/50 font-mono">
              <span>{PORTFOLIO_INFO.institution}</span>
              <span>© {PORTFOLIO_INFO.year}</span>
              <button
                onClick={() => scrollToSection('home')}
                className="p-2 rounded-lg bg-[#0B0E1A] hover:bg-[#2C1B2F] text-[#B47A9A] hover:text-[#F3E9EC] border border-[#5E3A5C]/40 transition-colors cursor-pointer"
                title="Voltar ao topo"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
