import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CalendarDays, MapPin } from 'lucide-react';

export function EventsCard({
  eventTabs = [],
  eventTitle = 'Untitled Event',
  eventDate = 'Date not specified',
  eventVenue = 'Venue not specified',
  eventImage = '',
}) {
  const [activeTab, setActiveTab] = useState(eventTabs[0]?.title || '');

  const activeContent =
    eventTabs.find((tab) => tab.title === activeTab)?.content || '';

  return (
    <div className="bg-[#0C0E29] text-white p-6 rounded-2xl flex flex-col md:flex-row gap-6 w-full  mx-auto h-[500px] md:h-[400px]">
      {/* Left Side */}
      <div className="flex-1 flex flex-col">
        {/* Date & Location */}
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex items-center gap-2 bg-[#18204A] px-4 py-1 rounded-lg text-sm">
            <CalendarDays size={16} />
            <span>{eventDate}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin size={16} />
            <span>{eventVenue}</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold mb-4">{eventTitle}</h2>

        {/* Tabs */}
        {eventTabs.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {eventTabs.map((tab) => (
              <button
                key={tab.id || tab.title}
                className={`px-4 py-1 border border-gray-500 rounded-lg text-sm transition ${
                  activeTab === tab.title
                    ? 'bg-[#1A234D] font-bold'
                    : 'hover:bg-[#1A234D]'
                }`}
                onClick={() => setActiveTab(tab.title)}
                aria-selected={activeTab === tab.title}
              >
                {tab.title}
              </button>
            ))}
          </div>
        )}

        {/* Tab Content */}
        <div className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base flex-1 overflow-y-auto max-h-40 md:max-h-52 px-1">
          {activeContent}
        </div>
        {/* Register Button */}
        <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition w-fit">
          Register now
        </button>
      </div>

      {/* Right Side - Image */}
      {eventImage && (
        <div className="md:w-1/3">
          <img
            src={eventImage}
            alt={eventTitle}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      )}
    </div>
  );
}

EventsCard.propTypes = {
  eventTabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string.isRequired,
      content: PropTypes.string,
    })
  ),
  eventTitle: PropTypes.string,
  eventDate: PropTypes.string,
  eventVenue: PropTypes.string,
  eventImage: PropTypes.string,
};