const D = "M0,0 C240,60 480,120 720,85 C960,50 1200,0 1440,25 L1440,120 L0,120 Z";

export default function Wave({ className = "" }) {
  return (
    <svg className={`wave ${className}`} viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
      <path d={D} />
    </svg>
  );
}
