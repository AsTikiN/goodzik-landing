import { motion } from "framer-motion";
import { ReactNode } from "react";
import { timings, easings } from "@/config/animation";

interface ScrollMotionProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

export const ScrollMotion = ({
  children,
  delay = 0,
  duration = timings.medium,
  y = 20,
  className,
  once = false,
  amount = 0.3,
}: ScrollMotionProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once,
        amount,
      }}
      transition={{
        duration,
        delay,
        ease: easings.smooth,
      }}
    >
      {children}
    </motion.div>
  );
};
