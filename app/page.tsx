import Footer from "@/Components/Footer";
import Image from "next/image";
import imgme from "@/assets/images/me.jpg";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-white text-center p-4">
      <h1 className="text-4xl font-bold text-[#3002ff] mb-6">Portfolio</h1>

      <div className="relative mb-6">
        <Image
          src={imgme}
          alt="Profile"
          width={200}
          height={200}
          className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-xl"
          draggable={false}
        />
      </div>

      <p className="text-xl font-semibold text-[#1D3557] mb-2">
        นางสาว รุจิรดา หงษ์สิงห์ทอง
      </p>
      <p className="text-xl font-semibold text-[#1D3557] mb-2">
        ตำแหน่งที่ต้องการสมัคร : Admin Marketing
      </p>
      <p className="text-xl font-semibold text-[#1D3557] mb-8">
        ฉันมีความเชี่ยวชาญในการใช้ Microsoft Excel และ Microsoft Word
      </p>

      <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
        <Link
          className="bg-[#3A86FF] hover:bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-opacity-80 transition-all font-medium text-base w-full text-center"
          href="/about"
        >
          About Me
        </Link>
        <Link
          className="bg-[#C27AFF] hover:bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-opacity-80 transition-all font-medium text-base w-full text-center"
          href="/me/skills"
        >
          Skills
        </Link>
        <Link
          className="bg-[#ff3a7f] hover:bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-opacity-80 transition-all font-medium text-base w-full text-center"
          href="/me/projects"
        >
          Projects
        </Link>
        <Link
          className="bg-[#3aff9c] hover:bg-green-400 text-white px-4 py-2 rounded-full hover:bg-opacity-80 transition-all font-medium text-base w-full text-center"
          href="/me/gallery"
        >
          Gallery
        </Link>
        <Link
          className="bg-[#ff3a4a] hover:bg-red-600 text-white px-4 py-2 rounded-full hover:bg-opacity-80 transition-all font-medium col-span-2 w-full max-w-50 justify-self-center text-center text-base"
          href="/contact"
        >
          Contact
        </Link>
      </div>
      <Footer />
    </div>
  );
}
