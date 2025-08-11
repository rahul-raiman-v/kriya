import { create } from "zustand";

export const useTimelineStore = create(()=>({
    timeline: [
        {
            "id": 1,
            "title": "Registration & Networking",
            "description": "Attendee registration and networking session to meet participants and guests.",
            "venue": "Main Auditorium",
            "image": "",
            "time": "08:30",
            "date": "09.09.2025"
        },
        {
            "id": 2,
            "title": "Inauguration Ceremony",
            "description": "Invocation; Lighting the Lamps; Welcome Address by Principal; Presidential Address by Chairman; Inaugural Address – Chief Guest & Guest of Honors & Special Address by Kumaravel (Naturals), Arunprasath (GUVI), Sivaraja Ramanathan (STARTUPTN), Poongumaran (TICEL Biopark - CEO), MD-TN Skills/ED IAS; Memento & Honouring the guests; Announcement of Hackathon themes & timings.",
            "venue": "Computer Centre",
            "image": "",
            "time": "09:30",
            "date": "09.09.2025"
        },
        {
            "id": 3,
            "title": "Opening & Visiting the Event Stalls",
            "description": "Opening of over 6 exhibition stalls with participation from startups and innovators; Special address by Naveen Krishna, Startup Payannan, Coimbatore.",
            "venue": "Main Auditorium",
            "image": "",
            "time": "09:45",
            "date": "09.09.2025"
        },
        {
            "id": 4,
            "title": "Panel Discussion: 01 - The Entrepreneurial Imperative: Innovation, Inclusion, and Impact",
            "description": "Panel discussion with representatives from GUVI, Palmera, Green Pod Labs, and Media focusing on innovation, inclusivity, and societal impact in entrepreneurship.",
            "venue": "SF Seminar Hall 02",
            "image": "",
            "time": "11:30",
            "date": "09.09.2025"
        },
        {
            "id": 5,
            "title": "Workshop: 01 - Design Thinking & Ideation",
            "description": "Hands-on workshop on design thinking methodology and ideation process conducted by ISBA / CEO – TCE & Amritha Institute.",
            "venue": "Mech Smart Room",
            "image": "",
            "time": "14:00",
            "date": "09.09.2025"
        },
        {
            "id": 6,
            "title": "Workshop: 02 - IP Drafting for Startups",
            "description": "Practical workshop on intellectual property drafting techniques for startups, led by Ms Ashraf Neesa, Infosys Patent Manager.",
            "venue": "Mech Library",
            "image": "",
            "time": "14:00",
            "date": "09.09.2025"
        },
        {
            "id": 7,
            "title": "Events for Student Participants - Hackathon & Startup Nexus",
            "description": "Final review and prize distribution for Hackathon (2 prizes) and Startup Nexus (2 prizes).",
            "venue": "Computer Centre",
            "image": "",
            "time": "15:30",
            "date": "09.09.2025"
        },
        {
            "id": 8,
            "title": "Cultural Evening",
            "description": "Evening cultural performances including 4 classical dances and 4 musical acts.",
            "venue": "Main Auditorium",
            "image": "",
            "time": "18:00",
            "date": "09.09.2025"
        },
        {
            "id": 9,
            "title": "Workshop: 03 - Student Startup: Opportunities & Schemes",
            "description": "Session on opportunities and schemes for student entrepreneurs, conducted by Dr Mahalakshmi, Director, CED, AU, Chennai.",
            "venue": "SF Seminar Hall 01",
            "image": "",
            "time": "09:15",
            "date": "10.09.2025"
        },
        {
            "id": 10,
            "title": "Workshop: 04 - Startup Masterclass: Incubation & Schemes",
            "description": "Masterclass on incubation opportunities and startup support schemes, led by Dr P Sureshkumar, CEO, PSGSTEP, Coimbatore. Includes memento presentation and guest felicitation.",
            "venue": "SF Seminar Hall 02",
            "image": "",
            "time": "09:15",
            "date": "10.09.2025"
        },
        {
            "id": 11,
            "title": "Panel Discussion: 02 - Bottlenecks to build passion into Business Ventures",
            "description": "Entrepreneurs from Magic 20, Ticket9, Lemurian, Cuptime, and Bipolar Factory discuss the challenges in transforming passion into sustainable business ventures.",
            "venue": "SF Seminar Hall 02",
            "image": "",
            "time": "10:45",
            "date": "10.09.2025"
        },
        {
            "id": 12,
            "title": "Workshop: 05 - Fund Raising & Pitching to Investors",
            "description": "Session on fundraising strategies and effective pitching techniques to attract investors, led by Premkumar from Campus Angels.",
            "venue": "SF Seminar Hall 01",
            "image": "",
            "time": "14:00",
            "date": "10.09.2025"
        },
        {
            "id": 13,
            "title": "Workshop: 06 - Product – Market Fit & GTM Strategy",
            "description": "Training on achieving product–market fit and developing a go-to-market strategy, delivered by Dr Prasad Menon, ISBA President.",
            "venue": "SF Seminar Hall 02",
            "image": "",
            "time": "14:00",
            "date": "10.09.2025"
        },
        {
            "id": 14,
            "title": "Events for Student Participants - Startup Quiz & Visual Vortex",
            "description": "Startup Quiz in Mech Library and Visual Vortex creative event in Mech Smart Room for student participants.",
            "venue": "Multiple Venues",
            "image": "",
            "time": "15:30",
            "date": "10.09.2025"
        },
        {
            "id": 15,
            "title": "Cultural Evening",
            "description": "Performances by student music and cultural clubs.",
            "venue": "Main Auditorium",
            "image": "",
            "time": "18:00",
            "date": "10.09.2025"
        },
        {
            "id": 16,
            "title": "Motivational Session 01 - Building Scalable Tech Start-ups",
            "description": "Inspirational session on scaling technology startups, presented by Dinesh, CEO – TN Research Park Foundation, TIDCO.",
            "venue": "SF Seminar Hall 01",
            "image": "",
            "time": "09:30",
            "date": "11.09.2025"
        },
        {
            "id": 17,
            "title": "Motivational Session 02 - Social Innovation & Sustainable Start-ups",
            "description": "Talk on creating social innovation and sustainable startups, conducted by MEITY TBI / ATAL - TBI. Includes memento presentation and guest felicitation.",
            "venue": "SF Seminar Hall 02",
            "image": "",
            "time": "10:45",
            "date": "11.09.2025"
        },
        {
            "id": 18,
            "title": "Panel Discussion: 03 - Breaking Barriers and Building Big – Women in Start-ups",
            "description": "Women entrepreneurs from CII - IWN, Ulamagal, Narchuvai, and DNA share experiences on challenges and opportunities. Includes felicitation of Women Entrepreneur – Techno Wild Innovations.",
            "venue": "SF Seminar Hall 02",
            "image": "",
            "time": "11:45",
            "date": "11.09.2025"
        },
        {
            "id": 19,
            "title": "Idea Posters: The walkway to Start-ups",
            "description": "Exhibition of student startup ideas in poster format, followed by review and prize distribution (1+1 awards).",
            "venue": "SF Seminar Hall 02",
            "image": "",
            "time": "13:30",
            "date": "11.09.2025"
        },
        {
            "id": 20,
            "title": "Opening Ceremony – TTO & IPR Cell",
            "description": "Invocation; Lighting the Lamps; Welcome Address (Principal); Presidential Address (Chairman); Product Launch – 2 nos. (BIT-TBI) - SFS; Fund Distribution – 4 startups – (BIT-TBI) – SFS & IVP; Address by Dr Bijay K Sahu (NRDC, Vizag), Dr Praveen Roy (DST, New Delhi - pending confirmation), Dr Krishnan Balasubramanian (IITM – Startup Coach & Mentor), A2B CEO; Declare open TTO & IPR cell – Introduce Office Bearers; Signing of MoU with NRDC, GoI; Vote of Thanks; National Anthem.",
            "venue": "SF Seminar Hall 02",
            "image": "",
            "time": "15:30",
            "date": "11.09.2025"
        }
    ]


}))