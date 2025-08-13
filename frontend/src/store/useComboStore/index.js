import { create } from 'zustand';

export const useComboStore = create(() => ({
  ComboData: [
    {
      id: 1,
      combo: 'Master Combo',
      events: '2 Technical Events + Hackathon + 2 Workshops',
      hostel: 'Accommodation, Food, and Refreshments are Included',
      prize: 'Exciting Prizes!',
      ticket: 'Tickets for Star Night (Culturals) are included!',
      rulesData: [
        {
          id: 1,
          rule: 'All participants must be currently enrolled students at a recognized educational institution.',
        },
        {
          id: 2,
          rule: 'A valid student ID is required for verification at the event venue.',
        },
        {
          id: 3,
          rule: 'Participants are responsible for their personal belongings.',
        },
        {
          id: 4,
          rule: 'The organizers reserve the right to disqualify any participant for misconduct.',
        },
        {
          id: 5,
          rule: 'All decisions made by the event judges and organizers are final.',
        },
        {
          id: 6,
          rule: 'Please refer to the official event website for a full list of rules and regulations.',
        },
      ],
    },
    {
      id: 2,
      combo: 'Master Combo',
      events: '2 Technical Events + 2 Workshops',
      hostel: 'Accommodation, Food, and Refreshments are Included',
      prize: 'Exciting Prizes!',
      ticket: 'Tickets for Star Night (Culturals) are included!',
    },
    {
      id: 3,
      combo: 'Master Combo',
      events: '2 Technical Events + Hackathon + 1 Workshops',
      hostel: 'Accommodation, Food, and Refreshments are Included',
      prize: 'Exciting Prizes!',
      ticket: 'Tickets for Star Night (Culturals) are included!',
    },
    {
      id: 4,
      combo: 'Master Combo',
      events: '2 Technical Events + Hackathon + 1 Workshops',
      hostel: 'Accommodation, Food, and Refreshments are Included',
      prize: 'Exciting Prizes!',
      ticket: 'Tickets for Star Night (Culturals) are included!',
    },
    {
      id: 5,
      combo: 'Master Combo',
      events: '2 Technical Events + Hackathon + 1 Workshops',
      hostel: 'Accommodation, Food, and Refreshments are Included',
      prize: 'Exciting Prizes!',
      ticket: 'Tickets for Star Night (Culturals) are included!',
    },
  ],
  ComboDeligatesData: [
    {
      id: 1,
      combo: 'Deligates Combo',
      events: 'Can access all the events for 3 days',
      hostel: 'Accommodation, Food, and Refreshments are Included',
    },
  ],
  ComboStallsData: [
    {
      id: 1,
      combo: 'Stalls Combo',
      events: 'Can showcase there stalls for three days',
      hostel: 'Accommodation, Food, and Refreshments are Included',
    },
  ],
}));
