'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
const links = [['Work','/#work'],['About','/#about'],['Expertise','/#expertise'],['Contact','/#contact']];
export function Header() {
 const [open,setOpen]=useState(false);
 const dialog=useRef<HTMLDialogElement>(null);
 const trigger=useRef<HTMLButtonElement>(null);
 const reduced=useReducedMotion();
 useEffect(()=>{if(!open)return;const previous=document.body.style.overflow;document.body.style.overflow='hidden';dialog.current?.showModal();return()=>{document.body.style.overflow=previous;dialog.current?.close();trigger.current?.focus({ preventScroll: true });};},[open]);
 return <header className="site-header wrap"><Link href="/" className="wordmark" aria-label="Timotius, beranda">TFNS</Link><nav className="desktop-nav" aria-label="Navigasi utama">{links.map(([label,href])=><Link key={label} href={href}>{label}</Link>)}</nav><button ref={trigger} className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" onClick={()=>setOpen(true)}>Menu <span aria-hidden="true">☰</span></button><AnimatePresence>{open&&<motion.dialog ref={dialog} id="mobile-menu" className="mobile-menu" aria-label="Navigasi utama" onCancel={e=>{e.preventDefault();setOpen(false);}} initial={{clipPath:'circle(0% at 95% 5%)'}} animate={{clipPath:'circle(150% at 95% 5%)'}} exit={{clipPath:'circle(0% at 95% 5%)'}} transition={{duration:reduced?0:.65,ease:[.76,0,.24,1]}}><div className="menu-top"><span>TFNS</span><button onClick={()=>setOpen(false)}>Tutup ×</button></div><nav>{links.map(([label,href],index)=><motion.div key={label} initial={{y:reduced?0:65,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:reduced?0:.18+index*.08,duration:.5}}><Link href={href} onClick={()=>setOpen(false)}><small>0{index+1}</small>{label}<span>↗</span></Link></motion.div>)}</nav><p>Timotius Fergiwana Noel Sabekti<br/>Software Developer · Sukoharjo</p></motion.dialog>}</AnimatePresence></header>;
}
