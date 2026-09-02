import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BrainCircuit, Code2, Database, Layers3 } from "lucide-react";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const Icon = project.category === "ML / AI" ? BrainCircuit : project.category === "Systems" ? Database : project.category === "Frontend" ? Layers3 : Code2;

  return (
    <main className="case-page">
      <nav className="case-nav">
        <Link href="/" className="brand"><span className="brand-mark">&lt;/&gt;</span> SHIKHA<span className="accent">.DEV</span></Link>
        <Link href="/#work" className="back-link"><ArrowLeft size={16} /> All work</Link>
      </nav>

      <section className={`case-hero ${project.accent}`}>
        <div className="case-kicker">{project.category} / {project.label}</div>
        <div className="case-icon"><Icon size={28} /></div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <div className="case-tags">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
      </section>

      <section className="case-content">
        <div className="case-main">
          <article><span className="section-kicker">01 / OVERVIEW</span><h2>The idea.</h2><p>{project.overview}</p></article>
          <article><span className="section-kicker">02 / PROBLEM</span><h2>The challenge.</h2><p>{project.problem}</p></article>
          <article><span className="section-kicker">03 / SOLUTION</span><h2>The approach.</h2><p>{project.solution}</p></article>
          <article><span className="section-kicker">04 / ROLE</span><h2>My contribution.</h2><p>{project.role}</p></article>
        </div>

        <aside className="case-side">
          <div className="case-panel">
            <span className="panel-label">TECH STACK</span>
            <div className="case-stack">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
          </div>
          <div className="case-panel">
            <span className="panel-label">PROCESS</span>
            <div className="case-process">
              {project.stages.map((stage, i) => <div key={stage}><b>{String(i + 1).padStart(2, "0")}</b><span>{stage}</span></div>)}
            </div>
          </div>
          <div className="case-panel">
            <span className="panel-label">LINKS</span>
            <div className="case-links">
              {project.github ? <a href={project.github} target="_blank">GitHub <ArrowUpRight size={15} /></a> : <span className="muted-small">Repository link can be added when available.</span>}
              {project.live ? <a href={project.live} target="_blank">Live Demo <ArrowUpRight size={15} /></a> : null}
            </div>
          </div>
        </aside>
      </section>

      <section className="case-next">
        <span>BACK TO PORTFOLIO</span>
        <Link href="/#work">Explore more work <ArrowUpRight /></Link>
      </section>
    </main>
  );
}
