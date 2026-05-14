'use client';

import { useState } from 'react';

export default function DessertShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const desserts = [
    { id: 1, src: '/desserts/blueberrychzcake.jpg', alt: 'Blueberry chocolate cake' },
    { id: 2, src: '/desserts/bunnychzcake.jpg', alt: 'Bunny chocolate cake' },
    { id: 3, src: '/desserts/pie.jpg', alt: 'Fresh pie' },
    { id: 4, src: '/desserts/strawberry.jpg', alt: 'Strawberry dessert' },
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? desserts.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === desserts.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="desserts" className="w-full bg-transparent py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 glow-red">
            What We Create
          </h2>
          <p className="text-xl text-gray-300">
            Every dessert is made from scratch. Every one is generous.
          </p>
        </div>

        {/* Carousel container */}
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Image display */}
          <div className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden border-2 border-[#FF0000]">
            <img
              src={desserts[currentIndex].src}
              alt={desserts[currentIndex].alt}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for text legibility if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Navigation buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all border-2 border-[#FF0000] hover:border-[#FF0000]"
            aria-label="Previous dessert"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all border-2 border-[#FF0000] hover:border-[#FF0000]"
            aria-label="Next dessert"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {desserts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-[#FF0000] w-8'
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Go to dessert ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-200">
            Cheesecake. Chocolate. Fruit tarts. Layered creations. All made fresh, all generous portions.
          </p>
          <p className="text-gray-400 mt-3">
            Available for catering events and special orders.
          </p>
        </div>
      </div>
    </section>
  );
}
