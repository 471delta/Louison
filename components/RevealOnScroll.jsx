'use client';

import { useEffect, useRef } from 'react';

export default function RevealOnScroll({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    // Reveal on scroll logic
  }, []);

  return <div ref={ref}>{children}</div>;
}
