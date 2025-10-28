import { useState, useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  SignedIn,
  SignedOut,
  SignIn,
  UserButton,
  useUser,
  useClerk,
} from "@clerk/clerk-react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Header = ({ canNavigate, onRestrictedClick, sectionRefs }) => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const navLinks = [
    { name: "Biography", path: "/Dr.Rengaraj/Bio" },
    { name: "Education", path: "/Dr.Rengaraj/Education" },
    { name: "Experience", path: "/Dr.Rengaraj/Experience" },
    { name: "Contact", path: "/Dr.Rengaraj/Contact" },
  ];

  const [showSignIn, setShowSignIn] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY <= 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (user) {
      console.log(
        "Signed-in user:",
        user.fullName || user.username || user.emailAddress
      );
    }
  }, [user]);

  useEffect(() => {
    if (searchParams.get("sign-in")) {
      setShowSignIn(true);
    }
  }, [searchParams]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
      setSearchParams({});
    }
  };

  useEffect(() => {
    document.body.classList.toggle(
      "overflow-hidden",
      showSignIn || mobileMenuOpen
    );
    return () => document.body.classList.remove("overflow-hidden");
  }, [showSignIn, mobileMenuOpen]);

  const handleNavClick = (e, path) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (!canNavigate) {
      onRestrictedClick();
      return;
    }

    const scrollMap = {
      "/Dr.Rengaraj/Bio": sectionRefs.bioRef,
      "/Dr.Rengaraj/Education": sectionRefs.eduRef,
      "/Dr.Rengaraj/Experience": sectionRefs.expRef,
      "/Dr.Rengaraj/Contact": sectionRefs.contactRef,
    };

    const targetRef = scrollMap[path];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AnimatePresence>
        {showHeader && (
          <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-3 left-0 right-0 z-50 px-6 py-4"
          >
            <div className="w-full px-6 flex items-center justify-between">
              <Link to="/Dr.Rengaraj/" className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center glow text-primary">
                  <span className="text-xl font-bold">SR</span>
                </div>
              </Link>

              <SignedIn>
                <nav className="hidden md:flex bg-white/10 backdrop-blur-md rounded-full px-6 py-3 shadow-md">
                  <ul className="flex gap-6 items-center">
                    {navLinks.map((link) => (
                      <li key={link.path}>
                        <Link
                          to={link.path}
                          onClick={(e) => handleNavClick(e, link.path)}
                          className="text-lg font-medium text-white hover:text-sky-400 transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <UserButton
                        afterSignOutUrl="/Dr.Rengaraj/"
                        appearance={{
                          elements: {
                            avatarBox: "w-8 h-8 border border-white",
                          },
                        }}
                      />
                    </li>
                  </ul>
                </nav>

                {/* Hamburger for mobile */}
                <button
                  className="md:hidden bg-white/10 backdrop-blur-md p-2 rounded-full text-white shadow-md"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <HiOutlineMenuAlt3 size={24} />
                </button>
              </SignedIn>

              <SignedOut>
                <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 flex items-center gap-4 shadow-md">
                  <button
                    onClick={() => navigate("/Dr.Rengaraj/?sign-in=true")}
                    className="text-sm font-semibold text-white hover:text-sky-400 transition"
                  >
                    Please Sign In to Continue
                  </button>
                </div>
              </SignedOut>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex flex-col items-center justify-center space-y-6"
            onClick={(e) => {
              if (e.target === e.currentTarget) setMobileMenuOpen(false);
            }}
          >
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <HiOutlineX size={28} />
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className="text-xl font-semibold text-white hover:text-sky-400 transition"
              >
                {link.name}
              </Link>
            ))}
            <UserButton
              afterSignOutUrl="/Dr.Rengaraj/"
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10 border border-white",
                },
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sign In Overlay */}
      {showSignIn && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleOverlayClick}
        >
          <SignIn
            signUpForceRedirectUrl="/Dr.Rengaraj/"
            fallbackRedirectUrl="/Dr.Rengaraj/"
          />
        </div>
      )}
    </>
  );
};

export default Header;
