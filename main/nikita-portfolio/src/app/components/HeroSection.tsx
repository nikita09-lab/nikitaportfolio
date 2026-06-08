import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroImg from "../../assets/herosection.png";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 500], [0, 150]);
  const imageScale = useTransform(scrollY, [0, 500], [1, 1.1]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#F6EEE8",
        display: "flex",
        alignItems: "center",
        paddingTop: 128,
      }}
    >
      {/* Grain overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          pointerEvents: "none",
          backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=")`,
        }}
      />

      {/* Floating background year */}
      <motion.div
        style={{
          position: "absolute",
          top: 80,
          right: "25%",
          fontSize: 200,
          opacity: 0.02,
          userSelect: "none",
          pointerEvents: "none",
          fontFamily: "Playfair Display, serif",
          color: "#4A0013",
          x: mousePosition.x * 0.5,
          y: mousePosition.y * 0.5,
        }}
      >
        2026
      </motion.div>

      {/* Animated vertical line */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "25%",
          left: 40,
          width: 1,
          height: 128,
          backgroundColor: "#6B0F1A",
          opacity: 0.1,
        }}
        animate={{ scaleY: [1, 1.5, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: 1440,
          margin: "0 auto",
          padding: "96px clamp(24px, 6vw, 96px)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(400px, 100%), 1fr))",
            gap: "clamp(48px, 8vw, 96px)",
            alignItems: "center",
          }}
        >
          {/* Left: Typography */}
          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <h1
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "clamp(64px, 15vw, 120px)",
                  lineHeight: 0.9,
                  letterSpacing: "-0.03em",
                  overflow: "hidden",
                }}
              >
                <motion.span
                  style={{ display: "block", color: "#4A0013" }}
                  initial={{ y: 100, opacity: 0, filter: "blur(10px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, delay: 3.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  NIKITA
                </motion.span>
                <motion.span
                  style={{ display: "block", color: "#6B0F1A" }}
                  initial={{ y: 100, opacity: 0, filter: "blur(10px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, delay: 3.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  MISHRA
                </motion.span>
              </h1>

              <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingLeft: 8 }}>
                {[
                  { text: "AI/ML Student", color: "#6B0F1A", opacity: 0.8 },
                  { text: "Python Developer", color: "#A26769", opacity: 0.8 },
                  { text: "Creative Technologist", color: "#D8B4A0", opacity: 1 },
                ].map(({ text, color, opacity }, i) => (
                  <motion.p
                    key={text}
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "clamp(12px, 2vw, 16px)",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color,
                      opacity,
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity, x: 0 }}
                    transition={{ duration: 0.6, delay: 3.6 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.9, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: "flex", gap: 24, alignItems: "center" }}
            >
              <motion.a
                href="#projects"
                style={{
                  position: "relative",
                  padding: "16px 32px",
                  backgroundColor: "#4A0013",
                  color: "#F6EEE8",
                  overflow: "hidden",
                  cursor: "pointer",
                  textDecoration: "none",
                  display: "block",
                }}
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                <span
                  style={{
                    position: "relative",
                    zIndex: 10,
                    fontFamily: "Inter, sans-serif",
                    fontSize: 14,
                    letterSpacing: "0.1em",
                  }}
                >
                  View Work
                </span>
                <motion.div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "#6B0F1A",
                    x: "-100%",
                  }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.a>

              <motion.div
                style={{ height: 1, width: 64, backgroundColor: "#4A0013", opacity: 0.2 }}
                animate={{ scaleX: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 4.4 }}
              style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8, paddingTop: 32 }}
            >
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 11,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#6B0F1A",
                  opacity: 0.6,
                }}
              >
                Scroll
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {[0, 0.3, 0.6].map((delay, i) => (
                  <motion.div
                    key={i}
                    style={{ marginTop: i > 0 ? -8 : 0 }}
                    animate={{ y: [0, 8, 0], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay }}
                  >
                    <ChevronDown size={16} style={{ color: "#6B0F1A" }} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Abstract Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 3.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "relative",
              x: mousePosition.x * -0.3,
              y: mousePosition.y * -0.3,
            }}
          >
            <motion.div
              style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden", y: imageY, scale: imageScale }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(74,0,19,0.3) 0%, transparent 60%)",
                  opacity: 1,
                  zIndex: 1,
                }}
              />

              <motion.div
                style={{ width: "100%", height: "100%" }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                <ImageWithFallback
                  src={heroImg}
                  alt="Nikita Mishra"
                  className=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                  }}
                />
              </motion.div>

              {/* Floating tag: Portfolio 2026 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 4 }}
                style={{
                  position: "absolute",
                  top: 24,
                  left: 16,
                  backgroundColor: "#F6EEE8",
                  padding: "8px 16px",
                  boxShadow: "0 8px 32px rgba(74,0,19,0.12)",
                  zIndex: 10,
                }}
              >
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 12,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "#4A0013",
                  }}
                >
                  Portfolio 2026
                </span>
              </motion.div>

              {/* Floating tag: AI/ML */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 4.2 }}
                style={{
                  position: "absolute",
                  bottom: 32,
                  right: -48,
                  backgroundColor: "#6B0F1A",
                  padding: "8px 16px",
                  zIndex: 10,
                }}
              >
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 12,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "#F6EEE8",
                  }}
                >
                  AI / ML
                </span>
              </motion.div>
            </motion.div>

            {/* Blurred glow */}
            <motion.div
              style={{
                position: "absolute",
                bottom: -48,
                right: -48,
                width: 256,
                height: 256,
                borderRadius: "50%",
                backgroundColor: "#6B0F1A",
                opacity: 0.2,
                filter: "blur(48px)",
              }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #hero > div > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}