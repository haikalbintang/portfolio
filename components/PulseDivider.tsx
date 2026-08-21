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
export default function PulseDivider({
  className = "",
  variant = "divider",
}: PulseDividerProps) {
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
        d="M0 60 
        H60
           C72 60 72 45 90 45
           C108 45 108 60 120 60
           H140
           L 148 70
           L 160 0
           L 172 80
           L 182 60

           H 210

           C 220 60 220 35 254 35 
           C 290 35 290 60 305 60

           H 355

           C 355 60 355 60 375 30 C 395 0 420 0 440 60
           C 460 120 485 120 505 60

           L 580 60

           M 600 60 H 610
           M 630 60 H640
           M 700 30 L 660 60 L 700 90
           M 720 105 L 760 15
           M 780 30 L 820 60 L 780 90
           M 820 60 H 900"
        stroke="url(#pulseGrad)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1000}
        strokeDasharray={1000}
        className="animate-pulseline"
      />
      <defs>
        <linearGradient
          id="pulseGrad"
          x1="0"
          y1="0"
          x2="900"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FF4D6D" />
          <stop offset="55%" stopColor="#7C5CFF" />
          <stop offset="100%" stopColor="#2DD4BF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
