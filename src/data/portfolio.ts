export const profile = {
  name: 'Timotius Fergiwana Noel Sabekti',
  email: 'irgie.noel@gmail.com',
  phone: '085139150982',
  whatsapp: 'https://wa.me/6285139150982',
  location: 'Sukoharjo, Indonesia',
};

export type Project = {
  slug: string; name: string; category: string; description: string;
  images: string[]; captions: string[]; sourcePages: string;
};
const images = (slug: string, count: number) =>
  Array.from({ length: count }, (_, index) => `/images/projects/${slug}-${index + 1}.webp`);

export const projects: Project[] = [
  { slug: 'thaz', name: 'THAZ Decoration', category: 'Company profile',
    description: 'Website profil studio dekorasi pernikahan dengan galeri karya, pilihan venue, dan akses konsultasi.',
    images: images('thaz', 3), captions: ['Hero dan pengenalan studio', 'Homepage lengkap', 'Pilihan karya dan area venue'], sourcePages: 'Screenshot, November 2026' },
  { slug: 'lunar-konstruksi', name: 'Lunar Konstruksi', category: 'Construction company profile',
    description: 'Website company profile konstruksi dengan layanan, portfolio proyek, proses kerja, dan CMS admin. Dibangun dengan Next.js dan TypeScript; pengelolaan konten menggunakan Firebase Firestore serta Cloudinary untuk media.',
    images: ['/images/projects/lunar-konstruksi-homepage.avif'], captions: ['Homepage lengkap — dari hero, layanan, dan proyek hingga footer'], sourcePages: 'Screenshot referensi desain, November 2026' },
  { slug: 'school', name: 'Portal Informasi Sekolah', category: 'School portal',
    description: 'Portal sekolah yang menampilkan profil, kegiatan, program, dan informasi terbaru dalam satu halaman.',
    images: images('school', 3), captions: ['Halaman lengkap', 'Detail antarmuka', 'Detail antarmuka'], sourcePages: '5–6' },
  { slug: 'allegro', name: 'ALLEGRO', category: 'Outdoor rental',
    description: 'Website penyewaan perlengkapan outdoor dengan katalog, kategori kegiatan, dan penjelasan proses sewa.',
    images: images('allegro', 3), captions: ['Hero dan identitas brand', 'Homepage lengkap', 'Katalog perlengkapan outdoor'], sourcePages: 'Screenshot, November 2026' },
  { slug: 'orochi', name: 'OROCHI Perfumery', category: 'Brand website',
    description: 'Website brand parfum yang menampilkan karakter produk, koleksi parfum, dan cerita di balik merek.',
    images: images('orochi', 4), captions: ['Hero koleksi parfum', 'Detail produk dan kemasan', 'Godai Series', 'Cerita brand'], sourcePages: 'Screenshot, November 2026' },
  { slug: 'stuntspecula', name: 'StuntSpecula', category: 'Health platform',
    description: 'Landing page platform pemantauan pertumbuhan anak, dengan pengenalan fitur dan alur pemeriksaan.',
    images: images('stuntspecula', 4), captions: ['Halaman pembuka platform', 'Landing page lengkap', 'Portal orang tua', 'Dashboard admin'], sourcePages: 'Screenshot, November 2026' },
  { slug: 'nexty-erp', name: 'NEXTY ERP', category: 'Internal operations',
    description: 'Tampilan modul dashboard, proyek, tugas, dan sumber daya manusia pada sistem operasional internal.',
    images: images('nexty-erp', 4), captions: ['Ringkasan operasional', 'Manajemen proyek', 'Daftar tugas', 'Ringkasan SDM'], sourcePages: 'Screenshot, November 2026' },
  { slug: 'nexty-workspace', name: 'Nexty Workspace', category: 'Project management',
    description: 'Tampilan sistem manajemen kerja internal untuk monitoring proyek, pekerjaan tim, dan catatan keuangan.',
    images: images('nexty-workspace', 3), captions: ['Ringkasan proyek', 'Daftar proyek', 'Keuangan'], sourcePages: 'Screenshot, November 2026' },
];

export const featuredProjects = ['orochi', 'allegro', 'thaz', 'nexty-erp', 'lunar-konstruksi']
  .map(slug => projects.find(project => project.slug === slug)!);

export const experiences = [
  { company: 'NextyLabs.id', role: 'CTO & Software Developer', period: 'Jan 2026 – Okt 2026',
    summary: 'Website company profile, ERP, project management, dan dashboard monitoring IoT.' },
  { company: 'Magang · Teknisi Jaringan', role: 'Network Technician Intern', period: '2025 · Setelah KKN',
    summary: 'Mendukung pekerjaan teknis jaringan, termasuk pemeriksaan konektivitas, pemeliharaan perangkat, dan penanganan gangguan dasar. Pengalaman ini memperkuat kemampuan troubleshooting dan koordinasi teknis di lapangan.' },
  { company: 'KKN · Boyolali', role: 'Tim Kreatif', period: 'Nov 2024 – Jan 2025',
    summary: 'Website profil desa untuk informasi potensi dan kegiatan masyarakat.' },
];
