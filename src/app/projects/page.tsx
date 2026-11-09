import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Contact } from '@/components/Contact';
import { projects } from '@/data/portfolio';
export const metadata: Metadata = { title: 'Semua proyek' };
export default function Projects() {
  return <><Header /><main id="main" className="wrap projects-page"><Link className="back-link" href="/#work">← Kembali ke beranda</Link><p className="eyebrow">Selected work / 2026</p><h1>Proyek pilihan.</h1><p className="page-intro">Website, landing page, dan aplikasi internal.</p><div className="project-index">{projects.map((project, index) => <Link className="project-index-row" key={project.slug} href={`/projects/${project.slug}/`}><span className="project-number">{String(index + 1).padStart(2, '0')}</span><div className="index-image"><img src={project.images[0]} alt={`Screenshot ${project.name}`} width="450" height="300" loading="lazy" /></div><div><p className="eyebrow">{project.category}</p><h2>{project.name}</h2><p>{project.description}</p></div><span className="index-arrow" aria-hidden="true">↗</span></Link>)}</div></main><Contact /></>;
}
