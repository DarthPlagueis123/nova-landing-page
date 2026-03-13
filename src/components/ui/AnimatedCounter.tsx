"use client";

import { useCountUp } from "@/lib/animations";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}: AnimatedCounterProps) {
  const ref = useCountUp(target, duration);

  return (
    <span className={className}>
      {prefix}
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}
