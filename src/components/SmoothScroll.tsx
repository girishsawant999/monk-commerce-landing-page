"use client";

import Lenis from "lenis";
import { useEffect } from "react";

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return null;
};

export default SmoothScroll;
