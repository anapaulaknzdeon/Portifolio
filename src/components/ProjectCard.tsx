import React from 'react';
import { Project } from '../data/portfolioData';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const handleGithubClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
    } else {
      onSelect(project);
    }
  };

  const handleLiveClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.previewUrl) {
      window.open(project.previewUrl, '_blank', 'noopener,noreferrer');
    } else {
      onSelect(project);
    }
  };

  return (
    <div
      onClick={() => onSelect(project)}
      className="group flex flex-col justify-between rounded-3xl bg-[#111116] border border-[#2D2235] hover:border-purple-500/60 transition-all duration-300 overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-purple-950/30 hover:-translate-y-1.5"
    >
      {/* Top Banner Image Frame */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#0A0812]">
        <img
          src={project.image || '/projects/rota-do-codigo.jpg'}
          alt={project.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-transparent to-transparent opacity-60 pointer-events-none" />
      </div>

      {/* Card Content Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
        <div>
          {/* Project Title */}
          <h3 className="text-xl font-bold text-[#F3E9EC] tracking-tight group-hover:text-purple-300 transition-colors font-heading">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#F3E9EC]/70 leading-relaxed mt-2.5 mb-5 line-clamp-3">
            {project.description}
          </p>

          {/* Tech Badges (Outlined purple pills as shown in the reference) */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1 rounded-full text-xs font-mono font-medium border border-purple-500/70 text-purple-200 bg-purple-950/30 transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2.5 py-1 rounded-full text-[11px] font-mono border border-purple-500/40 text-purple-300/80 bg-purple-950/20">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Action Row: [View Details] [GitHub] [External Link] */}
        <div className="flex items-center gap-2.5 pt-2">
          {/* Primary View Details Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(project);
            }}
            className="flex-1 bg-[#8B5CF6] hover:bg-[#7C3AED] active:bg-[#6D28D9] text-white font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-full transition-all duration-200 shadow-md shadow-purple-950/40 flex items-center justify-center cursor-pointer active:scale-95"
          >
            Ver Detalhes
          </button>

          {/* GitHub Action Button */}
          {project.githubUrl && (
            <button
              type="button"
              onClick={handleGithubClick}
              aria-label={`Código do projeto ${project.title}`}
              title="Ver código no GitHub"
              className="w-10 h-10 rounded-full border border-purple-500/70 hover:border-purple-400 bg-purple-950/30 hover:bg-purple-900/50 text-purple-200 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 shrink-0"
            >
              <Github className="w-4 h-4" />
            </button>
          )}

          {/* Live Preview / External Link Action Button */}
          {project.previewUrl && (
            <button
              type="button"
              onClick={handleLiveClick}
              aria-label={`Demonstração do projeto ${project.title}`}
              title="Ver demonstração ao vivo"
              className="w-10 h-10 rounded-full border border-purple-500/70 hover:border-purple-400 bg-purple-950/30 hover:bg-purple-900/50 text-purple-200 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 shrink-0"
            >
              <ExternalLink className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
