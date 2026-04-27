'use client';

export default function WhyCater() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const valueProps = [
    {
      title: "Your guests go home fed.",
      subtitle: "Really fed.",
      description: "Generous portions that matter. No skimping. No pretense.",
    },
    {
      title: "Real chefs. Real food.",
      subtitle: "No shortcuts.",
      description: "Scratch-cooked everything. Every single thing. That's the standard.",
    },
    {
      title: "We care like you do.",
      subtitle: "Same care, every time.",
      description: "Whether it's a VFW Tuesday or your wedding, food done right is the only way we work.",
    },
    {
      title: "Feed a family of four.",
      subtitle: "Generously. Affordably. With leftovers.",
      description: "That's the promise. That's the philosophy. That's what we deliver.",
    },
  ];

  return (
    <section className="w-full bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 glow-red">
            Why Cater With Us
          </h2>
        </div>

        {/* Value props grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {valueProps.map((prop, idx) => (
            <div
              key={idx}
              className="bg-gray-950 border-l-4 border-[#F77F00] p-8 rounded-lg hover:border-[#E63946] transition-colors"
            >
              <h3 className="text-2xl font-black text-white mb-2 glow-red">
                {prop.title}
              </h3>
              <p className="text-[#F77F00] font-bold mb-4">{prop.subtitle}</p>
              <p className="text-gray-300">{prop.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="glow-button px-12 py-5 text-white font-bold text-lg rounded-lg border-2 border-transparent cursor-pointer"
          >
            Start Planning Your Event
          </button>
        </div>
      </div>
    </section>
  );
}
