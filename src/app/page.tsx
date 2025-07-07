import {ContactUsSection, EducationSection, ExperienceSection, Footer, HeroSection, Navigation, OpenSourceSection, ProjectsSection, SkillsSection} from '@/components/sections';
import React from 'react';

function Page() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <OpenSourceSection />
      <ExperienceSection />
      <EducationSection />
      <ContactUsSection />
      <Footer />
    </main>
  );
}

export default Page;
