'use client';

import Navbar from "@/components/mppl/Navbar";
import Footer from "@/components/mppl/Footer";
import Image from "next/image";

export default function MediaCoveragePage() {
  const photos = [
    { src: "/images/media-coverage/coverage-1.PNG", alt: "Media Coverage 1" },
    { src: "/images/media-coverage/coverage-2.jpeg", alt: "Media Coverage 2" },
    { src: "/images/media-coverage/coverage-3.jpeg", alt: "Media Coverage 3" },
    { src: "/images/media-coverage/coverage-4.jpeg", alt: "Media Coverage 4" },
    { src: "/images/media-coverage/coverage-5.jpeg", alt: "Media Coverage 5" },
    { src: "/images/media-coverage/coverage-6.jpeg", alt: "Media Coverage 6" },
    { src: "/images/media-coverage/coverage-7.jpeg", alt: "Media Coverage 7" },
    { src: "/images/media-coverage/coverage-8.jpeg", alt: "Media Coverage 8" },
    { src: "/images/media-coverage/coverage-9.jpeg", alt: "Media Coverage 9" },
    { src: "/images/media-coverage/coverage-10.jpeg", alt: "Media Coverage 10" },
  ];

  return (
    <div className="bg-deep-court min-h-screen text-net-white flex flex-col w-full overflow-hidden">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24 px-6 lg:px-16 relative">
        
        {/* Background Decorative Typography */}
        <div className="absolute top-20 right-0 font-bebas text-[clamp(100px,25vw,300px)] text-net-white/[0.03] leading-none pointer-events-none select-none text-right overflow-hidden z-0">
          MEDIA
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-neon-orange"></div>
              <span className="font-dm-sans text-sm font-bold uppercase tracking-[4px] text-neon-orange">
                In The News
              </span>
              <div className="w-12 h-[2px] bg-neon-orange"></div>
            </div>

            <h1 className="font-bebas text-[clamp(50px,8vw,120px)] leading-[0.85] text-net-white uppercase tracking-tight mb-8">
              MEDIA <span className="text-neon-orange">COVERAGE</span>
            </h1>

            <p className="font-dm-sans text-xl md:text-2xl text-net-white/80 font-bold max-w-3xl mx-auto leading-relaxed">
              Explore the latest highlights, press releases, and news features covering the Madhya Pradesh Premier League (MPPL).
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((photo, index) => (
              <div 
                key={index} 
                className="bg-pure-black border-2 border-neon-green/30 rounded-lg overflow-hidden hover:border-neon-green transition-colors duration-300 group"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
