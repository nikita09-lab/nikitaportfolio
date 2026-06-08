import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { IntroScreen } from "./components/IntroScreen";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { ResumeSection } from "./components/ResumeSection";
import { Footer } from "./components/Footer";

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!introComplete && (
          <IntroScreen onComplete={() => setIntroComplete(true)} />
        )}
      </AnimatePresence>

      <div style={{ minHeight: "100vh", overflowX: "hidden" }}>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ResumeSection />
        <Footer />
      </div>
    </>
  );
}
