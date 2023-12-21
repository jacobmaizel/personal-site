'use client';

import { useEffect } from 'react';

export default function ScrollUp() {
  useEffect(() => {
    console.log('scroll up');
    // window.document.scrollingElement?.scrollTo(0, 0), [];
  }, []);

  return null;
}
