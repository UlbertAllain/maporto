import { EditorialHero, EditorialAbout, Expertise } from '@/components/EditorialSections';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Contact } from '@/components/Contact';
import { ProjectCover } from '@/components/ProjectCover';
import { experiences, featuredProjects } from '@/data/portfolio';
export default function Home() {
  return <><Header /><main id="main">
    <EditorialHero /><EditorialAbout />
    <section id="work" className="work section" aria-labelledby="work-title">
      <div className="wrap" data-reveal><p className="eyebrow">Selected work</p><h2 id="work-title" className="work-title">Projects</h2></div>
      <div className="project-spread wrap" data-reveal>{featuredProjects.map((project, index) => <ProjectCover key={project.slug} project={project} index={index} />)}</div>
      <div className="all-work"><Link className="text-link" href="/projects/">Lihat semua 7 proyek <span aria-hidden="true">↗</span></Link></div>
    </section>
    <Expertise />
    <section className="experience section" aria-labelledby="experience-title"><div className="wrap"><h2 id="experience-title" className="eyebrow">Experience</h2><p className="experience-quote" data-reveal>Every project leaves a lesson.</p><div className="experience-list">{experiences.map(experience => <article key={experience.company} className="experience-row" data-reveal><div className="experience-heading"><h3>{experience.company}</h3><p className="period">{experience.period}</p></div><p className="role">{experience.role}</p><p>{experience.summary}</p></article>)}</div></div></section>
  </main><Contact /></>;
}

