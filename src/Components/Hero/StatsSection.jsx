import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import StatsCard from "./StatsCard";
import { forwardRef } from "react";

const StatsSection = forwardRef((props, ref) => {
  const localRef = useRef(null);
  const isInView = useInView(localRef, { once: false });

  const stats = [
    {
      value: "25+",
      label: "Experience",
      gradient: "bg-gradient-to-br from-pink-500 to-pink-100",
    },
    {
      value: 4765,
      label: "Students Trained",
      gradient: "bg-gradient-to-br from-green-500 to-green-100",
    },
    {
      value: "20+",
      label: "Publications",
      gradient: "bg-gradient-to-br from-sky-500 to-sky-100",
    },
  ];

  const reversedStats = [...stats].reverse();

  return (
    <section ref={ref} className="py-20 px-6">
      <div ref={localRef} className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {reversedStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ x: -100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <StatsCard
                value={
                  stat.label === "Experience"
                    ? `Years ${stat.value}`
                    : stat.value
                }
                label={stat.label}
                gradient={stat.gradient}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default StatsSection;
