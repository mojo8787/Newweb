import React from "react";
import ParticleBackground from "./hero/ParticleBackground";
import HeroContent from "./hero/HeroContent";
import ContentSection from "./sections/ContentSection";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="min-h-screen w-full overflow-x-hidden bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Particle Background */}
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center">
        <HeroContent />
      </section>

      {/* Content Sections */}
      <section className="relative z-10">
        <ContentSection />
      </section>

      {/* Decorative gradient overlay */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-transparent via-black/20 to-black opacity-60 z-[5]" />
    </motion.div>
  );
};

export default Home;
