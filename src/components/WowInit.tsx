'use client';

import { useEffect } from 'react';
import 'animate.css';

declare global {
  interface Window {
    WOW: any;
  }
}

const WowInit = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      new window.WOW({live: true}).init();
    }


  }, []);

  return null;
};

export default WowInit;