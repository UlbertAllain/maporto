import Link from 'next/link';
import { profile } from '@/data/portfolio';
export function Header() {
  return <header className="site-header wrap">
    <Link href="/" className="wordmark" aria-label={`${profile.name}, beranda`}>{profile.name}</Link>
    <nav aria-label="Navigasi utama"><Link href="/#work">Work</Link><Link href="/#about">About</Link><Link href="/#contact">Contact</Link></nav>
  </header>;
}
