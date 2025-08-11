import React, { useState } from 'react';
import { Play, Linkedin, Twitter, Globe, MapPin, Users, Building2, ExternalLink, Award, TrendingUp, UserCheck } from 'lucide-react';
import './styles.css' ;
// import { useNavigate } from 'react-router-dom';


const EntrepreneurEventPage = ({speakers}) => {

  // const navigate = useNavigate();
  
  const [currentVideo, setCurrentVideo] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (speaker) => {
    setSelectedSpeaker(speaker);
    setIsModalOpen(true);
    setHoveredCard(null); // Hide hover popup when modal opens
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSpeaker(null);
  };

  const keynote = speakers.filter(s => s.isKeynote);
  const regularSpeakers = speakers;
  
  const industries = ['All', ...new Set(speakers.map(s => s.industry))];
  
  const filteredSpeakers = selectedFilter === 'All' 
    ? regularSpeakers 
    : regularSpeakers.filter(s => s.industry === selectedFilter);

  const videos = [
    { id: 1, title: "Kevin Scott on AI and the Future", thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=200&fit=crop" },
    { id: 2, title: "Padmasree Warrior on Innovation", thumbnail: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=200&fit=crop" },
    { id: 3, title: "Sandy Carter on Digital Transformation", thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop" }
  ];

  const panels = [
    {
      title: "The Future of AI & Technology",
      speakers: ["Kevin Scott", "Li Fan"],
      time: "10:00 AM - 11:00 AM"
    },
    {
      title: "Women Leading Tech Innovation",
      speakers: ["Padmasree Warrior", "Sandy Carter", "Samina Virk"],
      time: "2:00 PM - 3:00 PM"
    }
  ];

  const stats = {
    totalJobs: "2.3M",
    countries: 12,
    industries: 18,
    companies: 25
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Speaker Detail Modal */}
      {isModalOpen && selectedSpeaker && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content - Centered with proper overflow handling */}
          <div className={`relative w-full max-w-4xl max-h-[90vh] bg-white/95 backdrop-blur-xl rounded-2xl border border-gray-200 shadow-2xl transform transition-all duration-300 overflow-hidden ${
            isModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}>
            {/* Header - Fixed */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 backdrop-blur-xl border-b border-gray-200 p-8 flex-shrink-0">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <img 
                    src={selectedSpeaker.avatarUrl} 
                    alt={selectedSpeaker.name}
                    className="w-20 h-20 rounded-full object-cover ring-4 ring-purple-200"
                  />
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-1">{selectedSpeaker.name}</h2>
                    <p className="text-xl text-purple-600 font-semibold">{selectedSpeaker.title}</p>
                    <p className="text-lg text-gray-700 font-semibold">{selectedSpeaker.organization}</p>
                  </div>
                </div>
                <button 
                  onClick={closeModal}
                  className="self-start text-gray-500 hover:text-gray-700 transition-colors p-3 rounded-full hover:bg-gray-100 flex-shrink-0"
                >
                  <svg className="w-6 h-6 hover:cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full border border-purple-200">
                  {selectedSpeaker.industry}
                </span>
                <div className="flex space-x-3">
                  {selectedSpeaker.links.linkedin && (
                    <a 
                      href={selectedSpeaker.links.linkedin}
                      target='_blank'
                      className="p-3 bg-blue-50 hover:bg-blue-100 rounded-full border border-blue-200 hover:border-blue-300 transition-all duration-300 group"
                    >
                      <Linkedin size={20} className="text-blue-600 group-hover:scale-110 transition-transform" />
                    </a>
                  )}
                  {selectedSpeaker.links.twitter && (
                    <a 
                      href={selectedSpeaker.links.twitter}
                      target='_blank'
                      className="p-3 bg-sky-50 hover:bg-sky-100 rounded-full border border-sky-200 hover:border-sky-300 transition-all duration-300 group"
                    >
                      <Twitter size={20} className="text-sky-600 group-hover:scale-110 transition-transform" />
                    </a>
                  )}
                  {(selectedSpeaker.links.wikipedia || selectedSpeaker.links.news) && (
                    <a 
                      href={selectedSpeaker.links.wikipedia || selectedSpeaker.links.news}
                      target='_blank'
                      className="p-3 bg-green-50 hover:bg-green-100 rounded-full border border-green-200 hover:border-green-300 transition-all duration-300 group"
                    >
                      <ExternalLink size={20} className="text-green-600 group-hover:scale-110 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto flex-1 custom-scrollbar" style={{ maxHeight: 'calc(90vh - 200px)' }}>
              <div className="p-8">
                {/* About Section */}
                <div className="mb-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                      <Users size={20} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">About {selectedSpeaker.name.split(' ')[0]}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg pl-16">
                    {selectedSpeaker.about}
                  </p>
                </div>

                {/* Quote Section (if exists) */}
                {selectedSpeaker.quote && (
                  <div className="mb-8">
                    <blockquote className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-200 relative">
                      <div className="absolute top-4 left-4 text-purple-300 text-6xl font-serif">"</div>
                      <p className="text-gray-700 text-xl italic leading-relaxed mb-4 pl-12">
                        {selectedSpeaker.quote}
                      </p>
                      <cite className="text-purple-600 font-semibold text-lg pl-12">- {selectedSpeaker.name}</cite>
                    </blockquote>
                  </div>
                )}

                {/* Expertise & Achievements Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Expertise */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                        <TrendingUp size={20} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">Expertise</h3>
                    </div>
                    <div className="space-y-3 pl-16">
                      {selectedSpeaker.expertise.map((skill, index) => (
                        <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-purple-300 transition-colors">
                          <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-4"></div>
                          <span className="text-gray-700 font-medium">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                        <Award size={20} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">Achievements</h3>
                    </div>
                    <div className="space-y-4 pl-16">
                      {selectedSpeaker.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-purple-300 transition-colors">
                          <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <span className="text-white text-sm font-bold">{index + 1}</span>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <HeroSection />

      {/* Fun Stats */}
      <div className="bg-white/60 backdrop-blur-sm border-y border-gray-200">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <UserCheck className="text-green-600 mr-2" size={28} />
                <span className="text-3xl font-bold text-gray-800">{stats.totalJobs}</span>
              </div>
              <p className="text-gray-600">Jobs Created</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <MapPin className="text-blue-600 mr-2" size={24} />
                <span className="text-3xl font-bold text-gray-800">{stats.countries}</span>
              </div>
              <p className="text-gray-600">Countries Represented</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Building2 className="text-purple-600 mr-2" size={24} />
                <span className="text-3xl font-bold text-gray-800">{stats.industries}</span>
              </div>
              <p className="text-gray-600">Industries Covered</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="text-pink-600 mr-2" size={24} />
                <span className="text-3xl font-bold text-gray-800">{stats.companies}</span>
              </div>
              <p className="text-gray-600">Companies Founded</p>
            </div>
          </div>
        </div>
      </div>

      {/* Keynote Speakers */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Keynote Speakers</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {keynote.map((speaker) => (
            <div key={speaker.name} className="group">
              <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-purple-300 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative p-8">
                  <div className="flex flex-col md:flex-row items-start gap-6 md:space-x-6 ">
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
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-bold text-gray-800 mb-1 group-hover:text-purple-600 transition-colors">
                        {speaker.name}
                      </h3>
                      <p className="text-lg text-purple-600 mb-1 font-semibold">{speaker.title}</p>
                      <p className="text-gray-700 mb-4 font-semibold">{speaker.organization}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {speaker.expertise.slice(0, 2).map((skill, index) => (
                          <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm border border-purple-200">
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
                          <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                            <Linkedin size={20} />
                          </a>
                        )}
                        {speaker.links.twitter && (
                          <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
                            <Twitter size={20} />
                          </a>
                        )}
                        {speaker.links.wikipedia && (
                          <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                            <Globe size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Industry Filter */}
      <div className="container mx-auto px-6 mb-8">
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => setSelectedFilter(industry)}
              className={`hover:cursor-pointer px-6 py-2 rounded-full transition-all duration-300 ${
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

      {/* Speaker Cards Grid */}
      <div className="container mx-auto px-6 py-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Featured Speakers</h2>
        
        {/* No Speakers Found Message */}
        {filteredSpeakers.length === 0 ? (
          <NoSpeakerFound selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredSpeakers.map((speaker) => (
              <div 
                key={speaker.name}
                className="group relative"
                onMouseEnter={() => setHoveredCard(speaker.name)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Base Card - Fixed Height */}
                <div className="flex flex-col justify-between gap-4 bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-purple-300 transition-all duration-300 flex flex-col p-6 h-full shadow-md hover:shadow-lg">
                  <div className="">
                    <div className="flex items-center space-x-4 mb-4">
                      <img 
                        src={speaker.avatarUrl} 
                        alt={speaker.name}
                        className="w-16 h-16 rounded-full object-cover ring-2 ring-purple-200"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-semibold text-gray-800 mb-1 group-hover:text-purple-600 transition-colors">
                          {speaker.name}
                        </h3>
                        <p className="text-purple-600 text-sm font-semibold">{speaker.title}</p>
                        <p className="text-gray-600 text-sm font-medium">{speaker.organization}</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs border border-purple-200">
                          {speaker.industry}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {speaker.expertise.slice(0, 2).map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs border border-gray-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className='text-right'>
                      <button 
                        className="text-purple-600 hover:text-purple-500 text-sm font-medium transition-colors hover:cursor-pointer pointer-events-auto"
                        onClick={() => openModal(speaker)}
                      >
                        More Details →
                      </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Video Section */}
      <div className="bg-gray-50/80 backdrop-blur-sm border-y border-gray-200 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Meet Them in Action</h2>
          <div className="flex justify-center space-x-6 overflow-x-auto pb-4">
            {videos.map((video, index) => (
              <div key={video.id} className="flex-shrink-0 group cursor-pointer" onClick={() => setCurrentVideo(index)}>
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-72 h-48 object-cover rounded-lg border-2 border-transparent group-hover:border-purple-400 transition-all duration-300 shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 rounded-lg flex items-center justify-center">
                    <Play size={48} className="text-white group-hover:text-purple-200 transition-colors" />
                  </div>
                </div>
                <p className="text-gray-800 mt-3 text-center group-hover:text-purple-600 transition-colors font-medium">
                  {video.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Panel Sessions */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Panel Sessions</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {panels.map((panel, index) => (
            <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 hover:border-purple-300 transition-colors shadow-md hover:shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-gray-800">{panel.title}</h3>
                <span className="text-purple-600 font-medium">{panel.time}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {panel.speakers.map((speakerName, idx) => (
                  <span key={idx} className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full border border-purple-200">
                    {speakerName}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Networking CTA */}
      <NetworkingCTA />
    </div>
  );
};

export default EntrepreneurEventPage;

export const HeroSection = () => {
  return (
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/40 to-pink-100/40"></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Meet the Visionaries
            </h1>
            <p className="text-2xl text-purple-700 mb-4 font-semibold">
              Innovators, Dreamers, and Game Changers
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Join us as we bring together the most influential entrepreneurs, tech leaders, and innovators 
              who are shaping the future of business and technology. Get inspired by their journeys, 
              insights, and vision for tomorrow.
            </p>
          </div>
        </div>
      </div>
  )
}

export const NoSpeakerFound = ({ selectedFilter , setSelectedFilter }) => {
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
          We don't have any featured speakers in <span className="font-semibold text-purple-600">"{selectedFilter}"</span> at the moment.
        </p>
        <button 
          onClick={() => setSelectedFilter('All')}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          View All Speakers
        </button>
      </div>
    </div>
  )
}

export const NetworkingCTA = () => {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-y border-purple-200">
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Ready to Connect?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Don't miss the opportunity to network with these incredible entrepreneurs and industry leaders.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
          className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 hover:cursor-pointer transition-all duration-300"
          >
            Join Networking App
          </button>
          <button 
          className="px-8 py-4 border border-purple-500 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 hover:cursor-pointer transition-all duration-300"
          // onClick={() => navigate('/events')}
          >
            View Event Schedule
          </button>
        </div>
      </div>
    </div>
  )
}