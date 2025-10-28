import { useState } from "react";
import EducationDetailCard from "./EducationDetailCard";
import EducationModal from "./EducationModal";
import { motion } from "framer-motion";
import educationData from "@/lib/educationData";
import { forwardRef } from "react";
const EducationSection = forwardRef((props, ref) => {
  const [selectedEducation, setSelectedEducation] = useState(null);

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-glow">
            Enlightenment Hub
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }}
            >
              <EducationDetailCard
                degree={edu.degree}
                gradient={edu.gradient}
                delay={index * 0.1}
                onViewInfo={() => setSelectedEducation(index)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {selectedEducation !== null && (
        <EducationModal
          open={selectedEducation !== null}
          onClose={() => setSelectedEducation(null)}
          data={educationData[selectedEducation]}
        />
      )}
    </section>
  );
});


export default EducationSection;




