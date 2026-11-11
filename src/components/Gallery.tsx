'use client';
import { useEffect, useRef, useState } from 'react';
import type { Project } from '@/data/portfolio';
export function Gallery({ project }: { project: Project }) {
  const [index, setIndex] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const [expanded, setExpanded] = useState(false);
  const select = (step: number) => setIndex(value => (value + step + project.images.length) % project.images.length);
  useEffect(() => {
    if (!expanded) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [expanded]);
  const open = () => { dialog.current?.showModal(); setExpanded(true); };
  return <div className="gallery">
    <div className="gallery-toolbar"><p aria-live="polite">{project.captions[index]} <span className="muted">/ {index + 1} dari {project.images.length}</span></p>
      {project.images.length > 1 && <div className="gallery-controls"><button onClick={() => select(-1)} aria-label="Screenshot sebelumnya">←</button><button onClick={() => select(1)} aria-label="Screenshot berikutnya">→</button></div>}
    </div>
    <button className="gallery-stage" onClick={open} aria-label="Perbesar screenshot">
      <img key={index} src={project.images[index]} alt={`${project.name}: ${project.captions[index]}`} width="1400" height="1000" />
      <span className="zoom-label">Perbesar ↗</span>
    </button>
    {project.images.length > 1 && <div className="gallery-thumbs" aria-label="Pilih screenshot">{project.images.map((image, i) => <button key={image} onClick={() => setIndex(i)} aria-pressed={i === index} aria-label={`Screenshot ${i + 1}: ${project.captions[i]}`}><img src={image} alt="" width="150" height="100" /><span>{String(i + 1).padStart(2, '0')}</span></button>)}</div>}
    <dialog ref={dialog} aria-label={`Screenshot ${project.name}`} className="image-dialog" onClose={() => setExpanded(false)} onClick={event => { if (event.target === dialog.current) dialog.current.close(); }}>
      <div className="dialog-top"><p>{project.name}</p><button onClick={() => dialog.current?.close()} aria-label="Tutup screenshot" autoFocus>Tutup ×</button></div>
      <img src={project.images[index]} alt={`${project.name}: ${project.captions[index]}, ukuran penuh`} />
    </dialog>
  </div>;
}
