import { useEffect, useRef } from 'react';

const Certification = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="certification" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transform transition-all duration-1000 opacity-0 translate-y-10">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-green-600 tracking-wider uppercase">Official</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 mt-4">Fully registered and verified by the relevant authorities</p>
        </div>

        {/* Two certificates in a grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* SMEDAN Certificate */}
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-100 relative overflow-hidden hover:shadow-3xl transition-shadow duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-100/50 rounded-full -mr-32 -mt-32"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🏆</span>
                </div>
                <span className="text-lg font-bold text-gray-700">SMEDAN Certified</span>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 shadow-inner">
                <img
                  src="/smedan-cert.jpg"
                  alt="SMEDAN Certificate"
                  className="w-full max-w-md mx-auto rounded-xl shadow-lg border-2 border-gray-200 hover:border-green-300 transition-all duration-300"
                />
              </div>

              <div className="mt-4 text-center">
                <p className="text-gray-600 text-sm">
                  Small and Medium Enterprises Development Agency of Nigeria
                </p>
                <div className="mt-2 inline-block bg-gradient-to-r from-green-50 to-green-100 px-4 py-2 rounded-xl border border-green-200">
                  <span className="text-sm font-mono text-green-700 font-bold tracking-wider">
                    SUID-4222-2851-7201-1504
                  </span>
                </div>
                <div className="mt-3 flex justify-center gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">✓ Verified</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">✓ Registered</span>
                </div>
              </div>
            </div>
          </div>

          {/* CAC Business Registration Certificate */}
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-100 relative overflow-hidden hover:shadow-3xl transition-shadow duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full -mr-32 -mt-32"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl">📜</span>
                </div>
                <span className="text-lg font-bold text-gray-700">CAC Registered</span>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 shadow-inner">
                <img
                  src="/cac-cert.jpg"
                  alt="CAC Business Registration Certificate"
                  className="w-full max-w-md mx-auto rounded-xl shadow-lg border-2 border-gray-200 hover:border-blue-300 transition-all duration-300"
                />
              </div>

              <div className="mt-4 text-center">
                <p className="text-gray-600 text-sm">
                  Corporate Affairs Commission – Business Name Registration
                </p>
                <div className="mt-2 inline-block bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-2 rounded-xl border border-blue-200">
                  <span className="text-sm font-mono text-blue-700 font-bold tracking-wider">
                    BN 9835331
                  </span>
                </div>
                <div className="mt-3 flex justify-center gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">✓ CAC</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">✓ Trade & Retail</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">✓ E‑Commerce</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Principal place of business: Plot 20, Road E9, Ajaokuta, Kogi, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;