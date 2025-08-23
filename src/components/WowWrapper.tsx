'use client';

import dynamic from 'next/dynamic';

const WowInit = dynamic(() => import('@/components/WowInit'), { ssr: false });

export default function WowWrapper() {
  return <WowInit />;
}