import { TeamsCard } from '../../components'
import React from 'react'

export const TeamsPage = () => {

  const chairman = {
      id: 1,
      name:"Balasubramaniam S V",
      designation:"Chairman",
      image:"https://www.bitsathy.ac.in/wp-content/uploads/2022/08/chairman.webp",
      phone:"",
      email:""
    };

  const advisoryCommitee = [
    
    {
      id: 1,
      name:"Sivakumar K",
      designation:"Dean",
      image:"https://www.bitsathy.ac.in/wp-content/uploads/Dr-Sivakumar-K.jpg",
      phone:"9486649777",
      email:"sivakumark@bitsathy.ac.in"
    },
    {
      id: 2,
      name:"Palanisamy C",
      designation:"Principal",
      image:"https://www.bitsathy.ac.in/wp-content/uploads/Principal-dep.jpg",
      phone:"+91 9842217170",
      email:"principal@bitsathy.ac.in"
    },
  ]

  const spocs = [
    {
      id: 1,
      name:"Murugappan S",
      designation:"Finance",
      image:"https://www.bitsathy.ac.in/wp-content/uploads/Dr-Murugappan-S.jpg",
      phone:"+91 9443719535",
      email:"murugappans@bitsathy.ac.in"
    },
    {
      id: 2,
      name:"Sasikumar C",
      designation:"Hospitality - Guest",
      image:"https://www.bitsathy.ac.in/wp-content/uploads/Dr-Sasikumar-C.png",
      phone:"+91 9443579022",
      email:"sasikumarc@bitsathy.ac.in"
    },
    {
      id: 3,
      name:"Sivaraman P",
      designation:"Hospitality - Participants",
      image:"https://www.bitsathy.ac.in/wp-content/uploads/Dr-Sivaraman-P.png",
      phone:"+91",
      email:"sivaramanpsr@bitsathy.ac.in"
    },
    {
      id: 4,
      name:"Jegadheeswaran S",
      designation:"Transport",
      image:"https://www.bitsathy.ac.in/wp-content/uploads/2022/09/Dr-Jegadheeswaran-S.png",
      phone:"+91 8508857666",
      email:"jegadheeswarans@bitsathy.ac.in"
    },
    {
      id: 5,
      name:"Ganesh Babu C",
      designation:"Website,Media & Promotion",
      image:"https://www.bitsathy.ac.in/wp-content/uploads/2022/08/chairman.webp",
      phone:"+91 9842250635",
      email:"ganeshbabuc@bitsathy.ac.in"
    },
    {
      id: 6,
      name:"Swathypriyadharsini P",
      designation:"Registration & Certificate",
      image:"https://www.bitsathy.ac.in/wp-content/uploads/Dr-Swathypriyadharsini-P.png",
      phone:"+91 9047172554",
      email:"swathypriyadharsini@bitsathy.ac.in"
    },
    {
      id: 7,
      name:"Bharathi A",
      designation:"Event Management",
      image:"https://www.bitsathy.ac.in/wp-content/uploads/Dr-Bharathi-A.png",
      phone:"+91 9865530099",
      email:"bharathia@bitsathy.ac.in"
    },
    {
      id: 8,
      name:"Prakash S P",
      designation:"Reception & Venue Arrangement",
      image:"https://www.bitsathy.ac.in/wp-content/uploads/2022/08/chairman.webp",
      phone:"+91 9994926682",
      email:"prakashsp@bitsathy.ac.in"
    },
    
  ]
    
  return (
    <div className='h-[calc(100vh-5rem)] p-4 bg-gradient-to-br from-pink-100 via-blue-50 to-purple-100'>
      <div className=' h-full p-6 mx-auto w-fit overflow-y-auto scroll-smooth flex flex-col gap-y-8 no-scrollbar'>
        <div className='flex flex-col gap-y-5'>
          <p className='text-gray-700 font-semibold text-3xl'>Advisory committee</p>
          <div className='grid grid-cols-4 gap-5'>
            <TeamsCard key={chairman.id} {...chairman} variant={"chairman"}/>
          </div>
        </div>
        <div className='flex flex-col gap-y-5'>
          <p className='text-gray-700 font-semibold text-3xl'>Advisory committee</p>
          <div className='grid grid-cols-4 gap-5'>
            {advisoryCommitee.map((item)=>{
                return (
                    <TeamsCard key={item.id} {...item}/>
                )
            })}
          </div>
        </div>
        <div className='flex flex-col gap-y-5'>
          <p className='text-gray-700 font-semibold text-3xl'>SPOC</p>
          <div className='grid grid-cols-4 gap-5'>
            {spocs.map((item)=>{
                return (
                    <TeamsCard key={item.id} {...item}/>
                )
            })}
          </div>
        </div>
        
      </div>
    </div>
  )
}

