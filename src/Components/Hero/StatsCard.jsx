import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import CountUp from "react-countup";

const StatsCard = ({ value, label, gradient, delay = 0 }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [startCount, setStartCount] = useState(false);
  const [countKey, setCountKey] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // ✅ Responsive screen detection
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Tailwind's md breakpoint
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // ✅ Safe numeric extraction
  const numericValue =
    typeof value === "string"
      ? parseInt(value.replace(/\D/g, "")) || 0
      : typeof value === "number"
      ? value
      : 0;

  const hasPlus = typeof value === "string" && value.includes("+");

  // ✅ Flip logic
  const triggerFlip = () => {
    setIsFlipped((prev) => !prev);
    if (isInView) {
      setStartCount(true);
      setCountKey((prev) => prev + 1);
    }
  };

  const handleHoverStart = () => {
    if (!isMobile) triggerFlip();
  };

  const handleHoverEnd = () => {
    if (!isMobile) {
      setIsFlipped(false);
      setStartCount(false);
    }
  };

  const handleClick = () => {
    if (isMobile) triggerFlip();
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
          <p className="text-3xl lg:text-5xl font-bold text-white text-center">
            <Typewriter
              words={[label]}
              loop={false}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
        </div>

        {/* Back */}
        <div
          className={`absolute inset-0 backface-hidden rounded-2xl border-2 border-white/20 shadow-xl ${gradient} flex flex-col items-center justify-center rotate-y-180`}
        >
          <motion.p
            className="text-6xl font-bold text-white flex items-center"
            initial={{ scale: 0.5 }}
            animate={{ scale: isFlipped ? 1 : 0.5 }}
            transition={{ delay: 0.2 }}
          >
            {startCount && numericValue !== undefined ? (
              <>
                <CountUp
                  key={`count-${label}-${countKey}`}
                  end={numericValue}
                  duration={2}
                />
                {hasPlus && <span>+</span>}
              </>
            ) : (
              0
            )}
          </motion.p>

          <p className="text-4xl font-semibold text-white mt-2">
            {label === "Experience" ? `Years ${label}` : label}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StatsCard;
