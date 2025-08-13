import { TeamsCard } from '../../components'
import React from 'react'

React.lazy(()=> import('../../components'));

React.lazy(()=> import('react'));

export const TeamsPage = () => {
  

  const advisoryCommitee = [
    {
      id: 1,
      name:"Balasubramaniam S V",
      designation:"Chairman",
      image:"https://www.bitsathy.ac.in/wp-content/uploads/2022/08/chairman.webp",
      phone:"",
      email:""
    },
    
    {
      id: 2,
      name:"Sivakumar K",
      designation:"Dean",
      image:"https://www.bitsathy.ac.in/wp-content/uploads/Dr-Sivakumar-K.jpg",
      phone:"",
      email:""
    },
    {
      id: 3,
      name:"Palanisamy C",
      designation:"Principal",
      image:"https://www.bitsathy.ac.in/wp-content/uploads/Principal-dep.jpg",
      phone:"",
      email:""
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
      phone:"+91 9842818251",
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
      image:"https://www.bitsathy.ac.in/wp-content/uploads/2022/10/Dr-Ganesh-Babu-C.png",
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
      designation:"Reception & Venue",
      image:"https://www.bitsathy.ac.in/wp-content/uploads/Prakash-S-P.jpg",
      phone:"+91 9994926682",
      email:"prakashsp@bitsathy.ac.in"
    },
    
  ]

  const faculties = [
    {
      id: 1,
      name:"Kirupa Sankar M",
      designation:"Ideathon",
      image:"https://www.bitsathy.ac.in/wp-content/uploads/Dr-Kirupa-Sankar-M.png",
      phone:"+91 9994624674",
      email:"kirupasankarm@bitsathy.ac.in"
    },
    {
      id: 2,
      name:"Vaidhyanathan B",
      designation:"Hackthon",
      image:"https://www.bitsathy.ac.in/wp-content/uploads/Vaidhyanathan-B.jpg",
      phone:"+91 7395887646",
      email:"vaidhyanathan@bitsathy.ac.in"
    },
    {
      id: 3,
      name:"Prathap M R",
      designation:"Problem Solving",
      image:"https://www.bitsathy.ac.in/wp-content/uploads/Mr-Prathap-M-R.jpg",
      phone:"+91 8344480485",
      email:"prathap@bitsathy.ac.in"
    },
    {
      id: 4,
      name:"Kalaiyarasi M",
      designation:"Product Expo",
      image:"https://www.bitsathy.ac.in/wp-content/uploads/Mrs-Kalaiyarasi-M.png",
      phone:"+91 9842981160",
      email:"kalaiyarasim@bitsathy.ac.in"
    },
    {
      id: 5,
      name:"Dhanasekar R",
      designation:"Workshop",
      image:"https://www.bitsathy.ac.in/wp-content/uploads/Mr-Dhanasekar-R.png",
      phone:"+91 8508457659",
      email:"dhanasekar@bitsathy.ac.in"
    },
    {
      id: 6,
      name:"Nandhini K M",
      designation:"Quiz",
      image:"https://www.bitsathy.ac.in/wp-content/uploads/Ms-Nandhini-K-M.png",
      phone:"+91 9788005115",
      email:"nandhinikm@bitsathy.ac.in"
    },
    {
      id: 7,
      name:"Sakthiya Ram S",
      designation:"Debate",
      image:"https://www.bitsathy.ac.in/wp-content/uploads/Mr-Sakthiya-Ram-S.jpg",
      phone:"+91 9443074586",
      email:"sakthiyaram@bitsathy.ac.in"
    },
    {
      id: 8,
      name:"Kumaresan K",
      designation:"Connections",
      image:"https://www.bitsathy.ac.in/wp-content/uploads/Prof.-Kumaresan-K.jpg",
      phone:"+91 6374412828",
      email:"kumaresank@bitsathy.ac.in"
    },
    
  ]


  const students = [
    {
      id: 1,
      name:"Surya Raj S",
      designation:"Overall Incharge",
      image:"https://codecirclebitsathy.netlify.app/images/team/surya.jpg",
      phone:"+91 8072137522",
      email:"VICE PRESIDENT"
    },
    {
      id: 2,
      name:"Ahill Pranav M",
      designation:"Overall Incharge",
      image:"https://res.cloudinary.com/dsz2br3qg/image/upload/v1755083167/IMG_4528_1_afbily.jpg",
      phone:"+91 9940911411",
      email:"PEOPLE MANAGEMENT COORDINATOR"
    },
    {
      id: 3,
      name:"Swetha Gayathri V",
      designation:"Overall Incharge",
      image:"https://codecirclebitsathy.netlify.app/images/team/swetha.jpg",
      phone:"+91 9342896561",
      email:"JOINT SECRETARY"
    },
    {
      id: 4,
      name:"Preethika S",
      designation:"Overall Incharge",
      image:"https://codecirclebitsathy.netlify.app/images/team/preethika.png",
      phone:"+91 6381878288",
      email:"EVENT COORDINATOR OF CLUB"
    },
    
  ]




  
    
  return (
    <div className='h-[calc(100vh-5rem)] p-4 bg-gradient-to-br from-pink-100 via-blue-50 to-purple-100 '>
      <div className=' h-full p-6 mx-auto w-fit  scroll-smooth flex flex-col gap-y-8 no-scrollbar overflow-y-auto'>
        <div className='flex flex-col gap-y-5'>
          <p className='text-gray-700 font-semibold text-3xl text-center'>Advisory committee</p>
          <div className='grid gap-5 mx-auto md:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:grid-cols-3'>
            {advisoryCommitee.map((item)=>{
                return (
                    <TeamsCard key={item.id} {...item} variant={"chairman"}/>
                )
            })}
          </div>
        </div>
        <div className='flex flex-col gap-y-5'>
          <p className='text-gray-700 font-semibold text-3xl text-center'>SPOC</p>
          <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5'>
            {spocs.map((item)=>{
                return (
                    <TeamsCard key={item.id} {...item} variant={"chairman"}/>
                )
            })}
          </div>
        </div>
        <div className='flex flex-col gap-y-5'>
          <p className='text-gray-700 font-semibold text-3xl text-center'>Falculty Co-ordinators</p>
          <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5'>
            {faculties.map((item)=>{
                return (
                    <TeamsCard key={item.id} {...item}/>
                )
            })}
          </div>
        </div>
        <div className='flex flex-col gap-y-5'>
          <p className='text-gray-700 font-semibold text-3xl text-center'>Students Co-ordinators</p>
          <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5'>
            {students.map((item)=>{
                return (
                    <TeamsCard key={item.id} {...item} variant={"code"}/>
                )
            })}
          </div>
        </div>
        
      </div>
    </div>
  )
}

