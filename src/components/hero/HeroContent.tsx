import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import FloatingElements from "./FloatingElements";

interface HeroContentProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroContent: React.FC<HeroContentProps> = ({
  title = "Transform Your Digital Future",
  subtitle = "Pioneering the next generation of digital experiences with cutting-edge technology solutions",
  ctaText = "Explore Now",
  onCtaClick = () => console.log("CTA clicked"),
}) => {
  return (
    <div className="relative w-[800px] h-[500px] flex flex-col items-center justify-center text-center px-4 bg-black/90">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <motion.h1
          className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#00f7ff] to-[#6a00ff] text-transparent bg-clip-text"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-xl text-gray-300 mb-8 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {subtitle}
        </motion.p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={onCtaClick}
            className="px-8 py-6 text-lg bg-gradient-to-r from-[#00f7ff] to-[#6a00ff] hover:from-[#6a00ff] hover:to-[#00f7ff] transition-all duration-500 shadow-lg hover:shadow-[#00f7ff]/50"
          >
            {ctaText}
          </Button>
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <FloatingElements />
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none -z-20" />
    </div>
  );
};

export default HeroContent;
