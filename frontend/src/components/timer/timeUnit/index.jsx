import React from 'react';

export const TimeUnit = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-pink-600 p-4 rounded-lg shadow-lg w-24 h-24 md:w-32 md:h-32">
      <span className="text-4xl md:text-6xl font-bold text-white tracking-wider">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-xs md:text-sm font-semibold uppercase text-white tracking-widest mt-1">
        {label}
      </span>
    </div>
  );
};
