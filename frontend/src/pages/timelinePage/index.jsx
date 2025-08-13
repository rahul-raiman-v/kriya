import { useTimelineStore } from '../../store';
import { TimelineComponent } from '../../components';
import React from 'react';



export const TimelinePage = () => {

  const {timeline} = useTimelineStore();

  const containerRef = React.useRef(null);
  const scrollInterval = React.useRef(null);
  const [isPaused, setIsPaused] = React.useState(false);

  React. useEffect(() => {
    if (!isPaused) {
      scrollInterval.current = setInterval(() => {
        if (containerRef.current) {
          containerRef.current.scrollTop += 1;

        }
      }, 20);
    } else {
      clearInterval(scrollInterval.current);
    }

    return () => clearInterval(scrollInterval.current);
  }, [isPaused]);


  return (
    <div className="p-3 relative">
      <div className='fixed inset-0 w-full h-full bg-gradient-to-br from-pink-100 via-blue-50 to-purple-100'>
        {/* <TimelineBackground/>    */}
      </div>
      <TimelineComponent items={timeline} ref={containerRef} setIsPaused={setIsPaused}/>
      {/* <div className="pointer-events-none absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-black/100 to-transparent" /> */}
    </div>
  );
};
