import React, { useState, useEffect, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';


// Floating particle component for light theme
const FloatingParticle = ({ style }) => (
  <div className="absolute rounded-full opacity-60" style={style} />
);

export const HomePage = () => {
  const [particles, setParticles] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef(null);

  // Effect to generate floating particles
  useEffect(() => {
    const generateParticles = () => {
      const container = containerRef.current;
      if (!container) return;

      const numParticles = window.innerWidth > 768 ? 120 : 60;
      const newParticles = [];
      const { clientWidth: containerWidth, clientHeight: containerHeight } =
        container;

      const pastelColors = [
        'rgba(255, 182, 193, 0.4)', // Light pink
        'rgba(173, 216, 230, 0.4)', // Light blue
        'rgba(221, 160, 221, 0.4)', // Plum
        'rgba(255, 218, 185, 0.4)', // Peach
        'rgba(152, 251, 152, 0.4)', // Pale green
        'rgba(255, 255, 224, 0.4)', // Light yellow
      ];

      for (let i = 0; i < numParticles; i++) {
        const size = Math.random() * 4 + 2;
        const x = Math.random() * containerWidth;
        const y = Math.random() * containerHeight;
        const animationDuration = Math.random() * 6 + 4; // 4s to 10s
        const animationDelay = Math.random() * 3;
        const color =
          pastelColors[Math.floor(Math.random() * pastelColors.length)];

        newParticles.push({
          id: i,
          style: {
            width: `${size}px`,
            height: `${size}px`,
            left: `${x}px`,
            top: `${y}px`,
            backgroundColor: color,
            animation: `float ${animationDuration}s infinite ease-in-out ${animationDelay}s`,
          },
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
    window.addEventListener('resize', generateParticles);

    return () => {
      window.removeEventListener('resize', generateParticles);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Activities', href: '#activities' },
  ];

  return (
    <main>
      <div
        ref={containerRef}
        className="relative min-h-screen w-full text-gray-800 font-sans overflow-hidden"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50" />

        {/* Floating particles */}
        {particles.map((particle) => (
          <FloatingParticle key={particle.id} style={particle.style} />
        ))}

        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Sticky Header Navigation with Glassmorphism */}


          {/* Hero Section with Gradient Background */}
          <section className="flex-grow flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-blue-50 to-purple-100 opacity-80" />

            <div className="relative z-20 w-full max-w-6xl mx-auto px-6 py-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="text-center lg:text-left space-y-8 fade-in-up">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                    <span className="text-gradient">TECH</span>
                    <br />
                    <span className="text-gray-800">INNOVATION</span>
                    <br />
                    <span className="text-gradient">STARTS HERE</span>
                  </h1>

                  <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    <Typewriter
                      words={[
                        'Empowering the next generation of innovators through',
                        'cutting-edge technology and collaborative learning.',
                      ]}
                      loop={0} // 0 = infinite
                      cursor
                      cursorStyle="|"
                      typeSpeed={75}
                      deleteSpeed={50}
                      delaySpeed={1500}
                    />
                  </p>
                </div>

                {/* Right Content - PNG Image */}
                <div
                  className="flex justify-center lg:justify-end fade-in-up"
                  style={{ animationDelay: '0.3s' }}
                >
                  <div className="relative w-full max-w-lg h-96 md:h-[500px] p-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-purple-200 rounded-3xl blur-3xl opacity-30 animate-pulse" />
                    <div
                      className="relative z-10 w-full h-full p-4 animate-bounce-small"
                      style={{ animationDuration: '1.60s' }} // make it twice as fast
                    >
                      <img
                        src="/assets/robot.png"
                        alt="Friendly robot mascot"
                        className="w-full h-full object-contain transition-all duration-500 image-hover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Event Description Section */}
          <section id="about" className="relative z-20 py-20 px-6">
            <div className="container mx-auto max-w-4xl">
              <div
                className="glass-morphism rounded-3xl p-8 md:p-12 text-center space-y-8 fade-in-up"
                style={{ animationDelay: '0.5s' }}
              >
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-gradient">
                    KRIYA 1.0 – Igniting the Entrepreneurial Spirit
                  </h2>

                  <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-600">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-pink-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-medium">September 09-11, 2025</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-purple-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-medium">
                        BIT Campus, Sathyamangalam
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  KRIYA 1.0 offers an immersive entrepreneurial journey, guiding participants
                  from ideation to execution. It aims to instill a startup mindset, spark
                  creativity, and enhance problem-solving through real-world challenges. By
                  fostering cross-disciplinary collaboration and hands-on learning, KRIYA 1.0
                  empowers students to design innovative solutions and launch viable ventures.
                </p>

                <div className="pt-6">
                  <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-12 rounded-xl transition-all duration-300 button-glow transform hover:scale-105 shadow-lg">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* About Us Section */}
          <section id="team" className="relative z-20 py-16 px-6">
            <div className="container mx-auto max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - About Content */}
                <div className="space-y-6 slide-in-left">
                  <h3 className="text-3xl md:text-4xl font-bold text-gradient">
                    About KRIYA 1.0
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    KRIYA 1.0 is a student-driven initiative at Bannari
                    Amman Institute of Technology. We aim to inspire innovation,
                    build real-world tech skills, and foster collaboration among
                    curious minds passionate about technology and its
                    applications.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full font-medium">
                      Innovation Hub
                    </div>
                    <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
                      Tech Community
                    </div>
                    <div className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-medium">
                      Future Leaders
                    </div>
                  </div>
                </div>

                {/* Right - Stats or Additional Info */}
                <div className="grid grid-cols-2 gap-6 slide-in-right">
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="text-3xl font-bold text-pink-600">500+</div>
                    <div className="text-gray-600 font-medium">
                      Active Members
                    </div>
                  </div>
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="text-3xl font-bold text-blue-600">50+</div>
                    <div className="text-gray-600 font-medium">Tech Events</div>
                  </div>
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="text-3xl font-bold text-purple-600">
                      100+
                    </div>
                    <div className="text-gray-600 font-medium">Projects</div>
                  </div>
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="text-3xl font-bold text-green-600">5+</div>
                    <div className="text-gray-600 font-medium">
                      Years Active
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="relative z-20 py-8 px-6 border-t border-gray-200">
            <div className="container mx-auto text-center">
              <p className="text-gray-600">
                © 2025 KRIYA 1.0 Empowering Future Innovators.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
};
