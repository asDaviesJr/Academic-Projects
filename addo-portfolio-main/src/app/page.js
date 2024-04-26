'use client';
import React from 'react';
import HeroSection from './pages/HeroSection';
import ExperienceTimeline from './pages/ExperienceTimeline';
import ProjectsList from './pages/ProjectsList';
import Footer from './pages/Footer';
import dynamic from 'next/dynamic'

function Home() {
  return (
    
    <main className="flex flex-col min-h-screen items-center justify-between p-24 space-y-8">
      <HeroSection />
      <br/>
      <ProjectsList className="mb-8" />
     
      <ExperienceTimeline className="mb-8" />
      
      <Footer className='mx-auto mt-auto'/>
    </main>
  );
  
}
export default dynamic (() => Promise.resolve(Home), {ssr:false})