import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/Components/ui/button";
import { useRef } from "react";
import { forwardRef } from "react";
import BioImg from "/assets/Biography.png";
const Biography = forwardRef((props, ref) => {
  const navigate = useNavigate();

  // Internal ref for animation trigger
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: false });

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          className="grid lg:grid-cols-2 gap-12 items-center"
          ref={animationRef}
        >
          {/* Left - Image */}
          <motion.div
            key={isInView ? "visible-left" : "hidden-left"}
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative w-full max-w-md mx-auto">
              <img
                src={BioImg}
                alt="Open book representing biography"
                className="w-full h-auto object-cover rounded-xl shadow-xl z-0"
              />
            </div>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            key={isInView ? "visible-right" : "hidden-right"}
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6 border-r-4 border-primary pr-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's Know About Rengaraj
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 27 years of dedicated service in commerce education,
              I’ve had the privilege of mentoring thousands of students across
              disciplines .....
              {/* My academic journey has taken me through Management,
              Commerce, and Human Resource Management — areas where I’ve not
              only taught but also researched extensively. */}
            </p>
            {/* <p className="text-lg text-muted-foreground leading-relaxed">
              "I believe in nurturing minds, not just delivering lectures. My
              commitment to academic excellence and student growth has been the
              cornerstone of my career, and I’m honored to be recognized among
              the leading educators in my field."
            </p> */}
            <Button
              onClick={() => navigate("/Dr.S.Rengaraj-Portfolio/BioGraphy")}
              size="lg"
              className="glass-strong glow hover:scale-105 transition-transform text-xl"
            >
              Explore More
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default Biography;
