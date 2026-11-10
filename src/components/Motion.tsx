'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export function Motion() {
 const pathname=usePathname();
 useEffect(()=>{
  const media=gsap.matchMedia();
  media.add('(prefers-reduced-motion: no-preference)',()=>{
   const mobile=window.innerWidth<=700;
   const intro=gsap.timeline({defaults:{ease:'power3.out'}});
   intro.from('.hero-line',{yPercent:120,rotation:5,opacity:0,duration:1.2,stagger:.16})
    .from('.editorial-person',{y:90,opacity:0,scale:.92,duration:1.3},.15)
    .from('.build-type',{yPercent:-75,duration:1.5},0)
    .from('.hero-note',{y:35,opacity:0,duration:.8},.7);
   if(document.querySelector('.editorial-hero')) gsap.to('.build-type',{y:mobile?100:200,ease:'none',scrollTrigger:{trigger:'.editorial-hero',start:'top top',end:'bottom top',scrub:1}});
   if(document.querySelector('.about-art')){
    gsap.from('.editorial-photo',{clipPath:'inset(18% 12% 18% 12% round 36%)',scale:.86,duration:1.3,ease:'power3.inOut',scrollTrigger:{trigger:'.about-art',start:'top 80%',toggleActions:'play none none reverse'}});
    gsap.from('.vertical-about span',{y:mobile?50:130,stagger:.1,ease:'none',scrollTrigger:{trigger:'.about-art',start:'top bottom',end:'center center',scrub:1}});
    gsap.from('.sage-plane',{xPercent:-22,scaleX:.6,ease:'none',scrollTrigger:{trigger:'.about-art',start:'top bottom',end:'center center',scrub:1}});
   }
   gsap.utils.toArray<HTMLElement>('.type-line').forEach((line,index)=>gsap.from(line,{xPercent:index%2?18:-18,y:30,opacity:.2,ease:'none',scrollTrigger:{trigger:'.editorial-expertise',start:'top 85%',end:mobile?'top 15%':'top 5%',scrub:.7}}));
   if(document.querySelector('.skill-anchor'))gsap.from('.skill-anchor',{rotation:-9,scale:.76,y:65,duration:1.15,ease:'back.out(1.2)',scrollTrigger:{trigger:'.skill-anchor',start:'top 88%',toggleActions:'play none none reverse'}});
   gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach(el=>gsap.from(el,{y:65,opacity:0,duration:1,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 92%',once:true}}));
   gsap.utils.toArray<HTMLElement>('.project-cover').forEach((el,index)=>gsap.from(el,{y:mobile?35:70,rotation:index%2?5:-5,duration:.9,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 95%',once:true}}));
  });
  const refresh=()=>ScrollTrigger.refresh();
  document.fonts.ready.then(refresh);
  window.addEventListener('load',refresh);
  return()=>{media.revert();window.removeEventListener('load',refresh);};
 },[pathname]);
 return null;
}
