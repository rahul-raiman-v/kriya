import React from 'react';

export const ClosedPage = () => {
  return (
    <div className="h-[calc(100dvh-12.2rem)] bg-white flex items-center justify-center">
      <div className="bg-white border-2 border-red-600 shadow-lg rounded-lg p-8 max-w-lg md:max-w-2xl text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-red-600 mb-4">
          Event Cancelled
        </h1>

        <p className="text-gray-700 mb-4 md:text-xl">
          We regret to inform you that the{' '}
          <span className="font-semibold">Kriya 1.0</span>, originally scheduled
          for
          <span className="font-semibold">
            September 9-11 , 2025 at Bannari Amman Institute of Technology,
            Sathyamangalam
          </span>
          , has been
          <span className="font-semibold text-red-600">
            {' '}
            cancelled due to administrative reasons
          </span>
          .
        </p>

        <p className="text-gray-700 mb-6 md:text-xl">
          We sincerely apologize for any inconvenience this may cause and thank
          you for your understanding. Please check back for updates regarding
          any rescheduling of the event.
        </p>

        <div className=" border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6">
          <p className="font-semibold md:text-xl">Refund Information</p>
          <p className="md:text-lg">
            Paid students will receive a full refund. Refunds will be processed
            automatically to the original payment method.
          </p>
        </div>

        <div className="text-sm text-gray-600 md:text-lg">
          <p>For further inquiries, please contact us at:</p>
          <p>📧 startuphub@bitsathy.ac.in</p>
        </div>
      </div>
    </div>
  );
};
