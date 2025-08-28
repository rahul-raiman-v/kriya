import { create } from 'zustand';

export const useEventsStore = create(() => ({
  stats: [
    {
      id: 'events',
      title: 'Events',
      img: 'https://res.cloudinary.com/dsz2br3qg/image/upload/v1755235996/CalendarLogo_hncnur.png',
      highlight: false,
      events: [
        {
          id: 'event-1',
          eventTitle: 'BRAND ALCHEMY',
          eventType: 'Technical Event',
          date: 'September 10, 2025',
          venue: 'BIT Campus',
          img: 'https://res.cloudinary.com/dsz2br3qg/image/upload/v1755446916/WhatsApp_Image_2025-08-17_at_21.35.26_f3b7650e_n2djqo.jpg',
          brochureLink:
            'https://drive.google.com/uc?export=download&id=1XGTo2JYwcNnPJOYmfv6Zvwoed2GqhNh8',
          highlight: true,
          tabs: [
            {
              id: 'description',
              title: 'Description',
              content:
                'BRAND ALCHEMY is an exciting test of creativity, strategy, and presentation skills, where participants transform ideas into market ready brands. The event unfolds in two competitive rounds.',
            },
            {
              id: 'rounds',
              title: 'Rounds',
              content: [
                {
                  id: '1',
                  title: 'Round 1',
                  content:
                    'Participants merge two well-known brands into a fresh concept with a unique name, tagline, strategy, and pitch.',
                },
                {
                  id: '2',
                  title: 'Round 2',
                  content:
                    'Teams are given a failing brand to analyse and revive using creative rebranding strategies, target market tweaks, and promotional plans, all presented using a provided PPT template. The event tests creativity, strategy, market insight, and presentation skills.',
                },
              ],
            },
            {
              id: 'rules',
              title: 'Rules',
              content: [
                {
                  id: '1',
                  title: 'Rule 1',
                  content:
                    'Team: Teams of up to 4-5 members are welcome. All members can be from other colleges (4 or 5). For 4 members: Max 1 BIT student + 3 from other colleges. For 5 members: Max 2 BIT students + 3 from other colleges.',
                },
                {
                  id: '2',
                  title: 'Rule 2',
                  content:
                    'Plagiarism will result in immediate disqualification.',
                },
                {
                  id: '3',
                  title: 'Rule 3',
                  content:
                    'Respect the given time limits, late submissions will not be considered.',
                },
                {
                  id: '4',
                  title: 'Rule 4',
                  content:
                    'Participants must BRING and ensure their devices are charged before Round 2. Charging stations may be limited.',
                },
                {
                  id: '5',
                  title: 'Rule 5',
                  content:
                    'Usage of mobile phones or electronic gadgets is strictly prohibited.',
                },
                {
                  id: '6',
                  title: 'Rule 6',
                  content:
                    'Any disputes will be resolved by the judging panel, and their decision will be final.',
                },
              ],
            }, //Rules completed
            {
              id: 'rewards',
              title: 'Rewards',
              content: [
                {
                  id: '1',
                  title: 'Reward 1',
                  content:
                    'Winners & Runners will get a chance to win exiting prizes.',
                },
                {
                  id: '2',
                  title: 'Reward 2',
                  content: 'Top teams will be recognized with awards.',
                },
                {
                  id: '3',
                  title: 'Reward 3',
                  content: 'Participation certificate will be provided.',
                },
              ],
            },
            {
              id: 'contact',
              title: 'Contact',
              content: [
                {
                  id: 'person1',
                  name: 'Dr Haritha J',
                  designation: 'Faculty Co-Ordinator',
                  email: 'person1@example.com',
                  phone: '+91 8072285633',
                  img: 'https://via.placeholder.com/150',
                },
                {
                  id: 'person2',
                  name: 'Mithunram SU',
                  designation: 'Co-Ordinator',
                  email: 'person1@example.com',
                  phone: '+91 9488906451',
                  img: 'https://via.placeholder.com/150',
                },
                {
                  id: 'person3',
                  name: 'Thejashree C',
                  designation: 'Co-Ordinator',
                  email: 'person2@example.com',
                  phone: '+91 9345794779',
                  img: 'https://via.placeholder.com/150',
                },
              ],
            }, //completed
          ],
        },
        {
          id: 'event-2',
          eventTitle: 'IdeaForge',
          eventType: 'Technical Event',
          date: 'September 10, 2025',
          venue: 'BIT Campus',
          img: 'https://res.cloudinary.com/dsz2br3qg/image/upload/v1755236014/InnoVisionImg_r2umgq.jpg',
          brochureLink:
            'https://drive.google.com/uc?export=download&id=1xEhTtOuqf0u93K5_dJtfb87jmbyrE3XY',
          highlight: true,
          tabs: [
            {
              id: 'description',
              title: 'Description',
              content:
                'IdeaForge is an entrepreneurial idea presentation competition where creativity meets strategy. Participants will pitch innovative business concepts, showcasing their originality, feasibility, and market potential. From identifying a problem to presenting a clear solution, target audience, and growth plan, contestants will craft compelling presentations to convince judges of their vision’s impact. The event rewards fresh thinking, strong communication, and the ability to turn ideas into actionable business opportunities.',
            },
            {
              id: 'rounds',
              title: 'Rounds',
              content: [
                {
                  id: '1',
                  title: 'Round 1',
                  content: 'Presentation Round',
                },
              ],
            },
            {
              id: 'rules',
              title: 'Rules',
              content: [
                {
                  id: '1',
                  title: 'Rule 1',
                  content:
                    'Team: Teams of up to 4-5 members are welcome. All members can be from other colleges (4 or 5). For 4 members: Max 1 BIT student + 3 from other colleges. For 5 members: Max 2 BIT students + 3 from other colleges.',
                },
                {
                  id: '2',
                  title: 'Rule 2',
                  content:
                    'Participants must choose the theme on-spot and prepare a PowerPoint presentation.',
                },
                {
                  id: '3',
                  title: 'Rule 3',
                  content:
                    'Plagiarism will result in immediate disqualification.',
                },
                {
                  id: '4',
                  title: 'Rule 4',
                  content:
                    'Respect the given time limits, late submissions will not be considered.',
                },
                {
                  id: '5',
                  title: 'Rule 5',
                  content:
                    'Participants must BRING and ensure their devices are charged before Round 1. Charging stations may be limited.',
                },
                {
                  id: '6',
                  title: 'Rule 6',
                  content:
                    'Usage of mobile phones or electronic gadgets is strictly prohibited.',
                },
                {
                  id: '7',
                  title: 'Rule 7',
                  content:
                    'Any disputes will be resolved by the judging panel, and their decision will be final.',
                },
              ],
            }, //Rules completed
            {
              id: 'rewards',
              title: 'Rewards',
              content: [
                {
                  id: '1',
                  title: 'Reward 1',
                  content:
                    'Winners & Runners will get a chance to win exiting prizes.',
                },
                {
                  id: '2',
                  title: 'Reward 2',
                  content: 'Top teams will be recognized with awards.',
                },
                {
                  id: '3',
                  title: 'Reward 3',
                  content: 'Participation certificate will be provided.',
                },
              ],
            },
            {
              id: 'contact',
              title: 'Contact',
              content: [
                {
                  id: 'person1',
                  name: 'Dr Kirupa Sankar M',
                  designation: 'Faculty Co-Ordinator',
                  email: 'person1@example.com',
                  phone: '+91 9994624674',
                  img: 'https://via.placeholder.com/150',
                },
                {
                  id: 'person2',
                  name: 'Kowshika D',
                  designation: 'Co-Ordinator',
                  email: 'person1@example.com',
                  phone: '+91 8072103089',
                  img: 'https://via.placeholder.com/150',
                },
                {
                  id: 'person3',
                  name: 'Sudharsan',
                  designation: 'Co-Ordinator',
                  email: 'person2@example.com',
                  phone: '+91 908023751',
                  img: 'https://via.placeholder.com/150',
                },
              ],
            },
          ],
        },
        {
          id: 'event-3',
          eventTitle: 'BREAKTHRU',
          eventType: 'Technical Event',
          date: 'September 10, 2025',
          venue: 'BIT Campus',
          img: 'https://res.cloudinary.com/dsz2br3qg/image/upload/v1755236006/BreakThroughImg_z0jjf9.jpg',
          brochureLink:
            'https://drive.google.com/uc?export=download&id=13iWqZyk9qgn_mj18umZV1c3Q1WWUtpG_',
          highlight: true,
          tabs: [
            {
              id: 'description',
              title: 'Description',
              content:
                'BREAKTHRU is a high-impact problem-solving competition where participants tackle real-world entrepreneurial challenges with creativity and strategy. Teams will analyse the given problem, develop innovative and practical solutions, and present their approach with clarity and conviction. The event tests critical thinking, market insight, and execution skills — rewarding those who can break through obstacles and turn challenges into business opportunities.',
            },
            {
              id: 'rounds',
              title: 'Rounds',
              content: [
                {
                  id: '1',
                  title: 'Round 1',
                  content:
                    'Create and present a compelling business pitch showcasing your solution, strategy, and value proposition.',
                },
                {
                  id: '2',
                  title: 'Round 2',
                  content:
                    'Analyse complex scenarios and defend your approach with logic, adaptability, and clarity.',
                },
              ],
            },
            {
              id: 'rules',
              title: 'Rules',
              content: [
                {
                  id: '1',
                  title: 'Rule 1',
                  content:
                    'Team: Teams of up to 4-5 members are welcome. All members can be from other colleges (4 or 5). For 4 members: Max 1 BIT student + 3 from other colleges. For 5 members: Max 2 BIT students + 3 from other colleges.',
                },
                {
                  id: '2',
                  title: 'Rule 2',
                  content: 'Be on time – late entries not allowed.',
                },
                {
                  id: '3',
                  title: 'Rule 3',
                  content:
                    'Usage of mobile phones or electronic gadgets is strictly prohibited.',
                },
                {
                  id: '4',
                  title: 'Rule 4',
                  content: 'No verbal answers unless told.',
                },
                {
                  id: '5',
                  title: 'Rule 5',
                  content: 'Judging criteria will be announced at the venue.',
                },
                {
                  id: '6',
                  title: 'Rule 6',
                  content:
                    'Points will be provided for correct answers, no negative marking.',
                },
                {
                  id: '7',
                  title: 'Rule 7',
                  content: 'Unfair play leads to disqualification.',
                },
                {
                  id: '8',
                  title: 'Rule 8',
                  content:
                    'Any disputes will be resolved by the judging panel, and their decision will be final.',
                },
              ],
            },
            {
              id: 'rewards',
              title: 'Rewards',
              content: [
                {
                  id: '1',
                  title: 'Reward 1',
                  content:
                    'Winners & Runners will get a chance to win exiting prizes.',
                },
                {
                  id: '2',
                  title: 'Reward 2',
                  content: 'Top teams will be recognized with awards.',
                },
                {
                  id: '3',
                  title: 'Reward 3',
                  content: 'Participation certificate will be provided.',
                },
              ],
            },
            {
              id: 'contact',
              title: 'Contact',
              content: [
                {
                  id: 'person1',
                  name: 'Prathap M R',
                  designation: 'Faculty Co-Ordinator',
                  email: 'person1@example.com',
                  phone: '+91 8344480485',
                  img: 'https://via.placeholder.com/150',
                },
                {
                  id: 'person2',
                  name: 'Mohanakrishna',
                  designation: 'Co-Ordinator',
                  email: 'person1@example.com',
                  phone: '+91 9360839549',
                  img: 'https://via.placeholder.com/150',
                },
                {
                  id: 'person3',
                  name: 'Sudarsana',
                  designation: 'Co-Ordinator',
                  email: 'person2@example.com',
                  phone: '+91 63795 53236',
                  img: 'https://via.placeholder.com/150',
                },
              ],
            },
          ],
        },
        {
          id: 'event-4',
          eventTitle: 'CREOVATE',
          eventType: 'Technical Event',
          date: 'September 10, 2025',
          venue: 'BIT Campus',
          img: 'https://res.cloudinary.com/dsz2br3qg/image/upload/v1755236008/CreovateImg_igr4zp.jpg',
          brochureLink:
            'https://drive.google.com/uc?export=download&id=1_4ndeCfA39eoY6VGBKhda44WHgOqKJet',
          highlight: true,
          tabs: [
            {
              id: 'description',
              title: 'Description',
              content:
                'CREOVATE is a dynamic product expo competition where entrepreneurial minds showcase their innovative products and solutions to the world. Participants will present their creations, highlighting design, functionality, market potential, and business strategy, while engaging with judges and visitors. The event celebrates creativity, problem-solving, and market readiness — rewarding those who can transform ideas into impactful, real-world products.',
            },
            {
              id: 'rounds',
              title: 'Rounds',
              content: [
                {
                  id: '1',
                  title: 'Round 1',
                  content:
                    'Teams will present their products to the judges and viewers, highlighting features, functionality, and market potential.',
                },
              ],
            },
            {
              id: 'rules',
              title: 'Rules',
              content: [
                {
                  id: '1',
                  title: 'Rule 1',
                  content:
                    'Team: Teams of up to 4-5 members are welcome. All members can be from other colleges (4 or 5). For 4 members: Max 1 BIT student + 3 from other colleges. For 5 members: Max 2 BIT students + 3 from other colleges.',
                },
                {
                  id: '2',
                  title: 'Rule 2',
                  content:
                    'Participants must have a tangible or functional product prototype to showcase during the expo.',
                },
                {
                  id: '3',
                  title: 'Rule 3',
                  content:
                    'Participants must maintain proper decorum and adhere to all instructions given by the coordinators and judges.',
                },
                {
                  id: '4',
                  title: 'Rule 4',
                  content:
                    'Solutions showcased can be either hardware-based, software-based, or a combination of both.',
                },
              ],
            },
            {
              id: 'rewards',
              title: 'Rewards',
              content: [
                {
                  id: '1',
                  title: 'Reward 1',
                  content:
                    'Winners & Runners will get a chance to win exiting prizes.',
                },
                {
                  id: '2',
                  title: 'Reward 2',
                  content: 'Top teams will be recognized with awards.',
                },
                {
                  id: '3',
                  title: 'Reward 3',
                  content: 'Participation certificate will be provided.',
                },
              ],
            },
            {
              id: 'contact',
              title: 'Contact',
              content: [
                {
                  id: 'person1',
                  name: 'Dr Kalaiyarasi M',
                  designation: 'Faculty Co-Ordinator',
                  email: 'person1@example.com',
                  phone: '+91 9842981160',
                  img: 'https://via.placeholder.com/150',
                },
                {
                  id: 'person2',
                  name: 'Madhesh Kumar',
                  designation: 'Co-Ordinator',
                  email: 'person1@example.com',
                  phone: '+91 6381416788',
                  img: 'https://via.placeholder.com/150',
                },
                {
                  id: 'person3',
                  name: 'Priya dharshini',
                  designation: 'Co-Ordinator',
                  email: 'person2@example.com',
                  phone: '+91 8300922486',
                  img: 'https://via.placeholder.com/150',
                },
              ],
            },
          ],
        },
        {
          id: 'event-5',
          eventTitle: 'Guess In A Glance',
          eventType: 'Non-Technical Event',
          date: 'September 10, 2025',
          venue: 'BIT Campus',
          img: 'https://res.cloudinary.com/dsz2br3qg/image/upload/v1755236010/GuessInGlanceImg_zxtfq5.jpg',
          brochureLink:
            'https://drive.google.com/uc?export=download&id=11mQUgy5wm-nFdtjrKmp43m2pEuNZ1_hN',
          highlight: true,
          tabs: [
            {
              id: 'description',
              title: 'Description',
              content:
                'Guess in A Glance is an electrifying event designed to keep participants on their toes through two thrilling stages. Each team will consist of 4–5 members, fostering teamwork, quick thinking, and collaboration. Only the top-performing teams from the first round will make it to the grand second round, ensuring a truly competitive spirit. The topics for both rounds will be revealed right at the venue, bringing a wave of surprise, energy, and excitement to the challenge. With every second counting, this event promises non-stop fun and an adrenaline rush for all participants.',
            },
            {
              id: 'rounds',
              title: 'Rounds',
              content: [
                {
                  id: '1',
                  title: 'Round 1',
                  content:
                    'Teams compete in the first round and best performers will be shortlisted.',
                },
                {
                  id: '2',
                  title: 'Round 2',
                  content: 'Fun filled final round with interesting twists.',
                },
              ],
            },
            {
              id: 'rules',
              title: 'Rules',
              content: [
                {
                  id: '1',
                  title: 'Rule 1',
                  content:
                    'Team: Teams of up to 4-5 members are welcome. All members can be from other colleges (4 or 5). For 4 members: Max 1 BIT student + 3 from other colleges. For 5 members: Max 2 BIT students + 3 from other colleges.',
                },
                {
                  id: '2',
                  title: 'Rule 2',
                  content:
                    'Points will be provided for correct answers, no negative marking.',
                },
                {
                  id: '3',
                  title: 'Rule 3',
                  content: 'Unfair play leads to disqualification.',
                },
                {
                  id: '4',
                  title: 'Rule 4',
                  content: 'Judging criteria will be announced at the venue.',
                },
                {
                  id: '5',
                  title: 'Rule 5',
                  content: 'No verbal answers unless told.',
                },
                {
                  id: '6',
                  title: 'Rule 6',
                  content:
                    'Any disputes will be resolved by the judging panel, and their decision will be final.',
                },
              ],
            },
            {
              id: 'rewards',
              title: 'Rewards',
              content: [
                {
                  id: '1',
                  title: 'Reward 1',
                  content:
                    'Winners & Runners will get a chance to win exiting prizes.',
                },
                {
                  id: '2',
                  title: 'Reward 2',
                  content: 'Top teams will be recognized with awards.',
                },
                {
                  id: '3',
                  title: 'Reward 3',
                  content: 'Participation certificate will be provided.',
                },
              ],
            },
            {
              id: 'contact',
              title: 'Contact',
              content: [
                {
                  id: 'person1',
                  name: 'Kumaresan K',
                  designation: 'Faculty Co-Ordinator',
                  email: 'person1@example.com',
                  phone: '+91 6374412828',
                  img: 'https://via.placeholder.com/150',
                },
                {
                  id: 'person2',
                  name: 'Himashree K',
                  designation: 'Co-Ordinator',
                  email: 'person1@example.com',
                  phone: '+91 9092533465    ',
                  img: 'https://via.placeholder.com/150',
                },
                {
                  id: 'person3',
                  name: 'Abishek R',
                  designation: 'Co-Ordinator',
                  email: 'person2@example.com',
                  phone: '+91 7448665599',
                  img: 'https://via.placeholder.com/150',
                },
              ],
            },
          ],
        },
        {
          id: 'event-7',
          eventTitle: 'QUIZXtreme',
          eventType: 'Non-Technical Event',
          date: 'September 10, 2025',
          venue: 'BIT Campus',
          img: 'https://res.cloudinary.com/dsz2br3qg/image/upload/v1755446896/ChatGPT_Image_Aug_14__2025__11_46_10_AM_1_i90vu5.png',
          brochureLink:
            'https://drive.google.com/uc?export=download&id=1acv64um2fJ1_ysYnXmkUOHA0QUFDy4Hl',
          highlight: true,
          tabs: [
            {
              id: 'description',
              title: 'Description',
              content:
                'QuizXtreme is a high-energy quiz competition designed to challenge participants’ knowledge of entrepreneurship, startups, business strategies, and market trends. Competing in multiple exciting rounds, contestants will tackle questions ranging from iconic founders and breakthrough innovations to funding, branding, and real-world case studies. The event tests business acumen, quick thinking, and teamwork — rewarding those with sharp minds and a passion for the entrepreneurial world.',
            },
            {
              id: 'rounds',
              title: 'Rounds',
              content: [
                {
                  id: '1',
                  title: 'Round 1',
                  content:
                    'Teams compete in the first round. Follow time limits and instructions.',
                },
                {
                  id: '2',
                  title: 'Round 2',
                  content:
                    'Teams present in the final round. Adhere to preparation and presentation rules.',
                },
              ],
            },
            {
              id: 'rules',
              title: 'Rules',
              content: [
                {
                  id: '1',
                  title: 'Rule 1',
                  content:
                    'Team: Teams of up to 4-5 members are welcome. All members can be from other colleges (4 or 5). For 4 members: Max 1 BIT student + 3 from other colleges. For 5 members: Max 2 BIT students + 3 from other colleges.',
                },
                {
                  id: '2',
                  title: 'Rule 2',
                  content:
                    'Maintain discipline and respect coordinators, quizmasters, judges, and other participants.',
                },
                {
                  id: '3',
                  title: 'Rule 3',
                  content:
                    'Cheating, plagiarism, or outside assistance will result in immediate disqualification.',
                },
                {
                  id: '4',
                  title: 'Rule 4',
                  content:
                    'Usage of mobile phones or electronic gadgets is strictly prohibited.',
                },
                {
                  id: '5',
                  title: 'Rule 5',
                  content:
                    'Any disputes will be resolved by the judging panel and their decision will be final.',
                },
              ],
            },
            {
              id: 'rewards',
              title: 'Rewards',
              content: [
                {
                  id: '1',
                  title: 'Reward 1',
                  content:
                    'Winners & Runners will get a chance to win exiting prizes.',
                },
                {
                  id: '2',
                  title: 'Reward 2',
                  content: 'Top teams will be recognized with awards.',
                },
                {
                  id: '3',
                  title: 'Reward 3',
                  content: 'Participation certificate will be provided.',
                },
              ],
            },
            {
              id: 'contact',
              title: 'Contact',
              content: [
                {
                  id: 'person1',
                  name: 'Nandhini K M',
                  designation: 'Faculty Co-Ordinator',
                  email: 'person1@example.com',
                  phone: '+91 9788005115',
                  img: 'https://via.placeholder.com/150',
                },
                {
                  id: 'person2',
                  name: 'Pooja K',
                  designation: 'Co-Ordinator',
                  email: 'person1@example.com',
                  phone: '+91 7871448301',
                  img: 'https://via.placeholder.com/150',
                },
                {
                  id: 'person3',
                  name: ' Hari Hara Sudhan N',
                  designation: 'Co-Ordinator',
                  email: 'person2@example.com',
                  phone: '+91 8870731577',
                  img: 'https://via.placeholder.com/150',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'hackathon',
      title: 'Hackathon',
      img: 'https://res.cloudinary.com/dsz2br3qg/image/upload/v1755598251/Data_extraction-rafiki_n0vcce.png',
      highlight: false,
      events: [
        {
          id: 'event-8',
          eventTitle: 'VISIONHACK',
          eventType: 'Hackathon',
          date: 'September 11, 2025',
          venue: 'BIT Campus',
          img: 'https://res.cloudinary.com/dsz2br3qg/image/upload/v1755236015/VisionHackImg_ntfdbg.jpg',
          brochureLink:
            'https://drive.google.com/uc?export=download&id=1OmXxEo7JImawGBr9NrxqogMpM86fLYiu',
          // problemLink:
          //   'https://drive.google.com/uc?export=download&id=1qtL1Lcn_eVOlgIf4WI8bk0g5klGbW_Mc',
          highlight: true,
          tabs: [
            {
              id: 'description',
              title: 'Description',
              content:
                'VISION HACK is an intense, time-bound innovation challenge where participants collaborate in teams to design, build, and present creative tech solutions to real-world problems. Over the course of the event, innovators brainstorm ideas, develop prototypes, and pitch their projects to judges — all under the pressure of a ticking clock. It’s a thrilling test of coding skills, problem-solving, teamwork, and ingenuity, rewarding those who can turn bold ideas into working solutions.',
            },
            {
              id: 'rounds',
              title: 'Rounds',
              content: [
                {
                  id: '1',
                  title: 'Round 1',
                  content: 'One round with multiple sessions.',
                },
              ],
            },
            {
              id: 'rules',
              title: 'Rules',
              content: [
                {
                  id: '1',
                  title: 'Rule 1',
                  content:
                    'Team: Teams of up to 4-5 members are welcome. All members can be from other colleges (4 or 5). For 4 members: Max 1 BIT student + 3 from other colleges. For 5 members: Max 2 BIT students + 3 from other colleges.',
                },
                {
                  id: '2',
                  title: 'Rule 2',
                  content:
                    'Problem statements will be provided at the start of the event, and teams must choose one to work on.',
                },
                {
                  id: '3',
                  title: 'Rule 3',
                  content:
                    'Solutions must align with the event’s given problem statements or themes.',
                },
                {
                  id: '4',
                  title: 'Rule 4',
                  content:
                    'All projects must be developed within the allotted hackathon duration of 8 hours.',
                },
                {
                  id: '5',
                  title: 'Rule 5',
                  content:
                    'Solutions must align with the event’s given problem statements or themes.',
                },
                {
                  id: '6',
                  title: 'Rule 6',
                  content:
                    'Projects must be original; plagiarism or use of AI tool or pre-built solutions is prohibited.',
                },
                {
                  id: '7',
                  title: 'Rule 7',
                  content:
                    'Open-source tools and libraries are allowed; licensed software must be used legall',
                },
                {
                  id: '8',
                  title: 'Rule 8',
                  content:
                    'Teams must submit source code, a brief documentation, and a final pitch/demo before the deadline.',
                },
                {
                  id: '9',
                  title: 'Rule 9',
                  content:
                    'Judging Criteria: Innovation, functionality, design, relevance to theme, and presentation quality.',
                },
              ],
            },
            {
              id: 'rewards',
              title: 'Rewards',
              content: [
                {
                  id: '1',
                  title: 'Reward 1',
                  content:
                    'Winners & Runners will get a chance to win exiting prizes.',
                },
                {
                  id: '2',
                  title: 'Reward 2',
                  content: 'Top teams will be recognized with awards.',
                },
                {
                  id: '3',
                  title: 'Reward 3',
                  content: 'Participation certificate will be provided.',
                },
              ],
            },
            {
              id: 'contact',
              title: 'Contact',
              content: [
                {
                  id: 'person1',
                  name: 'Vaidhyanathan B',
                  designation: 'Faculty Co-Ordinator',
                  email: 'person1@example.com',
                  phone: '+91 7395887646',
                  img: 'https://via.placeholder.com/150',
                },
                {
                  id: 'person2',
                  name: 'Surya Raj S',
                  designation: 'Co-Ordinator',
                  email: 'person1@example.com',
                  phone: '+91 8072137522',
                  img: 'https://via.placeholder.com/150',
                },
                {
                  id: 'person3',
                  name: 'Preethika S',
                  designation: 'Co-Ordinator',
                  email: 'person2@example.com',
                  phone: '+91 6381878288',
                  img: 'https://via.placeholder.com/150',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}));
