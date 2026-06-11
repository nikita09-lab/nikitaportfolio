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
import resumePDF from "../../assets/resume.pdf";
import mbsImg from "../../assets/MBS.png";

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
      "Served as Project Admin for Virtual Science Lab at NSoC (Nexus Spring Of Code Open Source Community)",
      "Mentored contributors building science experiment simulations with React, FastAPI, and MongoDB Atlas",
      "Reviewed pull requests, managed GitHub issues, and guided the community roadmap",
    ],
    certLink: null as string | null,
    githubLink: "https://github.com/nikita09-lab/Virtual_Science_lab",
  },
  {
    role: "AI & Machine Learning Intern",
    company: "Infosys Springboard",
    period: "2025",
    achievements: [
      "Completed industry-oriented training in Artificial Intelligence and Machine Learning",
      "Worked on hands-on projects involving Python, Machine Learning, and Data Analysis",
      "Gained practical experience in model development, data preprocessing, and problem-solving",
    ],
    certLink: infosysCert as string,
    githubLink: null as string | null,
  },
  {
    role: "AI & Machine Learning Intern — IBM SkillsBuild",
    company: "CSRBOX",
    period: "2025",
    achievements: [
      "Gained practical experience in AI/ML through project-based learning and industry-aligned coursework",
      "Developed communication and project management skills in a professional environment",
      "Built skills in Python, data analysis, and machine learning while working on real-world tasks",
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
    link: null as string | null,
  },
  {
    name: "Learning Microsoft 365 Copilot for Work",
    issuer: "LinkedIn",
    date: "Issued May 2026",
    credentialId: null as string | null,
    link: microsoftCopilotCert as string,
  },
];

const hackathons = [
  {
    name: "Flipkart Gridlock Hackathon 2.0",
    platform: "HackerEarth",
    description:
      "Built an XGBoost + LightGBM ensemble model for traffic demand regression with extensive feature engineering, achieving strong leaderboard performance.",
    tags: ["XGBoost", "LightGBM", "Python", "Feature Engineering"],
  },
  {
    name: "ColoHacks 2026",
    platform: "Colosseum's 26",
    description:
      "Built LabourLink in a 4-member team — a finalist project focused on trust-based hiring for construction workers.",
    tags: ["Cloudinary", "PyMongo", "Python", "JWT Token"],
  },
];

export function ResumeSection() {
  return (
    <section
      id="resume"
      style={{
        padding: "clamp(80px, 10vw, 192px) 0",
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

      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(20px, 5vw, 96px)" }}>

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          style={{ marginBottom: "clamp(48px, 8vw, 96px)", textAlign: "center" }}
        >
          <span style={s.sectionLabel}>04 — Experience</span>
          <h2 style={s.sectionTitle}>Resume</h2>
          <a
            href={resumePDF}
            download="Nikita_Mishra_Resume.pdf"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginTop: 28,
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
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              style={s.timelineItem}
            >
              <div className="row-space-between">
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h4 style={s.itemTitle}>{edu.degree}</h4>
                  <p style={s.itemSub}>{edu.institution}</p>
                  <p style={s.itemMeta}>{edu.focus}</p>
                </div>
                <span style={s.badge} className="badge-nowrap">{edu.year}</span>
              </div>
            </motion.div>
          ))}
        </SectionBlock>

        {/* ── ACHIEVEMENTS ── */}
        <SectionBlock icon={<Trophy size={24} color="#F6EEE8" />} title="Achievements">

          {/* MBS Runner-Up */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={s.timelineItem}
          >
            <h4 style={s.itemTitle}>🏆 Runner-Up — Model Business Summit (MBS)</h4>
            <p style={{ ...s.itemSub, marginBottom: 8 }}>
              AgriTech Track · Lokmanya Tilak College of Engineering, Navi Mumbai
            </p>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(13px, 1.4vw, 15px)", lineHeight: 1.7, color: "#6B0F1A", opacity: 0.85, marginBottom: 16 }}>
              Secured Runner-Up position at the Model Business Summit, competing in the AgriTech
              track. Presented an innovative solution addressing agricultural challenges using
              technology-driven approaches.
            </p>
            {/* MBS image — full width below text on mobile */}
            <div style={{ width: "100%", maxWidth: 400, borderRadius: 2, overflow: "hidden", boxShadow: "0 4px 20px rgba(74,0,19,0.12)" }}>
              <img
                src={mbsImg}
                alt="MBS Runner-Up"
                style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
              />
            </div>
          </motion.div>

          {/* Hackathons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={s.timelineItem}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <Zap size={18} color="#6B0F1A" />
              <h4 style={{ ...s.itemTitle, margin: 0 }}>Hackathon Participations</h4>
            </div>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(13px, 1.4vw, 15px)", color: "#6B0F1A", opacity: 0.8, marginBottom: 20, lineHeight: 1.7 }}>
              I actively participate in hackathons to challenge my skills, collaborate with
              talented teams, and build impactful solutions under time pressure.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {hackathons.map((hack, hi) => (
                <div
                  key={hi}
                  style={{
                    padding: "clamp(14px, 2vw, 20px)",
                    border: "1px solid rgba(107,15,26,0.15)",
                    backgroundColor: "#fff",
                  }}
                >
                  <div className="hack-header">
                    <span style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(16px, 2vw, 18px)", color: "#4A0013" }}>
                      {hack.name}
                    </span>
                    <span style={{ ...s.badge, flexShrink: 0 }}>{hack.platform}</span>
                  </div>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(13px, 1.4vw, 14px)", lineHeight: 1.7, color: "#6B0F1A", opacity: 0.85, margin: "10px 0 12px" }}>
                    {hack.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {hack.tags.map((t) => (
                      <span key={t} style={{ padding: "4px 10px", border: "1px solid rgba(107,15,26,0.2)", fontFamily: "Inter, sans-serif", fontSize: 12, color: "#6B0F1A" }}>
                        {t}
                      </span>
                    ))}
                  </div>
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
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              style={s.timelineItem}
            >
              <div className="row-space-between" style={{ marginBottom: 12 }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h4 style={s.itemTitle}>{exp.role}</h4>
                  <p style={s.itemSub}>{exp.company}</p>
                </div>
                <span style={{ ...s.badge, flexShrink: 0 }} className="badge-nowrap">{exp.period}</span>
              </div>
              <ul style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
                {exp.achievements.map((a, ai) => (
                  <li key={ai} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontFamily: "Inter, sans-serif", fontSize: "clamp(13px, 1.4vw, 15px)", color: "#6B0F1A", opacity: 0.9, listStyle: "none" }}>
                    <span style={{ marginTop: 5, flexShrink: 0 }}>•</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {exp.certLink && (
                  <motion.a
                    href={exp.certLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={s.actionBtn}
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
                    style={s.actionBtn}
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
          <div className="cert-grid">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 3 }}
                style={{
                  padding: "clamp(16px, 2vw, 24px)",
                  border: "1px solid rgba(107,15,26,0.2)",
                  backgroundColor: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <p style={{ fontFamily: "Inter, sans-serif", color: "#4A0013", fontWeight: 600, fontSize: "clamp(13px, 1.4vw, 15px)", lineHeight: 1.4 }}>
                  {cert.name}
                </p>
                <p style={{ fontFamily: "Inter, sans-serif", color: "#6B0F1A", fontSize: 13 }}>{cert.issuer}</p>
                <p style={{ fontFamily: "Inter, sans-serif", color: "#A26769", fontSize: 12, fontStyle: "italic" }}>{cert.date}</p>
                {cert.credentialId && (
                  <p style={{ fontFamily: "Inter, sans-serif", color: "#A26769", fontSize: 11, letterSpacing: "0.05em" }}>
                    ID: {cert.credentialId}
                  </p>
                )}
                {cert.link && (
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 6, color: "#6B0F1A", textDecoration: "none", fontFamily: "Inter, sans-serif", fontSize: 12, letterSpacing: "0.07em" }}
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

      <style>{`
        .row-space-between {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 12px;
        }
        .badge-nowrap {
          white-space: nowrap;
        }
        .hack-header {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 4px;
        }
        .cert-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 14px;
        }
        @media (max-width: 480px) {
          .cert-grid {
            grid-template-columns: 1fr !important;
          }
          .hack-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
          }
        }
      `}</style>
    </section>
  );
}

/* ─── Reusable section block ──────────────────────────────── */
function SectionBlock({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      style={{ marginBottom: "clamp(48px, 8vw, 96px)" }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: "clamp(28px, 4vw, 48px)" }}>
        <div style={{ padding: 12, backgroundColor: "#6B0F1A", flexShrink: 0 }}>{icon}</div>
        <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(24px, 4vw, 32px)", color: "#4A0013" }}>
          {title}
        </h3>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>{children}</div>
    </motion.div>
  );
}

/* ─── Shared styles ───────────────────────────────────────── */
const s = {
  sectionLabel: {
    fontFamily: "Inter, sans-serif",
    fontSize: 11,
    letterSpacing: "0.3em",
    textTransform: "uppercase",
    color: "#6B0F1A",
    opacity: 0.6,
    display: "block",
  } as React.CSSProperties,
  sectionTitle: {
    marginTop: 14,
    fontFamily: "Playfair Display, serif",
    fontSize: "clamp(36px, 7vw, 80px)",
    lineHeight: 1.1,
    color: "#4A0013",
  } as React.CSSProperties,
  timelineItem: {
    borderLeft: "2px solid rgba(107,15,26,0.2)",
    paddingLeft: "clamp(16px, 3vw, 32px)",
    paddingBottom: "clamp(20px, 3vw, 32px)",
    marginBottom: 8,
  } as React.CSSProperties,
  itemTitle: {
    fontFamily: "Playfair Display, serif",
    fontSize: "clamp(16px, 2.5vw, 22px)",
    color: "#4A0013",
    marginBottom: 6,
    lineHeight: 1.3,
  } as React.CSSProperties,
  itemSub: {
    fontFamily: "Inter, sans-serif",
    fontSize: "clamp(13px, 1.5vw, 16px)",
    color: "#6B0F1A",
    marginBottom: 4,
  } as React.CSSProperties,
  itemMeta: {
    fontFamily: "Inter, sans-serif",
    fontSize: 13,
    color: "#A26769",
    fontStyle: "italic",
  } as React.CSSProperties,
  badge: {
    padding: "5px 12px",
    backgroundColor: "rgba(107,15,26,0.1)",
    color: "#6B0F1A",
    fontFamily: "Inter, sans-serif",
    fontSize: 12,
    height: "fit-content",
  } as React.CSSProperties,
  actionBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 7,
    padding: "8px 14px",
    border: "1px solid rgba(107,15,26,0.4)",
    color: "#4A0013",
    textDecoration: "none",
    fontFamily: "Inter, sans-serif",
    fontSize: 12,
    letterSpacing: "0.07em",
    transition: "all 0.2s",
    cursor: "pointer",
  } as React.CSSProperties,
};
