import { useTimelineStore } from '../../store';
import { TimelineComponent } from '../../components';
import React from 'react';



export const TimelinePage = () => {
  const items = [
    {
      time: '8:30 AM',
      title: 'Registration & Networking',
      description:
        'Check in, grab your badge, and connect with fellow attendees over light refreshments before the sessions begin.',
      image:"/registration.jpg",
      venue:"Main Auditorium"
    },
    {
      time: '9:30 AM',
      title: 'Inauguration Ceremony',
      description:
        'Officially open the event with a welcome address and introduction to the day’s program.',
      image:"/inauguration.jpg",
      venue:"Computer Centre"
    },
    {
      time: '10:00 AM',
      title: 'Media Lounge',
      description:
        'Engage with industry experts in an interactive media talk, exploring trends, insights, and the latest stories.',
        image:"/registration.jpg",
        venue:"Main Auditorium"
    },
    {
      time: '11:30 AM',
      title: 'Panel Discussion 01 ',
      description:
        'Leaders from GUVI, Palmera, Green Pod Labs, and media share strategies for fostering innovation, driving inclusivity, and creating meaningful societal and business impact through entrepreneurship.',
        image:"/registration.jpg",
        venue:"Main Auditorium"
    },
    {
      time: '02:00 PM',
      title: 'Design Thinking & Ideation',
      description:
        'Hands-on session by ISBA, CEO–TCE, and Amritha Institute on creative problem-solving and innovative idea development.',
        image:"/registration.jpg",
        venue:"Main Auditorium"
    },
    {
      time: '02:00 PM',
      title: 'IP Drafting for Startups',
      description:
        'Ms. Ashraf Neesa, Infosys Patent Manager, shares practical strategies for protecting innovations through effective intellectual property drafting.',
        image:"/registration.jpg",
        venue:"Main Auditorium"
    },
    {
      time: '02:30 PM',
      title: 'Hackathon',
      description:
        'Final evaluation of hackathon projects followed by awarding prizes to the top two teams for their innovative solutions.',
      image:"/registration.jpg",
      venue:"Main Auditorium"
    },
    {
      time: '02:30 PM',
      title: 'Startup Nexus',
      description:
        'Closing review of startup pitches, recognizing outstanding ideas, and awarding prizes to the top two innovative ventures.',
        image:"/registration.jpg",
        venue:"Main Auditorium"
    },
    {
      time: '06:00 PM',
      title: 'Cultural Evening',
      description:
        'An enchanting showcase in the Main Auditorium featuring four captivating classical dance performances and four soulful musical acts, celebrating artistic talent and cultural heritage.',
        image:"/registration.jpg",
        venue:"Main Auditorium"
    },

  ];

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
