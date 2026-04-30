'use client';

import { useState } from "react";

export default function Menu() {
  const [activeTab, setActiveTab] = useState("vfw");

  const vfwMenu = [
    // Appetizers
    { name: "Bread Sticks", price: "$6" },
    { name: "Cheese Bread", price: "$8" },
    { name: "Pepperoni Log", price: "$1-$5" },
    // Pizzas
    { name: "Large Pizza (1 Topping)", price: "$15" },
    { name: "Pulled Pork Pizza", price: "$20" },
    { name: "Buffalo Chicken Pizza", price: "$20" },
    // Subs (18" whole)
    { name: "Meatball Sub (18\")", price: "$18" },
    { name: "Italian Sub (18\")", price: "$22" },
    { name: "Super Italian Sub (18\")", price: "$24" },
    { name: "Pulled Pork Sub (18\")", price: "$20" },
    { name: "Buffalo Chicken Sub (18\")", price: "$22" },
    // Sandwiches
    { name: "Smoked Sausage Sandwich", price: "$12" },
    { name: "Cheeseburger", price: "$12" },
    { name: "Mushroom Swiss Burger", price: "$15" },
    { name: "Pizza Burger", price: "$15" },
    // Dinners
    { name: "Lasagna Dinner", price: "$15" },
    { name: "Stuffed Shells Dinner", price: "$12" },
    { name: "Chicken Parmesan Dinner", price: "$15" },
    { name: "Spaghetti Dinner", price: "$10" },
    // Other
    { name: "Calzone", price: "$10-$15" },
    { name: "Stromboli", price: "$18" },
  ];

  const cateringMenu = [
    // Appetizers
    { name: "Bread Sticks (Full Batch)", price: "Call for pricing" },
    { name: "Cheese Bread (Full Batch)", price: "Call for pricing" },
    // Pizzas
    { name: "Large Pizzas (Custom Toppings)", price: "Call for pricing" },
    // Subs (18" whole - signature item)
    { name: "Sub Platters (18\" Whole Subs)", price: "Call for pricing" },
    { name: "Meatball, Italian, Pulled Pork, Buffalo Chicken", price: "Mix & Match" },
    // Dinners
    { name: "Lasagna (Full Pan)", price: "Call for pricing" },
    { name: "Stuffed Shells (Full Pan)", price: "Call for pricing" },
    { name: "Chicken Parmesan (Full Pan)", price: "Call for pricing" },
    { name: "Spaghetti with Sauce (Full Pan)", price: "Call for pricing" },
    // Family packages
    { name: "Family Feed-a-Crowd Bundle", price: "Custom Quote" },
    { name: "All Scratch-Made. All Fresh. All Generous.", price: "Book Today" },
  ];

  return (
    <section className="w-full bg-transparent py-20 px-6">
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
            className={`px-6 md:px-8 py-2 md:py-3 font-bold text-sm md:text-lg rounded-lg transition-all ${
              activeTab === "vfw"
                ? "glow-button text-white"
                : "text-gray-400 border-2 border-gray-700 hover:border-[#FF0000]"
            }`}
          >
            VFW Favorites
          </button>
          <button
            onClick={() => setActiveTab("catering")}
            className={`px-6 md:px-8 py-2 md:py-3 font-bold text-sm md:text-lg rounded-lg transition-all ${
              activeTab === "catering"
                ? "glow-button text-white"
                : "text-gray-400 border-2 border-gray-700 hover:border-[#FF0000]"
            }`}
          >
            Catering Specialties
          </button>
        </div>

        {/* Menu items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {(activeTab === "vfw" ? vfwMenu : cateringMenu).map((item) => (
            <div
              key={item.name}
              className="bg-black border-l-4 border-[#FF0000] p-4 md:p-6 rounded hover:border-[#FF0000] transition-colors"
            >
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-lg font-bold text-white flex-1">{item.name}</h3>
                <span className="text-[#F77F00] font-bold whitespace-nowrap">{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Menu note */}
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            All bread and dough made fresh in-house. No shortcuts, no frozen anything.
          </p>
          {activeTab === "vfw" && (
            <p className="text-gray-500 text-sm mt-2">
              Available Tuesdays & Thursdays at Titusville VFW
            </p>
          )}
          {activeTab === "catering" && (
            <p className="text-gray-500 text-sm mt-2">
              Every item can be customized for your event. We scale generously.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
