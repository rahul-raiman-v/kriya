import React from 'react';



export const HomePage = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  return (
    <div className='w-full h-screen relative'>
          <div className='relative z-10'>
            Hello
          </div>
    </div>
  );
};
