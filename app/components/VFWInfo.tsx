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
                  Check in with the VFW for exact times
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-3">
                  Get the address
                </h3>
                <p className="text-gray-300">
                  VFW Kitchen location details — add real address
                </p>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div>
            <div className="w-full h-96 bg-black border-2 border-[#C41E3A] rounded-lg flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-500 text-lg mb-4">Map Embed</p>
                <p className="text-gray-600">Google Maps or address details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
