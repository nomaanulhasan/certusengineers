"use client";

import { useEffect, useRef, useState } from "react";
import throttle from "lodash/throttle";

export default function useScrolled(ratio: number) {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const firstRenderRef = useRef<boolean>(true);

  const handleScroll = throttle(() => {
    setScrolled(window.scrollY > ratio);
  }, 100);

  useEffect(() => {
    if (firstRenderRef.current) {
      handleScroll();
      firstRenderRef.current = false;
      return;
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return { scrolled, isLoading: firstRenderRef.current };
}
