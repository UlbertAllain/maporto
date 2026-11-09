import Link from 'next/link';
import type { Project } from '@/data/portfolio';
export function ProjectCover({ project, index = 0 }: { project: Project; index?: number }) {
  return <Link href={`/projects/${project.slug}/`} className="project-cover" style={{ '--index': index } as React.CSSProperties} aria-label={`Lihat proyek ${project.name}`}>
    <div className="cover-caption"><h3>{project.name}</h3><span>{project.category}</span><span className="cover-arrow" aria-hidden="true">↗</span></div>
    <div className={`cover-image ${project.slug.startsWith('nexty') ? 'dashboard-cover' : ''}`}>
      <img src={project.images[0]} alt={`Screenshot ${project.name}`} loading="lazy" width="600" height="800" />
    </div>
  </Link>;
}
