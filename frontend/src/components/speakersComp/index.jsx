import React from 'react';
import {
  Play,
  Linkedin,
  Twitter,
  Globe,
  MapPin,
  Users,
  Building2,
  ExternalLink,
  Award,
  TrendingUp,
  UserCheck,
  Facebook,
} from 'lucide-react';
import { useNavigate } from 'react-router';
import './styles.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiper.css';

const EntrepreneurSpeakersPage = ({ speakers }) => {
  const [selectedFilter, setSelectedFilter] = React.useState('All');
  const [selectedSpeaker, setSelectedSpeaker] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = (speaker) => {
    setSelectedSpeaker(speaker);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSpeaker(null);
  };

  const regularSpeakers = speakers;

  const industries = ['All', ...new Set(speakers.map((s) => s.industry))];

  const filteredSpeakers =
    selectedFilter === 'All'
      ? regularSpeakers
      : regularSpeakers.filter((s) => s.industry === selectedFilter);

  const videos = [
    {
      id: 1,
      title: 'Q&A Session with Our CEO Arun Prakash | GUVI',
      thumbnail:
        'https://i.ytimg.com/vi/HTPyOJzFSHs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAF6bM1A-0O_o_2tgS-1RrVMBXuNQ',
      link: 'https://www.youtube.com/watch?v=HTPyOJzFSHs',
    },
    {
      id: 2,
      title:
        "Why I Built a Brand for Karupatti!? - The 'Palm Era' Startup Story",
      thumbnail:
        'https://i.ytimg.com/vi/XK5bJU01CVc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC0fk0Z4tQizuRblR2OGa2w8eJk_A',
      link: 'https://www.youtube.com/watch?v=XK5bJU01CVc',
    },
    {
      id: 3,
      title: 'Success Story of CUPTIME By Mr.Prabhkaran Venugopal',
      thumbnail:
        'https://res.cloudinary.com/doko35o8e/image/upload/v1755080090/Screenshot_2025-08-13_154301_ym2fjo.png',
      link: 'https://www.youtube.com/watch?v=C17As3izvN0',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Speaker Detail Modal */}
      {isModalOpen && selectedSpeaker && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          {/* Modal Content - Centered with proper overflow handling */}
          <div
            className={`relative w-full max-w-4xl max-h-[90vh] bg-white/95 backdrop-blur-xl rounded-xl border border-gray-200 shadow-2xl transform transition-all duration-300 overflow-hidden ${
              isModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
          >
            {/* Header - Fixed */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 backdrop-blur-xl border-b border-gray-200 p-8 flex-shrink-0">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={selectedSpeaker.avatarUrl}
                    alt={selectedSpeaker.name}
                    className="w-24 h-24 max-sm:size-16 md:w-36 md:h-36 rounded-full object-cover ring-4 ring-purple-200"
                  />
                  <div>
                    <h2 className="max-sm:text-xl text-3xl font-bold text-gray-800 mb-1">
                      {selectedSpeaker.name}
                    </h2>
                    <p className="max-sm:text-base text-xl text-purple-600 font-semibold">
                      {selectedSpeaker.title}
                    </p>
                    <p className="max-sm:text-sm text-lg text-gray-700 font-semibold">
                      {selectedSpeaker.organization}
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="self-start max-xs:hidden block text-gray-500 hover:text-gray-700 transition-colors p-3 rounded-full hover:bg-gray-100 flex-shrink-0 w-fit"
                >
                  <svg
                    className="w-6 h-6 hover:cursor-pointer"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex items-center justify-between max-xs:gap-3 flex-wrap">
                <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full border border-purple-200">
                  {selectedSpeaker.industry}
                </span>
                <div className="flex gap-2 md:gap-4">
                  {selectedSpeaker.links.linkedin && (
                    <a
                      href={selectedSpeaker.links.linkedin}
                      target="_blank"
                      className="p-3 bg-blue-50 hover:bg-blue-100 rounded-full border border-blue-200 hover:border-blue-300 transition-all duration-300 group"
                    >
                      <Linkedin
                        size={20}
                        className="text-blue-600 group-hover:scale-110 transition-transform"
                      />
                    </a>
                  )}
                  {selectedSpeaker.links.twitter && (
                    <a
                      href={selectedSpeaker.links.twitter}
                      target="_blank"
                      className="p-3 bg-sky-50 hover:bg-sky-100 rounded-full border border-sky-200 hover:border-sky-300 transition-all duration-300 group"
                    >
                      <Twitter
                        size={20}
                        className="text-sky-600 group-hover:scale-110 transition-transform"
                      />
                    </a>
                  )}
                  {selectedSpeaker.links.facebook && (
                    <a
                      href={selectedSpeaker.links.facebook}
                      target="_blank"
                      className="p-3 bg-sky-50 hover:bg-sky-200 rounded-full border border-sky-200 hover:border-sky-400 transition-all duration-300 group"
                    >
                      <Facebook
                        size={20}
                        className="text-sky-700 group-hover:scale-110 transition-transform"
                      />
                    </a>
                  )}
                  {(selectedSpeaker.links.wikipedia ||
                    selectedSpeaker.links.news) && (
                    <a
                      href={
                        selectedSpeaker.links.wikipedia ||
                        selectedSpeaker.links.news
                      }
                      target="_blank"
                      className="p-3 bg-green-50 hover:bg-green-100 rounded-full border border-green-200 hover:border-green-300 transition-all duration-300 group"
                    >
                      <ExternalLink
                        size={20}
                        className="text-green-600 group-hover:scale-110 transition-transform"
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Scrollable Content */}
            <div
              className="overflow-y-auto flex-1 custom-scrollbar"
              style={{ maxHeight: 'calc(90vh - 200px)' }}
            >
              <div className="p-8 md:pb-20">
                {/* About Section */}
                <div className="mb-8">
                  <div className="flex items-center mb-6 max-xs:mb-3">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                      <Users className="text-white size-5 max-xs:size-4" />
                    </div>
                    <h3 className="text-2xl max-xs:text-xl font-bold text-gray-800 truncate">
                      {`About ${selectedSpeaker.name}`}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg max-xs:text-base pl-0 md:pl-16">
                    {selectedSpeaker.about}
                  </p>
                </div>

                {/* Quote Section (if exists) */}
                {selectedSpeaker.quote && (
                  <div className="mb-8">
                    <blockquote className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 md:p-8 rounded-xl border border-purple-200 relative">
                      <div className="absolute top-4 left-4 text-purple-300 text-6xl max-xs:text-5xl font-serif">
                        "
                      </div>
                      <p className="text-gray-700 text-xl max-xs:text-lg italic leading-relaxed mb-4 pl-12">
                        {selectedSpeaker.quote}
                      </p>
                      <cite className="text-purple-600 font-semibold text-lg max-xs:text-sm pl-12">
                        - {selectedSpeaker.name}
                      </cite>
                    </blockquote>
                  </div>
                )}

                {/* Expertise */}
                <div className="mb-8">
                  <div className="flex items-center mb-4 md:mb-2">
                    <div className="w-12 h-12 max-xs:size-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                      <TrendingUp className="text-white size-5 max-xs:size-4" />
                    </div>
                    <h3 className="text-2xl max-sm:text-xl font-bold text-gray-800">
                      Expertise
                    </h3>
                  </div>
                  <div className="space-y-3 pl-0 md:pl-16 max-xs:pl-12">
                    {selectedSpeaker.expertise.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center p-3 bg-gray-50 rounded-lg border-none transition-colors"
                      >
                        <div className="w-3 h-3 max-sm:size-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-4"></div>
                        <span className="text-gray-700 font-medium max-xs:text-xs">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-8">
                  <div className="flex items-center mb-4 md:mb-2">
                    <div className="w-12 h-12 max-xs:size-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                      <Award className="text-white size-5 max-xs:size-4" />
                    </div>
                    <h3 className="text-2xl max-sm:text-xl font-bold text-gray-800">
                      Achievements
                    </h3>
                  </div>
                  <div className="space-y-4 pl-0 md:pl-16 max-xs:pl-12">
                    {selectedSpeaker.achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="flex items-start p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-purple-300 transition-colors"
                      >
                        <div className="w-5 h-5 max-xs:size-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <span className="text-white text-[12px] max-xs:text-[10px] font-bold">
                            {index + 1}
                          </span>
                        </div>
                        <p className="text-gray-700 max-xs:text-xs leading-relaxed">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/40 to-pink-100/40"></div>
        <div className="relative container mx-auto px-6 py-2 mt-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Meet the Visionaries
            </h1>
            <p className="text-xl text-purple-700 mb-4 font-semibold">
              Innovators, Dreamers, and Game Changers
            </p>
            <p className="text-md text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Join us as we bring together the most influential entrepreneurs,
              tech leaders, and innovators who are shaping the future of
              business and technology.
            </p>
          </div>
        </div>
        <div className="container mx-auto py-10 mb-4 md:mb-12 h-85 md:h-95">
          <Swiper
            spaceBetween={20}
            loop={true}
            modules={[Autoplay, Navigation]}
            navigation={true}
            className="mySwiper !rounded-none"
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            slidesPerView="auto"
            breakpoints={{
              320: { slidesPerView: 1 },
              770: { slidesPerView: 2.2 },
            }}
          >
            {regularSpeakers.map((speaker) => (
              <SwiperSlide
                key={speaker.name}
                className="relative md:!transform md:!overflow-x-hidden md:!skew-x-[-15deg] !rounded-none"
              >
                {/* The outer container is the parallelogram and is skewed */}
                <div className="h-full  !rounded-none">
                  {/* The inner container is counter-skewed to keep content straight */}
                  <div className="flex flex-col gap-4 bg-white overflow-hidden border-none transition-all duration-300 h-full shadow-md hover:shadow-lg  !rounded-none">
                    <div
                      className="relative w-full md:w-[120%] md:-ml-[10%] h-84 bg-contain bg-auto no-repeat md:transform md:skew-x-[15deg] pointer-events-none"
                      style={{
                        backgroundImage: `url(${speaker?.carouselUrl})`,
                      }}
                    >
                      {/* Gradient overlay for better text contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

                      {/* Text content at the bottom */}
                      <div className="absolute bottom-0 w-full p-4 text-white text-start md:ml-15">
                        <h3 className="text-xl font-semibold mb-1 group-hover:text-purple-300 transition-colors">
                          {speaker.name}
                        </h3>
                        <p className="text-sm font-semibold text-purple-300">
                          {speaker.title}
                        </p>
                        <p className="text-sm font-medium">
                          {speaker.organization}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-2">
                          {speaker.expertise.slice(0, 2).map((skill, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-white/30 text-white rounded text-xs border border-white/40 backdrop-blur-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Speaker Cards Grid */}

      {/* Industry Filter */}
      <div className="container mx-auto px-6 mt-12">
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => setSelectedFilter(industry)}
              className={`hover:cursor-pointer px-3 py-1 rounded-full transition-all duration-300 truncate ${
                selectedFilter === industry
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300 shadow-sm'
              }`}
            >
              {industry}
            </button>
          ))}
        </div>
      </div>

      {/* Keynote Speakers */}
      {filteredSpeakers.length === 0 ? (
        <NoSpeakerFound
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      ) : (
        <div className="container mx-auto px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {filteredSpeakers.map((speaker) => (
              <div key={speaker.name} className="group relative">
                <div className="relative h-full bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-purple-300 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative p-8 h-full">
                    <div className="flex flex-col md:flex-row items-start gap-6 md:space-x-6 h-full">
                      <div className="relative">
                        <img
                          src={speaker.avatarUrl}
                          alt={speaker.name}
                          className="w-24 h-24 rounded-full object-cover ring-4 ring-purple-200 group-hover:ring-purple-300 transition-all duration-300"
                        />
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-1">
                          <Award size={16} className="text-white" />
                        </div>
                      </div>

                      <div className="flex flex-col flex-1 min-w-0 h-full">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-800 mb-1 group-hover:text-purple-600 transition-colors">
                            {speaker.name}
                          </h3>
                          <p className="text-lg text-purple-600 mb-1 font-semibold">
                            {speaker.title}
                          </p>
                          <p className="text-gray-700 mb-4 font-semibold">
                            {speaker.organization}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {speaker.expertise
                              .slice(0, 2)
                              .map((skill, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1 max-xs:line-clamp-1 bg-purple-100 text-purple-700 rounded-full text-sm border border-purple-200"
                                >
                                  {skill}
                                </span>
                              ))}
                          </div>

                          {speaker.quote && (
                            <blockquote className="italic text-gray-600 border-l-4 border-purple-400 pl-4 mb-4 group-hover:border-purple-500 transition-colors">
                              "{speaker.quote}"
                            </blockquote>
                          )}

                          <div className="flex space-x-3">
                            {speaker.links.linkedin && (
                              <a
                                href={speaker.links.linkedin}
                                target="_blank"
                                className="text-gray-500 hover:text-blue-600 transition-colors"
                              >
                                <Linkedin size={20} />
                              </a>
                            )}
                            {speaker.links.facebook && (
                              <a
                                href={speaker.links.facebook}
                                target="_blank"
                                className="text-gray-500 hover:text-blue-600 transition-colors"
                              >
                                <Facebook size={20} />
                              </a>
                            )}
                            {speaker.links.twitter && (
                              <a
                                href={speaker.links.twitter}
                                target="_blank"
                                className="text-gray-500 hover:text-blue-400 transition-colors"
                              >
                                <Twitter size={20} />
                              </a>
                            )}
                            {speaker.links.wikipedia && (
                              <a
                                href={speaker.links.wikipedia}
                                target="_blank"
                                className="text-gray-500 hover:text-green-600 transition-colors"
                              >
                                <Globe size={20} />
                              </a>
                            )}
                          </div>
                        </div>
                        <div className="mt-auto text-right">
                          <button
                            className="text-purple-600 hover:text-purple-500 text-sm font-medium transition-colors hover:cursor-pointer pointer-events-auto"
                            onClick={() => openModal(speaker)}
                          >
                            More Details →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 h-fit w-fit bg-purple-400 group-hover:bg-purple-500 text-[14px] font-medium z-10 px-3 py-1">
                    {/* replace it with -> speaker.day */}
                    Day 1
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Video Section */}
      <VideoSection videos={videos} />

      {/* Networking CTA */}
      <NetworkingCTA />
    </div>
  );
};

export { EntrepreneurSpeakersPage };

export const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/40 to-pink-100/40"></div>
      <div className="relative container mx-auto px-6 py-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Meet the Visionaries
          </h1>
          <p className="text-2xl text-purple-700 mb-4 font-semibold">
            Innovators, Dreamers, and Game Changers
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join us as we bring together the most influential entrepreneurs,
            tech leaders, and innovators who are shaping the future of business
            and technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export const NoSpeakerFound = ({ selectedFilter, setSelectedFilter }) => {
  return (
    <div className="text-center pb-12">
      <div className="max-w-md mx-auto">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Users size={40} className="text-gray-400" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          No speakers found
        </h3>
        <p className="text-gray-600 text-lg mb-6">
          We don't have any featured speakers in{' '}
          <span className="font-semibold text-purple-600">
            "{selectedFilter}"
          </span>{' '}
          at the moment.
        </p>
        <button
          onClick={() => setSelectedFilter('All')}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          View All Speakers
        </button>
      </div>
    </div>
  );
};

export const NetworkingCTA = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-y border-purple-200">
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Ready to Connect?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Don't miss the opportunity to network with these incredible
          entrepreneurs and industry leaders.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 hover:cursor-pointer transition-all duration-300"
            onClick={() => navigate('/events')}
          >
            View Event Schedule
          </button>
        </div>
      </div>
    </div>
  );
};

export const VideoSection = ({ videos }) => {
  return (
    <div className="bg-gray-50/80 backdrop-blur-sm border-y border-gray-200 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Meet Them in Action
        </h2>
        <div className="flex justify-center space-x-6 overflow-x-auto pb-4">
          {videos.map((video) => (
            <div
              key={video.id}
              className="flex-shrink-0 group cursor-pointer w-72"
            >
              <a href={video.link} target="_blank">
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-72 h-48 object-cover rounded-lg border-2 border-transparent group-hover:border-purple-400 transition-all duration-300 shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 rounded-lg flex items-center justify-center">
                    <Play
                      size={48}
                      className="text-white group-hover:text-purple-200 transition-colors"
                    />
                  </div>
                </div>
              </a>
              <p className="text-gray-800 mt-3 text-center group-hover:text-purple-600 transition-colors font-medium">
                {video.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
