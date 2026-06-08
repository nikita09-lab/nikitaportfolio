import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import creativeIntelligence from "../../assets/creative_intelligence.png";

export function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: "clamp(96px, 12vw, 192px) 0",
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
          fontSize: 150,
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

      {/* Animated vertical line */}
      <motion.div
        style={{
          position: "absolute",
          top: "50%",
          right: 80,
          width: 1,
          height: 256,
          backgroundColor: "#6B0F1A",
          opacity: 0.1,
          transformOrigin: "top",
          pointerEvents: "none",
        }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "0 clamp(24px, 6vw, 96px)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "5fr 7fr",
            gap: "clamp(48px, 8vw, 96px)",
          }}
          className="about-grid"
        >
          {/* ── LEFT COLUMN ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            style={{ display: "flex", flexDirection: "column", gap: 32 }}
          >
            {/* Section label + heading */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
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
                01 — About
              </span>
              <h2
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "clamp(40px, 8vw, 80px)",
                  lineHeight: 1.1,
                  color: "#4A0013",
                }}
              >
                Crafting Intelligence
              </h2>
            </div>

            {/* Animated underline */}
            <motion.div
              style={{
                height: 1,
                background: "linear-gradient(to right, #6B0F1A, transparent)",
                transformOrigin: "left",
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />

            {/* ── Image card — fixed height, no dancing button ── */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              style={{ position: "relative", width: 300, height: 320 }}
            >
              {/* image fills the card */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* subtle overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, rgba(107,15,26,0.08), rgba(74,0,19,0.04))",
                    zIndex: 1,
                    pointerEvents: "none",
                  }}
                />
                <ImageWithFallback
                  src={creativeIntelligence}
                  alt="Creative Intelligence"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                  }}
                />
              </div>

              {/* "Innovation" badge — absolutely pinned at bottom-left, never moves */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  backgroundColor: "#6B0F1A",
                  padding: "10px 20px",
                  zIndex: 10,
                }}
              >
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 12,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#F6EEE8",
                  }}
                >
                  Innovation
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            style={{
              paddingTop: "clamp(0px, 8vw, 128px)",
              display: "flex",
              flexDirection: "column",
              gap: 40,
            }}
          >
            {/* Bio */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 576 }}>
              <p
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "clamp(18px, 3vw, 24px)",
                  lineHeight: 1.6,
                  color: "#6B0F1A",
                }}
              >
                I'm a passionate AI/ML student and Python developer pursuing B.Tech CSE
                (AI &amp; ML Specialization) at Lokmanya Tilak College of Engineering,
                Navi Mumbai — graduating in 2028.
              </p>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 16,
                  lineHeight: 1.8,
                  color: "#6B0F1A",
                  opacity: 0.8,
                }}
              >
                My journey combines deep technical expertise with creative problem-solving,
                exploring neural networks, machine learning algorithms, and innovative
                applications of artificial intelligence. I believe in creating technology
                that's not just functional, but elegant and transformative.
              </p>
            </div>

            {/* Skill tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {["Machine Learning", "Deep Learning", "Python", "Neural Networks", "Data Science"].map(
                (skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ backgroundColor: "#6B0F1A", color: "#F6EEE8" }}
                    style={{
                      padding: "8px 20px",
                      border: "1px solid rgba(107,15,26,0.2)",
                      cursor: "default",
                      transition: "all 0.3s",
                      color: "#6B0F1A",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 13,
                        letterSpacing: "0.05em",
                        color: "inherit",
                      }}
                    >
                      {skill}
                    </span>
                  </motion.div>
                )
              )}
            </div>

            {/* Stats */}
            <div style={{ display: "flex", alignItems: "center", gap: 32, paddingTop: 16 }}>
              {[
                { value: "5+", label: "Projects" },
                { value: "100%", label: "Dedication" },
                { value: "5+", label: "Hackathons" }
              ].map(({ value, label }, i) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 32 }}>
                  {i > 0 && (
                    <div
                      style={{
                        height: 64,
                        width: 1,
                        backgroundColor: "#6B0F1A",
                        opacity: 0.2,
                      }}
                    />
                  )}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <div
                      style={{
                        fontFamily: "Playfair Display, serif",
                        fontSize: "clamp(40px, 6vw, 60px)",
                        color: "#4A0013",
                        lineHeight: 1,
                      }}
                    >
                      {value}
                    </div>
                    <div
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 11,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "#6B0F1A",
                        opacity: 0.6,
                      }}
                    >
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
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
