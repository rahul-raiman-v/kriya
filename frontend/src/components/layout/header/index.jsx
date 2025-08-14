import React from 'react';
import { useNavigate, useLocation } from 'react-router';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Events', path: '/events' },
  { name: 'Speakers', path: '/speakers' },
  { name: 'Combo', path: '/combo' },
  { name: 'Team', path: '/teams' },
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

  const handleRegistration = () => {
    // You can navigate to a registration page or open a modal
    navigate('/combo');
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    // Handle exact match for home page
    if (path === '/' && location.pathname === '/') {
      return true;
    }
    // Handle other routes (including nested routes)
    if (path !== '/' && location.pathname.startsWith(path)) {
      return true;
    }
    return false;
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full duration-300 bg-white ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl border-b border-pink-200/60 shadow-lg'
            : 'bg-gradient-to-r from-white/70 via-pink-50/50 to-purple-50/50 backdrop-blur-lg border-b border-pink-100/40'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <img
              src="https://res.cloudinary.com/dsz2br3qg/image/upload/v1755106848/bit_df5hvq.png"
              alt=""
              className="h-13"
              loading="lazy"
            />
            <img
              src="https://res.cloudinary.com/dsz2br3qg/image/upload/v1755106864/kriya_lpiwdp.png"
              alt=""
              className="h-16"
              loading="lazy"
            />
            <img
              src="https://res.cloudinary.com/dsz2br3qg/image/upload/v1755106865/tbi_c9c0ao.png"
              alt=""
              className="h-16"
              loading="lazy"
            />

            {/* Logo with enhanced hover effect */}

            {/* Desktop Navigation with enhanced styling */}
            <nav className="hidden lg:flex flex-grow justify-center items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavigate(link.path)}
                  className={`cursor-pointer relative transition-all duration-300 hover:scale-105 text-lg px-4 py-3 ${
                    isActive(link.path)
                      ? 'text-pink-600 font-bold '
                      : 'text-slate-600 font-semibold '
                  } group`}
                  aria-current={isActive(link.path) ? 'page' : undefined}
                >
                  {link.name}
                  {/* Enhanced animated underline */}
                  <span
                    className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 transition-all duration-300 ${
                      isActive(link.path) ? 'w-3/4' : 'group-hover:w-3/4'
                    }`}
                  ></span>
                </button>
              ))}
            </nav>

            {/* Enhanced Registration Button for Desktop */}
            <div className="hidden lg:flex items-center gap-x-4  ">
              <button
                onClick={handleRegistration}
                className="cursor-pointer bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-white px-8 py-3 rounded-lg font-bold hover:from-pink-500 hover:via-purple-600 hover:to-indigo-600 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-opacity-60 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span className="flex items-center">
                  Register Now
                  <svg
                    className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>

            {/* Mobile menu button with soft colors */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="cursor-pointer relative w-12 h-12 flex flex-col items-center justify-center focus:outline-none group rounded-xl hover:bg-pink-50 transition-colors duration-300"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                <span
                  className={`block absolute w-6 h-0.5 bg-slate-500 transform transition duration-500 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-0 group-hover:bg-pink-500' : '-translate-y-2 group-hover:bg-pink-500'}`}
                />
                <span
                  className={`block absolute w-6 h-0.5 bg-slate-500 transform transition duration-500 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100 group-hover:bg-pink-500'}`}
                />
                <span
                  className={`block absolute w-6 h-0.5 bg-slate-500 transform transition duration-500 ease-in-out ${isMenuOpen ? '-rotate-45 translate-y-0 group-hover:bg-pink-500' : 'translate-y-2 group-hover:bg-pink-500'}`}
                />
              </button>
            </div>
          </div>

          {/* Enhanced Mobile menu with beautiful styling */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <nav className="mt-6 rounded-3xl p-6 bg-gradient-to-br from-white/95 via-pink-50/80 to-purple-50/80 border border-pink-200/60 shadow-xl backdrop-blur-sm">
              <div className="space-y-3">
                {navLinks.map((link, index) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavigate(link.path)}
                    className={`cursor-pointer block w-full text-left py-4 px-6 rounded-2xl transition-all duration-300 focus:outline-none ${
                      isActive(link.path)
                        ? 'text-pink-600 font-bold bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200 shadow-md'
                        : 'text-slate-600 hover:text-pink-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 font-medium'
                    }`}
                    style={{
                      animation: isMenuOpen
                        ? `fadeInUp 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) ${index * 70}ms both`
                        : 'none',
                    }}
                    aria-current={isActive(link.path) ? 'page' : undefined}
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex items-center">
                        {link.icon && (
                          <span
                            className={`mr-3 text-lg ${
                              isActive(link.path)
                                ? 'text-pink-500'
                                : 'text-slate-400'
                            }`}
                          >
                            {link.icon}
                          </span>
                        )}
                        {link.name}
                      </span>
                      {isActive(link.path) && (
                        <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse ring-2 ring-pink-200/50"></span>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Enhanced Mobile Registration Button */}
              <button
                onClick={handleRegistration}
                className="cursor-pointer w-full mt-8 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-white py-4 px-6 rounded-2xl font-bold hover:from-pink-500 hover:via-purple-600 hover:to-indigo-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-pink-200 shadow-lg hover:shadow-xl active:scale-95 transform hover:-translate-y-0.5"
                style={{
                  animation: isMenuOpen
                    ? `fadeInUp 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) ${navLinks.length * 70}ms both`
                    : 'none',
                }}
              >
                <span className="flex items-center justify-center">
                  Register Now
                  <span className="ml-2 inline-block animate-bounce">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      ></path>
                    </svg>
                  </span>
                </span>
              </button>
              <button
                className="cursor-pointer bg-gradient-to-r cursor-pointer from-orange-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 w-fit shadow-md"
                onClick={() => alert('Broucher will be available soon')}
              >
                Download Brochure
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile menu backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
};
