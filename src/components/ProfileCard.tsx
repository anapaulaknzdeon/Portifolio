import React, { useState } from 'react';
import { User } from 'lucide-react';
import portraitAsset from '../assets/images/ana_paula_portrait_1789402582771.jpg';

const CANDIDATE_PATHS = [
  '/foto.jpeg',
  '/foto22.jpeg',
  '/foto_gerada.jpg',
  portraitAsset,
  '/WhatsApp Image 2026-08-05 at 17.30.02.jpeg',
  '/WhatsApp Image 2026-08-05 at 17.30.02.jpg',
  '/foto.png',
  '/perfil.jpg',
  '/WhatsApp Image 2026-09-09 at 16.14.46.jpeg',
];

interface ProfileCardProps {
  compact?: boolean;
  variant?: 'hero' | 'about';
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ variant = 'hero' }) => {
  const isAboutVariant = variant === 'about';
  const [candidateIndex, setCandidateIndex] = useState<number>(0);
  const [hasValidImage, setHasValidImage] = useState<boolean>(true);

  const currentPath = CANDIDATE_PATHS[candidateIndex];

  const handleImageError = () => {
    if (candidateIndex < CANDIDATE_PATHS.length - 1) {
      setCandidateIndex((prev) => prev + 1);
    } else {
      setHasValidImage(false);
    }
  };

  return (
    <div
      id={isAboutVariant ? "about-portrait-card" : "hero-glassmorphic-card"}
      className="relative w-full max-w-[420px] mx-auto flex flex-col items-center justify-center select-none group"
    >
      {/* Soft, minimal ambient glow behind the portrait */}
      <div className="absolute inset-4 rounded-full bg-[#B47A9A]/15 blur-3xl pointer-events-none -z-10 transition-opacity duration-500 group-hover:opacity-100 opacity-60"></div>

      {/* Minimalist fine dual-ring container */}
      <div className="relative p-1.5 sm:p-2 rounded-full border border-[#5E3A5C]/40 group-hover:border-[#B47A9A]/50 transition-colors duration-500">
        {/* Precision Circular Portrait Container */}
        <div
          className={`relative ${
            isAboutVariant
              ? 'w-56 h-56 sm:w-68 sm:h-68 md:w-76 md:h-76'
              : 'w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px]'
          } rounded-full overflow-hidden bg-[#00030E] border border-[#5E3A5C]/30 flex items-center justify-center shadow-2xl`}
        >
          {hasValidImage && currentPath ? (
            <img
              src={currentPath}
              alt="Ana Paula"
              referrerPolicy="no-referrer"
              onError={handleImageError}
              className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-[#0B0E1A] text-[#B47A9A]/60">
              <div className="w-20 h-20 rounded-full border border-[#5E3A5C]/50 flex items-center justify-center bg-[#2C1B2F]/40">
                <User className="w-10 h-10 stroke-[1.4] text-[#B47A9A]" />
              </div>
            </div>
          )}

          {/* Minimal delicate inner rim */}
          <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#F3E9EC]/10 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};
