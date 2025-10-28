import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MessageCircle, FileText } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { downloadPublicFolderAsZip } from "@/utils/LogoSR";
import RestrictedAlert from "@/Components/RestrictedAlert";

const Hero = ({ onViewProfile }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const [hasViewedProfile, setHasViewedProfile] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: "" });

  useEffect(() => {
    const stored = localStorage.getItem("hasViewedProfile");
    setHasViewedProfile(stored === "true");
  }, []);

  const handleViewProfile = () => {
    localStorage.setItem("hasViewedProfile", "true");
    setHasViewedProfile(true);
    onViewProfile();
  };

  const showAlert = (message) => {
    setAlert({ show: true, message });
  };

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:rengaraj984@gmail.com",
      message: "Email: rengaraj984@gmail.com",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/919360600425",
      message: "WhatsApp: +91 93606 00425",
    },
    {
      icon: FileText,
      label: "Resume",
      onClick: downloadPublicFolderAsZip,
      message: "Download My Resume & CV",
    },
  ];

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col pt-24 pb-12 px-0 lg:px-6"
    >
      <div className="w-full px-6 flex-1 flex flex-col justify-start">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Section - Image */}
          <motion.div
            key={isInView ? "visible-left" : "hidden-left"}
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex md:justify-center pl-0 lg:pl-48"
          >
            <div className="w-[320px] md:w-[380px] sm:w-[220px] max-w-full rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden shadow-2xl shadow-primary/20 relative">
              <img
                src="/assets/Rengaraj.png"
                alt="Dr. S. Rengaraj portrait"
                className="w-full h-auto object-cover"
              />

              {!hasViewedProfile && (
                <div className="absolute top-64 left-1/2 -translate-x-1/2 md:hidden z-10">
                  <Button
                    onClick={handleViewProfile}
                    size="lg"
                    className="glass-strong text-sm px-6 py-3 rounded-full hover:scale-105 transition-transform glow"
                  >
                    View Profile
                  </Button>
                </div>
              )}
            </div>
          </motion.div>

          {/* Right Section - Content */}
          <motion.div
            key={isInView ? "visible-right" : "hidden-right"}
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col self-center space-y-6"
          >
            <div className="border-l-4 border-primary pl-6 space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-glow">
                Dr.S.Rengaraj
              </h1>
              <p className="text-2xl font-semibold text-muted-foreground">
                M.Com., M.Phil., M.BA., Ph.D.
              </p>
              <p className="text-xl text-muted-foreground">
                Head and Professor of Commerce
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                const isLink = !!social.href;

                const handleHover = () => {
                  showAlert(social.message);
                };

                return (
                  <motion.div
                    key={social.label}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  >
                    {isLink ? (
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={handleHover}
                        className="w-14 h-14 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:glow transition-all group"
                      >
                        <Icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                      </a>
                    ) : (
                      <button
                        onClick={social.onClick}
                        onMouseEnter={handleHover}
                        className="w-14 h-14 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:glow transition-all group"
                      >
                        <Icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                      </button>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* View Profile Button */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-start"
            >
              <Button
                onClick={handleViewProfile}
                size="lg"
                className={`glass-strong text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform glow ${
                  hasViewedProfile ? "bg-primary/80" : ""
                }`}
              >
                View Profile
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Alert Component */}
      <RestrictedAlert
        show={alert.show}
        message={alert.message}
        onClose={() => setAlert({ show: false, message: "" })}
      />
    </section>
  );
};

export default Hero;
