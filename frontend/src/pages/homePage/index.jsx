import React, { useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import {
  Calendar,
  MapPin,
  Users,
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
  User,
} from 'lucide-react';
import { useNavigate } from 'react-router';

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
  const [scrollY, setScrollY] = React.useState(0);
  const containerRef = React.useRef(null);
  const router = useNavigate();

  const useScroll = useRef();

  const handleScroll = () => {
    useScroll.current.scrollIntoView({ behavior: 'smooth' });
  };

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

  return (
    <div
      ref={containerRef}
      className="relative  w-full overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
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
        className="relative min-h-screen flex items-center justify-center pt-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 via-purple-50/80 to-pink-50/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-sm:mt-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8 animate-fadeInUp">
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight w-fit max-lg:mx-auto ">
                <div className="flex items-center whitespace-nowrap ">
                  <span className="!text-blue-900 max-sm:text-4xl">B</span>
                  <span className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent  max-sm:text-4xl">
                    RIDGING
                  </span>
                </div>
                <div className="flex items-center whitespace-nowrap">
                  <span className="!text-blue-900 max-sm:text-4xl">I</span>
                  <span className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent max-sm:text-4xl">
                    NNOVATION &
                  </span>
                </div>
                <div className="flex items-center whitespace-nowrap">
                  <span className="!text-blue-900 max-sm:text-4xl">T</span>
                  <span className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent max-sm:text-4xl">
                    ECHNOLOGY
                  </span>
                </div>
              </h1>

              <div className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl h-[78px]">
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
                <button
                  onClick={() => router('/combo')}
                  className="cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 animate-glow"
                >
                  Register Now{' '}
                  <ArrowRight className="inline-block ml-2" size={20} />
                </button>
                <button
                  onClick={handleScroll}
                  className="cursor-pointer border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-600 hover:text-white transition-all duration-300"
                >
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
                {/* <div className="flex items-center gap-2 min-w-[250px]">
                  <Users className="text-pink-600" size={20} />
                  <span className="font-medium">500+ Participants</span>
                </div> */}
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="flex items-start h-full lg:justify-end">
              <div className="relative w-full max-w-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse" />
                <div className="relative z-10 bg-white/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30">
                  <img
                    src="https://res.cloudinary.com/dsz2br3qg/image/upload/v1755106864/kriya_xlaqej.jpg"
                    alt="Innovation and Technology"
                    className="w-full h-auto rounded-2xl shadow-2xl hover-lift bg-white"
                    loading="lazy"
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">
                <AnimatedCounter end={30} suffix="+" />
              </div>
              <div className="text-slate-600 font-medium">Events</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                <AnimatedCounter end={30} suffix="+" />
              </div>
              <div className="text-slate-600 font-medium">Speakers</div>
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
      <section id="about" className="relative py-20" ref={useScroll}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              About KRIYA 1.0
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Kriya 1.0 is an immersive entrepreneurial experience designed to
              inspire and empower future innovators. The event takes
              participants on a dynamic journey from ideation to execution,
              blending creativity, strategy, and real-world problem-solving.
              Through engaging workshops, interactive sessions, and networking
              opportunities, Kriya 1.0 provides a platform to transform bold
              ideas into impactful ventures while fostering collaboration,
              innovation, and entrepreneurial excellence.
            </p>
          </div>

          <div className="glass-morphism rounded-3xl p-8 md:p-12 mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-slideInLeft">
                <h3 className="text-3xl font-bold text-slate-800 mb-6">
                  Our Mission
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  KRIYA 1.0 aims to cultivate a startup mindset, foster
                  cross-disciplinary collaboration, and encourage the launch of
                  viable student-led ventures. By emphasizing design thinking,
                  team formation, and problem discovery, the event inspires
                  students to find innovative solutions to real-world challenges
                  while transforming ideas into impactful opportunities.
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
                  loading="lazy"
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
            <button
              onClick={() => router('/combo')}
              className="cursor-pointer bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105"
            >
              Register Now{' '}
              <ArrowRight className="inline-block ml-2" size={20} />
            </button>
            <a
              href="https://drive.google.com/uc?export=download&id=1WSCwZFmU-CYQJM7_uYrEbtlr3YLcyQnd"
              className="cursor-pointer border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Download Brochure
            </a>
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
              <span className="font-semibold text-indigo-600">KRIYA 1.0</span>{' '}
              experience unforgettable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 grid-col-1 gap-10">
            {/* Contact Info Card */}
            <div className="glass-morphism rounded-2xl p-8 shadow-xl lg:hover:scale-105 lg:transition-transform lg:duration-300 backdrop-blur-md border border-white/20">
              <h3 className="text-2xl max-sm:text-xl font-bold text-slate-800 mb-6 w-fit">
                Contact Information
              </h3>
              <div className="flex flex-col gap-y-3">
                <div className="flex items-center gap-3 w-fit">
                  <User className="text-indigo-600" size={22} />
                  <p className="text-slate-700 text-lg sm:text-base">
                    Surya Raj S
                  </p>
                </div>
                <div className="flex items-center gap-3 w-fit">
                  <Phone className="text-indigo-600" size={22} />
                  <a
                    href="tel:+918072137522"
                    className="text-slate-700 text-lg sm:text-base hover:text-blue-600"
                  >
                    +91 80721 37522
                  </a>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <div className=" items-center w-full justify-center max-xs:flex hidden">
                    <Mail className="text-purple-600 " size={22} />
                  </div>
                  <Mail
                    className="text-purple-600 max-xs:hidden block"
                    size={22}
                  />
                  <span className="text-slate-700 text-lg sm:text-base break-all">
                    startuphub@bitsathy.ac.in
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-purple-600" size={24} />
                  <span className="text-slate-600 text-lg sm:text-base leading-relaxed">
                    Bannari Amman Institute of Technology, Sathyamangalam, Tamil
                    Nadu
                  </span>
                </div>
              </div>
            </div>
            <div className="glass-morphism rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform duration-300 backdrop-blur-md border border-white/20 flex flex-col justify-center items-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.7629352440936!2d77.27452747513593!3d11.497017845488983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9215d6d1b28f9%3A0xf48946a7dfcfeb1a!2sBannari%20Amman%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1755107737262!5m2!1sen!2sin"
                width=""
                height=""
                style={{ border: 0, height: '100%', width: '100%' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bannari Amman Institute of Technology Map"
              />
            </div>
            {/* In-Associated With Card */}
            <div className="glass-morphism md:col-span-2 rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform duration-300 backdrop-blur-md border border-white/20">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                In-Associated With
              </h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 flex-wrap">
                {/* StartupTN Logo */}
                <div className="flex flex-col items-center">
                  <img
                    src="https://images.indianexpress.com/2023/09/Wma5uL7U_400x400.jpg"
                    alt="StartupTN"
                    className="h-16 object-contain"
                  />
                  <span className="text-slate-700 mt-3 font-medium">
                    StartupTN
                  </span>
                </div>

                {/** ISBA Logo */}
                <div className="flex flex-col items-center">
                  <img
                    src="https://res.cloudinary.com/dsz2br3qg/image/upload/v1755240080/isba_t4ehjo.png"
                    alt="ISBA"
                    className="h-16 object-contain"
                  />
                  <span className="text-slate-700 mt-3 font-medium">ISBA</span>
                </div>

                {/** IIC Logo */}
                <div className="flex flex-col items-center">
                  <img
                    src="https://res.cloudinary.com/dsz2br3qg/image/upload/v1755577029/iic_pl9hpw.png"
                    alt="IIC"
                    className="h-16 scale-200"
                  />
                  <span className="text-slate-700 mt-3 font-medium">
                    Institution's Innovation Council
                  </span>
                </div>

                {/** DNA Logo */}
                <div className="flex flex-col items-center">
                  <img
                    src="https://res.cloudinary.com/dsz2br3qg/image/upload/v1755577737/dna_ongpwu.png"
                    alt="DNA"
                    className="h-16 scale-125"
                  />
                  <span className="text-slate-700 mt-3 font-medium">
                    Don't Build Alone
                  </span>
                </div>

                {/** Code Circle Logo */}
                <div className="flex flex-col items-center">
                  <img
                    src="https://codecirclebitsathy.netlify.app/images/codecirclelogo.png"
                    alt="Code Circle"
                    className="h-16 scale-125 rounded-full"
                  />
                  <span className="text-slate-700 mt-3 font-medium">
                    Code Circle
                  </span>
                </div>
              </div>
            </div>
            {/* Media Partner Card */}
            <div className="glass-morphism rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform duration-300 backdrop-blur-md border border-white/20">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Media Partner
              </h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 flex-wrap">
                {/* Times of India Logo */}
                <div className="flex flex-col items-center">
                  <img
                    src="https://www.pngitem.com/pimgs/m/334-3344553_times-of-india-logo-png-transparent-png.png"
                    alt="Times of India"
                    className="h-16 object-contain"
                  />
                  <span className="text-slate-700 mt-2 font-medium">
                    Times of India
                  </span>
                </div>
              </div>
            </div>
            {/* Social Links Card */}
            <div className="glass-morphism rounded-2xl p-8 shadow-xl  hover:scale-105 transition-transform duration-300 backdrop-blur-md border border-white/20 flex flex-col justify-center items-center">
              <h4 className="text-xl font-semibold text-slate-800 mb-4">
                Follow Us
              </h4>
              <p className="text-slate-600 mb-6 text-center">
                Stay updated with event announcements, schedules, and more.
              </p>
              <div className="flex gap-5 flex-wrap">
                <a
                  href="https://www.instagram.com/lifeatbit?igsh=MW8wdjV1ZGloejV1MQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-tr from-pink-500 to-red-500 text-white p-4 rounded-full shadow-lg hover:shadow-pink-300 transition-all duration-300"
                >
                  <Instagram size={24} />
                </a>
                {/* <a
                  href="#"
                  className="bg-gradient-to-tr from-blue-400 to-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-blue-300 transition-all duration-300"
                >
                  <Twitter size={24} />
                </a> */}
                <a
                  href="https://www.linkedin.com/school/bitsathyindia/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-tr from-blue-700 to-indigo-900 text-white p-4 rounded-full shadow-lg hover:shadow-indigo-300 transition-all duration-300"
                >
                  <Linkedin size={24} />
                </a>
                <button
                  onClick={() => {
                    window.open(
                      'https://codecirclebitsathy.netlify.app/',
                      '_blank'
                    );
                  }}
                  className="cursor-pointer"
                >
                  <img
                    src="https://codecirclebitsathy.netlify.app/images/codecirclelogo.png"
                    alt=""
                    className="size-14 rounded-full"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {scrollY > 500 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer fixed bottom-8 right-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 z-50"
        >
          <ChevronDown className="rotate-180" size={20} />
        </button>
      )}
    </div>
  );
};
