import Link from "next/link";
import Footer from "@/Components/Footer";

export default function ContactPage() {
  const contactInfo = [
    { label: "Email", value: "s6852D10028@sau.ac.th" },
    { label: "Phone", value: "0965737508" },
    { label: "GitHub", value: "https://github.com/s6852d10028-star" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 text-slate-800">
      <div className="max-w-2xl mx-auto">
        {/* ปุ่มย้อนกลับ */}
        <Link
          href="/"
          className="inline-block mb-8 px-6 py-2 bg-slate-200 text-slate-700 rounded-full hover:bg-slate-300 transition-all font-medium"
        >
          ← Back to Home
        </Link>

        {/* หัวข้อ */}
        <div className="bg-slate-900 text-white py-4 px-8 rounded-full mb-10 w-fit mx-auto shadow-lg">
          <h1 className="text-2xl font-bold">Contact Me</h1>
        </div>

        {/* กล่องข้อมูล */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 border-l-4 border-blue-600 pl-4"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-lg font-medium text-slate-700">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ปุ่ม Download Resume */}
          <div className="mt-10">
            <a
              href="/resume.pdf"
              download
              className="w-full flex justify-center items-center py-4 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all font-bold shadow-md hover:shadow-lg"
            >
              📥 Download Resume
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
