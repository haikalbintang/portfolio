export default function HeroSignature({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`hero-signature relative overflow-hidden rounded-2xl border border-paper/10 bg-deep/40 backdrop-blur-sm ${className}`}
    >
      {/* faint monitor-grid backdrop, like ECG paper */}
      <div className="pointer-events-none absolute inset-0 hero-signature-grid" />

      <svg
        viewBox="0 0 640 400"
        className="relative h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="pulseGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* baseline */}
        <line
          x1="20"
          y1="220"
          x2="580"
          y2="220"
          stroke="currentColor"
          className="text-paper/10"
          strokeWidth="1"
        />

        {/* heartbeat trace */}
        <path
          className="ecg-line"
          d="M20,220 L35,220 Q40,200 45,220 L55,220 L60,235 L66,110 L72,280 L78,220 Q92,185 106,220 L200,220 L215,220 Q220,200 225,220 L235,220 L240,235 L246,110 L252,280 L258,220 Q272,185 286,220 L380,220 L420,220"
          fill="none"
          stroke="url(#ecgStroke)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#pulseGlow)"
        />

        <defs>
          <linearGradient id="ecgStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>

        {/* code bracket the trace resolves into */}
        <g className="bracket-pulse" filter="url(#pulseGlow)">
          <path
            d="M456,190 L432,220 L456,250"
            fill="none"
            stroke="#5eead4"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="484"
            y1="256"
            x2="500"
            y2="184"
            stroke="#5eead4"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M524,190 L548,220 L524,250"
            fill="none"
            stroke="#5eead4"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* blinking terminal cursor */}
        <rect
          x="566"
          y="196"
          width="10"
          height="48"
          rx="2"
          className="cursor-blink"
          fill="#a78bfa"
        />
      </svg>

      <style>{`
        .hero-signature-grid {
          background-image:
            repeating-linear-gradient(0deg, rgba(240,240,245,0.04) 0 1px, transparent 1px 32px),
            repeating-linear-gradient(90deg, rgba(240,240,245,0.04) 0 1px, transparent 1px 32px);
        }

        .ecg-line {
          stroke-dasharray: 900;
          stroke-dashoffset: 900;
          animation: ecgDraw 3s ease-in-out infinite;
        }

        @keyframes ecgDraw {
          0%   { stroke-dashoffset: 900; opacity: 0.35; }
          30%  { stroke-dashoffset: 0;   opacity: 1; }
          65%  { stroke-dashoffset: 0;   opacity: 1; }
          100% { stroke-dashoffset: -900; opacity: 0.35; }
        }

        .bracket-pulse {
          animation: bracketPulse 3s ease-in-out infinite;
        }

        @keyframes bracketPulse {
          0%, 34%   { opacity: 0.35; }
          36%, 80%  { opacity: 1; }
          90%, 100% { opacity: 0.35; }
        }

        .cursor-blink {
          animation: cursorBlink 1s steps(1) infinite;
        }

        @keyframes cursorBlink {
          0%, 49%  { opacity: 1; }
          50%, 100% { opacity: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-signature .ecg-line,
          .hero-signature .bracket-pulse,
          .hero-signature .cursor-blink {
            animation: none !important;
            opacity: 1 !important;
            stroke-dashoffset: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
