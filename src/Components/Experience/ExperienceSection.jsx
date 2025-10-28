import { forwardRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card } from "@/Components/ui/card";
import {
  professionalExperience,
  visitingFacultyExperience,
} from "@/lib/experienceData";

const ExperienceSection = forwardRef((props, ref) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const renderExperienceCards = (data) => (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-sky-400 via-sky-500 to-sky-600 hidden md:block"></div>
      <div className="space-y-12">
        {data.map((exp, index) => {
          const isEven = index % 2 === 0;
          const aosDirection = isEven ? "fade-right" : "fade-left";

          return (
            <div
              key={index}
              className={`flex items-center justify-center ${
                isEven ? "md:justify-end" : "md:justify-start"
              }`}
              data-aos={aosDirection}
            >
              <Card
                className={`
                  w-full md:w-[45%] p-6 
                  bg-card/80 backdrop-blur-sm
                  border-2 border-sky-500/30
                  shadow-xl shadow-sky-500/10
                  hover:shadow-2xl hover:shadow-sky-500/20
                  hover:border-sky-500/50
                  transition-all duration-300
                  hover:-translate-y-1
                  ${isEven ? "md:mr-[5%]" : "md:ml-[5%]"}
                `}
              >
                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-sky-500/20">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden bg-white shadow-lg shadow-sky-500/30">
                    <img
                      src={exp.logoPath}
                      alt={`${exp.institution} logo`}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {exp.position}
                  </h3>
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-sky-500">
                    {exp.duration}
                  </p>
                  <p className="text-lg font-medium text-foreground">
                    {exp.department}
                  </p>
                  <p className="text-lg text-muted-foreground">
                    {exp.institution}, {exp.location}
                  </p>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section ref={ref} className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-glow">
            Experience
          </h2>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-center mb-10 text-sky-600">
            Professional Experience
          </h3>
          {renderExperienceCards(professionalExperience)}
        </div>

        <div>
          <h3 className="text-3xl font-semibold text-center mb-10 text-sky-600">
            Visiting Faculty
          </h3>
          {renderExperienceCards(visitingFacultyExperience)}
        </div>
      </div>
    </section>
  );
});

export default ExperienceSection;
