import React from "react";
import { CalendarDays, MapPin } from 'lucide-react';
import PropTypes from "prop-types";

export const GuestLectureCard = ({
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
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-stretch gap-6 bg-[#0a0f2b] p-6 rounded-2xl border border-[#1c2345]">
      {/* Left content */}
      <div className="flex flex-col flex-1 gap-4">
        {/* Date & Venue */}
        <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center gap-2 bg-[#18204A] px-4 py-1 rounded-lg text-sm text-white">
                <CalendarDays size={16} />
                <span>{date}</span>
            </div>
            <div className="flex items-center gap-2 text-white text-sm">
                <MapPin size={16} />
                {venue}
            </div>
        </div>

        {/* Speaker */}
        <div>
          <h2 className="text-2xl font-bold text-white uppercase">
            {speakerName}
          </h2>
          <p className="text-[#6cb3ff]">{speakerDesignation}</p>
        </div>

        {/* Talk Title */}
        <h3 className="text-[#6cb3ff] font-medium">
          “{talkTitle}”
        </h3>

        {/* Description */}
        <p className="text-white/80 leading-relaxed">{talkDescription}</p>

        {/* Duration & Date */}
        <p className="text-white/70 font-medium">
          Duration : {duration}
        </p>

        {/* Button */}
        <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition w-fit">
          {buttonLabel}
        </button>
      </div>

      {/* Image */}
      <div className="flex-shrink-0 w-full md:w-1/3">
        <img
          src={eventImage}
          alt={talkTitle}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

GuestLectureCard.propTypes = {
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
};