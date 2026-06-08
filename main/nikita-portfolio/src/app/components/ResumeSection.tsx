import { motion } from "motion/react";
import {
  Download, GraduationCap, Briefcase, Award,
  ExternalLink, FileText, Github, Trophy, Zap,
} from "lucide-react";
import infosysCert from "../../assets/Infosys_Springboard.pdf";
import csrboxCert from "../../assets/CSRBOX.pdf";
import dataAnalyticsCert from "../../assets/Data_Analytics_Job .pdf";
import microsoftCopilotCert from "../../assets/CertificateOfCompletion_Learning Microsoft 365 Copilot for Work.pdf";
import microsoftCert from "../../assets/microsoft.pdf";
import EthicsCert from "../../assets//CertificateOfCompletion_Ethics in the Age of Generative AI.pdf";
import resumePDF from "../../assets/resume.pdf";
import mbsImg from "../../assets/MBS.png";
import hackathonImg from "../../assets/comptetion.png";


const education = [
  {
    degree: "Bachelor of Technology — CSE (AI & ML Specialization)",
    institution: "Lokmanya Tilak College of Engineering, Navi Mumbai",
    year: "2024 – 2028",
    focus: "Computer Science & Engineering with AI/ML Specialization",
  },
];

const experience = [
  {
    role: "Open Source Project Admin — NSoC",
    company: "Virtual Science Lab",
    period: "2026",
    achievements: [
      "Served as Project Admin for Virtual Science Lab at NSoC (NSUT's Open Source Cohort)",
      "Mentored contributors building science experiment simulations with React, FastAPI, and MongoDB Atlas",
      "Reviewed pull requests, managed GitHub issues, and guided the community roadmap",
    ],
    certLink: null as string | null,
    githubLink: "https://github.com/nikita09-lab/Virtual_Science_lab",
  },
  {
    role: "AI & Machine Learning Intern",
    company: "Infosys Springboard",
    period: "2026",
    achievements: [
      "Completed industry-oriented training in Artificial Intelligence and Machine Learning",
      "Worked on hands-on projects involving Python, Machine Learning, and Data Analysis",
      "Gained practical experience in model development, data preprocessing, and problem-solving",
    ],
    certLink: infosysCert as string,
    githubLink: null as string | null,
  },
  {
    role: "AI & Machine Learning Intern – IBM SkillsBuild",
    company: "CSRBOX",
    period: "2026",
    achievements: [
      "Gained practical experience in AI/ML through project-based learning and industry-aligned coursework",
      "Developed communication and project management skills in a professional environment",
      "Developed skills in Python, data analysis, and machine learning while working on real-world problem-solving tasks",
    ],
    certLink: csrboxCert as string,
    githubLink: null as string | null,
  },
];

const certifications = [
  {
    name: "Deloitte Australia — Data Analytics Job Simulation",
    issuer: "Forage",
    date: "Issued Nov 2025",
    credentialId: "8rZAfnkbFkLKwYYuD",
    link: dataAnalyticsCert as string,
  },
  {
    name: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    date: "Issued May 2026",
    credentialId: null as string | null,
    link: microsoftCert as string,
  },
  {
    name: "Ethics in the Age of Generative AI",
    issuer: "LinkedIn",
    date: "Issued May 2026",
    credentialId: null as string | null,
    link: EthicsCert as string | null,   
  },
  {
    name: "Learning Microsoft 365 Copilot for Work",
    issuer: "LinkedIn",
    date: "Issued May 2026",
    credentialId: null as string | null,
    link: microsoftCopilotCert as string,
  },
];

/* ─── Achievements / Competitions ─────────────────────────────── */
const achievements = [
  {
    title: "🏆 Runner-Up — Model Business Summit (MBS)",
    subtitle: "AgriTech Track · Lokmanya Tilak College of Engineering, Navi Mumbai",
    description:
      "Secured Runner-Up position at the Model Business Summit, competing in the AgriTech track. Presented an innovative solution addressing agricultural challenges using technology-driven approaches.",
      // image: mbsImg,   ← uncomment and add your image import above when ready
    image: mbsImg as string | null,
  },
];

/* ─── Hackathons ───────────────────────────────────────────────── */
const hackathons = [
  {
    name: "Flipkart Gridlock Hackathon 2.0",
    platform: "HackerEarth",
    description:
      "Built an XGBoost + LightGBM ensemble model for traffic demand regression with extensive feature engineering, achieving strong leaderboard performance.",
    tags: ["XGBoost", "LightGBM", "Python", "Feature Engineering"],
    // image: hackathonImg,  ← uncomment when you have the image
    image: null as string | null,
  },
  {
    name: "ColoHacks 2026 ",
    platform: "Colosseum's 26",
    description:
      "Built LabourLink in a 4-member team. a finalist project at Colosseum 26 Hackathon focused on trust-based hiring for construction workers.",
    tags: ["Cloudinary", "PYMongo", "Python", "JWT Token"],
    image: null as string | null,
  },
];

export function ResumeSection() {
  return (
    <section
      id="resume"
      style={{
        padding: "clamp(96px, 12vw, 192px) 0",
        backgroundColor: "#F6EEE8",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          bottom: "25%",
          left: 0,
          width: 384,
          height: 384,
          backgroundColor: "#6B0F1A",
          opacity: 0.05,
          borderRadius: "50%",
          filter: "blur(48px)",
          pointerEvents: "none",
        }}
        animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(24px, 6vw, 96px)" }}>

        {/* ── HEADER ── */}
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
            04 — Experience
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
            Resume
          </h2>

          {/* Download button — uses anchor download attribute for real file download */}
          <a
            href={resumePDF}
            download="Nikita_Mishra_Resume.pdf"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              marginTop: 32,
              padding: "12px 24px",
              backgroundColor: "#4A0013",
              color: "#F6EEE8",
              textDecoration: "none",
              fontFamily: "Inter, sans-serif",
              fontSize: 13,
              letterSpacing: "0.1em",
            }}
          >
            <Download size={16} />
            Download PDF
          </a>
        </motion.div>

        {/* ── EDUCATION ── */}
        <SectionBlock icon={<GraduationCap size={24} color="#F6EEE8" />} title="Education">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{ borderLeft: "2px solid rgba(107,15,26,0.2)", paddingLeft: 23, paddingBottom: 23 }}
            >
              
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
                <div>
                  <h4 style={styles.itemTitle}>{edu.degree}</h4>
                  <p style={styles.itemSubtitle}>{edu.institution}</p>
                  <p style={styles.itemMeta}>{edu.focus}</p>
                </div>
                <span style={styles.badge}>{edu.year}</span>
              </div>
            </motion.div>
          ))}
        </SectionBlock>

        {/* ── ACHIEVEMENTS / COMPETITIONS ── */}
        <SectionBlock icon={<Trophy size={24} color="#F6EEE8" />} title="Achievements">
          {achievements.map((ach, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{
                borderLeft: "2px solid rgba(107,15,26,0.2)",
                paddingLeft: 23,
                paddingBottom: 23,
                display: "grid",
                gridTemplateColumns: ach.image ? "1fr auto" : "1fr",
                gap: 32,
                alignItems: "start",
              }}
            >
              <div>
                <h4 style={styles.itemTitle}>{ach.title}</h4>
                <p style={{ ...styles.itemSubtitle, marginBottom: 12 }}>{ach.subtitle}</p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, lineHeight: 1.7, color: "#6B0F1A", opacity: 0.85 }}>
                  {ach.description}
                </p>
              </div>
              {ach.image && (
                <div style={{ width: 160, height: 120, overflow: "hidden", flexShrink: 0 }}>
                  <img
                    src={ach.image}
                    alt={ach.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              )}
            </motion.div>
          ))}

          {/* Hackathons row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            style={{ borderLeft: "2px solid rgba(107,15,26,0.2)", paddingLeft: 32, paddingBottom: 16 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
              <Zap size={18} style={{ color: "#6B0F1A" }} />
              <h4 style={{ ...styles.itemTitle, margin: 0 }}>Hackathon Participations</h4>
            </div>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, color: "#6B0F1A", opacity: 0.8, marginBottom: 24, lineHeight: 1.7 }}>
              I actively participate in hackathons to challenge my skills, collaborate with talented teams, and build impactful solutions under time pressure.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {hackathons.map((hack, hi) => (
                <div
                  key={hi}
                  style={{
                    padding: 20,
                    border: "1px solid rgba(107,15,26,0.15)",
                    backgroundColor: "#fff",
                    display: "grid",
                    gridTemplateColumns: hack.image ? "1fr auto" : "1fr",
                    gap: 20,
                    alignItems: "start",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8, flexWrap: "wrap" }}>
                      <span style={{ fontFamily: "Playfair Display, serif", fontSize: 18, color: "#4A0013" }}>
                        {hack.name}
                      </span>
                      <span style={styles.badge}>{hack.platform}</span>
                    </div>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, lineHeight: 1.7, color: "#6B0F1A", opacity: 0.85, marginBottom: 12 }}>
                      {hack.description}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {hack.tags.map((t) => (
                        <span
                          key={t}
                          style={{
                            padding: "4px 12px",
                            border: "1px solid rgba(107,15,26,0.2)",
                            fontFamily: "Inter, sans-serif",
                            fontSize: 12,
                            color: "#6B0F1A",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  {hack.image && (
                    <div style={{ width: 140, height: 100, overflow: "hidden", flexShrink: 0 }}>
                      <img
                        src={hack.image}
                        alt={hack.name}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </SectionBlock>

        {/* ── EXPERIENCE ── */}
        <SectionBlock icon={<Briefcase size={24} color="#F6EEE8" />} title="Experience">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{ borderLeft: "2px solid rgba(107,15,26,0.2)", paddingLeft: 32, paddingBottom: 32 }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 12 }}>
                <div>
                  <h4 style={styles.itemTitle}>{exp.role}</h4>
                  <p style={styles.itemSubtitle}>{exp.company}</p>
                </div>
                <span style={{ ...styles.badge, height: "fit-content" }}>{exp.period}</span>
              </div>

              <ul style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                {exp.achievements.map((a, ai) => (
                  <li key={ai} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontFamily: "Inter, sans-serif", color: "#6B0F1A", opacity: 0.9, listStyle: "none" }}>
                    <span style={{ marginTop: 6 }}>•</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {exp.certLink && (
                  /* open PDF in new tab — most reliable cross-browser approach */
                  <motion.a
                    href={exp.certLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.actionBtn}
                    whileHover={{ backgroundColor: "#4A0013", color: "#F6EEE8" }}
                    transition={{ duration: 0.2 }}
                  >
                    <FileText size={14} />
                    View Certificate
                  </motion.a>
                )}
                {exp.githubLink && (
                  <motion.a
                    href={exp.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.actionBtn}
                    whileHover={{ backgroundColor: "#4A0013", color: "#F6EEE8" }}
                    transition={{ duration: 0.2 }}
                  >
                    <Github size={14} />
                    View on GitHub
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </SectionBlock>

        {/* ── CERTIFICATIONS ── */}
        <SectionBlock icon={<Award size={24} color="#F6EEE8" />} title="Certifications">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 4 }}
                style={{
                  padding: 24,
                  border: "1px solid rgba(107,15,26,0.2)",
                  backgroundColor: "#ffffff",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <p style={{ fontFamily: "Inter, sans-serif", color: "#4A0013", fontWeight: 500, fontSize: 15 }}>
                  {cert.name}
                </p>
                <p style={{ fontFamily: "Inter, sans-serif", color: "#6B0F1A", fontSize: 13 }}>
                  {cert.issuer}
                </p>
                <p style={{ fontFamily: "Inter, sans-serif", color: "#A26769", fontSize: 12, fontStyle: "italic" }}>
                  {cert.date}
                </p>
                {cert.credentialId && (
                  <p style={{ fontFamily: "Inter, sans-serif", color: "#A26769", fontSize: 11, letterSpacing: "0.05em" }}>
                    ID: {cert.credentialId}
                  </p>
                )}
                {/* Only render "View Certificate" when link is not null */}
                {cert.link && (
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      marginTop: 8,
                      color: "#6B0F1A",
                      textDecoration: "none",
                      fontFamily: "Inter, sans-serif",
                      fontSize: 12,
                      letterSpacing: "0.08em",
                    }}
                    whileHover={{ color: "#4A0013" }}
                  >
                    <ExternalLink size={12} />
                    View Certificate
                  </motion.a>
                )}
              </motion.div>
            ))}
          </div>
        </SectionBlock>

      </div>
    </section>
  );
}

/* ─── Reusable section block ──────────────────────────────────── */
function SectionBlock({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      style={{ marginBottom: 96 }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
        <div style={{ padding: 12, backgroundColor: "#6B0F1A" }}>{icon}</div>
        <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: 32, color: "#4A0013" }}>
          {title}
        </h3>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>{children}</div>
    </motion.div>
  );
}

/* ─── Shared inline styles ───────────────────────────────────── */
const styles = {
  itemTitle: {
    fontFamily: "Playfair Display, serif",
    fontSize: 20,
    color: "#4A0013",
    marginBottom: 8,
  } as React.CSSProperties,
  itemSubtitle: {
    fontFamily: "Inter, sans-serif",
    fontSize: 16,
    color: "#6B0F1A",
    marginBottom: 4,
  } as React.CSSProperties,
  itemMeta: {
    fontFamily: "Inter, sans-serif",
    fontSize: 14,
    color: "#A26769",
    fontStyle: "italic",
  } as React.CSSProperties,
  badge: {
    padding: "6px 16px",
    backgroundColor: "rgba(107,15,26,0.1)",
    color: "#6B0F1A",
    fontFamily: "Inter, sans-serif",
    fontSize: 13,
    whiteSpace: "nowrap",
  } as React.CSSProperties,
  actionBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 16px",
    border: "1px solid rgba(107,15,26,0.4)",
    color: "#4A0013",
    textDecoration: "none",
    fontFamily: "Inter, sans-serif",
    fontSize: 12,
    letterSpacing: "0.08em",
    transition: "all 0.2s",
  } as React.CSSProperties,
};
