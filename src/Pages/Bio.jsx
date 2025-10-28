import React from "react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import UserDetails from "@/Components/Biography/UserDetails";
import { useNavigate } from "react-router-dom";
const Bio = () => {
  const navigate = useNavigate();
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: false });
  return (
    <div className="relative min-h-screen pt-16">
      {/* Quote */}
      <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4 pb-7">
        <h2 className="text-white text-2xl md:text-4xl font-bold leading-snug relative min-h-[100px]">
          <span className="text-5xl text-white font-serif absolute -left-7 top-0">
            “
          </span>

          <span className="text-6xl text-white font-serif">
            Born & Brought By Madurai
          </span>

          <span className="text-5xl text-white font-serif absolute -right-8 top-0">
            ”
          </span>
        </h2>
      </div>

      {/* Intro */}
      <div
        ref={animationRef}
        className="w-full px-6 md:px-12 lg:px-24 xl:px-32 py-16 -mt-8"
      >
        <motion.div
          key={isInView ? "visible-right" : "hidden-right"}
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <p className="text-2xl text-muted-foreground leading-relaxed sm:text-justify md:text-left">
            With over 27 years of dedicated service in commerce education, I’ve
            had the privilege of mentoring thousands of students across
            disciplines. My academic journey has taken me through Management,
            Commerce, and Human Resource Management — areas where I’ve not only
            taught but also researched extensively.
          </p>
          <p className="text-2xl text-muted-foreground leading-relaxed sm:text-justify md:text-left">
            "I believe in nurturing minds, not just delivering lectures. My
            commitment to academic excellence and student growth has been the
            cornerstone of my career, and I’m honored to be recognized among the
            leading educators in my field."
          </p>
        </motion.div>
      </div>

      {/* Globe & List */}
      <UserDetails />
      <Button
        onClick={() => navigate("/Dr.Rengaraj/")}
        size="lg"
        className="glass-strong glow hover:scale-105 transition-transform text-xl flex justify-center mx-auto my-12"
      >
        Exit Gate
      </Button>
    </div>
  );
};

export default Bio;
