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
    images: images('thaz', 3), captions: ['Halaman lengkap', 'Detail antarmuka', 'Detail antarmuka'], sourcePages: '3–4' },
  { slug: 'school', name: 'Portal Informasi Sekolah', category: 'School portal',
    description: 'Portal sekolah yang menampilkan profil, kegiatan, program, dan informasi terbaru dalam satu halaman.',
    images: images('school', 3), captions: ['Halaman lengkap', 'Detail antarmuka', 'Detail antarmuka'], sourcePages: '5–6' },
  { slug: 'allegro', name: 'ALLEGRO', category: 'Outdoor rental',
    description: 'Website penyewaan perlengkapan outdoor dengan katalog, kategori kegiatan, dan penjelasan proses sewa.',
    images: images('allegro', 3), captions: ['Halaman lengkap', 'Detail antarmuka', 'Detail antarmuka'], sourcePages: '7–8' },
  { slug: 'orochi', name: 'OROCHI Perfumery', category: 'Brand website',
    description: 'Website brand parfum yang menampilkan karakter produk, koleksi parfum, dan cerita di balik merek.',
    images: images('orochi', 3), captions: ['Halaman lengkap', 'Detail antarmuka', 'Detail antarmuka'], sourcePages: '9–10' },
  { slug: 'stuntspecula', name: 'StuntSpecula', category: 'Health platform',
    description: 'Landing page platform pemantauan pertumbuhan anak, dengan pengenalan fitur dan alur pemeriksaan.',
    images: images('stuntspecula', 3), captions: ['Halaman lengkap', 'Detail antarmuka', 'Detail antarmuka'], sourcePages: '11–12' },
  { slug: 'nexty-erp', name: 'NEXTY ERP', category: 'Internal operations',
    description: 'Tampilan modul dashboard, proyek, tugas, dan sumber daya manusia pada sistem operasional internal.',
    images: images('nexty-erp', 4), captions: ['Ringkasan operasional', 'Manajemen proyek', 'Daftar tugas', 'Ringkasan SDM'], sourcePages: '13–14' },
  { slug: 'nexty-workspace', name: 'Nexty Workspace', category: 'Project management',
    description: 'Tampilan sistem manajemen kerja internal untuk monitoring proyek, pekerjaan tim, dan catatan keuangan.',
    images: images('nexty-workspace', 3), captions: ['Ringkasan proyek', 'Daftar proyek', 'Keuangan'], sourcePages: '15–16' },
];

export const featuredProjects = ['orochi', 'allegro', 'thaz', 'nexty-erp', 'nexty-workspace']
  .map(slug => projects.find(project => project.slug === slug)!);

export const experiences = [
  { company: 'NextyLabs.id', role: 'CTO & Software Developer', period: 'Jan 2026 – Okt 2026',
    summary: 'Website company profile, ERP, project management, dan dashboard monitoring IoT.' },
  { company: 'KKN · Boyolali', role: 'Tim Kreatif', period: 'Nov 2024 – Jan 2025',
    summary: 'Website profil desa untuk informasi potensi dan kegiatan masyarakat.' },
];
