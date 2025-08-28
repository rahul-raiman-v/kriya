import React from 'react';
// import { useNavigate } from 'react-router';

export const Footer = () => {
  // const router = useNavigate();
  return (
    <footer className="relative py-6 bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="border-t border-slate-700 pt-6 text-center"> */}
        <p className="text-sm md:text-base text-slate-400 pt-6 tracking-wide text-center">
          © 2025 <span className="font-semibold text-white">KRIYA</span> - All
          rights reserved. |
          <span className="text-indigo-400 font-medium">
            {' '}
            Empowering Future Innovators
          </span>{' '}
          {/* |
          <span
            className="text-white cursor-pointer font-medium hover:underline"
            onClick={() => router('/developers')}
          >
            {' '}
            Developers Team
          </span> */}
        </p>
        {/* </div> */}
      </div>
    </footer>
  );
};
