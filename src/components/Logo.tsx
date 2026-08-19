import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'gold';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = 'h-10 w-10', variant = 'dark', showText = true }) => {
  const strokeColor = variant === 'light' ? '#FFFFFF' : variant === 'gold' ? '#FFFFFF' : '#000000';
  const fillColor = variant === 'light' ? '#FFFFFF' : variant === 'gold' ? '#FFFFFF' : '#000000';
  const textColor = variant === 'light' ? 'text-white' : variant === 'gold' ? 'text-white' : 'text-neutral-900';

  return (
    <div className="flex items-center gap-3 group cursor-pointer select-none">
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} transition-transform duration-300 group-hover:scale-105 shrink-0`}
      >
        {/* Outer Circle */}
        <circle
          cx="100"
          cy="100"
          r="90"
          stroke={strokeColor}
          strokeWidth="14"
        />

        {/* Signature Bold 'C' Letter Centered inside Circle */}
        <path
          d="M 126 80 C 121 73 112 69 100 69 C 83 69 70 82 70 100 C 70 118 83 131 100 131 C 113 131 122 126 127 118 L 142 129 C 133 141 118 149 100 149 C 71 149 50 128 50 100 C 50 72 71 51 100 51 C 119 51 134 59 143 72 Z"
          fill={fillColor}
        />
      </svg>

      {showText && (
        <div className="flex flex-col leading-none tracking-wider">
          <span className={`font-heading font-extrabold text-lg sm:text-xl tracking-[0.25em] uppercase ${textColor}`}>
            IL CAZAR
          </span>
          <span className={`text-[9px] sm:text-[10px] tracking-[0.35em] uppercase font-medium opacity-80 ${textColor}`}>
            DEVELOPMENTS
          </span>
        </div>
      )}
    </div>
  );
};
