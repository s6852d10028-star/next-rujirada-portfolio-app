/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Footer from "@/Components/Footer";

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "ระบบซื้อขายสินค้าออนไลน์แบบครบวงจร รองรับการชำระเงินและระบบจัดการสต็อกสินค้า",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop", 
      tech: ["Next.js", "Tailwind CSS", "Node.js", "Stripe"],
      role: "Full-stack Developer",
      year: "2023",
    },
    {
      title: "Health Tracking App",
      description:
        "แอปพลิเคชันบันทึกข้อมูลสุขภาพ วิเคราะห์ผลการออกกำลังกายและแจ้งเตือนการดื่มน้ำ",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1600&auto=format&fit=crop",
      tech: ["React Native", "Firebase", "Redux"],
      role: "Frontend Developer",
      year: "2022",
    },
    {
      title: "Portfolio Website",
      description:
        "เว็บไซต์พอร์ตโฟลิโอส่วนตัวที่เน้นความเรียบง่าย แสดงผลได้ทุกหน้าจอ (Responsive)",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1426&auto=format&fit=crop",
      tech: ["Next.js", "Framer Motion", "Tailwind"],
      role: "Web Designer / Dev",
      year: "2024",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 to-blue-950 py-12 px-4 text-white relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* ปุ่มย้อนกลับ */}
        <Link
          href="/"
          className="inline-block mb-6 px-6 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-all font-medium"
        >
          ← Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 drop-shadow-lg">
          My Projects
        </h1>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2.5 transition-all duration-300"
            >
              {/* Image Area */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content Area */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-2xl font-bold text-blue-300">
                    {project.title}
                  </h2>
                  <span className="text-sm bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/30">
                    {project.year}
                  </span>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3">
                  {/* Role */}
                  <div className="flex items-center gap-2 text-sm text-gray-200">
                    <span className="font-semibold text-blue-400">Role:</span>
                    {project.role}
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-[10px] uppercase tracking-wider font-bold bg-white/5 border border-white/10 px-2 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
