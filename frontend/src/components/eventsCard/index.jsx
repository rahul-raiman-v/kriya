import React from 'react';
import PropTypes from 'prop-types';
import { CalendarDays, MapPin } from 'lucide-react';
import { MinCard } from '../../components';
import './style.css';
import { useNavigate } from 'react-router';

export function EventsCard({
  eventTabs = [],
  eventType = 'Untitled',
  eventTitle = 'Untitled Event',
  eventDate = 'Date not specified',
  eventVenue = 'Venue not specified',
  eventImage = '',
  brochureLink, // Fixed typo: was brouchreLink
  problemLink,
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
          <div className="flex">
            <p>{activeContent}</p>
          </div>
        ) : (
          <pre className="whitespace-pre-wrap text-sm">
            {JSON.stringify(activeContent, null, 2)}
          </pre>
        )}
      </div>
    );
  };

  // Function to handle brochure download
  const handleBrochureDownload = () => {
    if (!brochureLink) {
      alert('Brochure not available for this event');
      return;
    }

    // For Google Drive links, ensure proper download format
    let downloadUrl = brochureLink;
    if (
      brochureLink.includes('drive.google.com') &&
      !brochureLink.includes('export=download')
    ) {
      const fileId = brochureLink.match(/\/d\/([a-zA-Z0-9-_]+)/);
      if (fileId) {
        downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId[1]}`;
      }
    }

    try {
      // Try direct download first (works for most direct file links)
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.style.display = 'none';

      // Set download attribute with a meaningful filename
      const fileName = `${eventTitle.replace(/[^a-z0-9]/gi, '_')}_Brochure.pdf`;
      link.download = fileName;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: open in same window if direct download fails
      window.location.href = downloadUrl;
    }
  };
  // Function to handle problem download
  const handleProblemDownload = () => {
    if (!problemLink) {
      alert('Problem not available for this event');
      return;
    }

    // For Google Drive links, ensure proper download format
    let downloadUrl = problemLink;
    if (
      problemLink.includes('drive.google.com') &&
      !problemLink.includes('export=download')
    ) {
      const fileId = problemLink.match(/\/d\/([a-zA-Z0-9-_]+)/);
      if (fileId) {
        downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId[1]}`;
      }
    }

    try {
      // Try direct download first (works for most direct file links)
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.style.display = 'none';

      // Set download attribute with a meaningful filename
      const fileName = `${eventTitle.replace(/[^a-z0-9]/gi, '_')}_Brochure.pdf`;
      link.download = fileName;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: open in same window if direct download fails
      window.location.href = downloadUrl;
    }
  };

  return (
    <div
      className="flex min-h-[200px] flex-col lg:flex-row justify-between items-stretch gap-6 p-6 
      rounded-2xl border border-gray-200 bg-white shadow-md hover:border-blue-200 hover:shadow-lg transition-all duration-300"
    >
      {/* Left Side */}
      <div className="flex-1 flex flex-col">
        {/* Date & Location */}
        <div className="flex items-center flex-wrap gap-4 mb-4">
          {/* Badge */}
          <span
            className={`inline-flex items-center justify-center ml-2 px-3 py-1 rounded-full text-[12px] tracking-wide font-semibold uppercase shadow-sm
              ${
                eventType === 'Technical'
                  ? 'bg-gradient-to-r from-green-400 to-green-600 text-white'
                  : 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white'
              }`}
          >
            {eventType}
          </span>
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
              className="w-full h-auto object-fill rounded-xl shadow-md"
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
        <div className="flex items-center gap-x-4 max-sm:flex-col max-sm:gap-y-4">
          <button
            className="bg-gradient-to-r cursor-pointer from-orange-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 w-fit shadow-md"
            onClick={() => navigate('/combo')}
          >
            Register Now
          </button>

          {/* Updated brochure button with conditional rendering */}
          {brochureLink ? (
            <button
              onClick={handleBrochureDownload}
              className="bg-gradient-to-r cursor-pointer from-orange-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 w-fit shadow-md"
            >
              Download Rulebook
            </button>
          ) : (
            <button
              disabled
              className="bg-gradient-to-r cursor-not-allowed from-gray-400 to-gray-500 text-white px-8 py-3 rounded-lg font-semibold opacity-60 transition-all duration-300 w-fit shadow-md"
              title="Brochure not available"
            >
              Rulebook Unavailable
            </button>
          )}
          {/* Updated problem button with conditional rendering */}
          {problemLink && (
            <button
              onClick={handleProblemDownload}
              className="bg-gradient-to-r cursor-pointer from-orange-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 w-fit shadow-md"
            >
              Download Problem Statement
            </button>
          )}
        </div>
      </div>

      {/* Right Side - Image for desktop */}
      {eventImage && (
        <div className="max-w-[500px] max-h-[400px] min-h-[200px] hidden lg:block">
          <img
            src={eventImage}
            alt={eventTitle}
            className="w-full h-full object-fill rounded-xl shadow-md"
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
  eventType: PropTypes.string,
  eventTitle: PropTypes.string,
  eventDate: PropTypes.string,
  eventVenue: PropTypes.string,
  eventImage: PropTypes.string,
  brochureLink: PropTypes.string, // Fixed typo here too
  problemLink: PropTypes.string,
};
