import { motion } from "motion/react";
import { Brain, Code2, Database, GitBranch, Layers, Zap } from "lucide-react";

const skillCategories = [
  {
    category: "Machine Learning",
    icon: Brain,
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "Neural Networks"],
  },
  {
    category: "Programming",
    icon: Code2,
    skills: ["Python", "JavaScript", "TypeScript", "C++", "SQL"],
  },
  {
    category: "Data Science",
    icon: Database,
    skills: ["Pandas", "NumPy", "Matplotlib", "Data Analysis", "Statistics"],
  },
  {
    category: "Tools & Frameworks",
    icon: Layers,
    skills: ["Git", "Docker", "Jupyter", "React", "FastAPI"],
  },
  {
    category: "AI Technologies",
    icon: Zap,
    skills: ["NLP", "Computer Vision", "Deep Learning", "Reinforcement Learning"],
  },
  {
    category: "Version Control",
    icon: GitBranch,
    skills: ["Git", "GitHub", "GitLab", "CI/CD"],
  },
];

const marqueeWords = [
  "Machine Learning",
  "Deep Learning",
  "Artificial Intelligence",
  "Data Science",
  "Python",
  "Neural Networks",
  "Computer Vision",
  "NLP",
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      style={{
        padding: "clamp(96px, 12vw, 192px) 0",
        backgroundColor: "#F6EEE8",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle gradient top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "50%",
          background: "linear-gradient(to bottom, rgba(216,180,160,0.1), transparent)",
        }}
      />

      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(24px, 6vw, 96px)" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          style={{ marginBottom: 96, textAlign: "center" }}
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
            03 — Expertise
          </span>
          <h2
            style={{
              marginTop: 16,
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(40px, 8vw, 80px)",
              lineHeight: 1.1,
              color: "#4A0013",
            }}
          >
            Skills & Technologies
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(48px, 6vw, 64px)",
            marginBottom: 96,
          }}
        >
          {skillCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="skill-card"
                style={{ display: "flex", flexDirection: "column", gap: 24 }}
              >
                {/* Icon + title */}
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <motion.div
                    style={{
                      padding: 16,
                      backgroundColor: "#6B0F1A",
                      transition: "background-color 0.3s",
                    }}
                    whileHover={{ backgroundColor: "#4A0013" }}
                  >
                    <Icon size={24} color="#F6EEE8" />
                  </motion.div>
                  <h3
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontSize: 20,
                      color: "#4A0013",
                    }}
                  >
                    {cat.category}
                  </h3>
                </div>

                {/* Pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {cat.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -2, backgroundColor: "#6B0F1A", color: "#F6EEE8" }}
                      style={{
                        padding: "8px 16px",
                        backgroundColor: "#ffffff",
                        boxShadow: "0 1px 4px rgba(74,0,19,0.08)",
                        border: "1px solid rgba(107,15,26,0.1)",
                        color: "#6B0F1A",
                        fontSize: 13,
                        fontFamily: "Inter, sans-serif",
                        cursor: "default",
                        transition: "all 0.3s",
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Marquee */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            padding: "48px 0",
            borderTop: "1px solid rgba(107,15,26,0.2)",
            borderBottom: "1px solid rgba(107,15,26,0.2)",
            marginBottom: 96,
          }}
        >
          <motion.div
            style={{ display: "flex", gap: 48, whiteSpace: "nowrap" }}
            animate={{ x: [0, -1200] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} style={{ display: "flex", gap: 48, alignItems: "center" }}>
                {marqueeWords.map((word) => (
                  <span
                    key={word}
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontSize: "clamp(24px, 4vw, 48px)",
                      color: "#4A0013",
                      opacity: 0.2,
                    }}
                  >
                    {word}
                    <span
                      style={{
                        display: "inline-block",
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: "#6B0F1A",
                        opacity: 1,
                        margin: "0 24px",
                        verticalAlign: "middle",
                      }}
                    />
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: 16 }}
        >
          <p
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(20px, 3vw, 36px)",
              color: "#6B0F1A",
            }}
          >
            Building the future with code &amp; creativity
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
            <div style={{ height: 1, width: 64, backgroundColor: "#6B0F1A", opacity: 0.3 }} />
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
              Always Learning
            </span>
            <div style={{ height: 1, width: 64, backgroundColor: "#6B0F1A", opacity: 0.3 }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
