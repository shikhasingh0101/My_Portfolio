 "use client";

import dynamic from "next/dynamic";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowDown, ArrowUpRight, BrainCircuit, Code2, Database, Github, Linkedin, Mail,
  Menu, X, MapPin, Sparkles, Server, Layers3, GitFork, Star, ExternalLink
} from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";
import { projects, categories } from "@/data/projects";
import { experience } from "@/data/experience";
import { certifications } from "@/data/certifications";
import { education } from "@/data/education";
import { skillGroups } from "@/data/skills";
import { journey } from "@/data/journey";
import AboutSystem from "./AboutSystem";
import ContactForm from "./ContactForm";
import GithubRepos from "./GithubRepos";

const Scene = dynamic(() => import("./Scene"), { ssr: false });

const roles = ["Full-Stack Development", "Machine Learning", "AI Engineering", "Creative Web Development"];

function ProjectIcon({ category }: { category: string }) {
  if (category === "ML / AI") return <BrainCircuit />;
  if (category === "Systems") return <Database />;
  if (category === "Frontend") return <Layers3 />;
  return <Code2 />;
}

export default function Portfolio() {
  const [menu, setMenu] = useState(false);
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [roleIndex, setRoleIndex] = useState(0);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const id = window.setInterval(() => setRoleIndex((v) => (v + 1) % roles.length), 2600);
    return () => window.clearInterval(id);
  }, []);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <main>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />

      <header className="nav">
        <Link className="brand" href="#home" onClick={() => setMenu(false)}>
          <span className="brand-mark">&lt;/&gt;</span>
          <span>SHIKHA<span className="accent">.DEV</span></span>
        </Link>
        <button className="menu-btn" onClick={() => setMenu((v) => !v)} aria-label="Toggle navigation">{menu ? <X /> : <Menu />}</button>
        <nav className={menu ? "nav-links open" : "nav-links"}>
          {["Home", "About", "Work", "Skills", "Experience", "Journey", "Contact"].map((item) => <Link key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenu(false)}>{item}</Link>)}
          <a className="nav-cta" href={profile.resume}>Resume <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section id="home" className="section hero">
        <div className="hero-grid" />
        <Scene />
        <div className="hero-copy">
          <motion.div className="eyebrow" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
            <span className="pulse" /> {profile.education}
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .08 }}>
            I build <span className="gradient-text">digital products</span><br />that think, move & scale.
          </motion.h1>
          <motion.p className="hero-sub" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .2 }}>
            I&apos;m Shikha — a computer science student building at the intersection of <strong>full-stack engineering</strong>, <strong>machine learning</strong> and <strong>creative UI</strong>.
          </motion.p>
          <div className="role-line"><Sparkles size={15} /> currently exploring: <AnimatePresence mode="wait"><motion.span key={roles[roleIndex]} className="role" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>{roles[roleIndex]}</motion.span></AnimatePresence></div>
          <div className="hero-actions">
            <a className="button primary" href="#work">Explore my work <ArrowDown size={17} /></a>
            <a className="button ghost" href={`mailto:${profile.email}`}>Let&apos;s connect <Mail size={17} /></a>
          </div>
          <div className="social-row">
            <a href={profile.github} target="_blank"><Github size={17} /> GitHub</a>
            <a href={profile.linkedin} target="_blank"><Linkedin size={17} /> LinkedIn</a>
            <a href={profile.leetcode} target="_blank"><Code2 size={16} /> LeetCode</a>
            <span><MapPin size={15} /> {profile.location}</span>
          </div>
        </div>
        <div className="hero-badge"><span>CODE</span><i>×</i><span>DATA</span><i>×</i><span>AI</span><i>×</i><span>DESIGN</span></div>
      </section>

      <section id="about" className="section about-section narrow">
        <div className="section-kicker">01 / ABOUT</div>
        <div className="about-layout">
          <div>
            <h2>Not just code.<br /><span className="muted">I build experiences.</span></h2>
            <div className="profile-card">
              <div className="profile-image-wrap">
                <Image src="/profile/profile.jpeg" alt="Shikha Singh" fill sizes="280px" />
              </div>
              <div><span className="profile-label">BUILDING FROM</span><strong>{profile.location}</strong><span className="profile-label">FOCUS</span><strong>Full-Stack + ML/AI</strong></div>
            </div>
          </div>
          <div className="about-copy">
            <p>{profile.bio}</p>
            <p>I&apos;m intentionally moving beyond a single role — connecting interfaces, APIs, databases and machine-learning workflows into useful software products.</p>
            <div className="mini-stats"><div><strong>01</strong><span>Full-Stack<br />focus</span></div><div><strong>02</strong><span>ML / AI<br />direction</span></div><div><strong>∞</strong><span>Always<br />learning</span></div></div>
          </div>
        </div>
        <AboutSystem />
      </section>

      <section id="work" className="section work-section">
        <div className="section-head">
          <div><div className="section-kicker">02 / SELECTED WORK</div><h2>Projects with a <span className="gradient-text">purpose.</span></h2></div>
          <p>From product interfaces to ML workflows — this is where ideas become working systems.</p>
        </div>
        <div className="filters">{categories.map((item) => <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>{item}</button>)}</div>
        <motion.div layout className="project-grid">
          {filtered.map((project, index) => (
            <motion.article layout key={project.slug} className={`project-card ${project.accent}`} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: index * .05 }} whileHover={{ y: -8 }}>
              <div className="project-top"><span className="project-number">0{index + 1}</span><span className="project-status">{project.category}</span></div>
              <div className="project-icon"><ProjectIcon category={project.category} /></div>
              <div className="project-label">{project.label}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="stack">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
              <div className="project-actions">
                <Link href={`/work/${project.slug}`}>Case study <ArrowUpRight size={15} /></Link>
                {project.github && <a href={project.github} target="_blank">GitHub <Github size={14} /></a>}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section id="skills" className="section narrow">
        <div className="skills-head"><div><div className="section-kicker">03 / TOOLBOX</div><h2>A stack built to <span className="gradient-text">ship.</span></h2></div><p>I&apos;m intentionally growing beyond a single role: frontend, backend, data and intelligent systems.</p></div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <motion.button key={group.title} className={`skill-group ${activeSkill === group.title ? "selected" : ""}`} onMouseEnter={() => setActiveSkill(group.title)} onMouseLeave={() => setActiveSkill(null)} whileHover={{ y: -4 }}>
              <div className="skill-group-title"><ZapIcon type={group.icon} /> {group.title}</div>
              <div className="skill-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              <AnimatePresence>{activeSkill === group.title && <motion.div className="skill-detail" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}><p>{group.context}</p><small>RELATED PROJECTS</small>{group.projects.map((p) => <b key={p}>{p}</b>)}</motion.div>}</AnimatePresence>
            </motion.button>
          ))}
        </div>
      </section>

      <section id="experience" className="section experience-section narrow">
        <div className="section-head"><div><div className="section-kicker">04 / EXPERIENCE</div><h2>Building in the <span className="gradient-text">real world.</span></h2></div><p>Software development internship experience across frontend engineering, web development, APIs and product interfaces.</p></div>
        <div className="experience-list">
          {experience.map((item, index) => <motion.article className="experience-item" key={item.company} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }}>
            <div className="experience-meta"><span className="timeline-year">0{index + 1}</span><span>{item.dates}</span></div>
            <div><h3>{item.role}</h3><h4>{item.company}</h4><span className="experience-location">{item.location}</span><ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div>
          </motion.article>)}
        </div>
      </section>

      <section className="section education-cert narrow">
        <div className="education-card">
          <div><div className="section-kicker">05 / EDUCATION</div><h3>{education.degree}</h3><p>{education.institution} · {education.dates}</p></div>
          <div className="edu-mark">B.TECH<br/><span>CSE</span></div>
        </div>
        <div className="certs"><div className="section-kicker">CERTIFICATIONS</div><div className="cert-grid">{certifications.map((cert) => <div className="cert-card" key={cert.title}><strong>{cert.title}</strong><span>{cert.issuer}</span><small>{cert.date}</small></div>)}</div></div>
      </section>

      <section id="journey" className="section journey">
        <div className="journey-head"><div><div className="section-kicker">06 / BUILDING FORWARD</div><h2>Where I&apos;m <span className="gradient-text">heading.</span></h2></div><p>My learning path is moving from building interfaces to building intelligent products.</p></div>
        <div className="timeline">{journey.map((item, i) => <motion.div className="timeline-item" key={item.number} initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}><span className="timeline-year">{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></motion.div>)}</div>
      </section>

      <section className="section github-section narrow">
        <div className="section-head"><div><div className="section-kicker">07 / OPEN SOURCE</div><h2>What&apos;s on <span className="gradient-text">GitHub.</span></h2></div><a className="text-link" href={profile.github} target="_blank">View profile <ArrowUpRight size={15} /></a></div>
        <GithubRepos />
      </section>

      <section id="contact" className="section contact narrow">
        <div className="contact-card">
          <div className="contact-intro"><div className="section-kicker">08 / CONTACT</div><h2>Have an idea?<br /><span className="gradient-text">Let&apos;s build it.</span></h2><p>Open to internships, collaborations, full-stack projects and ML/AI opportunities.</p><div className="contact-socials"><a href={profile.github} target="_blank"><Github /></a><a href={profile.linkedin} target="_blank"><Linkedin /></a><a href={`mailto:${profile.email}`}><Mail /></a></div></div>
          <ContactForm email={profile.email} />
        </div>
      </section>

      <footer><span>© 2026 Shikha Singh</span><span>Designed + engineered from scratch</span><a href="#home">Back to top ↑</a></footer>
    </main>
  );
}

function ZapIcon({ type }: { type: string }) {
  if (type === "brain") return <BrainCircuit size={16} />;
  if (type === "database") return <Database size={16} />;
  if (type === "server") return <Server size={16} />;
  if (type === "layout") return <Layers3 size={16} />;
  return <Sparkles size={16} />;
}
