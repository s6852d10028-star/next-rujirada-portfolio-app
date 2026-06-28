import Link from "next/link";
import Footer from "@/Components/Footer";

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        {
          name: "HTML",
          icon: <span className="text-2xl text-orange-500">🌐</span>,
        },
        {
          name: "CSS",
          icon: <span className="text-2xl text-blue-500">🎨</span>,
        },
        {
          name: "JavaScript",
          icon: <span className="text-2xl text-yellow-400">📜</span>,
        },
        {
          name: "React",
          icon: <span className="text-2xl text-cyan-400">⚛️</span>,
        },
        {
          name: "Next.js",
          icon: <span className="text-2xl text-slate-200">🖥️</span>,
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node.js",
          icon: <span className="text-2xl text-green-600">🟢</span>,
        },
        {
          name: "Express",
          icon: <span className="text-2xl text-slate-200">🚀</span>,
        },
        {
          name: "PHP",
          icon: <span className="text-2xl text-indigo-500">📑</span>,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[url('/background.jpg')] bg-cover bg-center bg-fixed py-12 px-4 text-white relative">
      <div className="absolute inset-0 bg-blue-950" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* ปุ่มย้อนกลับ */}
        <Link
          href="/"
          className="inline-block mb-6 px-6 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-all font-medium"
        >
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-center mb-12 drop-shadow-lg">
          My Skills
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-2xl"
            >
              <h2 className="text-2xl font-bold mb-6 text-blue-300">
                {cat.title}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {cat.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10 hover:bg-white/20 transition-all"
                  >
                    <div className="text-2xl">{skill.icon}</div>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}
