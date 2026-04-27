export default function About() {
  return (
    <section className="w-full bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 glow-red">
            The Street Guys Story
          </h2>
          <p className="text-xl text-gray-300">
            Feed people right.
          </p>
        </div>

        {/* Core philosophy */}
        <div className="bg-gray-950 border-2 border-[#C41E3A] border-glow rounded-lg p-10 mb-16">
          <p className="text-xl text-gray-100 leading-relaxed">
            "Food Done Right" isn't a slogan—it's a promise. It means feeding a family of four abundantly.
            It means generous portions that fill you up and send you home with leftovers. It means scratch cooking,
            no shortcuts, real care on every plate. One of our founders taught us what that really looks like.
            We carry that forward in everything we do. That's the legacy we serve.
          </p>
        </div>

        {/* Team bios */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <img
              src="/placeholder-adam.jpg"
              alt="Adam Crispin, Co-Founder and Chef at The Street Guys"
              className="w-40 h-40 mx-auto bg-gray-800 rounded-lg border-2 border-[#F77F00] mb-6 object-cover"
            />
            <h3 className="text-xl font-bold text-white mb-2">Adam Crispin</h3>
            <p className="text-gray-300 mb-3">Co-Founder & Chef</p>
            <p className="text-sm text-gray-400">The visionary who showed us what "Food Done Right" truly means. Adam's passion for generous portions and honest food defined our standards.</p>
          </div>

          <div className="text-center">
            <img
              src="/placeholder-ed.jpg"
              alt="Ed Hopkins, Co-Founder and Operator at The Street Guys"
              className="w-40 h-40 mx-auto bg-gray-800 rounded-lg border-2 border-[#F77F00] mb-6 object-cover"
            />
            <h3 className="text-xl font-bold text-white mb-2">Ed Hopkins</h3>
            <p className="text-gray-300 mb-3">Co-Founder & Operator</p>
            <p className="text-sm text-gray-400">Uncle. Carrying forward the vision of feeding families abundantly. Every plate reflects the standard Adam set—no shortcuts, just real food and real care.</p>
          </div>

          <div className="text-center">
            <img
              src="/placeholder-team.jpg"
              alt="Third team member at The Street Guys"
              className="w-40 h-40 mx-auto bg-gray-800 rounded-lg border-2 border-[#F77F00] mb-6 object-cover"
            />
            <h3 className="text-xl font-bold text-white mb-2">The Third</h3>
            <p className="text-gray-300 mb-3">Co-Operator & Chef</p>
            <p className="text-sm text-gray-400">Part of the core team making it happen every Tuesday and Thursday. Committed to the same mission: feeding people right.</p>
          </div>
        </div>

        {/* Memorial text */}
        <div className="mt-8 text-center border-t border-gray-800 pt-8">
          <p className="text-lg text-gray-300 italic mb-4">
            "Adam showed us what 'done right' really means. We carry that forward in every plate we serve."
          </p>
          <p className="text-gray-400">
            Started March 2024. Uncle and nephew. One mission. The Street Guys lives on.
          </p>
        </div>
      </div>
    </section>
  );
}
