import Link from "next/link"; 
import Footer from "@/Components/Footer";

export default function AboutPage() {
  const sections = [
    {
      title: "ประวัติส่วนตัว",
      content:
        "นางสาวรุจิรดา หงษ์สิงห์ทอง ชื่อเล่น: อิ๊ง อายุ: 21 ปี วันเกิด: 22 มกราคม 2548",
    },
    {
      title: "ประวัติการศึกษา",
      isEducation: true,
      educationData: [
        "ประกาศนียบัตรวิชาชีพ (ปวช.) สาขาวิชาเทคโนโลยีสารสนเทศ วิทยาลัยเทคนิคสมุทรสาคร",
        "ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.) สาขาวิชาเทคโนโลยีสารสนเทศ วิทยาลัยเทคนิคสมุทรสาคร",
        "ปริญญาตรี คณะศิลปศาสตร์และวิทยาศาสตร์ สาขาวิชาเทคโนโลยีดิจิทัลและนวัตกรรม มหาวิทยาลัยเอเชียอาคเนย์ (กำลังศึกษา)",
      ],
    },
    {
      title: "Career Objective",
      content:
        "พร้อมรับผิดชอบงานด้านการตลาดด้วยความละเอียดรอบคอบ เพื่อให้งานต่างๆ ดำเนินไปอย่างราบรื่น",
    },
    {
      title: "จุดแข็ง",
      content: "มีความละเอียดรอบคอบ, เช็คความเรียบร้อยของงานเสมอ",
    },
    {
      title: "ความสนใจ",
      content: "สนใจเรียนรู้เทคโนโลยีใหม่ๆ และเครื่องมือช่วยเพิ่มประสิทธิภาพการทำงาน",
    },
    {
      title: "งานอดิเรก",
      content: "เลี้ยงแมว, ฟังเพลง, อ่านนิยาย",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* ปุ่มย้อนกลับ */}
        <Link
          href="/"
          className="inline-block mb-6 px-6 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-all font-medium"
        >
          ← Back to Home
        </Link>

        <div className="bg-[#1D3557] text-white py-3 px-8 rounded-full text-center mb-10 w-fit mx-auto shadow-lg">
          <h1 className="text-2xl font-bold">About Me</h1>
        </div>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-3xl shadow-md border border-gray-100 transition-transform hover:scale-[1.02]"
            >
              <h2 className="text-xl font-bold text-[#1D3557] mb-3 border-l-4 border-[#3A86FF] pl-4">
                {section.title}
              </h2>

              {section.isEducation ? (
                <ul className="list-disc pl-8 space-y-2 text-gray-600">
                  {section.educationData.map((item, i) => (
                    <li key={i} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 leading-relaxed pl-4">
                  {section.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
