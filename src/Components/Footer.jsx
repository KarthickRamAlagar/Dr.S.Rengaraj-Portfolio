import React from "react";
const Footer = () => {
  return (
    <div className="w-full overflow-x-hidden px-4 pb-10 flex flex-col items-center justify-center text-center space-y-4">
      <h2 className="relative text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug max-w-4xl mx-auto glow-text">
        <span className="text-3xl sm:text-4xl lg:text-5xl text-white font-serif absolute -left-2 md:-left-6 lg:-left-10 top-0">
          “
        </span>
        Crafted for Commerce. Driven by Purpose
        <span className="text-3xl sm:text-4xl lg:text-5xl text-white font-serif absolute -right-2 md:-right-6 lg:-right-10 -bottom-5">
          ”
        </span>
      </h2>
    </div>
  );
};

export default Footer;
