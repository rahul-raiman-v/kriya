import React from 'react';
import { EventsCard } from '../../components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css';
import { useEventsStore } from '../../store';
import { useShallow } from 'zustand/react/shallow';

export const EventsPage = () => {
  const stats = useEventsStore(useShallow((s) => s.stats));
  const [selectedEventId, setSelectedEventId] = React.useState('all');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const [isSearching, setIsSearching] = React.useState(false);

  // Build augmented events list with category metadata
  const allEventsAugmented = stats.flatMap((category) =>
    category.events.map((event) => ({
      ...event,
      categoryTitle: category.title,
      categoryId: category.id,
    }))
  );

  // Add a synthetic "All" category at the beginning
  const allCategoryIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-20 h-20 text-indigo-600"
    >
      <path d="M3 5.25A2.25 2.25 0 0 1 5.25 3h3.5A2.25 2.25 0 0 1 11 5.25v3.5A2.25 2.25 0 0 1 8.75 11h-3.5A2.25 2.25 0 0 1 3 8.75v-3.5Zm9.5 0A2.25 2.25 0 0 1 14.75 3h3.5A2.25 2.25 0 0 1 20.5 5.25v3.5A2.25 2.25 0 0 1 18.25 11h-3.5A2.25 2.25 0 0 1 12.5 8.75v-3.5Zm-9.5 9.5A2.25 2.25 0 0 1 5.25 12h3.5A2.25 2.25 0 0 1 11 14.25v3.5A2.25 2.25 0 0 1 8.75 20h-3.5A2.25 2.25 0 0 1 3 17.75v-3.5Zm9.5 0A2.25 2.25 0 0 1 14.75 12h3.5A2.25 2.25 0 0 1 20.5 14.25v3.5A2.25 2.25 0 0 1 18.25 20h-3.5A2.25 2.25 0 0 1 12.5 17.75v-3.5Z" />
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

  const selectedCategory = categoriesWithAll.find(
    (item) => item.id === selectedEventId
  );

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
    stats.forEach((category) => {
      category.events.forEach((event) => {
        const searchableText = [
          event.eventTitle,
          event.eventType,
          event.date,
          event.venue,
          category.title,
          ...(event.tabs ? event.tabs.map((tab) => tab.content) : []),
          ...(event.speakerName
            ? [event.speakerName, event.talkTitle, event.talkDescription]
            : []),
        ]
          .join(' ')
          .toLowerCase();

        if (searchableText.includes(query.toLowerCase())) {
          results.push({
            ...event,
            categoryTitle: category.title,
            categoryId: category.id,
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
          block: 'center',
        });
      }
    }, 100);
  };

  return (
    <div className="bg-gradient-to-br from-pink-100 via-blue-50 to-purple-100 p-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Events & Activities
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover exciting events, workshops, and guest lectures happening at
          our institution
        </p>
      </div>

      {/* {Swiper} */}
      <div className="w-full max-w-7xl mx-auto mb-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full relative rounded-3xl overflow-hidden shadow-2xl  border border-white/0">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            navigation={false}
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
                <div className="w-full border rounded-3xl border-grey-700 p-4 sm:p-6 lg:p-8 relative min-h-[400px] sm:min-h-[450px] lg:h-98 bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col lg:flex-row items-center justify-center shadow-lg gap-4 sm:gap-6 lg:gap-8">
                  {/* Image */}
                  <div className="w-full lg:w-1/3 h-48 sm:h-64 lg:h-80 flex-shrink-0 order-1 lg:order-1">
                    <img
                      src={event.img}
                      alt={event.eventTitle}
                      loading="lazy"
                      className="w-full h-full !object-fill rounded-lg shadow-md "
                    />
                  </div>

                  {/* Event Details */}
                  <div className="w-full lg:w-2/3 text-gray-800 flex flex-col justify-start order-2 lg:order-2 lg:pl-8">
                    {/* Category Tag */}
                    <div className="mb-3 sm:mb-4 lg:mb-5 flex justify-center lg:justify-start">
                      <span className="inline-block px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs sm:text-sm font-semibold rounded-full shadow-lg tracking-wide">
                        {event.categoryTitle}
                      </span>
                    </div>

                    {/* Event Title */}
                    <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 leading-snug text-center lg:text-left">
                      {event.eventTitle}
                    </h2>

                    {/* Event Specific Details */}
                    <div className="space-y-2 sm:space-y-3 text-sm sm:text-base lg:text-lg text-gray-700">
                      {event.categoryId === 'guest-lecture' ? (
                        <>
                          <p className="text-center lg:text-left">
                            <span className="font-semibold text-blue-600">
                              Speaker:
                            </span>{' '}
                            {event.speakerName || 'TBA'}
                          </p>
                        </>
                      ) : (
                        event.eventType && (
                          <p className="text-center lg:text-left">
                            <span className="font-semibold text-blue-600">
                              Type:
                            </span>{' '}
                            {event.eventType}
                          </p>
                        )
                      )}

                      {/* Common Details */}
                      <p className="text-center lg:text-left">
                        <span className="font-semibold text-blue-600">
                          Date:
                        </span>{' '}
                        {event.date}
                      </p>
                      <p className="text-center lg:text-left">
                        <span className="font-semibold text-blue-600">
                          Venue:
                        </span>{' '}
                        {event.venue}
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
      <div className="w-full max-w-7xl mx-auto mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-3 lg:mb-4">
            Choose Your Category
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600">
            Select a category to explore available events
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 justify-items-center"
          role="tablist"
          aria-label="Event categories"
        >
          {categoriesWithAll.map((item) => (
            <button
              key={item.id}
              className={`group relative flex flex-col sm:flex-row sm:justify-between items-center w-full max-w-sm sm:max-w-none sm:w-full lg:w-74 h-auto sm:h-40 lg:h-48 p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border cursor-pointer transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 sm:hover:-translate-y-2 ${
                selectedEventId === item.id
                  ? 'border-blue-500 shadow-2xl shadow-blue-500/25'
                  : 'border-transparent hover:border-gray-300 shadow-xl hover:shadow-2xl'
              } bg-gradient-to-br from-white to-gray-50 hover:from-white hover:to-blue-50`}
              onClick={() => setSelectedEventId(item.id)}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10 flex flex-col sm:flex-row sm:justify-between items-center w-full gap-3 sm:gap-4">
                {/* Content Section */}
                <div className="text-center sm:text-left order-2 sm:order-1 flex-1">
                  <h3 className="text-lg sm:text-xl lg:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                    {item.events.length}
                  </p>
                </div>

                {/* Icon Section */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300 order-1 sm:order-2 flex-shrink-0">
                  {typeof item.img === 'string' ? (
                    <img
                      src={item.img}
                      alt=""
                      className="w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20 object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20 flex items-center justify-center">
                      {item.img}
                    </div>
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
              <div className="relative w-96 text-black">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search events..."
                  className="w-full px-4 py-3 pl-12 pr-4 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 hover:bg-white/90 placeholder-gray-500"
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
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
                              {result.categoryTitle} • {result.date} •{' '}
                              {result.venue}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {/* No Results Message */}
                {isSearching &&
                  searchQuery.trim() &&
                  searchResults.length === 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 z-50">
                      <p className="text-gray-500 text-center">
                        No events found for "{searchQuery}"
                      </p>
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
                    <EventsCard
                      eventTabs={event.tabs}
                      eventType={event.eventType}
                      eventTitle={event.eventTitle}
                      eventDate={event.date}
                      eventVenue={event.venue}
                      eventImage={event.img}
                      brochureLink={event.brochureLink}
                    />
                  </div>
                ))
              : selectedCategory.id === 'guest-lecture'
                ? selectedCategory.events.map((event) => (
                    <div
                      key={event.id}
                      id={`event-${event.id}`}
                      className="transform hover:scale-[1.02] transition-transform duration-300"
                    ></div>
                  ))
                : selectedCategory.events.map((event) => (
                    <div
                      key={event.id}
                      id={`event-${event.id}`}
                      className="transform hover:scale-[1.02] transition-transform duration-300"
                    >
                      <EventsCard
                        eventTabs={event.tabs}
                        eventType={event.eventType}
                        eventTitle={event.eventTitle}
                        eventDate={event.date}
                        eventVenue={event.venue}
                        eventImage={event.img}
                        brochureLink={event.brochureLink}
                      />
                    </div>
                  ))}
          </div>
        </div>
      )}
    </div>
  );
};
