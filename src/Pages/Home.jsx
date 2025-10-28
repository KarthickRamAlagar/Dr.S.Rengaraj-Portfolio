import { useState, useEffect, useRef } from "react";
import Header from "@/Components/Hero/Navbar";
import Hero from "@/Components/Hero/Hero";
import RestrictedAlert from "@/Components/RestrictedAlert";
import { useUser } from "@clerk/clerk-react";
import StatsSection from "@/Components/Hero/StatsSection";
import Biography from "@/Components/Biography/Biography";
import Footer from "@/Components/Footer";
import EducationSection from "@/Components/Education/EducationSection";
import SpecializtionSection from "@/Components/Specialization/SpecializtionSection";
import ExperienceSection from "@/Components/Experience/ExperienceSection";
import Contact from "../Components/Contact/Contact";

const Home = () => {
  const { user } = useUser();
  const [canNavigate, setCanNavigate] = useState(false);
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  // Section refs
  const statsRef = useRef(null);
  const bioRef = useRef(null);
  const eduRef = useRef(null);
  const specRef = useRef(null);
  const expRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const stored = localStorage.getItem("hasViewedProfile");
    if (stored === "true") {
      setCanNavigate(true);
      setScrollEnabled(true);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = scrollEnabled ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [scrollEnabled]);

  const triggerAlertSequence = (messages, delays) => {
    if (!messages.length) return;
    setAlertMessage(messages[0]);
    setShowAlert(true);

    let index = 1;
    const sequence = () => {
      if (index < messages.length) {
        setTimeout(() => {
          setAlertMessage(messages[index]);
          index++;
          sequence();
        }, delays[index - 1]);
      }
    };
    sequence();
  };

  const handleViewProfile = () => {
    if (!user) {
      triggerAlertSequence(
        ["Access Denied", "Please Sign In to Continue"],
        [2000]
      );
    } else {
      localStorage.setItem("hasViewedProfile", "true");
      setCanNavigate(true);
      setScrollEnabled(true);
      setTimeout(() => {
        statsRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  const handleRestrictedClick = () => {
    if (!canNavigate) {
      triggerAlertSequence(["Access Denied", "Click View Profile"], [1000]);
    }
  };

  return (
    <div className="relative min-h-screen">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header
          canNavigate={canNavigate}
          onRestrictedClick={handleRestrictedClick}
          sectionRefs={{
            statsRef,
            bioRef,
            eduRef,
            specRef,
            expRef,
            contactRef,
          }}
        />
      </div>

      <RestrictedAlert
        show={showAlert}
        message={alertMessage}
        onClose={() => setShowAlert(false)}
      />

      <div className={scrollEnabled ? "pb-24" : "h-screen overflow-hidden"}>
        <Hero onViewProfile={handleViewProfile} />

        {scrollEnabled && (
          <>
            <StatsSection ref={statsRef} />
            <Biography ref={bioRef} />
            <EducationSection ref={eduRef} />
            <SpecializtionSection ref={specRef} />
            <ExperienceSection ref={expRef} />
            <Contact ref={contactRef} />
            <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
