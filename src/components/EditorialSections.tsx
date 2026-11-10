'use client';
import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

const skills = [
  {
    title: 'Frontend',
    tools: 'Next.js · React · TypeScript · Tailwind',
    detail: 'Membangun website dan aplikasi web responsif, mulai dari struktur komponen, integrasi data, state management, sampai interaksi dan animasi. Memperhatikan aksesibilitas, performa, SEO, dan konsistensi antarmuka pada desktop maupun mobile.',
  },
  {
    title: 'Backend & API',
    tools: 'REST API · Node.js · Firebase · Zod',
    detail: 'Merancang alur bisnis dan endpoint API dengan validasi input, error handling, autentikasi, serta otorisasi berbasis peran. Memisahkan controller, service, dan akses data agar logika aplikasi lebih mudah dipahami, diuji, dan dikembangkan.',
  },
  {
    title: 'Data & System',
    tools: 'PostgreSQL · Firestore · Data Modeling',
    detail: 'Mendesain model data, relasi, constraint, dan query sesuai kebutuhan aplikasi. Memahami pengelolaan data transaksional, aturan akses, serta pemilihan arsitektur yang sederhana namun tetap terstruktur dan maintainable.',
  },
  {
    title: 'Integration & IoT',
    tools: 'Firebase · Cloudinary · IoT · Git',
    detail: 'Mengintegrasikan layanan cloud, upload media, dan data realtime untuk dashboard serta monitoring perangkat. Terbiasa dengan debugging, version control, pengujian fungsional, dan persiapan deployment sebagai bagian dari alur development.',
  },
];
export function EditorialHero() {
  return <section className="editorial-hero wrap" aria-labelledby="hero-title">
    <span className="build-type" aria-hidden="true">BUILD</span>
    <h1 id="hero-title"><span className="hero-line">Software</span><span className="hero-line">Developer.</span></h1>
    <img className="editorial-person" src="/images/portraits/editorial-hero.png" alt="Timotius mengenakan kemeja putih dan membawa laptop" width="1024" height="1536" fetchPriority="high" />
    <div className="code-inset" aria-hidden="true"><span>function build() {'{'}</span><span>  const idea = start();</span><span>  return create(idea);</span><span>{'}'}</span><span className="code-note">from idea to working software</span></div>
    <div className="hero-note"><p>Website, aplikasi web, dan sistem internal.</p><p className="identity">Timotius Fergiwana Noel Sabekti</p><a href="#work" className="text-link">Lihat proyek ↗</a></div>
    <a href="#about" className="scroll-note">Scroll untuk kenalan ↓</a>
  </section>;
}
export function EditorialAbout() {
  return <section id="about" className="editorial-about wrap" aria-labelledby="about-title">
    <div className="section-folio"><span>TFNS</span><span>ABOUT / 02</span></div>
    <div className="about-art"><div className="sage-plane"/><div className="editorial-photo"><img src="/images/portraits/editorial-about.png" alt="Potret Timotius di balik kaca bertekstur" width="1024" height="1536" loading="lazy" /></div><div className="vertical-about" aria-hidden="true"><span>ABOUT</span><span>ME</span><span>TIMOTIUS</span></div></div>
    <div className="editorial-bio"><h2 id="about-title">Sedikit tentang saya.</h2><p>Saya Timotius, lulusan Teknik Informatika Universitas Duta Bangsa. Saya mengembangkan website dan aplikasi web, dari antarmuka hingga backend.</p><p>2022–2026 · IPK 3,90<br/>Junior Web Developer · BNSP</p><a className="text-link" href="#work">Lihat proyek ↗</a></div>
    <div className="about-location"><strong>02</strong><span>Sukoharjo, Indonesia</span></div>
  </section>;
}
export function Expertise() {
  const [active, setActive] = useState<number | null>(null);
  const reduced = useReducedMotion();
  return <section id="expertise" className="editorial-expertise" aria-labelledby="expertise-title">
    <div className="section-folio wrap"><span>TFNS</span><span>EXPERTISE / 04</span></div>
    <div className={`type-composition wrap${active === null ? "" : " is-expanded"}`}>
      <p className="expertise-quote" aria-label="Good software starts with clear thinking. And stays easy to change."><span className="type-line line-one">Good software</span><span className="type-line line-two">starts with</span><span className="type-line line-three">clear</span><span className="type-line line-four">thinking.</span><span className="type-line line-five">and stays</span><span className="type-line line-six">easy to</span><span className="type-line line-seven">change.</span></p>
      <div className="skill-anchor"><motion.div className="skill-sheet" animate={{ borderRadius: active === null ? '0px' : '2px 32px 2px 2px' }} transition={{ duration: reduced ? 0 : .5 }}>
        <p className="skill-kicker">WHAT I WORK WITH</p><h2 id="expertise-title">Expertise</h2>
        {skills.map((skill,index)=><div className="skill-item" key={skill.title}><button type="button" aria-expanded={active===index} aria-controls={`skill-detail-${index}`} onClick={()=>setActive(active===index?null:index)}><span><strong>{skill.title}</strong><span>{skill.tools}</span></span><motion.span aria-hidden="true" animate={{rotate:active===index?45:0}}>+</motion.span></button><AnimatePresence initial={false}>{active===index&&<motion.div id={`skill-detail-${index}`} initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:reduced?0:.3}}><p>{skill.detail}</p></motion.div>}</AnimatePresence></div>)}
        <p className="skill-hint">Pilih bidang untuk lihat detail ↗</p>
      </motion.div></div>
    </div><div className="expertise-footer wrap"><span>Dari antarmuka sampai data.</span><span>Timotius / Software Developer</span></div>
  </section>;
}
