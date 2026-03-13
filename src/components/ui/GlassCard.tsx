import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  return (
    <div
      className={`
        glass rounded-2xl p-6 md:p-8
        ${hover ? "transition-all duration-500 ease-out hover:scale-[1.02] hover:border-nova-blue/20 hover:shadow-[0_0_40px_rgba(77,124,255,0.1)]" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
