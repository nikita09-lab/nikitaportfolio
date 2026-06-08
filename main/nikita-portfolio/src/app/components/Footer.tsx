import { motion } from "motion/react";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      style={{
        padding: "clamp(80px, 10vw, 128px) 0",
        backgroundColor: "#4A0013",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background dot pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNGNkVFRTgiLz48L3N2Zz4=")`,
        }}
      />

      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(24px, 6vw, 96px)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(48px, 8vw, 96px)",
          }}
          className="footer-grid"
        >
          {/* Left: CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            style={{ display: "flex", flexDirection: "column", gap: 32 }}
          >
            <h2
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "clamp(32px, 6vw, 56px)",
                lineHeight: 1.1,
                color: "#F6EEE8",
              }}
            >
              Let's Create Something Amazing
            </h2>

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 17,
                color: "#D8B4A0",
                maxWidth: 400,
                lineHeight: 1.7,
              }}
            >
              Interested in collaborating on innovative AI projects? Let's connect and build the
              future together.
            </p>

            <motion.a
              href="mailto:nikita@example.com"
              whileHover={{ x: 4 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                color: "#F6EEE8",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
            >
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                Get in Touch
              </span>
              <motion.div whileHover={{ x: 4, y: -4 }} transition={{ duration: 0.2 }}>
                <ArrowUpRight size={20} />
              </motion.div>
            </motion.a>
          </motion.div>

          {/* Right: Social links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 11,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#D8B4A0",
                  opacity: 0.6,
                }}
              >
                Connect
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { icon: Github, label: "GitHub", href: "https://github.com/nikita09-lab" },
                  { icon: Linkedin, label: "LinkedIn", href: "#" },
                  { icon: Mail, label: "Email", href: "mailto:nikita@example.com" },
                ].map(({ icon: Icon, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ x: 4, color: "#D8B4A0" }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 16,
                      color: "#F6EEE8",
                      textDecoration: "none",
                      transition: "color 0.3s",
                    }}
                  >
                    <Icon size={20} />
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 16,
                      }}
                    >
                      {label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div
          style={{
            margin: "64px 0",
            height: 1,
            backgroundColor: "#F6EEE8",
            opacity: 0.1,
          }}
        />

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 13,
              color: "#D8B4A0",
              opacity: 0.6,
            }}
          >
            © {currentYear} Nikita Mishra. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            style={{ display: "flex", alignItems: "center", gap: 16 }}
          >
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 11,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#D8B4A0",
                opacity: 0.6,
              }}
            >
              Crafted with passion
            </span>
            <motion.div
              animate={{ rotate: [0, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowUpRight size={16} color="#D8B4A0" style={{ opacity: 0.6 }} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
