import Link from 'next/link';
import { Header } from '@/components/Header';
import { Contact } from '@/components/Contact';
import { ProjectCover } from '@/components/ProjectCover';
import { experiences, featuredProjects } from '@/data/portfolio';
export default function Home() {
  return <><Header /><main id="main">
    <section className="hero wrap" aria-labelledby="hero-title">
      <h1 id="hero-title" className="hero-title">TFNS DEVELOPER</h1>
      <img className="hero-portrait" src="/images/portraits/hero.webp" alt="Timotius mengenakan kemeja putih, dilihat dari sudut atas" width="1168" height="1360" fetchPriority="high" />
      <div className="hero-intro"><h2>Software<br />Developer</h2><p>Saya Timotius. Saya membangun website dan aplikasi web, dari antarmuka hingga backend.</p><a className="text-link" href="#work">Lihat proyek <span aria-hidden="true">↗</span></a></div>
      <p className="hero-focus">Website · Sistem<br /> internal · IoT</p>
    </section>
    <section id="about" className="about wrap section" aria-labelledby="about-title">
      <div className="about-copy" data-reveal><p className="eyebrow">About</p><h2 id="about-title">Tentang saya.</h2><p>Lulusan S1 Teknik Informatika Universitas Duta Bangsa. Saya mengembangkan website dan aplikasi web, mulai dari perencanaan teknis, antarmuka, backend, hingga pengujian.</p><div className="credentials"><p>2022–2026 · IPK 3,90</p><p>Junior Web Developer · BNSP</p></div></div>
      <figure className="about-photo" data-reveal><div className="portrait-mask"><img src="/images/portraits/about.webp" alt="Timotius berdiri dengan kemeja putih dan celana hitam" width="292" height="385" loading="lazy" /></div><figcaption>Sukoharjo, Indonesia</figcaption></figure>
    </section>
    <section id="work" className="work section" aria-labelledby="work-title">
      <div className="wrap" data-reveal><p className="eyebrow">Selected work</p><h2 id="work-title" className="work-title">Projects</h2></div>
      <div className="project-spread wrap" data-reveal>{featuredProjects.map((project, index) => <ProjectCover key={project.slug} project={project} index={index} />)}</div>
      <div className="all-work"><Link className="text-link" href="/projects/">Lihat semua 7 proyek <span aria-hidden="true">↗</span></Link></div>
    </section>
    <section className="expertise wrap section" aria-labelledby="expertise-title">
      <h2 id="expertise-title" className="eyebrow">Expertise</h2>
      <div className="expertise-composition"><p className="quote quote-start" data-reveal>Good software</p><div className="expertise-panel" data-reveal><div><h3>Web development</h3><p>Next.js · JavaScript · TypeScript</p></div><div><h3>Backend &amp; data</h3><p>REST API · Firebase · PostgreSQL</p></div></div><p className="quote quote-side" data-reveal>starts with<br /> clear thinking.</p><p className="quote quote-end" data-reveal>And stays easy to change.</p></div>
    </section>
    <section className="experience section" aria-labelledby="experience-title"><div className="wrap"><h2 id="experience-title" className="eyebrow">Experience</h2><p className="experience-quote" data-reveal>Every project leaves a lesson.</p><div className="experience-list">{experiences.map(experience => <article key={experience.company} className="experience-row" data-reveal><div className="experience-heading"><h3>{experience.company}</h3><p className="period">{experience.period}</p></div><p className="role">{experience.role}</p><p>{experience.summary}</p></article>)}</div></div></section>
  </main><Contact /></>;
}
