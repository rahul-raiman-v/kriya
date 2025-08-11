import React, { useState, useEffect } from 'react';
import { ArrowLeft, RefreshCw } from 'lucide-react';

export const PageNotFound = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [floatingElements, setFloatingElements] = useState([]);

  useEffect(() => {
    // Trigger entrance animation
    setIsVisible(true);
    
    // Generate floating elements
    const elements = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
      size: 8 + Math.random() * 16
    }));
    setFloatingElements(elements);
  }, []);

  const handleGoBack = () => {
    window.history.back();
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute animate-bounce opacity-20"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
            }}
          >
            <div 
              className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
              style={{
                width: `${element.size}px`,
                height: `${element.size}px`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-10 w-48 h-48 bg-gradient-to-r from-pink-200/25 to-purple-200/25 rounded-full animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>

      {/* Main Content */}
      <div className={`relative z-10 text-center max-w-4xl mx-auto px-6 transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        
        {/* 404 Number with Animation */}
        <div className="relative mb-8">
          <div className="inline-block relative">
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
              404
            </h1>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-3xl animate-pulse rounded-full"></div>
          </div>
        </div>

        {/* Main Message */}
        <div className={`mb-12 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-pulse">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-4 leading-relaxed">
            Looks like you've wandered into uncharted territory.
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            The page you're looking for might have been moved, deleted, or perhaps the URL was mistyped. 
            Let's get you back on track to discover amazing entrepreneurs and innovators!
          </p>
        </div>

        {/* Action Buttons */}
      <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transform transition-all duration-1000 delay-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}>
        
        <button 
          onClick={handleGoBack}
          className="group px-8 py-4 border-2 border-purple-500 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 hover:border-purple-400 transition-all duration-300 flex items-center justify-center"
        >
          <ArrowLeft size={20} className="mr-3 group-hover:animate-pulse" />
          Go Back
        </button>
        
        <button 
          onClick={handleRefresh}
          className="group px-8 py-4 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 hover:shadow-md transition-all duration-300 flex items-center justify-center"
        >
          <RefreshCw size={20} className="mr-3 group-hover:animate-spin" />
          Refresh Page
        </button>
      </div>

      </div>

    </div>
  );
};