import React from "react";
import { motion } from "framer-motion";
import { CircuitBoard, Database, Cpu } from "lucide-react";

interface FloatingElementsProps {
  elements?: Array<{
    icon: React.ReactNode;
    x: number;
    y: number;
    delay: number;
  }>;
}

const defaultElements = [
  {
    icon: <CircuitBoard className="w-12 h-12 text-[#00f7ff]" />,
    x: -20,
    y: -20,
    delay: 0,
  },
  {
    icon: <Database className="w-10 h-10 text-[#6a00ff]" />,
    x: 20,
    y: 20,
    delay: 0.2,
  },
  {
    icon: <Cpu className="w-14 h-14 text-[#00f7ff]" />,
    x: 0,
    y: -30,
    delay: 0.4,
  },
];

const FloatingElements: React.FC<FloatingElementsProps> = ({
  elements = defaultElements,
}) => {
  return (
    <div className="relative w-[600px] h-[400px] bg-black/80">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{
            opacity: [0.4, 1, 0.4],
            x: element.x,
            y: element.y,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            delay: element.delay,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="relative">
            {element.icon}
            <div className="absolute inset-0 blur-xl bg-gradient-to-r from-[#00f7ff]/30 to-[#6a00ff]/30 -z-10" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
