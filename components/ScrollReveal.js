"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// data-reveal işaretli öğeler ekrana girdiğinde bir kez "in" sınıfı alır.
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const items = document.querySelectorAll("[data-reveal]:not(.in)");
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
