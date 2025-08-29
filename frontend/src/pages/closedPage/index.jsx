import React from 'react';

export const ClosedPage = () => {
  return (
    <div className="overflow-y-auto bg-white flex items-center justify-center px-4 py-4 sm:px-6 lg:px-8">
      <div className="bg-white border-2 border-blue-600 shadow-lg rounded-lg p-6 sm:p-8 max-w-lg md:max-w-2xl lg:max-w-3xl w-full text-center">
        {/* Event Update Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-blue-600 mb-4">
          Event Update
        </h1>

        {/* Info */}
        <p className="text-gray-700 mb-4 text-base sm:text-lg md:text-xl leading-relaxed">
          We’re making some{' '}
          <span className="font-semibold">important updates</span> to{' '}
          <span className="font-semibold">Kriya 1.0</span>, originally planned
          for{' '}
          <span className="font-semibold">
            September 9–11, 2025 at Bannari Amman Institute of Technology,
            Sathyamangalam
          </span>
          .
        </p>

        {/* Apology/Understanding Note */}
        <p className="text-gray-700 mb-6 text-base sm:text-lg md:text-xl leading-relaxed">
          Thank you for your enthusiasm and support. We appreciate your patience
          as we work to deliver an even better experience. Please stay tuned for
          further announcements.
        </p>

        {/* Refund Information */}
        <div className="border border-green-400 bg-green-50 text-green-700 px-4 py-3 rounded-lg mb-6">
          <p className="font-semibold text-base sm:text-lg md:text-xl">
            Registration & Refunds
          </p>
          <p className="text-sm sm:text-base md:text-lg">
            For students who have already registered, your payments remain
            secure. Refunds (if required) will be processed automatically to the
            original payment method.
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-xs sm:text-sm md:text-lg text-gray-600 mb-8">
          <p>For any inquiries, feel free to reach out:</p>
          <p className="font-medium">📧 startuphub@bitsathy.ac.in</p>
          <a
            href="tel:+919488570421"
            className="text-slate-700 hover:text-blue-600 font-medium"
          >
            📞 +91 94885 70421
          </a>
        </div>

        {/* Upcoming Event Teaser */}
        <div className="bg-yellow-50 border border-yellow-400 text-yellow-700 px-4 py-3 rounded-lg">
          <p className="font-semibold text-base sm:text-lg md:text-xl mb-2">
            Something Exciting is on the Way! 🚀
          </p>
          <p className="text-sm sm:text-base md:text-lg">
            Get ready for our upcoming{' '}
            <span className="font-semibold">innovation-packed event</span>
            featuring learning, networking, and opportunities. Stay tuned for
            the official announcement!
          </p>
        </div>
      </div>
    </div>
  );
};
