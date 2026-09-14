import React from 'react';
import { NARRATIVE_STEPS } from '../data/portfolioData';
import { Compass } from 'lucide-react';

interface NarrativeJourneyProps {
  activeStep: string;
  onSelectStep: (targetId: string) => void;
}

export const NarrativeJourney: React.FC<NarrativeJourneyProps> = ({
  activeStep,
  onSelectStep
}) => {
  return (
    <div className="w-full bg-[#0B0E1A]/95 border-y border-[#5E3A5C]/40 backdrop-blur-md py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-mono text-[#B47A9A] shrink-0">
            <Compass className="w-4 h-4 animate-spin-slow text-[#B47A9A]" />
            <span className="font-semibold uppercase tracking-wider text-[#F3E9EC]/90">
              NARRATIVA GUIADA:
            </span>
          </div>

          {/* Stepper buttons */}
          <div className="flex items-center flex-wrap justify-center gap-1.5 sm:gap-2">
            {NARRATIVE_STEPS.map((step, idx) => {
              const isActive = activeStep === step.targetId;
              return (
                <React.Fragment key={step.id}>
                  <button
                    onClick={() => onSelectStep(step.targetId)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#B47A9A] text-[#00030E] font-bold shadow-md shadow-[#B47A9A]/30'
                        : 'bg-[#2C1B2F]/60 border border-[#5E3A5C]/40 text-[#F3E9EC]/80 hover:bg-[#2C1B2F] hover:text-[#F3E9EC]'
                    }`}
                  >
                    <span className="opacity-70 text-[10px] font-mono">{step.number}</span>
                    <span className="font-medium">{step.label}</span>
                  </button>
                  {idx < NARRATIVE_STEPS.length - 1 && (
                    <span className="text-[#5E3A5C] text-xs hidden sm:inline">→</span>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
