import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
              <img 
                src="/logo.png" 
                alt="Joint 99 Logo" 
                className="relative h-14 w-auto rounded-full ring-2 ring-white shadow-xl" 
              />
            </div>
            <div>
              <span className="text-3xl font-extrabold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                Joint 99
              </span>
              <p className="text-xs text-gray-500 font-medium tracking-wider">PROVISIONS & MORE</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {['Products', 'About', 'Certification', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-green-600 relative group transition-all duration-300"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="#products"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Shop Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl mb-4">
            {['Products', 'About', 'Certification', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-xl transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;