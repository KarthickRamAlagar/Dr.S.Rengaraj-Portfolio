import { motion } from "framer-motion";
import SpecializationCarousel from "./SpecializationCarousel";
import { forwardRef } from "react";
const SpecializtionSection = forwardRef((props, ref) => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-glow">
            SPECIALIZATIONS
          </h2>
        </motion.div>

        <SpecializationCarousel />
      </div>
    </section>
  );
});

export default SpecializtionSection;
