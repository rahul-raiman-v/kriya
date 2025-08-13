import React from 'react';
import PropTypes from 'prop-types';
import { CalendarDays, MapPin } from 'lucide-react';
import { MinCard } from '../../components';
import './style.css';
import { useNavigate } from 'react-router';

export function EventsCard({
  eventTabs = [],
  eventTitle = 'Untitled Event',
  eventDate = 'Date not specified',
  eventVenue = 'Venue not specified',
  eventImage = '',
}) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState(eventTabs[0]?.title || '');

  const activeTabData = eventTabs.find((tab) => tab.title === activeTab);
  const activeContent = activeTabData?.content || '';

  const renderTabContent = () => {
    const tabTitle = activeTab.toLowerCase();

    if (
      [
        'contact',
        'rounds',
        'rules',
        'rewards',
        'prerequisites',
        'speakers',
      ].includes(tabTitle)
    ) {
      return (
        <MinCard
          key={activeTabData.id}
          title={activeTabData.id}
          contacts={
            activeTabData.id === 'contact' ? activeTabData.content : undefined
          }
          rounds={
            activeTabData.id === 'rounds' ? activeTabData.content : undefined
          }
          rules={
            activeTabData.id === 'rules' ? activeTabData.content : undefined
          }
          rewards={
            activeTabData.id === 'rewards' ? activeTabData.content : undefined
          }
          prerequisites={
            activeTabData.id === 'prerequisites'
              ? activeTabData.content
              : undefined
          }
          speakers={
            activeTabData.id === 'speakers' ? activeTabData.content : undefined
          }
        />
      );
    }

    return (
      <div className="prose prose-sm max-w-none">
        {typeof activeContent === 'string' ? (
          <p>{activeContent}</p>
        ) : (
          <pre className="whitespace-pre-wrap text-sm">
            {JSON.stringify(activeContent, null, 2)}
          </pre>
        )}
      </div>
    );
  };

  return (
    <div
      className="flex min-h-[200px] flex-col lg:flex-row justify-between items-stretch gap-6 p-6 
      rounded-2xl border border-gray-200 bg-white shadow-md hover:border-blue-200 hover:shadow-lg transition-all duration-300"
    >
      {/* Left Side */}
      <div className="flex-1 flex flex-col">
        {/* Date & Location */}
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2 rounded-lg text-sm text-white shadow-sm">
            <CalendarDays size={16} />
            <span className="font-medium">{eventDate}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin size={16} className="text-red-500" />
            <span>{eventVenue}</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900 line-clamp-2">
          {eventTitle}
        </h2>

        {/* Image under title for mobile */}
        {eventImage && (
          <div className="mb-4 lg:hidden">
            <img
              src={eventImage}
              alt={eventTitle}
              className="w-full h-auto object-cover rounded-xl shadow-md"
              loading="lazy"
            />
          </div>
        )}

        {/* Tabs */}
        {eventTabs.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {eventTabs.map((tab) => (
              <button
                key={tab.id || tab.title}
                className={`px-4 py-2 rounded-lg cursor-pointer text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.title
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md transform scale-105'
                    : 'border border-gray-300 text-gray-700 hover:bg-gradient-to-r hover:from-pink-100 hover:to-purple-100 hover:border-purple-300'
                }`}
                onClick={() => setActiveTab(tab.title)}
                aria-selected={activeTab === tab.title}
                role="tab"
              >
                {tab.title}
              </button>
            ))}
          </div>
        )}

        {/* Tab Content */}
        <div className="flex-1 mb-6">
          <div className="bg-gray-50 rounded-xl p-4 min-h-[150px] max-h-[300px] text-gray-900 text-[16px] overflow-y-auto no-scrollbar">
            {renderTabContent()}
          </div>
        </div>

        {/* Register Button */}
        <div className="flex items-center gap-x-4">
          <button
            className="bg-gradient-to-r cursor-pointer from-orange-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 w-fit shadow-md"
            onClick={() => navigate('/combo')}
          >
            Register Now
          </button>
          <button
            className="bg-gradient-to-r cursor-pointer from-orange-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 w-fit shadow-md"
            onClick={() => alert('Broucher will be available soon')}
          >
            Download Brochure
          </button>
        </div>
      </div>

      {/* Right Side - Image for desktop */}
      {eventImage && (
        <div className="max-w-[500px] max-h-[400px] min-h-[200px] hidden lg:block">
          <img
            src={eventImage}
            alt={eventTitle}
            className="w-full h-full object-cover rounded-xl shadow-md"
            loading="lazy"
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
      content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.object),
      ]),
    })
  ),
  eventTitle: PropTypes.string,
  eventDate: PropTypes.string,
  eventVenue: PropTypes.string,
  eventImage: PropTypes.string,
};
