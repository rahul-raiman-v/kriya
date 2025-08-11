import React from "react";
import { useNavigate, useLocation } from "react-router";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Events", path: "/events" },
  { name: "Speakers", path: "/speakers" },
  { name: "Timeline", path: "/timeline" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll effect for header background
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('header')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Close mobile menu on escape key
  React.useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavigate = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 backdrop-blur-xs ${
        isScrolled ? 'glass-morphism-dark shadow-lg' : 'glass-morphism'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo with hover effect */}
            <a
              onClick={() => handleNavigate('/')}
              className="text-2xl md:text-3xl font-bold tracking-wider text-gradient slide-in-left hover:scale-105 transition-transform duration-300 focus:outline-none rounded-lg px-2 py-1"
              aria-label="Go to home page"
            >
              KRIYA 1.0
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex flex-grow justify-center items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavigate(link.path)}
                  className={`relative transition-all duration-300 hover:scale-105 focus:outline-none  rounded-lg px-3 py-2 ${
                    isActive(link.path)
                      ? "text-pink-600 font-semibold"
                      : "text-gray-600 hover:text-pink-600"
                  } group`}
                  aria-current={isActive(link.path) ? 'page' : undefined}
                >
                  {link.name}
                  {/* Animated underline */}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 transform transition-transform duration-300 ${
                    isActive(link.path) ? 'scale-x-100' : 'scale-x-0'
                  }`}></span>
                </button>
              ))}
            </nav>

            {/* Mobile menu button with animation */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative text-gray-700 focus:outline-none hover:text-pink-600 transition-colors duration-300 p-2 rounded-lg focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                <div className="w-6 h-6 relative -ml-3 mr-3">
                  <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 top-3' : 'top-1'
                  }`}></span>
                  <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'top-3'
                  }`}></span>
                  <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 top-3' : 'top-5'
                  }`}></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile menu with smooth animation */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <nav className="mt-4 glass-morphism rounded-xl p-6 backdrop-blur-lg">
              {navLinks.map((link, index) => (
                <button
                  key={link.name}
                  onClick={() => handleNavigate(link.path)}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 ${
                    isActive(link.path)
                      ? 'text-pink-600 font-semibold bg-pink-50 bg-opacity-50'
                      : 'text-gray-600 hover:text-pink-600 hover:bg-white hover:bg-opacity-20'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: isMenuOpen ? 'slideInFromRight 0.4s ease-out forwards' : 'none'
                  }}
                  aria-current={isActive(link.path) ? 'page' : undefined}
                >
                  <span className="flex items-center">
                    {link.name}
                    {isActive(link.path) && (
                      <span className="ml-2 w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
                    )}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile menu backdrop */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-opacity-20 z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
};
