import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Github, ExternalLink, Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [githubHovered, setGithubHovered] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Wrapper div handles centering; motion.nav only handles y animation */}
      <div
        style={{
          position: "fixed",
          top: 24,
          left: 0,
          right: 0,
          zIndex: 50,
          display: "flex",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: scrolled ? "90%" : "85%",
            maxWidth: scrolled ? 1152 : 1024,
            transition: "width 0.5s, max-width 0.5s",
            pointerEvents: "auto",
          }}
        >
          <div
            style={{
              padding: "16px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "relative",
              backgroundColor: scrolled ? "rgba(246, 238, 232, 0.9)" : "transparent",
              backdropFilter: scrolled ? "blur(20px)" : "none",
              WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
              boxShadow: scrolled ? "0 4px 24px rgba(74,0,19,0.08)" : "none",
              border: scrolled ? "1px solid rgba(107,15,26,0.1)" : "none",
              borderRadius: scrolled ? "2px" : "0",
              transition: "all 0.5s",
            }}
          >
            {/* Left: GitHub expand button */}
            <div
              onMouseEnter={() => setGithubHovered(true)}
              onMouseLeave={() => setGithubHovered(false)}
              style={{ overflow: "hidden", flexShrink: 0 }}
            >
              <a
                href="https://github.com/nikita09-lab"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", display: "block" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 12px",
                    backgroundColor: "#4A0013",
                    color: "#F6EEE8",
                    whiteSpace: "nowrap",
                    transition: "all 0.3s",
                  }}
                >
                  <Github
                    size={20}
                    style={{
                      transform: githubHovered ? "rotate(15deg)" : "rotate(0deg)",
                      transition: "transform 0.3s",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 14,
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      maxWidth: githubHovered ? 120 : 0,
                      opacity: githubHovered ? 1 : 0,
                      overflow: "hidden",
                      transition: "max-width 0.35s ease, opacity 0.25s ease",
                    }}
                  >
                    View Code <ExternalLink size={13} />
                  </span>
                </div>
              </a>
            </div>

            {/* Center: Logo — absolutely centered in the bar */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <motion.a
                href="#hero"
                whileHover={{ scale: 1.05 }}
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: 20,
                  color: "#4A0013",
                  textDecoration: "none",
                  letterSpacing: "-0.02em",
                  display: "block",
                }}
              >
                Nikita.dev
              </motion.a>
            </div>

            {/* Right: Desktop nav links */}
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: 32,
              }}
              className="desktop-nav"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-link"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 14,
                    color: "#4A0013",
                    textDecoration: "none",
                    letterSpacing: "0.02em",
                    position: "relative",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mobile-menu-btn"
              style={{
                display: "none",
                background: "none",
                border: "none",
                color: "#4A0013",
                cursor: "pointer",
                padding: 4,
              }}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#F6EEE8",
            zIndex: 40,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 32,
          }}
        >
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "clamp(28px, 6vw, 48px)",
                color: "#4A0013",
                textDecoration: "none",
              }}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 1px;
          background: #6B0F1A;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .nav-link:hover::after { transform: scaleX(1); }
      `}</style>
    </>
  );
}
