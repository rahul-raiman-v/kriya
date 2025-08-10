import React from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));



export const HomePage = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  return (
    <div className='w-full h-screen relative'>
      <div className='fixed inset-0 w-full h-full'>
        {isLoading && (
          <img src="/homebg.jpg" alt="" className='w-full h-full object-cover' />
        ) }
        <React.Suspense fallback={null}>
          <Spline scene="https://prod.spline.design/vIo2L99RsDQBQ1yd/scene.splinecode" onLoad={() => setIsLoading(false)} />
        </React.Suspense>
      </div>
          <div className='relative z-10'>
            Hello
          </div>
    </div>
  );
};
