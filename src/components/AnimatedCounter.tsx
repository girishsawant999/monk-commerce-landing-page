"use client";
// components/AnimatedCounter.tsx

import { animate, motion, useInView, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  from?: number;
  to: number;
  duration?: number; // in seconds
  className?: string;
  decimals?: number;
  formatter?: (value: number) => string; // custom display format
};

const AnimatedCounter = ({
  from = 0,
  to,
  duration = 1,
  className = "",
  decimals = 0,
  formatter = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value),
}: AnimatedCounterProps) => {
  const [current, setCurrent] = useState(from);
  const motionValue = useMotionValue(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, to, {
        duration,
        onUpdate: (latest) => {
          setCurrent(latest);
        },
      });

      return controls.stop;
    }
  }, [isInView, to, duration, motionValue]);

  const displayValue = formatter
    ? formatter(current)
    : Number(current).toFixed(decimals);

  return (
    <motion.span ref={ref} className={className}>
      {displayValue}
    </motion.span>
  );
};

export default AnimatedCounter;
