type PulseDividerProps = {
  className?: string;
  variant?: "hero" | "divider";
};

/**
 * The signature element of this site: a single continuous line that opens
 * as an EKG heartbeat trace (the medicine background) and resolves into a
 * `</>` code bracket (the engineering present). Used once large in the
 * hero, then echoed small as a section divider throughout the page.
 */
export default function PulseDivider({ className = "", variant = "divider" }: PulseDividerProps) {
  const height = variant === "hero" ? 120 : 40;
  return (
    <svg
      viewBox="0 0 900 120"
      className={className}
      style={{ height }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0 60 H120 L150 20 L180 100 L210 40 L235 60 H320
           C 355 60 355 60 375 30 C 395 0 420 0 440 60
           C 460 120 485 120 505 60
           L 540 60
           M 620 30 L 580 60 L 620 90
           M 700 30 L 740 60 L 700 90
           H900"
        stroke="url(#pulseGrad)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1000}
        strokeDasharray={1000}
        className="animate-pulseline"
      />
      <defs>
        <linearGradient id="pulseGrad" x1="0" y1="0" x2="900" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF4D6D" />
          <stop offset="55%" stopColor="#7C5CFF" />
          <stop offset="100%" stopColor="#2DD4BF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
