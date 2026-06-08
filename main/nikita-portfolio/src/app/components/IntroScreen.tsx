import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export function IntroScreen({ onComplete }: { onComplete: () => void }) {
  const [currentLetter, setCurrentLetter] = useState(0);
  const name = "NIKITA MISHRA";
  const letters = name.split("");

  useEffect(() => {
    if (currentLetter < letters.length) {
      const timeout = setTimeout(() => {
        setCurrentLetter(currentLetter + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        onComplete();
      }, 900);
      return () => clearTimeout(timeout);
    }
  }, [currentLetter, letters.length, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#F6EEE8" }}
        initial={{ opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Animated grain texture */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.04,
            backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=")`,
          }}
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />

        {/* Decorative blur circles */}
        <motion.div
          className="absolute top-1/4 right-1/4 rounded-full blur-3xl"
          style={{ width: 256, height: 256, backgroundColor: "#D8B4A0", opacity: 0.1 }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 rounded-full blur-3xl"
          style={{ width: 384, height: 384, backgroundColor: "#6B0F1A", opacity: 0.05 }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        <div className="relative text-center">
          {/* Letter-by-letter reveal */}
          <div className="flex items-center justify-center gap-[2px] mb-12 flex-wrap">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "clamp(40px, 10vw, 100px)",
                  color: "#4A0013",
                  letterSpacing: "-0.02em",
                  display: "inline-block",
                  minWidth: letter === " " ? "0.5em" : "auto",
                }}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{
                  opacity: index < currentLetter ? 1 : 0,
                  y: index < currentLetter ? 0 : 20,
                  filter: index < currentLetter ? "blur(0px)" : "blur(10px)",
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>

          {/* Expanding line */}
          <motion.div
            style={{
              height: 1,
              background: "linear-gradient(to right, transparent, #6B0F1A, transparent)",
              transformOrigin: "center",
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{
              scaleX: currentLetter === letters.length ? 1 : 0,
              opacity: currentLetter === letters.length ? 1 : 0,
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Subtitle */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentLetter === letters.length ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 12,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#6B0F1A",
                opacity: 0.6,
              }}
            >
            Portfolio 2026
            </span>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
