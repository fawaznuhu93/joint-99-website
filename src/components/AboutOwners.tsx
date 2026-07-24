import { useEffect, useRef } from 'react';

const AboutOwners = () => {
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
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="transform transition-all duration-1000 opacity-0 translate-y-10">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-green-600 tracking-wider uppercase">Leadership</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700">Team</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* CEO */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 text-center">
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                  <img
                    src="/ceo.jpg"
                    alt="Mrs. Umu Nuhu Yusuf"
                    className="relative w-40 h-40 rounded-full object-cover border-4 border-white shadow-xl"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Mrs. Umu Nuhu Yusuf</h3>
                <p className="text-green-600 font-semibold mt-1">CEO / Founder</p>
                <div className="flex justify-center gap-2 mt-2">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">Visionary</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Leader</span>
                </div>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  With over a decade of experience in retail and community commerce, Mrs. Umu built Joint 99 on the principles of integrity, quality, and customer satisfaction.
                </p>
              </div>
            </div>

            {/* COO - Updated Description */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 text-center">
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                  <img
                    src="/coo.jpg"
                    alt="Engr. Nuhu Yusuf"
                    className="relative w-40 h-40 rounded-full object-cover border-4 border-white shadow-xl"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Engr. Nuhu Yusuf</h3>
                <p className="text-blue-600 font-semibold mt-1">COO, Joint 99</p>
                <div className="flex justify-center gap-2 mt-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Expert</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Engineer</span>
                </div>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Former Head of Operations / General Manager at <strong className="text-blue-700">Ajaokuta Steel Company Limited</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOwners;