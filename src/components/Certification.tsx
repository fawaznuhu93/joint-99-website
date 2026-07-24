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
      <div ref={sectionRef} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 transform transition-all duration-1000 opacity-0 translate-y-10">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-green-600 tracking-wider uppercase">Official</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700">Certification</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-green-100/50 to-transparent rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-100/50 to-transparent rounded-full -ml-32 -mb-32"></div>
          
          <div className="relative">
            <div className="flex items-center justify-center gap-3 mb-6">
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

            <div className="mt-6 text-center">
              <p className="text-gray-600 font-medium">
                Registered with the Small and Medium Enterprises Development Agency of Nigeria
              </p>
              <div className="mt-3 inline-block bg-gradient-to-r from-green-50 to-green-100 px-6 py-3 rounded-xl border border-green-200">
                <span className="text-sm font-mono text-green-700 font-bold tracking-wider">
                  SUID-4222-2851-7201-1504
                </span>
              </div>
              <div className="mt-4 flex justify-center gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">✓ Verified</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">✓ Registered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;