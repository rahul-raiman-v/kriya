import React from 'react';
import { EventsCard , GuestLectureCard } from '../../components';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
            content:[{
              id:'person1',
              name:'Person 1',
              designation:'Designation 1',
              email:'person1@example.com',
              phone:'1234567890',
              img:'https://via.placeholder.com/150'
            },
            {
              id:'person2',
              name:'Person 2',
              designation:'Designation 2',
              email:'person2@example.com',
              phone:'1234567890',
              img:'https://via.placeholder.com/150'
            }]
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
            content:[{
              id:'person1',
              name:'Person 1',
              designation:'Designation 1',
              email:'person1@example.com',
              phone:'1234567890',
              img:'https://via.placeholder.com/150'
            },
            {
              id:'person2',
              name:'Person 2',
              designation:'Designation 2',
              email:'person2@example.com',
              phone:'1234567890',
              img:'https://via.placeholder.com/150'
            }]
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
            content:[{
              id:'person1',
              name:'Person 1',
              designation:'Designation 1',
              email:'person1@example.com',
              phone:'1234567890',
              img:'https://via.placeholder.com/150'
            },
            {
              id:'person2',
              name:'Person 2',
              designation:'Designation 2',
              email:'person2@example.com',
              phone:'1234567890',
              img:'https://via.placeholder.com/150'
            }],
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
        img: './GuestLecturerImg.png',
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
        img: './GuestLecturerImg.png',
        highlight: false,
      },
    ],
  },
];

// (Removed duplicate allEvents; handled inside component)

export const EventsPage = () => {
  const [selectedEventId, setSelectedEventId] = React.useState('all');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const [isSearching, setIsSearching] = React.useState(false);
  
  // Build augmented events list with category metadata
  const allEventsAugmented = stats.flatMap(category => 
    category.events.map(event => ({
      ...event,
      categoryTitle: category.title,
      categoryId: category.id
    }))
  );

  // Add a synthetic "All" category at the beginning
  const allCategoryIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 text-indigo-600">
      <path d="M3 5.25A2.25 2.25 0 0 1 5.25 3h3.5A2.25 2.25 0 0 1 11 5.25v3.5A2.25 2.25 0 0 1 8.75 11h-3.5A2.25 2.25 0 0 1 3 8.75v-3.5Zm9.5 0A2.25 2.25 0 0 1 14.75 3h3.5A2.25 2.25 0 0 1 20.5 5.25v3.5A2.25 2.25 0 0 1 18.25 11h-3.5A2.25 2.25 0 0 1 12.5 8.75v-3.5Zm-9.5 9.5A2.25 2.25 0 0 1 5.25 12h3.5A2.25 2.25 0 0 1 11 14.25v3.5A2.25 2.25 0 0 1 8.75 20h-3.5A2.25 2.25 0 0 1 3 17.75v-3.5Zm9.5 0A2.25 2.25 0 0 1 14.75 12h3.5A2.25 2.25 0 0 1 20.5 14.25v3.5A2.25 2.25 0 0 1 18.25 20h-3.5A2.25 2.25 0 0 1 12.5 17.75v-3.5Z"/>
    </svg>
  );

  const categoriesWithAll = [
    {
      id: 'all',
      title: 'All',
      img: allCategoryIcon,
      highlight: false,
      events: allEventsAugmented,
    },
    ...stats,
  ];

  const selectedCategory = categoriesWithAll.find((item) => item.id === selectedEventId);

  // Get all events from all categories for carousel (augmented)
  const allEvents = allEventsAugmented;

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Events & Activities
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover exciting events, workshops, and guest lectures happening at our institution
        </p>
      </div>
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

       <div className="w-full max-w-8xl mx-auto mb-16 items-center justify-center">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/20 items-center justify-center">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="mySwiper"
          >
            {allEvents.map((event) => (
              <SwiperSlide key={event.id}>
                <div className="flex p-6 relative h-98 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 items-center justify-center rounded-3xl shadow-lg gap-7">
                  {/* Image */}
                  <img
                    src={event.img}
                    alt={event.eventTitle}
                    className="w-full md:w-1/3 h-full object-fit rounded-lg"
                  />

                  {/* Event Details */}
                  <div className="w-1/2 text-white pl-8 flex flex-col justify-center">
                  {/* Category Tag */}
                  <div className="mb-5">
                    <span className="inline-block px-5 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg tracking-wide">
                      {event.categoryTitle}
                    </span>
                  </div>

                  {/* Event Title */}
                  <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 leading-snug">
                    {event.eventTitle}
                  </h2>

                  {/* Event Specific Details */}
                  <div className="space-y-3 text-lg text-gray-200">
                    {event.categoryId === 'guest-lecture' ? (
                      <>
                        <p>
                          <span className="font-semibold text-pink-300">Speaker:</span> {event.speakerName || 'TBA'}
                        </p>
                        <p>
                          <span className="font-semibold text-pink-300">Topic:</span> {event.talkTitle || 'TBA'}
                        </p>
                        <p>
                          <span className="font-semibold text-pink-300">Duration:</span> {event.duration || 'TBA'}
                        </p>
                      </>
                    ) : (
                      event.eventType && (
                        <p>
                          <span className="font-semibold text-pink-300">Type:</span> {event.eventType}
                        </p>
                      )
                    )}

                    {/* Common Details */}
                    <p>
                      <span className="font-semibold text-pink-300">Date:</span> {event.date}
                    </p>
                    <p>
                      <span className="font-semibold text-pink-300">Venue:</span> {event.venue}
                    </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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
          {categoriesWithAll.map((item) => (
            <button
              key={item.id}
              className={`group relative flex justify-between items-center w-74 h-48 p-6 rounded-2xl border cursor-pointer transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 ${
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
               {selectedCategory.id === 'all'
                 ? `Explore all ${selectedCategory.events.length} events below`
                 : `Explore all ${selectedCategory.events.length} ${selectedCategory.title.toLowerCase()} below`}
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
                    <div
                      className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-200 max-h-96 overflow-y-auto z-50"
                      role="listbox"
                    >
                      {searchResults.map((result, index) => (
                        <button
                          key={`${result.categoryId}-${result.id}-${index}`}
                          onClick={() => goToEvent(result)}
                          className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors duration-200 focus:outline-none focus:bg-gray-100"
                          role="option"
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
                        </button>
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
            {selectedCategory.id === 'all'
              ? selectedCategory.events.map((event) => (
                  <div
                    key={`${event.categoryId}-${event.id}`}
                    id={`event-${event.id}`}
                    className="transform hover:scale-[1.02] transition-transform duration-300"
                  >
                    {event.categoryId === 'guest-lecture' ? (
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
                        buttonLabel="Register now"
                      />
                    ) : (
                      <EventsCard
                        eventTabs={event.tabs}
                        eventTitle={event.eventTitle}
                        eventDate={event.date}
                        eventVenue={event.venue}
                        eventImage={event.img}
                      />
                    )}
                  </div>
                ))
              : selectedCategory.id === 'guest-lecture'
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