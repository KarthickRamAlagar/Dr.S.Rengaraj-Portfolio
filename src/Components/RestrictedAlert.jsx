import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LogoSR from "../Utils/LogoSR";

const RestrictedAlert = ({ show, message, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed top-24 right-6 z-50 glass-strong rounded-lg p-4 shadow-2xl border-2 border-primary/30 max-w-sm"
        >
          <div className="flex items-center gap-4">
            <LogoSR size="text-xl" font="font-extrabold" />
            <div>
              <p className="font-semibold">{message}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RestrictedAlert;
