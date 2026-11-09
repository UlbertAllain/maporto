import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Gallery } from '@/components/Gallery';
import { Contact } from '@/components/Contact';
import { projects } from '@/data/portfolio';
export const dynamicParams = false;
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  return { title: project?.name ?? 'Proyek', description: project?.description };
}
export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex(item => item.slug === slug);
  const project = projects[index];
  if (!project) notFound();
  const next = projects[(index + 1) % projects.length];
  return <><Header /><main id="main" className="wrap project-detail"><Link className="back-link" href="/projects/">← Semua proyek</Link><p className="eyebrow">{project.category}</p><h1>{project.name}</h1><p className="page-intro">{project.description}</p><Gallery project={project} /><div className="next-project"><span>Proyek berikutnya</span><Link className="text-link" href={`/projects/${next.slug}/`}>{next.name} ↗</Link></div></main><Contact /></>;
}
