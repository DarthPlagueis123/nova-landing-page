"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─── Hook: scroll-triggered fade-in ─── */
export function useScrollFadeIn(
  options: { y?: number; duration?: number; delay?: number; stagger?: number } = {}
) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const children = el.querySelectorAll("[data-animate]");
    const targets = children.length > 0 ? children : [el];

    gsap.set(targets, { opacity: 0, y: options.y ?? 40 });

    gsap.to(targets, {
      opacity: 1,
      y: 0,
      duration: options.duration ?? 1,
      delay: options.delay ?? 0,
      stagger: options.stagger ?? 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [options.y, options.duration, options.delay, options.stagger]);

  return ref;
}

/* ─── Hook: parallax background ─── */
export function useParallax(speed: number = 0.3) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    gsap.to(el, {
      yPercent: -(speed * 30),
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [speed]);

  return ref;
}

/* ─── Hook: pinned section ─── */
export function usePinSection(scrollDistance: number = 1000) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    ScrollTrigger.create({
      trigger: el,
      start: "top top",
      end: `+=${scrollDistance}`,
      pin: true,
      pinSpacing: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [scrollDistance]);

  return ref;
}

/* ─── Hook: animated counter ─── */
export function useCountUp(target: number, duration: number = 2) {
  const ref = useRef<HTMLSpanElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      onEnter: () => {
        if (counted.current) return;
        counted.current = true;
        gsap.to(
          { val: 0 },
          {
            val: target,
            duration,
            ease: "power2.out",
            onUpdate: function () {
              if (el) el.textContent = Math.round(this.targets()[0].val).toLocaleString();
            },
          }
        );
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [target, duration]);

  return ref;
}
