/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Footer from "@/Components/Footer";

export default function GalleryPage() {
  const images = [
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800", 
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800", 
    "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=800", 
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800", 
    "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800", 
    "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=800", 
  ];

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          {/* ปุ่มย้อนกลับ */}
          <Link
            href="/"
            className="inline-block mb-6 px-6 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-all font-medium"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold tracking-tighter text-emerald-400">
            My Gallery
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl cursor-pointer group h-64"
            >
              <img
                src={src}
                alt={`Coding session ${index + 1}`}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-emerald-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
