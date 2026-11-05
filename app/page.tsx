"use client";

import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, Download, Github, Linkedin, Mail, Menu, Moon, Sun, X } from "lucide-react";

const links = {
  github: "https://github.com/Prajwal444",
  linkedin: "https://www.linkedin.com/in/prajwalsahare/",
  email: "prajwal444@outlook.com",
};

const capabilities = [
  { id: "01", title: "Build", copy: "Java services, Spring Boot APIs, and microservice foundations designed to stay understandable as they grow.", tags: ["Java", "Spring Boot", "Microservices"] },
  { id: "02", title: "Trace", copy: "Production debugging and root-cause analysis that turns uncertain behaviour into an actionable next step.", tags: ["Debugging", "APIs", "Code review"] },
  { id: "03", title: "Tune", copy: "Database-aware engineering that keeps application data consistent and critical paths considered.", tags: ["MySQL", "MongoDB", "SQL"] },
];

const projects = [
  { no: "01", name: "Contact\nManagement\nSystem", kind: "SECURE FULL-STACK APPLICATION", color: "acid", overview: "A role-aware contact product designed around secure access, RESTful operations, and fast information retrieval.", details: ["JWT authentication and role-based authorization", "React interface with Spring Boot API", "MongoDB persistence, search, and filtering"], stack: "JAVA / SPRING BOOT / REACT / MONGODB / JWT", repo: "https://github.com/Prajwal444/Contact-Management-App" },
  { no: "02", name: "QuickMart\nFresh", kind: "GROCERY DELIVERY PLATFORM", color: "violet", overview: "A complete grocery workflow that connects catalog, cart, orders, tracking, and customer notifications.", details: ["Product, cart, order, and user APIs", "Secure JWT-based access control", "Order tracking plus email notifications"], stack: "JAVA 17 / SPRING BOOT / REACT / MONGODB / MAVEN", repo: "https://github.com/Prajwal444/quickmart-fresh" },
];

function ThemeToggle() {
  const [night, setNight] = useState(false);
  return <button className="theme-toggle" onClick={() => { setNight((active) => !active); document.documentElement.classList.toggle("night"); }} aria-label="Toggle colour mode">{night ? <Sun size={16} /> : <Moon size={16} />}</button>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <main>
    <header className="masthead page-shell">
      <a className="wordmark" href="#home" aria-label="Prajwal Sahare home"><span className="wordmark-symbol">P/</span><span>Prajwal<br />Sahare</span></a>
      <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Main navigation">{["Profile", "Projects", "Experience", "Contact"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}</nav>
      <div className="mast-actions"><ThemeToggle /><a className="resume-link" href="/Prajwal-Sahare-Resume.pdf" download>CV <Download size={14} /></a><button className="menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button></div>
    </header>

    <section id="home" className="hero page-shell">
      <div className="hero-index">01 — 2026<br /><span>ENGINEERING DOSSIER</span></div>
      <div className="hero-title"><p className="intro-line">PRAJWAL SAHARE <span>↘</span> SOFTWARE ENGINEER</p><h1>Systems,<br />not <i>surprises.</i></h1><p className="hero-summary">Backend engineering for products that need to stay useful, reliable, and ready for what comes next.</p><div className="hero-links"><a className="ink-button" href="#projects">Inspect work <ArrowDownRight size={17} /></a><a href={`mailto:${links.email}`} className="text-button">Get in touch <ArrowUpRight size={15} /></a></div></div>
      <aside className="hero-dial" aria-label="Engineering focus: build, trace, tune"><div className="dial-label top-label">BUILD<br />TRACE<br />TUNE</div><div className="dial-core"><span>PS</span><small>JAVA<br />BACKEND</small></div><div className="dial-ring ring-one" /><div className="dial-ring ring-two" /><div className="dial-marker marker-one">01</div><div className="dial-marker marker-two">02</div><div className="dial-marker marker-three">03</div><div className="dial-label bottom-label">NAGPUR, INDIA<br /><b>OPEN TO WORK</b></div></aside>
      <div className="hero-stats"><div><strong>2+</strong><span>YEARS OF EXPERIENCE</span></div><div><strong>600+</strong><span>CODING PROBLEMS SOLVED</span></div><div><strong>8.42</strong><span>B.TECH GPA</span></div></div>
    </section>

    <section id="profile" className="profile-band"><div className="page-shell profile-layout"><p className="section-number">02 / PROFILE</p><div><h2>Make the invisible<br /><em>feel intentional.</em></h2><p className="profile-lead">I’m a Java backend developer with two years of experience creating, improving, and maintaining business applications. I bring a clear eye to the work beneath an interface: API boundaries, data consistency, and the real cause of a production issue.</p></div><div className="availability-stamp"><span>STATUS</span><strong>AVAILABLE</strong><small>FOR THE NEXT BUILD</small></div></div></section>

    <section className="capabilities page-shell"><div className="capability-heading"><p className="section-number">03 / WORKING STYLE</p><h2>Three ways I add<br />value to a team.</h2></div><div className="capability-list">{capabilities.map((capability) => <article className="capability" key={capability.id}><span className="capability-id">{capability.id}</span><h3>{capability.title}</h3><p>{capability.copy}</p><div>{capability.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div></section>

    <section id="projects" className="projects"><div className="page-shell project-head"><p className="section-number">04 / SELECTED BUILDS</p><h2>Proof, not<br /><em>promises.</em></h2><p>Two full-stack projects built around the kind of backend decisions that turn features into functioning products.</p></div><div className="project-stack">{projects.map((project) => <article key={project.no} className={`project-sheet ${project.color}`}><div className="project-sheet-header"><span>{project.no}</span><span>{project.kind}</span><a href={project.repo} target="_blank" rel="noreferrer" aria-label={`Open ${project.name.replaceAll("\n", " ")} repository`}><Github size={18} /></a></div><div className="project-grid"><h3>{project.name.split("\n").map((line) => <span key={line}>{line}</span>)}</h3><div className="project-body"><p>{project.overview}</p><ul>{project.details.map((detail) => <li key={detail}>— {detail}</li>)}</ul><footer><span>{project.stack}</span><a href={project.repo} target="_blank" rel="noreferrer">VIEW REPOSITORY <ArrowUpRight size={15} /></a></footer></div></div><div className="sheet-pattern" /></article>)}</div></section>

    <section id="experience" className="timeline-section page-shell"><div className="timeline-heading"><p className="section-number">05 / EXPERIENCE</p><h2>A record of<br /><em>shipping.</em></h2></div><div className="timeline-list"><article className="record"><span className="record-date">2023 — 2025</span><div className="record-title"><h3>System Engineer</h3><p>Tata Consultancy Services · Nagpur, India</p></div><p className="record-copy">Developed and maintained Java and Spring Boot services supporting Priceline workflows. My work covered REST APIs, large JSON transformations, MySQL-backed integrations, debugging, query tuning, and Agile collaboration.</p><div className="record-tags"><span>JAVA</span><span>SPRING BOOT</span><span>MYSQL</span><span>GIT</span></div></article><article className="record"><span className="record-date">2019 — 2023</span><div className="record-title"><h3>B.Tech, Information Technology</h3><p>G H Raisoni College of Engineering</p></div><p className="record-copy">Graduated with an 8.42 GPA. Built a foundation in software engineering, data structures, algorithms, databases, and collaborative development.</p><div className="record-tags"><span>8.42 GPA</span><span>INFORMATION TECHNOLOGY</span></div></article></div></section>

    <section className="algorithm"><div className="page-shell algorithm-content"><div className="algorithm-number">600<span>+</span></div><div><p className="section-number">06 / DISCIPLINE</p><h2>One problem at a time.<br /><em>Every day.</em></h2><p>Consistent practice across LeetCode and GeeksforGeeks has strengthened my command of data structures, algorithms, and dynamic programming.</p></div><a href={links.github} target="_blank" rel="noreferrer" className="algorithm-link">SEE THE CODE<br /><ArrowUpRight size={25} /></a></div></section>

    <section id="contact" className="contact page-shell"><p className="section-number">07 / CONTACT</p><h2>Worth building?<br /><em>Let’s talk.</em></h2><a className="contact-email" href={`mailto:${links.email}`}>{links.email}<ArrowUpRight /></a><div className="contact-socials"><a href={links.github} target="_blank" rel="noreferrer"><Github size={18} /> GITHUB</a><a href={links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LINKEDIN</a><span>NAGPUR / INDIA</span></div></section>
    <footer className="footer page-shell"><span>© 2026 PRAJWAL SAHARE</span><span>JAVA · SPRING BOOT · SYSTEMS</span><a href="#home">BACK TO TOP ↑</a></footer>
  </main>;
}
