import { TeamsCard } from '../../components'
import React from 'react'

export const DevelopersPage = () => {
      const developers = [
    {
      id: 1,
      name:"Rahul P",
      designation:"Frontend Developer",
      image:"https://media.licdn.com/dms/image/v2/D5603AQFLAsMFCY02pA/profile-displayphoto-scale_400_400/B56Zh_9s15HcAk-/0/1754493539086?e=1758153600&v=beta&t=qe2o65Q3QcGwL3t6QN9doIlE3kdhfQgeMrW1v2AXyKs",
      phone:"+91 9361212442",
      email:"rahul.cs23@bitsathy.ac.in"
    },
    {
      id: 2,
      name:"Bhadri Prabhu K",
      designation:"Frontend Developer",
      image:"https://media.licdn.com/dms/image/v2/D4E03AQFY5FVbS7txjg/profile-displayphoto-shrink_400_400/B4EZZcsIjQHQAg-/0/1745311796057?e=1758153600&v=beta&t=m2g-oj0gWtaR2ud6g9RoMNHr4qyvCAeb0mputI6XjIU",
      phone:"+91 8825728740",
      email:"bhadrikeshav0612@gmail.com"
    },
    {
      id: 3,
      name:"Dharshan S",
      designation:"Frontend Developer",
      image:"https://media.licdn.com/dms/image/v2/D5603AQFliUBlxW7wew/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725974097274?e=1758153600&v=beta&t=zaZFr7sX9A_sEa88oeHu7fnKBWQqWbLUQM00bg5e6Nk",
      phone:"+91 9080155375",
      email:"voicepython1@gmail.com"
    },
    {
      id: 4,
      name:"Tridev Balaji R",
      designation:"Backend Developer",
      image:"https://media.licdn.com/dms/image/v2/D4D03AQFtjCnG--wagg/profile-displayphoto-scale_400_400/B4DZf0_bf5GgAk-/0/1752161960319?e=1758153600&v=beta&t=HtcIwpFSroZDNL4DHqgwMXCEGWfQAqhqqonrdnlzgHc",
      phone:"+91 6379269278",
      email:"tridev.2416@gmail.com"
    },
    {
      id: 5,
      name:"Raksith S S",
      designation:"Frontend Developer",
      image:"https://media.licdn.com/dms/image/v2/D5603AQHb3uPPbiq97w/profile-displayphoto-shrink_400_400/B56ZRvKY1aHsAk-/0/1737031782713?e=1758153600&v=beta&t=ZBCcrSykdg-r2AVuKigQCboNah_4JGBZqzRpo6DXpwk",
      phone:"+91 9361255958",
      email:"raksith.cs23@bitsathy.ac.in"
    },
    {
      id: 6,
      name:"Deepak G S",
      designation:"Frontend Developer",
      image:"https://media.licdn.com/dms/image/v2/D4D03AQF6Nz6BUWet2g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729308032708?e=1758153600&v=beta&t=8mhvPE4vfZKaYq9lyh3YEqRUYryCmdBTCCDY3pPbiMU",
      phone:"+91 9080458494",
      email:"deepak.cs23@bitsathy.ac.in"
    },
    
  ]
  return (
    <div className='bg-white p-5 no-scrollbar h-[calc(100dvh-5.3rem)] overflow-y-auto'>
      <div className='flex flex-col gap-y-5'>
                <p className='text-gray-700 font-semibold text-3xl text-center'>Students Co-ordinators</p>
                <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5'>
                  {developers.map((item)=>{
                      return (
                          <TeamsCard key={item.id} {...item} variant={"code"}/>
                      )
                  })}
                </div>
              </div>
    </div>
  )
}

