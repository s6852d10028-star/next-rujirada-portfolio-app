import Link from 'next/link';

export default function Navbar() {
  const navLinks = [
    { name: 'หน้าแรก', href: '/' },
    { name: 'เกี่ยวกับ', href: '/about' },
    { name: 'ทักษะ', href: '/me/skills' },
    { name: 'ผลงาน', href: '/me/projects' },
    { name: 'แกลเลอรี', href: '/me/gallery' },
    { name: 'ติดต่อ', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-600 font-poppins">DevPortfolio</Link>
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-blue-500 transition-colors font-medium">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}