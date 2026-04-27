'use client';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden" style={{
      backgroundImage: "url('/hero.jpg')",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/90 to-black/95"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <img
          src="/logo3.png"
          alt="The Street Guys - Premium Catering & VFW Dining Logo"
          className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-8 drop-shadow-lg"
        />
        <h1 className="text-6xl md:text-7xl font-black text-white mb-6 glow-red">
          Food Done Right
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
          Feed a family. Feed them well. Send them home satisfied.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="glow-button px-10 py-4 text-white font-bold text-lg rounded-lg border-2 border-transparent cursor-pointer"
          >
            Book Catering
          </button>

          <button
            onClick={() => scrollToSection('vfw-info')}
            className="px-10 py-4 text-white font-bold text-lg rounded-lg border-2 border-[#C41E3A] glow-red hover:bg-[#C41E3A] hover:bg-opacity-10 transition-all cursor-pointer"
          >
            Find Us Tues/Thurs
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-[#C41E3A]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
