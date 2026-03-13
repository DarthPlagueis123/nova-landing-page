import { ReactNode } from "react";

interface GradientButtonProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "blue" | "gold";
  onClick?: () => void;
}

export default function GradientButton({
  children,
  className = "",
  size = "md",
  variant = "blue",
  onClick,
}: GradientButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-8 py-3.5 text-base",
    lg: "px-10 py-4.5 text-lg",
  };

  const variantClasses = {
    blue: "bg-gradient-to-r from-nova-blue to-nova-purple hover:shadow-[0_0_40px_rgba(77,124,255,0.4)]",
    gold: "bg-gradient-to-r from-nova-gold to-amber-500 hover:shadow-[0_0_40px_rgba(212,168,83,0.4)]",
  };

  return (
    <button
      onClick={onClick}
      className={`
        relative inline-flex items-center justify-center
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        rounded-full font-medium text-white
        transition-all duration-300 ease-out
        hover:scale-105 active:scale-[0.98]
        cursor-pointer
        ${className}
      `}
    >
      {children}
    </button>
  );
}
