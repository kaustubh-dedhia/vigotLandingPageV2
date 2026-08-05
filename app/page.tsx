'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Loader } from '@/components/layout/Loader';
import { Footer } from '@/components/layout/Footer';
import { CustomCursor } from '@/components/animation/CustomCursor';
import { useLenis } from '@/hooks/useLenis';

import { Hero } from '@/components/sections/Hero';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { RigidBoxes } from '@/components/sections/RigidBoxes';
import { MithaiBoxes } from '@/components/sections/MithaiBoxes';
import { ChocolatePackaging } from '@/components/sections/ChocolatePackaging';
import { ToyGameBoxes } from '@/components/sections/ToyGameBoxes';
import { BeautyPackaging } from '@/components/sections/BeautyPackaging';
import { HamperPackaging } from '@/components/sections/HamperPackaging';
import { PaperBags } from '@/components/sections/PaperBags';
import { Capabilities } from '@/components/sections/Capabilities';
import { Process } from '@/components/sections/Process';
import { ContactCTA } from '@/components/sections/ContactCTA';

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  useLenis();

  return (
    <>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      <CustomCursor />
      <Header />

      <main className="bg-background">
        <Hero />
        <SelectedWork />
        <RigidBoxes />
        <MithaiBoxes />
        <ChocolatePackaging />
        <BeautyPackaging />
        <HamperPackaging />
        <ToyGameBoxes />
        <PaperBags />
        <Capabilities />
        <Process />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}
