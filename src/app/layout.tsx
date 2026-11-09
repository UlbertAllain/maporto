import type { Metadata } from 'next';
import '@fontsource-variable/plus-jakarta-sans';
import './globals.css';
import { Motion } from '@/components/Motion';
export const metadata: Metadata = {
  title: { default: 'Timotius Fergiwana — Software Developer', template: '%s | Timotius Fergiwana' },
  description: 'Portofolio Timotius Fergiwana Noel Sabekti. Website, aplikasi web, sistem internal, dan dashboard monitoring IoT.',
  robots: { index: true, follow: true },
  openGraph: { title: 'Timotius Fergiwana — Software Developer', description: 'Website, aplikasi web, dan sistem internal.', type: 'website', locale: 'id_ID' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body id="top"><a className="skip-link" href="#main">Langsung ke konten</a>{children}<Motion /></body></html>;
}
