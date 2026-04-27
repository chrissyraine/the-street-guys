export default function About() {
  return (
    <section className="w-full bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 glow-red">
            Three Guys. One Mission.
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

        {/* Team bios placeholder */}
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((member) => (
            <div key={member} className="text-center">
              <div className="w-40 h-40 mx-auto bg-gray-800 rounded-lg border-2 border-[#F77F00] mb-6 flex items-center justify-center">
                <span className="text-gray-600">Photo</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Team Member {member}</h3>
              <p className="text-gray-400">Chef & Co-founder</p>
            </div>
          ))}
        </div>

        {/* Memorial text */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-300 italic">
            One of the men who built this vision left us last year.
            Every dish we make honors the way he showed us what food done right means.
          </p>
        </div>
      </div>
    </section>
  );
}
