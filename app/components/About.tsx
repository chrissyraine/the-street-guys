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

        {/* Team photo */}
        <div className="mb-16">
          <img
            src="/owners.jpg"
            alt="The Street Guys owners and team - Adam Crispin and Ed Hopkins"
            className="w-full max-w-2xl mx-auto rounded-lg border-2 border-[#F77F00] object-cover"
          />
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
