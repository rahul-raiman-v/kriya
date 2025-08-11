import React from 'react';
import { EventsCard , GuestLectureCard } from '../../components';

const stats = [
     {
     id: 'events',
     title: 'Events',
     img: '/CalendarLogo.png',
    highlight: false,
    events: [
      {
        id: 'event-1',
        eventTitle: 'Event 1',
        eventType: 'Electrical Event',
        date: 'July 14–15, 2025',
        venue: 'BIT Main Auditorium',
        img: 'https://i0.wp.com/roboticsindia.live/wp-content/uploads/2022/08/Robowars_Thumbnail.jpg?resize=800%2C417&ssl=1',
        highlight: true,
        tabs: [
          {
            id: 'description',
            title: 'Description',
            content:
              'We are excited to invite you to a special two-day guest lecture event taking place at the BIT Main Auditorium on July 14–15, 2025, from 9:00 AM to 4:30 PM each day. This enriching program will feature a lineup of distinguished industry experts who will share valuable insights, real-world experiences, and emerging trends across various fields.',
          },
          {
            id: 'rounds',
            title: 'Rounds',
            content: 'There are 3 rounds: Prelims, Semis, Finals.',
          },
          {
            id: 'rules',
            title: 'Rules',
            content: 'No plagiarism. Team size: 2-4. Time limit: 10 min.',
          },
          {
            id: 'rewards',
            title: 'Rewards',
            content: 'Winners get certificates and cash prizes.',
          },
          {
            id: 'contact',
            title: 'Contact',
            content: 'Email: info@kriya.com, Phone: 1234567890',
          },
        ],
      },
      {
        id: 'event-2',
        eventTitle: 'Event 2',
        eventType: 'Electrical Event',
        date: 'July 14–15, 2025',
        venue: 'BIT Main Auditorium',
        img: 'https://tse2.mm.bing.net/th/id/OIP.TNYaNdxaxaSwUi-JWSUqkAHaEN?cb=thfc1&w=590&h=336&rs=1&pid=ImgDetMain&o=7&rm=3',
        highlight: true,
        tabs: [
          {
            id: 'description',
            title: 'Description',
            content:
              'We are excited to invite you to a special two-day guest lecture event taking place at the BIT Main Auditorium on July 14–15, 2025, from 9:00 AM to 4:30 PM each day. This enriching program will feature a lineup of distinguished industry experts who will share valuable insights, real-world experiences, and emerging trends across various fields.',
          },
          {
            id: 'rounds',
            title: 'Rounds',
            content: 'There are 3 rounds: Prelims, Semis, Finals.',
          },
          {
            id: 'rules',
            title: 'Rules',
            content: 'No plagiarism. Team size: 2-4. Time limit: 10 min.',
          },
          {
            id: 'rewards',
            title: 'Rewards',
            content: 'Winners get certificates and cash prizes.',
          },
          {
            id: 'contact',
            title: 'Contact',
            content: 'Email: info@kriya.com, Phone: 1234567890',
          },
        ],
      },
    ],
  },
     {
     id: 'workshop',
     title: 'Workshop',
     img: '/WorkshopLogo.png',
    highlight: false,
    events: [
      {
        id: 'workshop-1',
        eventTitle: 'Workshop 1',
        eventType: 'Electrical Workshop',
        img: 'https://st2.depositphotos.com/1038076/6328/i/600/depositphotos_63287513-stock-photo-workshop.jpg',
        date: 'July 15–16, 2025',
        venue: 'BIT Main Auditorium',
        highlight: true,
        tabs: [
          {
            id: 'description',
            title: 'Description',
            content:
              'We are excited to invite you to a special two-day workshop event taking place at the BIT Main Auditorium on July 14–15, 2025, from 9:00 AM to 4:30 PM each day.',
          },
          {
            id: 'prerequisites',
            title: 'Prerequisites',
            content: 'Basic programming knowledge and laptop required.',
          },
          {
            id: 'contact',
            title: 'Contact',
            content: 'Email: info@kriya.com, Phone: 1234567890',
          },
          {
            id: 'speakers',
            title: 'Speakers',
            content: 'John Doe, Jane Smith',
          },
        ],
      },
    ],
  },
     {
     id: 'guest-lecture',
     title: 'Guest Lecture',
     img: '/GuestLectureLogo.png',
    highlight: false,
    events: [
      {
        id: 'guest-lecture-1',
        eventTitle: 'Guest Lecture 1',
        speakerName: 'Dr Priya Sharma',
        speakerDesignation: 'Professor of Computer Science, Google',
        talkTitle: 'AI and Machine Learning',
        talkDescription:
          'An in-depth look at the future of AI and its applications.',
        duration: '45 mins',
        date: 'July 14, 2025',
        venue: 'BIT Main Auditorium',
        time: '12:00 PM',
        img: 'https://i.pinimg.com/736x/eb/b9/e7/ebb9e7da0712cff92a7f8fd64d12e8fc.jpg',
        highlight: true,
      },
      {
        id: 'guest-lecture-2',
        eventTitle: 'Guest Lecture 2',
        speakerName: 'Dr Priya Sharma',
        speakerDesignation: 'Professor of Computer Science, Google',
        talkTitle: 'AI and Machine Learning',
        talkDescription:
          'An in-depth look at the future of AI and its applications.',
        date: 'July 15, 2025',
        venue: 'BIT Main Auditorium',
        duration: '45 mins',
        time: '12:00 PM',
        img: 'https://i.pinimg.com/736x/eb/b9/e7/ebb9e7da0712cff92a7f8fd64d12e8fc.jpg',
        highlight: false,
      },
    ],
  },
];



export const EventsPage = () => {
  const [selectedEventId, setSelectedEventId] = React.useState('events');
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const [isSearching, setIsSearching] = React.useState(false);
  const selectedCategory = stats.find((item) => item.id === selectedEventId);

  // Get all events from all categories for carousel
  const allEvents = stats.flatMap(category => 
    category.events.map(event => ({
      ...event,
      categoryTitle: category.title,
      categoryId: category.id
    }))
  );

  // Create extended array for infinite scroll effect
  const extendedEvents = [...allEvents, ...allEvents, ...allEvents];
  const startIndex = allEvents.length;
  const [currentSlide, setCurrentSlide] = React.useState(startIndex);

  // Auto-advance carousel
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = prev + 1;
        if (nextSlide >= startIndex + allEvents.length) {
          // Reset to middle section without animation
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrentSlide(startIndex);
          }, 700);
          setIsTransitioning(true);
          return nextSlide;
        }
        return nextSlide;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, [allEvents.length, startIndex]);

  const nextSlide = () => {
    const nextSlide = currentSlide + 1;
    if (nextSlide >= startIndex + allEvents.length) {
      // Reset to middle section without animation
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(startIndex);
      }, 700);
      setIsTransitioning(true);
      setCurrentSlide(nextSlide);
    } else {
      setCurrentSlide(nextSlide);
    }
  };

  const prevSlide = () => {
    const prevSlide = currentSlide - 1;
    if (prevSlide < startIndex) {
      // Reset to middle section without animation
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(startIndex + allEvents.length - 1);
      }, 700);
      setIsTransitioning(true);
      setCurrentSlide(prevSlide);
    } else {
      setCurrentSlide(prevSlide);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(startIndex + index);
  };

  // Search functionality
  const handleSearch = (query) => {
    setSearchQuery(query);
    
    if (!query.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    
    // Search through all events
    const results = [];
    stats.forEach(category => {
      category.events.forEach(event => {
        const searchableText = [
          event.eventTitle,
          event.eventType,
          event.date,
          event.venue,
          category.title,
          ...(event.tabs ? event.tabs.map(tab => tab.content) : []),
          ...(event.speakerName ? [event.speakerName, event.talkTitle, event.talkDescription] : [])
        ].join(' ').toLowerCase();
        
        if (searchableText.includes(query.toLowerCase())) {
          results.push({
            ...event,
            categoryTitle: category.title,
            categoryId: category.id
          });
        }
      });
    });
    
    setSearchResults(results);
  };

  const goToEvent = (event) => {
    // Set the selected category
    setSelectedEventId(event.categoryId);
    
    // Find the event in the carousel and go to it
    const eventIndex = allEvents.findIndex(e => 
      e.id === event.id && e.categoryId === event.categoryId
    );
    
    if (eventIndex !== -1) {
      setCurrentSlide(startIndex + eventIndex);
    }
    
    // Clear search
    setSearchQuery('');
    setSearchResults([]);
    setIsSearching(false);
    
    // Scroll to the event card after a short delay to ensure the category is loaded
    setTimeout(() => {
      const eventElement = document.getElementById(`event-${event.id}`);
      if (eventElement) {
        eventElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-50 to-purple-100 p-6">
             {/* Header Section */}
       <div className="text-center mb-12">
         <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
           Events & Activities
         </h1>
         <p className="text-xl text-gray-600 max-w-2xl mx-auto">
           Discover exciting events, workshops, and guest lectures happening at our institution
         </p>
       </div>

      {/* Events Carousel */}
      <div className="w-full max-w-7xl mx-auto mb-16">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/20">
          {/* Carousel Container */}
          <div className="relative h-96 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900">
                         {/* Slides */}
             <div 
               className={`flex transition-transform duration-700 ease-in-out h-full ${
                 isTransitioning ? 'transition-none' : ''
               }`}
               style={{ transform: `translateX(-${currentSlide * 100}%)` }}
             >
               {extendedEvents.map((event, index) => (
                 <div key={`${event.categoryId}-${event.id}-${index}`} className="w-full flex-shrink-0 flex items-center justify-center">
                  <div className="flex items-center justify-center w-full h-full p-8">
                    {/* Event Image */}
                    <div className="w-1/2 flex justify-center">
                      <div className="relative group">
                        <img 
                          src={event.img} 
                          alt={event.eventTitle}
                          className="w-72 h-56 object-cover rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                      </div>
                    </div>
                    
                    {/* Event Details */}
                    <div className="w-1/2 text-white pl-8">
                      <div className="mb-4">
                        <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg">
                          {event.categoryTitle}
                        </span>
                      </div>
                      <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">
                        {event.eventTitle}
                      </h2>
                      
                      {/* Event specific details */}
                      {event.categoryId === 'guest-lecture' ? (
                        <>
                          <p className="text-lg text-gray-200 mb-3">
                            <span className="font-semibold text-pink-300">Speaker:</span> {event.speakerName}
                          </p>
                          <p className="text-lg text-gray-200 mb-3">
                            <span className="font-semibold text-pink-300">Topic:</span> {event.talkTitle}
                          </p>
                          <p className="text-lg text-gray-200 mb-3">
                            <span className="font-semibold text-pink-300">Duration:</span> {event.duration}
                          </p>
                        </>
                      ) : (
                        <>
                          {event.eventType && (
                            <p className="text-lg text-gray-200 mb-3">
                              <span className="font-semibold text-pink-300">Type:</span> {event.eventType}
                            </p>
                          )}
                        </>
                      )}
                      
                      <p className="text-lg text-gray-200 mb-3">
                        <span className="font-semibold text-pink-300">Date:</span> {event.date}
                      </p>
                      <p className="text-lg text-gray-200 mb-3">
                        <span className="font-semibold text-pink-300">Venue:</span> {event.venue}
                      </p>
                      {/* {event.time && (
                        <p className="text-lg text-gray-200 mb-3">
                          <span className="font-semibold text-pink-300">Time:</span> {event.time}
                        </p>
                      )} */}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 hover:scale-110"
              aria-label="Previous slide"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 hover:scale-110"
              aria-label="Next slide"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

                         {/* Dots Indicator */}
             <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
               {allEvents.map((_, index) => (
                 <button
                   key={index}
                   onClick={() => goToSlide(index)}
                   className={`w-4 h-4 rounded-full transition-all duration-300 ${
                     (currentSlide - startIndex) === index 
                       ? 'bg-gradient-to-r from-pink-500 to-purple-600 scale-125 shadow-lg' 
                       : 'bg-white/50 hover:bg-white/75 hover:scale-110'
                   }`}
                   aria-label={`Go to slide ${index + 1}`}
                 />
               ))}
             </div>
          </div>
        </div>
      </div>

      {/* Category Cards Section */}
      <div className="w-full max-w-7xl mx-auto mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Choose Your Category</h2>
          <p className="text-gray-600">Select a category to explore available events</p>
        </div>
        
        <div
          className="flex flex-wrap justify-center gap-8"
          role="tablist"
          aria-label="Event categories"
        >
          {stats.map((item) => (
            <button
              key={item.id}
              className={`group relative flex justify-between items-center w-96 h-48 p-6 rounded-2xl border cursor-pointer transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 ${
                selectedEventId === item.id
                  ? 'border-blue-500 shadow-2xl shadow-blue-500/25'
                  : 'border-transparent hover:border-gray-300 shadow-xl hover:shadow-2xl'
              } bg-gradient-to-br from-white to-gray-50 hover:from-white hover:to-blue-50`}
              onClick={() => setSelectedEventId(item.id)}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 flex justify-between items-center w-full">
                                 <div>
                   <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                   <p className="text-6xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                     {item.events.length}
                   </p>
                 </div>
                <div className="w-28 h-28 flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-4 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                  {typeof item.img === 'string' ? (
                    <img src={item.img} alt="" className="w-20 h-20 object-contain" />
                  ) : (
                    item.img
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Events List Section */}
      {selectedCategory && (
        <div className="w-full max-w-7xl mx-auto">
                     <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-gray-800 mb-4">
               {selectedCategory.title} - Available Events
             </h2>
             <p className="text-gray-600 mb-8">
               Explore all {selectedCategory.events.length} {selectedCategory.title.toLowerCase()} below
             </p>
             
             {/* Search Bar */}
             <div className="flex justify-center mb-8">
               <div className="relative w-96">
                 <input
                   type="text"
                   value={searchQuery}
                   onChange={(e) => handleSearch(e.target.value)}
                   placeholder="Search events..."
                   className="w-full px-4 py-3 pl-12 pr-4 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 hover:bg-white/90 placeholder-gray-500"
                 />
                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                   <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                   </svg>
                 </div>
                 
                 {/* Search Results Dropdown */}
                 {isSearching && searchResults.length > 0 && (
                   <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-200 max-h-96 overflow-y-auto z-50">
                     {searchResults.map((result, index) => (
                       <div
                         key={`${result.categoryId}-${result.id}-${index}`}
                         onClick={() => goToEvent(result)}
                         className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors duration-200"
                       >
                         <div className="flex items-center space-x-3">
                           <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
                             <span className="text-indigo-600 font-semibold text-sm">
                               {result.categoryTitle.charAt(0)}
                             </span>
                           </div>
                           <div className="flex-1 min-w-0">
                             <p className="text-sm font-semibold text-gray-900 truncate">
                               {result.eventTitle}
                             </p>
                             <p className="text-xs text-gray-500 truncate">
                               {result.categoryTitle} • {result.date} • {result.venue}
                             </p>
                           </div>
                         </div>
                       </div>
                     ))}
                   </div>
                 )}
                 
                 {/* No Results Message */}
                 {isSearching && searchQuery.trim() && searchResults.length === 0 && (
                   <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 z-50">
                     <p className="text-gray-500 text-center">No events found for "{searchQuery}"</p>
                   </div>
                 )}
               </div>
             </div>
           </div>
          
          <div className="flex flex-col gap-8">
            {selectedCategory.id === 'guest-lecture'
              ? selectedCategory.events.map((event) => (
                  <div 
                    key={event.id} 
                    id={`event-${event.id}`}
                    className="transform hover:scale-[1.02] transition-transform duration-300"
                  >
                    <GuestLectureCard
                      eventTitle={event.eventTitle}
                      speakerName={event.speakerName}
                      speakerDesignation={event.speakerDesignation}
                      talkTitle={event.talkTitle}
                      talkDescription={event.talkDescription}
                      duration={event.duration}
                      date={event.date}
                      venue={event.venue}
                      time={event.time}
                      eventImage={event.img}
                      buttonLabel="Join now"
                    />
                  </div>
                ))
                  : selectedCategory.events.map((event) => (
                   <div 
                     key={event.id} 
                     id={`event-${event.id}`}
                     className="transform hover:scale-[1.02] transition-transform duration-300"
                   >
                     <EventsCard
                       eventTabs={event.tabs}
                       eventTitle={event.eventTitle}
                       eventDate={event.date}
                       eventVenue={event.venue}
                       eventImage={event.img}
                     />
                   </div>
                 ))}
          </div>
        </div>
      )}
    </div>
  );
}