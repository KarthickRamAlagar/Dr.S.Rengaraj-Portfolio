import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/Components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Array of specialization names with gradient classes
const specializationData = [
  {
    name: "Financial Accounting",
    gradient: "bg-gradient-to-br from-indigo-500 to-purple-600",
  },
  {
    name: "Cost Accounting",
    gradient: "bg-gradient-to-br from-pink-500 to-red-500",
  },
  {
    name: "Business Statistics",
    gradient: "bg-gradient-to-br from-green-400 to-teal-500",
  },
  {
    name: "Financial Management",
    gradient: "bg-gradient-to-br from-yellow-400 to-orange-500",
  },
  {
    name: "Management Accounting",
    gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
  },
];

// Card component with gradient background
const SpecializtionCard = ({ name, gradient, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="w-full h-80 flex items-center justify-center"
    >
      <div
        className={`w-full h-full rounded-xl shadow-md flex items-center justify-center text-center px-6 ${gradient}`}
      >
        <h3 className=" text-4xl lg:text-5xl font-semibold text-white">{name}</h3>
      </div>
    </motion.div>
  );
};

// Carousel wrapper using ShadCN UI
const SpecializationCarousel = () => {
  const plugin = useRef(
    Autoplay({ delay: 1000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-6xl mx-auto"
      opts={{ loop: true }}
    >
      <CarouselContent>
        {specializationData.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-1/1 sm:basis-1/2 lg:basis-1/3 px-2"
          >
            <SpecializtionCard
              name={item.name}
              gradient={item.gradient}
              delay={index * 0.1}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default SpecializationCarousel;
