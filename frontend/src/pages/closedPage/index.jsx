import React from 'react';

export const ClosedPage = () => {
  return (
    <div className=" overflow-y-auto bg-white flex items-center justify-center px-4 py-4 sm:px-6 lg:px-8">
      <div className="bg-white border-2 border-red-600 shadow-lg rounded-lg p-6 sm:p-8 max-w-lg md:max-w-2xl lg:max-w-3xl w-full text-center">
        {/* Event Cancelled Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-red-600 mb-4">
          Event Cancelled
        </h1>

        {/* Cancellation Info */}
        <p className="text-gray-700 mb-4 text-base sm:text-lg md:text-xl leading-relaxed">
          We regret to inform you that the{' '}
          <span className="font-semibold">Kriya 1.0</span>, originally scheduled
          for{' '}
          <span className="font-semibold">
            September 9–11, 2025 at Bannari Amman Institute of Technology,
            Sathyamangalam
          </span>
          , has been{' '}
          <span className="font-semibold text-red-600">
            cancelled due to administrative reasons
          </span>
          .
        </p>

        {/* Apology Note */}
        <p className="text-gray-700 mb-6 text-base sm:text-lg md:text-xl leading-relaxed">
          We sincerely apologize for any inconvenience this may cause and thank
          you for your understanding. Please check back for updates regarding
          any rescheduling of the event.
        </p>

        {/* Refund Information */}
        <div className="border border-green-400 bg-green-50 text-green-700 px-4 py-3 rounded-lg mb-6">
          <p className="font-semibold text-base sm:text-lg md:text-xl">
            Refund Information
          </p>
          <p className="text-sm sm:text-base md:text-lg">
            Paid students will receive a full refund. Refunds will be processed
            automatically to the original payment method.
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-xs sm:text-sm md:text-lg text-gray-600 mb-8">
          <p>For further inquiries, please contact us at:</p>
          <p className="font-medium">📧 startuphub@bitsathy.ac.in</p>
        </div>

        {/* Upcoming Event Teaser */}
        <div className="bg-blue-50 border border-blue-400 text-blue-700 px-4 py-3 rounded-lg">
          <p className="font-semibold text-base sm:text-lg md:text-xl mb-2">
            Exciting News! 🎉
          </p>
          <p className="text-sm sm:text-base md:text-lg">
            Stay tuned for our <span className="font-semibold">next event</span>
            packed with innovation, learning, and networking opportunities.
            We’ll be announcing details soon!
          </p>
        </div>
      </div>
    </div>
  );
};
