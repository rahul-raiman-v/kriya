import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';
import React from 'react';



export const TimelineComponent = ({items=[]}) => {
  return (
	<div >
		<Timeline position="alternate">
		{items.map((item)=>{
			return(
			<TimelineItem key={item.date}>
				<TimelineSeparator>
				<TimelineDot style={{ width:"10px" , height:"10px" , background:"#2987D8"}} />
				<TimelineConnector style={{ width: "7px", background:"#2987D8",}} />
				</TimelineSeparator>
				<TimelineContent>
				<div className='border border-gray-300 p-3 rounded-md flex gap-3 mt-10 mb-5 shadow-lg backdrop-blur-lg'>
					<div className='flex flex-col gap-y-1 '>
					<p className=' text-neutral-50 font-medium text-left'>{item.time}</p>
					<p className='text-lg text-yellow-50 font-semibold text-left'>{item.title}</p>
					<p className=' font-semibold text-teal-50 text-left'>{item?.description}</p>
					</div>
					<img src={item.image} alt="" className='w-60 h-40 aspect-auto rounded-lg'/>
				</div>
				</TimelineContent>
			</TimelineItem>
			)
		})}
		</Timeline>
	</div>
  );
};
