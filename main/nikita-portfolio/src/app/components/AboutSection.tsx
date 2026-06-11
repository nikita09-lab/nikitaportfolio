import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import creativeIntelligence from "../../assets/creative_intelligence.png";

export function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: "clamp(80px, 10vw, 192px) 0",
        backgroundColor: "#F6EEE8",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background blur circle */}
      <motion.div
        style={{
          position: "absolute",
          top: "25%",
          right: 0,
          width: 384,
          height: 384,
          backgroundColor: "#D8B4A0",
          opacity: 0.1,
          borderRadius: "50%",
          filter: "blur(48px)",
          pointerEvents: "none",
        }}
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Big watermark text */}
      <motion.div
        style={{
          position: "absolute",
          top: "33%",
          left: 0,
          fontSize: "clamp(60px, 18vw, 150px)",
          opacity: 0.03,
          userSelect: "none",
          pointerEvents: "none",
          fontFamily: "Playfair Display, serif",
          color: "#4A0013",
          lineHeight: 1,
        }}
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        ABOUT
      </motion.div>

      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(20px, 5vw, 96px)" }}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: "clamp(32px, 5vw, 64px)" }}
        >
          <span style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 11,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#6B0F1A",
            opacity: 0.6,
          }}>
            01 — About
          </span>
          <h2 style={{
            marginTop: 12,
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(32px, 7vw, 80px)",
            lineHeight: 1.1,
            color: "#4A0013",
          }}>
            Crafting Intelligence
          </h2>
          {/* Animated underline */}
          <motion.div
            style={{ height: 1, background: "linear-gradient(to right, #6B0F1A, transparent)", transformOrigin: "left", marginTop: 16 }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Main grid — stacks on mobile */}
        <div className="about-grid" style={{ display: "grid", gap: "clamp(32px, 6vw, 96px)" }}>

          {/* ── LEFT: Image ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 0 }}
          >
            {/* Image card — fixed dimensions, no animated child inside that moves the label */}
            <div style={{ position: "relative", width: "100%", maxWidth: 340 }}>
              <div style={{
                width: "100%",
                // paddingBottom: "100%",   /* aspect-ratio fallback */
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 16px 48px rgba(74,0,19,0.15)",
              }}>
                <ImageWithFallback
                  src={creativeIntelligence}
                  alt="Creative Intelligence"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                  }}
                />
                {/* Subtle bottom gradient */}
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "35%",
                  background: "linear-gradient(to top, rgba(74,0,19,0.55) 0%, transparent 100%)",
                  pointerEvents: "none",
                }} />
              </div>

              {/* "Innovation" label — OUTSIDE the animated div, pinned at bottom via margin-top */}
              <div style={{
                backgroundColor: "#6B0F1A",
                padding: "10px 20px",
                display: "inline-block",
                marginTop: -1,     /* overlap by 1px so no gap */
              }}>
                <span style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#F6EEE8",
                }}>
                  Innovation
                </span>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Bio ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            style={{ display: "flex", flexDirection: "column", gap: "clamp(24px, 4vw, 48px)" }}
          >
            {/* Bio text */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 576 }}>
              <p style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(17px, 2.5vw, 24px)",
                lineHeight: 1.6,
                color: "#6B0F1A",
              }}>
                I'm a passionate AI/ML student and Python developer pursuing B.Tech CSE
                (AI &amp; ML Specialization) at Lokmanya Tilak College of Engineering,
                Navi Mumbai — graduating in 2028.
              </p>
              <p style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(14px, 1.5vw, 16px)",
                lineHeight: 1.8,
                color: "#6B0F1A",
                opacity: 0.8,
              }}>
                My journey combines deep technical expertise with creative problem-solving,
                exploring neural networks, machine learning algorithms, and innovative
                applications of artificial intelligence. I believe in creating technology
                that's not just functional, but elegant and transformative.
              </p>
            </div>

            {/* Skill tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {["Machine Learning", "Deep Learning", "Python", "Neural Networks", "Data Science"].map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ backgroundColor: "#6B0F1A", color: "#F6EEE8" }}
                  style={{
                    padding: "8px 16px",
                    border: "1px solid rgba(107,15,26,0.2)",
                    cursor: "default",
                    transition: "all 0.3s",
                    color: "#6B0F1A",
                  }}
                >
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, letterSpacing: "0.04em", color: "inherit" }}>
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="about-stats" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 24 }}>
              {[
                { value: "5+", label: "Projects" },
                { value: "100%", label: "Dedication" },
                { value: "5+", label: "Hackathons" },
              ].map(({ value, label }, i) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 24 }}>
                  {i > 0 && <div style={{ height: 56, width: 1, backgroundColor: "#6B0F1A", opacity: 0.2 }} />}
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <div style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(32px, 5vw, 60px)", color: "#4A0013", lineHeight: 1 }}>
                      {value}
                    </div>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6B0F1A", opacity: 0.6 }}>
                      {label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .about-grid {
          grid-template-columns: 5fr 7fr;
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
          .about-grid > div:first-child {
            align-items: center;
          }
          .about-grid > div:first-child > div {
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
