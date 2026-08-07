import { useEffect, useRef } from 'react';

const Location = () => {
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
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transform transition-all duration-1000 opacity-0 translate-y-10">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-green-600 tracking-wider uppercase">Visit Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700">Location</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="relative">
            <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📍</span>
                <span className="text-sm font-semibold text-gray-700">Joint 99 Store</span>
              </div>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15713.828232252773!2d6.6440349!3d7.5583891!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1046a55a1d1b4d6f%3A0x4b8b9a9b9b9b9b9b!2sJoint%2099!5e0!3m2!1sen!2sng!4v1620000000000"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Joint 99 Location"
                className="hover:opacity-90 transition-opacity duration-300"
              ></iframe>
            </div>
          </div>
          <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">📌</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Address</p>
                  <p className="text-xs text-gray-500">Joint 99, Your City, Your State, Nigeria</p>
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/yrT21gmnHuogRRuE7"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <span>Get Directions</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;