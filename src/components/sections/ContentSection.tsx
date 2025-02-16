import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ContentSectionProps {
  sections?: Array<{
    title: string;
    description: string;
    image: string;
  }>;
}

const defaultSections = [
  {
    title: "Digital Transformation",
    description:
      "Revolutionize your business with cutting-edge digital solutions that drive growth and innovation.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title: "AI Integration",
    description:
      "Harness the power of artificial intelligence to optimize your operations and stay ahead of the curve.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  },
  {
    title: "Cybersecurity",
    description:
      "Protect your digital assets with state-of-the-art security measures and protocols.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
  },
];

const ContentSection: React.FC<ContentSectionProps> = ({
  sections = defaultSections,
}) => {
  return (
    <div className="min-h-screen w-full bg-black/95 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-32">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
          >
            <Card
              className={`w-full md:w-1/2 overflow-hidden bg-black/40 border-[#00f7ff]/20 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}
            >
              <motion.img
                src={section.image}
                alt={section.title}
                className="w-full h-[300px] object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </Card>

            <div
              className={`w-full md:w-1/2 space-y-6 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-4xl font-bold bg-gradient-to-r from-[#00f7ff] to-[#6a00ff] bg-clip-text text-transparent">
                  {section.title}
                </h2>
                <p className="mt-4 text-gray-300 text-lg leading-relaxed">
                  {section.description}
                </p>
                <Button
                  className="mt-6 bg-transparent border border-[#00f7ff] text-[#00f7ff] hover:bg-[#00f7ff]/10"
                  size="lg"
                >
                  Learn More
                </Button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ContentSection;
