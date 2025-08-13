import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import {
  Calendar,
  MapPin,
  Users,
  Award,
  ChevronDown,
  Menu,
  X,
  Clock,
  Star,
  ArrowRight,
  Phone,
  Mail,
  Instagram,
  Twitter,
  Linkedin,
} from 'lucide-react';

React.lazy(() => import('lucide-react'));

React.lazy(() => import('react-simple-typewriter'));

React.lazy(() => import('react'));





// Floating particle component
const FloatingParticle = ({ style }) => (
  <div className="absolute rounded-full opacity-40" style={style} />
);

// Animated counter component
const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  React.useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export const HomePage = () => {
  const [particles, setParticles] = React.useState([]);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrollY, setScrollY] = React.useState(0);
  const containerRef = React.useRef(null);

  // Scroll effect
  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate particles
  React.useEffect(() => {
    const generateParticles = () => {
      const container = containerRef.current;
      if (!container) return;

      const numParticles = window.innerWidth > 768 ? 100 : 50;
      const newParticles = [];
      const { clientWidth: containerWidth, clientHeight: containerHeight } =
        container;

      const colors = [
        'rgba(99, 102, 241, 0.3)', // Indigo
        'rgba(236, 72, 153, 0.3)', // Pink
        'rgba(168, 85, 247, 0.3)', // Purple
        'rgba(34, 197, 94, 0.3)', // Green
        'rgba(251, 191, 36, 0.3)', // Amber
        'rgba(59, 130, 246, 0.3)', // Blue
      ];

      for (let i = 0; i < numParticles; i++) {
        const size = Math.random() * 6 + 3;
        const x = Math.random() * containerWidth;
        const y = Math.random() * containerHeight;
        const animationDuration = Math.random() * 8 + 6;
        const animationDelay = Math.random() * 4;
        const color = colors[Math.floor(Math.random() * colors.length)];

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
    return () => window.removeEventListener('resize', generateParticles);
  }, []);

  const events = [
    {
      title: 'Innovation Workshop',
      description: 'Hands-on workshop exploring cutting-edge technologies',
      icon: '🚀',
      
    },
    {
      title: 'Tech Talks',
      description: 'Industry experts sharing insights and trends',
      icon: '💡',
      
    },
    {
      title: 'Startup Pitch',
      description: 'Students present their innovative startup ideas',
      icon: '🎯',
      
    },
    {
      title: 'Networking Session',
      description: 'Connect with peers and industry professionals',
      icon: '🤝',
      
    },
  ];

  const speakers = [
    {
      name: 'Dr. Sarah Johnson',
      title: 'AI Research Director',
      company: 'Tech Innovations Inc.',
      image:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
    },
    {
      name: 'Mark Thompson',
      title: 'Startup Founder',
      company: 'NextGen Solutions',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    },
    {
      name: 'Prof. Lisa Chen',
      title: 'Technology Evangelist',
      company: 'Future Labs',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
    >
      {/* Custom Styles */}

      {/* Floating Particles */}
      {particles.map((particle) => (
        <FloatingParticle key={particle.id} style={particle.style} />
      ))}

      {/* Navigation */}

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-16"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 via-purple-50/80 to-pink-50/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8 animate-fadeInUp">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full text-indigo-700 font-semibold text-sm mb-4">
               Kriya 2025
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight w-fit max-lg:mx-auto ">
                <div className='flex items-center whitespace-nowrap '>
                  <span className='!text-blue-900 max-sm:text-4xl'>B</span>
                  <span className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent  max-sm:text-4xl">RIDGING</span>
                </div>
                <div className='flex items-center whitespace-nowrap'>
                  <span className='!text-blue-900 max-sm:text-4xl'>I</span>
                  <span className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent max-sm:text-4xl">NNOVATION &</span>
                </div>
                <div className='flex items-center whitespace-nowrap'>
                  <span className='!text-blue-900 max-sm:text-4xl'>T</span>
                  <span className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent max-sm:text-4xl">ECHNOLOGY</span>
                </div>
              </h1>

              <div className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl">
                <Typewriter
                  words={[
                    'Empowering the next generation of innovators through cutting-edge technology',
                    "Building tomorrow's leaders with collaborative learning and innovation",
                    'Creating a future where technology meets creativity and entrepreneurship',
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={30}
                  delaySpeed={2000}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 animate-glow">
                  Register Now{' '}
                  <ArrowRight className="inline-block ml-2" size={20} />
                </button>
                <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-600 hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>

              {/* Event Details */}
              <div className="flex flex-col sm:flex-row gap-6 text-slate-600 pt-8">
                <div className="flex items-center gap-2 min-w-[250px]">
                  <Calendar className="text-indigo-600" size={20} />
                  <span className="font-medium">September 09-11, 2025</span>
                </div>
                <div className="flex items-center gap-2 min-w-[250px]">
                  <MapPin className="text-purple-600" size={20} />
                  <span className="font-medium">
                    BIT Campus, Sathyamangalam
                  </span>
                </div>
                <div className="flex items-center gap-2 min-w-[250px]">
                  <Users className="text-pink-600" size={20} />
                  <span className="font-medium">500+ Participants</span>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse" />
                <div className="relative z-10 bg-white/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30">
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=500&fit=crop"
                    alt="Innovation and Technology"
                    className="w-full h-auto rounded-2xl shadow-2xl hover-lift"
                    loading='lazy'
                  />
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white p-3 rounded-full animate-bounce">
                    🚀
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">
                <AnimatedCounter end={15} suffix="+" />
              </div>
              <div className="text-slate-600 font-medium">Events</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                <AnimatedCounter end={20} suffix="+" />
              </div>
              <div className="text-slate-600 font-medium">Speakers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-pink-600 mb-2">
                <AnimatedCounter end={5} suffix="+" />
              </div>
              <div className="text-slate-600 font-medium">Workshops</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                <AnimatedCounter end={3} />
              </div>
              <div className="text-slate-600 font-medium">Days</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              About KRIYA 2025
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              An immersive entrepreneurial experience that enables participants
              to explore the innovation journey from ideation to execution.
            </p>
          </div>

          <div className="glass-morphism rounded-3xl p-8 md:p-12 mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-slideInLeft">
                <h3 className="text-3xl font-bold text-slate-800 mb-6">
                  Our Mission
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  KRIYA 2025 aims to cultivate a startup mindset, foster
                  cross-disciplinary collaboration, and encourage the launch of
                  viable student-led ventures. We focus on sparking creativity
                  through design thinking, team formation, and problem
                  discovery.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    <span className="text-slate-700">
                      Design Thinking Workshops
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-slate-700">
                      Business Model Development
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                    <span className="text-slate-700">
                      Startup Pitching Sessions
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-slate-700">
                      IPR Management Training
                    </span>
                  </div>
                </div>
              </div>
              <div className="animate-slideInRight">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-auto rounded-2xl shadow-xl hover-lift"
                  loading='lazy'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section
        id="events"
        className="relative py-20 bg-gradient-to-br from-indigo-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Event Highlights
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore our exciting lineup of workshops, talks, and networking
              opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="glass-morphism rounded-2xl p-6 hover-lift group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {event.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {event.title}
                </h3>
                <p className="text-slate-600 mb-4">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Innovate?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable journey of innovation, learning, and
            collaboration. Register now and be part of the future!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105">
              Register Now{' '}
              <ArrowRight className="inline-block ml-2" size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative py-20 bg-gradient-to-br from-indigo-100 via-white to-pink-100 overflow-hidden"
      >
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Get In Touch
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Have questions? We’re here to make your{' '}
              <span className="font-semibold text-indigo-600">KRIYA 2025</span>{' '}
              experience unforgettable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Info Card */}
            <div className="glass-morphism rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform duration-300 backdrop-blur-md border border-white/20">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Contact Information
              </h3>
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <Phone className="text-indigo-600" size={22} />
                  <span className="text-slate-700 text-lg">
                    +91 98765 43210
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-purple-600" size={22} />
                  <span className="text-slate-700 text-lg">
                    info@kriya2025.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-pink-600" size={22} />
                  <span className="text-slate-700 text-lg">
                    BIT Campus, Sathyamangalam, Tamil Nadu
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="glass-morphism rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform duration-300 backdrop-blur-md border border-white/20 flex flex-col justify-center items-center">
              <h4 className="text-xl font-semibold text-slate-800 mb-4">
                Follow Us
              </h4>
              <p className="text-slate-600 mb-6 text-center">
                Stay updated with event announcements, schedules, and more.
              </p>
              <div className="flex gap-5">
                <a
                  href="#"
                  className="bg-gradient-to-tr from-pink-500 to-red-500 text-white p-4 rounded-full shadow-lg hover:shadow-pink-300 transition-all duration-300"
                >
                  <Instagram size={22} />
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-tr from-blue-400 to-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-blue-300 transition-all duration-300"
                >
                  <Twitter size={22} />
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-tr from-blue-700 to-indigo-900 text-white p-4 rounded-full shadow-lg hover:shadow-indigo-300 transition-all duration-300"
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-6 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="border-t border-slate-700 pt-6 text-center"> */}
          <p className="text-sm md:text-base text-slate-400 pt-6 tracking-wide text-center">
            © 2025 <span className="font-semibold text-white">KRIYA</span> -
            All rights reserved. |
            <span className="text-indigo-400 font-medium">
              {' '}
              Empowering Future Innovators
            </span>
          </p>
          {/* </div> */}
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {scrollY > 500 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 z-50"
        >
          <ChevronDown className="rotate-180" size={20} />
        </button>
      )}
    </div>
  );
};