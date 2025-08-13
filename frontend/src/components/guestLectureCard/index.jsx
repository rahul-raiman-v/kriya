import React, { useState, useMemo } from "react";
import { CalendarDays, MapPin } from "lucide-react";
import PropTypes from "prop-types";
import { ContactCard } from "../../components";
import { useNavigate } from "react-router";

export const GuestLectureCard = ({
  eventTabs = [],
  date,
  venue,
  time,
  speakerName,
  speakerDesignation,
  talkTitle,
  talkDescription,
  duration,
  eventImage,
  buttonLabel = "Join now",
  isSelected = false,
}) => {
  const navigate = useNavigate();

  const tabs = useMemo(() => {
    const baseTabs = [
      {
        id: "description",
        title: "Description",
        content: (
          <div className="space-y-3">
            <h4 className="text-blue-700 font-semibold text-base mb-2">
              Guest Lecture
            </h4>
            <p className="text-gray-700 leading-relaxed mb-3">
              {talkDescription}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              <div>
                <span className="font-semibold text-gray-800">
                  Duration:
                  <span className="text-gray-600 ml-2">{duration}</span> | Time:
                  <span className="text-gray-600 ml-2">{time}</span>
                </span>
              </div>
            </div>
          </div>
        ),
      },
    ];

    const contactTab = eventTabs.find((tab) => tab.id === "contact");
    if (contactTab && Array.isArray(contactTab.content)) {
      baseTabs.push({
        id: "contact",
        title: "Contact",
        content: <ContactCard contacts={contactTab.content} />,
      });
    }

    return baseTabs;
  }, [eventTabs, talkDescription, duration, time]);

  const [activeTab, setActiveTab] = useState(tabs[0]?.title || "Description");
  const activeContent =
    tabs.find((tab) => tab.title === activeTab)?.content || null;

  return (
    <div
      className={`group relative flex flex-col lg:flex-row justify-between items-stretch gap-6 p-4 sm:p-6 rounded-2xl border transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1 border-transparent hover:border-gray-300 shadow-xl hover:shadow-2xl bg-gradient-to-br from-white to-gray-50 hover:from-white hover:to-blue-50 ${
        isSelected ? "border-blue-500 shadow-2xl" : ""
      }`}
      aria-selected={isSelected}
    >
      {/* Left Side */}
      <div className="flex-1 flex flex-col">
        {/* Date & Location */}
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 px-3 py-1 rounded-lg text-xs sm:text-sm text-white shadow-sm">
            <CalendarDays size={16} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <MapPin size={16} />
            <span>{venue}</span>
          </div>
        </div>

        {/* Speaker Info + Tablet Image */}
        <div className="mb-4 flex flex-col sm:flex-row sm:items-start sm:gap-4">
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl md:text-3xl italic text-gray-600 mb-1">
              {talkTitle}
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">
              {speakerName}
            </h2>
            <p className="text-blue-600 font-medium text-base sm:text-lg">
              {speakerDesignation}
            </p>
          </div>

          {/* Small Image for Tablet next to Title */}
          {eventImage && (
            <div className="hidden sm:block lg:hidden sm:w-[150px] sm:h-[150px] flex-shrink-0">
              <img
                src={eventImage}
                alt={talkTitle}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          )}
        </div>

        {/* Image under title for mobile */}
        {eventImage && (
          <div className="mb-4 sm:hidden">
            <img
              src={eventImage}
              alt={talkTitle}
              className="w-full max-h-64 object-cover rounded-xl"
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
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md transform scale-105"
                    : "border border-gray-300 text-gray-700"
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
        <div className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base flex-1 overflow-y-auto max-h-60 px-1">
          {activeContent}
        </div>

        {/* Register Button */}
        <button
          className="bg-gradient-to-r cursor-pointer from-orange-500 to-pink-500 text-white px-5 sm:px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition w-fit text-sm sm:text-base"
          onClick={() => navigate("/combo")}
        >
          {buttonLabel}
        </button>
      </div>

      {/* Right Side - Large Image for Desktop */}
      {eventImage && (
        <div className="hidden lg:block w-full md:w-[300px] lg:w-[400px] max-h-[350px]">
          <img
            src={eventImage}
            alt={talkTitle}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      )}
    </div>
  );
};

GuestLectureCard.propTypes = {
  eventTabs: PropTypes.array,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  speakerName: PropTypes.string.isRequired,
  speakerDesignation: PropTypes.string.isRequired,
  talkTitle: PropTypes.string.isRequired,
  talkDescription: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  eventImage: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string,
  isSelected: PropTypes.bool,
};
