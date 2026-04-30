'use client';

export default function Footer() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-black border-t-2 border-[#FF0000] py-12 md:py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black text-white mb-4 glow-red">
              The Street Guys
            </h3>
            <p className="text-gray-400">
              Three guys. One mission. Food done right.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>
                <span className="text-white font-semibold">Phone:</span> (555) 123-4567
              </p>
              <p>
                <span className="text-white font-semibold">Email:</span> hello@streetguys.com
              </p>
              <p>
                <span className="text-white font-semibold">Instagram:</span> @thestguys
              </p>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Book</h4>
            <button
              onClick={scrollToContact}
              className="glow-button w-full px-6 py-3 text-white font-bold rounded-lg cursor-pointer"
            >
              Request Catering
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>© 2025 The Street Guys. Food Done Right.</p>
          <p className="mt-4 text-sm">
            Site by <span className="text-yellow-500">Forever Still Studio</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
