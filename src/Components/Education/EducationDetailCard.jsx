import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

const EducationDetailCard = ({ degree, gradient, delay = 0, onViewInfo }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  //  Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Tailwind's md breakpoint
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  //  Flip logic
  const handleHoverStart = () => {
    if (!isMobile) setIsFlipped(true);
  };

  const handleHoverEnd = () => {
    if (!isMobile) setIsFlipped(false);
  };

  const handleClick = () => {
    if (isMobile) setIsFlipped((prev) => !prev);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="perspective-1000"
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onClick={handleClick}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-64 preserve-3d cursor-pointer"
      >
        {/* Front */}
        <div
          className={`absolute inset-0 backface-hidden rounded-2xl border-2 border-white/20 shadow-xl ${gradient} flex items-center justify-center`}
        >
          <p className="text-5xl font-bold text-white">{degree}</p>
        </div>

        {/* Back */}
        <div
          className={`absolute inset-0 backface-hidden rounded-2xl border-2 border-white/20 shadow-xl ${gradient} flex flex-col items-center justify-center rotate-y-180`}
        >
          <Button
            onClick={(e) => {
              e.stopPropagation(); // Prevent bubbling to card flip
              onViewInfo(); // ✅ Trigger modal
            }}
            className="glass-strong glow text-white hover:scale-105 transition-transform text-2xl"
            size="lg"
          >
            View Info
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EducationDetailCard;
