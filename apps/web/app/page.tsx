"use client";

import dynamic from 'next/dynamic'
 
const WoodlandScene = dynamic(() => import('./components/WoodlandScene'), {
  ssr: false,
})
 
export default function Page() {
  return <WoodlandScene />
}