import { TeamsCard } from '../../components';
import React from 'react';

export const TeamsPage = () => {
  const advisoryCommitee = [
    {
      id: 1,
      name: 'Balasubramaniam S V',
      designation: 'Chairman',
      image:
        'https://www.bitsathy.ac.in/wp-content/uploads/2022/08/chairman.webp',
      phone: '',
      email: '',
    },

    {
      id: 2,
      name: 'Sivakumar K',
      designation: 'Dean',
      image: 'https://www.bitsathy.ac.in/wp-content/uploads/Dr-Sivakumar-K.jpg',
      phone: '',
      email: '',
    },
    {
      id: 3,
      name: 'Palanisamy C',
      designation: 'Principal',
      image: 'https://www.bitsathy.ac.in/wp-content/uploads/Principal-dep.jpg',
      phone: '',
      email: '',
    },
  ];

  // const faculty = {
  //   id: 10,
  //   name: 'Dr Murugappan S',
  //   designation: '',
  //   image: 'https://www.bitsathy.ac.in/wp-content/uploads/Dr-Murugappan-S.jpg',
  //   phone: '+91 8344480485',
  //   email: 'murugappans@bitsathy.ac.in',
  // };

  const spocs = [
    {
      id: 1,
      name: 'Dr Balakrishnaraja R',
      designation: '',
      image:
        'https://www.bitsathy.ac.in/wp-content/uploads/Dr.Balakrishnaraja-R.jpg',
      phone: '+91 9443719535',
      email: 'murugappans@bitsathy.ac.in',
    },
    // {
    //   id: 2,
    //   name: 'Dr Sasikumar C',
    //   designation: '',
    //   image: 'https://www.bitsathy.ac.in/wp-content/uploads/Dr-Sasikumar-C.png',
    //   phone: '+91 9443579022',
    //   email: 'sasikumarc@bitsathy.ac.in',
    // },
    // {
    //   id: 3,
    //   name: 'Dr Sivaraman P',
    //   designation: '',
    //   image: 'https://www.bitsathy.ac.in/wp-content/uploads/Dr-Sivaraman-P.png',
    //   phone: '+91 9842818251',
    //   email: 'sivaramanpsr@bitsathy.ac.in',
    // },
    // {
    //   id: 4,
    //   name: 'Dr Jegadheeswaran S',
    //   designation: '',
    //   image:
    //     'https://www.bitsathy.ac.in/wp-content/uploads/2022/09/Dr-Jegadheeswaran-S.png',
    //   phone: '+91 8508857666',
    //   email: 'jegadheeswarans@bitsathy.ac.in',
    // },
    {
      id: 5,
      name: 'Dr Ganesh Babu C',
      designation: '',
      image:
        'https://www.bitsathy.ac.in/wp-content/uploads/2022/10/Dr-Ganesh-Babu-C.png',
      phone: '+91 9842250635',
      email: 'ganeshbabuc@bitsathy.ac.in',
    },
    {
      id: 6,
      name: 'Dr Swathypriyadharsini P',
      designation: '',
      image:
        'https://www.bitsathy.ac.in/wp-content/uploads/Dr-Swathypriyadharsini-P.png',
      phone: '+91 9047172554',
      email: 'swathypriyadharsini@bitsathy.ac.in',
    },
    // {
    //   id: 7,
    //   name: 'Dr Bharathi A',
    //   designation: '',
    //   image: 'https://www.bitsathy.ac.in/wp-content/uploads/Dr-Bharathi-A.png',
    //   phone: '+91 9865530099',
    //   email: 'bharathia@bitsathy.ac.in',
    // },
    {
      id: 9,
      name: 'Prathap M R',
      designation: '',
      image: 'https://www.bitsathy.ac.in/wp-content/uploads/Mr-Prathap-M-R.jpg',
      phone: '+91 8344480485',
      email: 'prathap@bitsathy.ac.in',
    },
  ];

  // const faculties = [
  //   {
  //     id: 1,
  //     name: 'Dr Kirupa Sankar M',
  //     designation: 'IdeaForge',
  //     image:
  //       'https://www.bitsathy.ac.in/wp-content/uploads/Dr-Kirupa-Sankar-M.png',
  //     phone: '+91 9994624674',
  //     email: 'kirupasankarm@bitsathy.ac.in',
  //   },
  //   {
  //     id: 2,
  //     name: 'Vaidhyanathan B',
  //     designation: 'VISION HACK',
  //     image:
  //       'https://www.bitsathy.ac.in/wp-content/uploads/Vaidhyanathan-B.jpg',
  //     phone: '+91 7395887646',
  //     email: 'vaidhyanathan@bitsathy.ac.in',
  //   },
  //   {
  //     id: 3,
  //     name: 'Prathap M R',
  //     designation: 'BREAKTHRU',
  //     image: 'https://www.bitsathy.ac.in/wp-content/uploads/Mr-Prathap-M-R.jpg',
  //     phone: '+91 8344480485',
  //     email: 'prathap@bitsathy.ac.in',
  //   },
  //   {
  //     id: 4,
  //     name: 'Nandhini K M',
  //     designation: 'QUIZXtreme',
  //     image:
  //       'https://www.bitsathy.ac.in/wp-content/uploads/Ms-Nandhini-K-M.png',
  //     phone: '+91 9788005115',
  //     email: 'nandhinikm@bitsathy.ac.in',
  //   },
  //   {
  //     id: 5,
  //     name: 'Dr Kalaiyarasi M',
  //     designation: 'CREOVATE',
  //     image:
  //       'https://www.bitsathy.ac.in/wp-content/uploads/Mrs-Kalaiyarasi-M.png',
  //     phone: '+91 9842981160',
  //     email: 'kalaiyarasim@bitsathy.ac.in',
  //   },
  //   {
  //     id: 6,
  //     name: 'Dr Dhanasekar R',
  //     designation: 'Workshop',
  //     image:
  //       'https://www.bitsathy.ac.in/wp-content/uploads/Mr-Dhanasekar-R.png',
  //     phone: '+91 8508457659',
  //     email: 'dhanasekar@bitsathy.ac.in',
  //   },

  //   {
  //     id: 7,
  //     name: 'Dr Sakthiya Ram S',
  //     designation: 'CONVO CLASH',
  //     image:
  //       'https://www.bitsathy.ac.in/wp-content/uploads/Mr-Sakthiya-Ram-S.jpg',
  //     phone: '+91 9443074586',
  //     email: 'sakthiyaram@bitsathy.ac.in',
  //   },
  //   {
  //     id: 8,
  //     name: 'Kumaresan K',
  //     designation: 'Guess In Glance',
  //     image:
  //       'https://www.bitsathy.ac.in/wp-content/uploads/Prof.-Kumaresan-K.jpg',
  //     phone: '+91 6374412828',
  //     email: 'kumaresank@bitsathy.ac.in',
  //   },
  //   {
  //     id: 9,
  //     name: 'Dr Haritha J',
  //     designation: 'BRAND ALCHEMY',
  //     image: 'https://www.bitsathy.ac.in/wp-content/uploads/Mrs-Haritha-J.png',
  //     phone: '+91 8072285633',
  //     email: 'haritha@bitsathy.ac.in',
  //   },
  // ];

  const students = [
    {
      id: 1,
      name: 'Surya Raj S',
      designation: 'Overall Incharge',
      image: 'https://codecirclebitsathy.netlify.app/images/team/surya.jpg',
      phone: '+91 8072137522',
      email: 'VICE PRESIDENT',
    },
    {
      id: 2,
      name: 'Ahill Pranav M',
      designation: 'Overall Incharge',
      image:
        'https://res.cloudinary.com/dsz2br3qg/image/upload/v1755083167/IMG_4528_1_afbily.jpg',
      phone: '+91 9940911411',
      email: 'PEOPLE MANAGEMENT COORDINATOR',
    },
    {
      id: 3,
      name: 'Swetha Gayathri V',
      designation: 'Overall Incharge',
      image: 'https://codecirclebitsathy.netlify.app/images/team/swetha.jpg',
      phone: '+91 9342896561',
      email: 'JOINT SECRETARY',
    },
    {
      id: 4,
      name: 'Preethika S',
      designation: 'Overall Incharge',
      image: 'https://codecirclebitsathy.netlify.app/images/team/preethika.png',
      phone: '+91 6381878288',
      email: 'EVENT COORDINATOR OF CLUB',
    },
  ];

  const developers = [
    {
      id: 1,
      name: 'Rahul P',
      designation: 'Frontend Developer',
      image:
        'https://media.licdn.com/dms/image/v2/D5603AQFLAsMFCY02pA/profile-displayphoto-scale_400_400/B56Zh_9s15HcAk-/0/1754493539086?e=1758153600&v=beta&t=qe2o65Q3QcGwL3t6QN9doIlE3kdhfQgeMrW1v2AXyKs',
      phone: '+91 9361212442',
      email: 'rahul.cs23@bitsathy.ac.in',
    },
    {
      id: 2,
      name: 'Bhadri Prabhu K',
      designation: 'Frontend Developer',
      image:
        'https://media.licdn.com/dms/image/v2/D4E03AQFY5FVbS7txjg/profile-displayphoto-shrink_400_400/B4EZZcsIjQHQAg-/0/1745311796057?e=1758153600&v=beta&t=m2g-oj0gWtaR2ud6g9RoMNHr4qyvCAeb0mputI6XjIU',
      phone: '+91 8825728740',
      email: 'bhadrikeshav0612@gmail.com',
    },
    {
      id: 3,
      name: 'Dharshan S',
      designation: 'Frontend Developer',
      image:
        'https://media.licdn.com/dms/image/v2/D5603AQFliUBlxW7wew/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725974097274?e=1758153600&v=beta&t=zaZFr7sX9A_sEa88oeHu7fnKBWQqWbLUQM00bg5e6Nk',
      phone: '+91 9080155375',
      email: 'voicepython1@gmail.com',
    },
    {
      id: 4,
      name: 'Tridev Balaji R',
      designation: 'Backend Developer',
      image:
        'https://media.licdn.com/dms/image/v2/D4D03AQFtjCnG--wagg/profile-displayphoto-scale_400_400/B4DZf0_bf5GgAk-/0/1752161960319?e=1758153600&v=beta&t=HtcIwpFSroZDNL4DHqgwMXCEGWfQAqhqqonrdnlzgHc',
      phone: '+91 6379269278',
      email: 'tridev.2416@gmail.com',
    },
    {
      id: 5,
      name: 'Raksith S S',
      designation: 'Frontend Developer',
      image:
        'https://media.licdn.com/dms/image/v2/D5603AQHb3uPPbiq97w/profile-displayphoto-shrink_400_400/B56ZRvKY1aHsAk-/0/1737031782713?e=1758153600&v=beta&t=ZBCcrSykdg-r2AVuKigQCboNah_4JGBZqzRpo6DXpwk',
      phone: '+91 9361255958',
      email: 'raksith.cs23@bitsathy.ac.in',
    },
    {
      id: 6,
      name: 'Deepak G S',
      designation: 'Frontend Developer',
      image:
        'https://media.licdn.com/dms/image/v2/D4D03AQF6Nz6BUWet2g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729308032708?e=1758153600&v=beta&t=8mhvPE4vfZKaYq9lyh3YEqRUYryCmdBTCCDY3pPbiMU',
      phone: '+91 9080458494',
      email: 'deepak.cs23@bitsathy.ac.in',
    },
  ];

  return (
    <div className="p-4 bg-gradient-to-br from-pink-100 via-blue-50 to-purple-100 ">
      <div className=" h-full p-6 mx-auto w-fit  scroll-smooth flex flex-col gap-y-8 no-scrollbar overflow-y-auto">
        <div className="flex flex-col gap-y-5">
          <p className="text-gray-700 font-semibold text-3xl text-center">
            Advisory committee
          </p>
          <div className="grid gap-5 mx-auto md:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:grid-cols-3">
            {advisoryCommitee.map((item) => {
              return <TeamsCard key={item.id} {...item} variant={'chairman'} />;
            })}
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          <p className="text-gray-700 font-semibold text-3xl text-center">
            Team KRIYA
          </p>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5">
            {/* <TeamsCard {...faculty} variant={'chairman'} /> */}
            {spocs
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((item) => {
                return (
                  <TeamsCard key={item.id} {...item} variant={'chairman'} />
                );
              })}
          </div>
        </div>
        {/* <div className="flex flex-col gap-y-5">
          <p className="text-gray-700 font-semibold text-3xl text-center">
            Faculty Co-ordinators
          </p>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5">
            {faculties.map((item) => {
              return <TeamsCard key={item.id} {...item} />;
            })}
          </div>
        </div> */}
        <div className="flex flex-col gap-y-5">
          <p className="text-gray-700 font-semibold text-3xl text-center">
            Students Co-ordinators
          </p>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5">
            {students.map((item) => {
              return <TeamsCard key={item.id} {...item} variant={'code'} />;
            })}
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          <p className="text-gray-700 font-semibold text-3xl text-center">
            Student Developers
          </p>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5">
            {developers.map((item) => {
              return <TeamsCard key={item.id} {...item} variant={''} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
