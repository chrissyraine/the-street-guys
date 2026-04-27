export default function VFWInfo() {
  return (
    <section id="vfw-info" className="w-full bg-gray-950 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Info */}
          <div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 glow-red">
              Find Us
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#F77F00] mb-2">
                  The VFW
                </h3>
                <p className="text-gray-300 text-lg">
                  Walk in on Tuesday and Thursday to grab real food from guys who know what they're doing.
                </p>
              </div>

              <div className="bg-black border-2 border-[#C41E3A] border-glow p-6 rounded-lg">
                <p className="text-gray-400 text-sm mb-2">OPERATING HOURS</p>
                <p className="text-white text-2xl font-bold">
                  Tuesday & Thursday
                </p>
                <p className="text-gray-300 text-lg mt-2">
                  Noon – 7pm
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-3">
                  The Address
                </h3>
                <p className="text-gray-300 text-lg font-semibold mb-2">
                  206 Saint John St<br />
                  Titusville, FL
                </p>
                <p className="text-gray-400 text-sm">
                  Bruce Shorts Post 5958 VFW<br />
                  No reservations needed. Just show up.
                </p>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div>
            <div className="w-full h-96 bg-black border-2 border-[#C41E3A] rounded-lg flex items-center justify-center" role="region" aria-label="Location map">
              <div className="text-center">
                <p className="text-gray-500 text-lg mb-4">📍 VFW Location</p>
                <p className="text-gray-400">206 Saint John St, Titusville, FL<br/><span className="text-sm">Bruce Shorts Post 5958</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
