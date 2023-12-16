'use client';
import React from 'react';
import { Features } from '@/Components/Features';
import { Hero } from '@/Components/Hero';
import { Bottom } from '@/Components/Bottom';

export default function Home() {
  return (
    <React.Fragment>  
      <Hero />
      <Features />
      <Bottom />
    </React.Fragment>
  )
}
