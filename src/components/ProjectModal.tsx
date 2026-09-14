import React from 'react';
import { Project } from '../data/portfolioData';
import {
  X,
  ExternalLink,
  Github,
  Code2
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#00030E]/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#0B0E1A] border border-[#5E3A5C]/50 rounded-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in duration-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#5E3A5C]/40 bg-[#0B0E1A] shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#2C1B2F] text-[#B47A9A] font-semibold border border-[#5E3A5C]/50">
              {project.number}
            </span>
            <div>
              <h2 className="text-lg font-bold text-[#F3E9EC] font-heading">
                {project.title}
              </h2>
              <p className="text-xs text-[#B47A9A]/90">{project.subtitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-purple-500/50 hover:border-purple-400 bg-purple-950/30 hover:bg-purple-900/50 text-purple-200 hover:text-white text-xs font-semibold transition-all"
                title="Ver no GitHub"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}
            {project.previewUrl && (
              <a
                href={project.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-xs font-semibold transition-all shadow-sm"
              >
                <span>Acessar Projeto</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-[#F3E9EC]/70 hover:text-[#F3E9EC] hover:bg-[#2C1B2F] transition-colors cursor-pointer"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-[#F3E9EC]">
          {/* Project Image */}
          {project.image && (
            <div className="rounded-xl overflow-hidden border border-[#5E3A5C]/40 relative aspect-[16/9] bg-[#00030E]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E1A]/40 via-transparent to-transparent pointer-events-none" />
            </div>
          )}

          {/* Context & Description */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#B47A9A] font-semibold mb-2">
              Contexto & Proposta
            </h4>
            <p className="text-[#F3E9EC]/80 text-sm leading-relaxed">
              {project.fullStory || project.description}
            </p>
          </div>

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#B47A9A] font-semibold mb-3">
                Tecnologias Utilizadas
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-md bg-[#2C1B2F] border border-[#5E3A5C]/50 text-xs font-mono text-[#F3E9EC] flex items-center gap-1.5"
                  >
                    <Code2 className="w-3.5 h-3.5 text-[#B47A9A]" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 border-t border-[#5E3A5C]/40 bg-[#0B0E1A] flex items-center justify-end gap-3 shrink-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex sm:hidden items-center gap-1.5 px-3 py-1.5 rounded-lg border border-purple-500/50 bg-purple-950/30 text-purple-200 text-xs font-semibold"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          )}
          {project.previewUrl && (
            <a
              href={project.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex sm:hidden items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-xs font-semibold transition-all"
            >
              <span>Acessar</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#2C1B2F] hover:bg-[#5E3A5C] text-[#F3E9EC] text-xs font-medium transition-colors cursor-pointer border border-[#5E3A5C]/40"
          >
            Fechar Janela
          </button>
        </div>
      </div>
    </div>
  );
};
