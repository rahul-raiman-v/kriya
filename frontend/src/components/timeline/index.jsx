import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';
import { Clock, MapPin } from 'lucide-react';
import React from 'react';



export const TimelineComponent = ({items=[],ref,setIsPaused}) => {
  return (
	<div className='h-screen overflow-auto' ref={ref}>
		<Timeline position="alternate" >
		{items.map((item)=>{
			return(
			<TimelineItem key={item.date} >
				<TimelineSeparator>
				<TimelineDot style={{ width:"10px" , height:"10px" , background:"#2987D8"}} />
				<TimelineConnector style={{ width: "7px", background:"#2987D8",}} />
				</TimelineSeparator>
				<TimelineContent>
				<div className='border border-gray-300 p-4 bg-white rounded-md flex gap-3 mt-10 mb-5 shadow-lg backdrop-blur-lg cursor-pointer' onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
					<div className='flex flex-col gap-y-1 '>
					<div className='flex items-center gap-x-3'>
						<div className='flex items-center gap-x-1'>
							<Clock  className='size-4 text-gray-700' />
							<p className=' text-gray-700 font-medium text-left'>{item.time}</p>
						</div>
						<div className='flex items-center gap-x-1'>
							<MapPin  className='size-4 text-gray-700' />
							<p className=' text-gray-700 font-medium text-left'>{item?.venue}</p>
						</div>

					</div>
					<p className='text-lg text-gray-700 font-semibold text-left'>{item.title}</p>
					<p className=' font-semibold text-gray-700 text-left'>{item?.description}</p>
					</div>
					<img src={ "/registration.jpg"} alt="" className='w-60 h-40 aspect-auto rounded-lg'/>
				</div>
				</TimelineContent>
			</TimelineItem>
			)
		})}
		</Timeline>
	</div>
  );
};
