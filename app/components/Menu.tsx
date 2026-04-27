'use client';

import { useState } from "react";

export default function Menu() {
  const [activeTab, setActiveTab] = useState("vfw");

  const vfwMenu = [
    { name: "Burger", price: "$8" },
    { name: "Corn Casserole", price: "$6" },
    { name: "Mashed Potatoes", price: "$4" },
    { name: "Wings", price: "$10" },
  ];

  const cateringMenu = [
    { name: "Bourbon Reduction Short Rib", price: "Inquiry" },
    { name: "Herb-Brined Chicken", price: "Inquiry" },
    { name: "Composed Vegetable Plate", price: "Inquiry" },
    { name: "Scratch-Made Sides", price: "Inquiry" },
  ];

  return (
    <section className="w-full bg-gray-950 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 glow-red">
            What We Cook
          </h2>
          <p className="text-xl text-gray-300">
            Two sides of the same coin: real food, real care.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 justify-center mb-12">
          <button
            onClick={() => setActiveTab("vfw")}
            className={`px-8 py-3 font-bold text-lg rounded-lg transition-all ${
              activeTab === "vfw"
                ? "glow-button text-white"
                : "text-gray-400 border-2 border-gray-700 hover:border-[#C41E3A]"
            }`}
          >
            VFW Favorites
          </button>
          <button
            onClick={() => setActiveTab("catering")}
            className={`px-8 py-3 font-bold text-lg rounded-lg transition-all ${
              activeTab === "catering"
                ? "glow-button text-white"
                : "text-gray-400 border-2 border-gray-700 hover:border-[#C41E3A]"
            }`}
          >
            Catering Specialties
          </button>
        </div>

        {/* Menu items */}
        <div className="grid md:grid-cols-2 gap-6">
          {(activeTab === "vfw" ? vfwMenu : cateringMenu).map((item) => (
            <div
              key={item.name}
              className="bg-black border-l-4 border-[#C41E3A] p-6 rounded"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-white">{item.name}</h3>
                <span className="text-[#F77F00] font-bold">{item.price}</span>
              </div>
              <div className="mt-2 h-32 bg-gray-800 rounded flex items-center justify-center text-gray-600">
                Food Photo
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
