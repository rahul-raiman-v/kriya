import { create } from 'zustand';
import ComboImage1 from '/comboImage1.png';
import ComboImage2 from '/comboImage2.png';
import ComboImage3 from '/comboImage3.png';
import ComboImage4 from '/comboImage4.png';
import ComboImage5 from '/comboImage5.png';
import ComboImage6 from '/comboImage6.png';
import ComboImage7 from '/comboImage7.png';
import ComboImage8 from '/comboImage8.png';

export const useComboStore = create(() => ({
  ComboData: [
    {
      id: 1,
      combo: 'Superior Combo',
      events: '1 Technical Event + 1 Non technical Event + 1 Workshop',
      hostel: 'Accommodation, Food, and Refreshments are Included',
      prize: 'Exciting Prizes!',
      ticket: 'Tickets for Star Night (Culturals) are included!',
      fee: '499.00',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSfMtR-gcxIM_dRfCHT9Wo54zTvYuJ0uYA0UAFAQ94kknBflLg/viewform?usp=sharing&ouid=107739413345558944539',
      image: ComboImage1,
      rulesData: [
        {
          id: 1,
          rule: 'Participants must select events at the time of registration, changes will not be entertained later.',
        },
        {
          id: 2,
          rule: 'The workshop must be attended on Day 1 to qualify for certificates for other events.',
        },
        {
          id: 3,
          rule: 'Both technical and non-technical events must be completed, skipping any may forfeit the combo certificate.',
        },
        {
          id: 4,
          rule: 'A valid student ID is required for registration and verification at the event venue.',
        },
      ],
    },
    {
      id: 2,
      combo: 'Prime Combo',
      events: '2 Technical Events + 1 Workshops',
      hostel: 'Accommodation, Food, and Refreshments are Included',
      prize: 'Exciting Prizes!',
      ticket: 'Tickets for Star Night (Culturals) are included!',
      fee: '499.00',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSfMtR-gcxIM_dRfCHT9Wo54zTvYuJ0uYA0UAFAQ94kknBflLg/viewform?usp=sharing&ouid=107739413345558944539',
      image: ComboImage2,
      rulesData: [
        {
          id: 1,
          rule: 'Participants must choose two different technical events (cannot repeat the same event twice).',
        },
        {
          id: 2,
          rule: 'Workshop attendance on Day 1 is mandatory for certification.',
        },
        {
          id: 3,
          rule: 'Both technical events will be held on Day 2, participants must manage their schedule to avoid overlaps.',
        },
        {
          id: 4,
          rule: 'A valid student ID is required for registration and verification at the event venue.',
        },
      ],
    },
    {
      id: 3,
      combo: 'Premium Combo',
      events: '1 Technical Events + 1 Non technical Event + Hackathon',
      hostel: 'Accommodation, Food, and Refreshments are Included',
      prize: 'Exciting Prizes!',
      ticket: 'Tickets for Star Night (Culturals) are included!',
      fee: '555.00',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSfMtR-gcxIM_dRfCHT9Wo54zTvYuJ0uYA0UAFAQ94kknBflLg/viewform?usp=sharing&ouid=107739413345558944539',
      image: ComboImage3,
      rulesData: [
        {
          id: 1,
          rule: 'Day 2 events must be completed before joining the Day 3 Hackathon.',
        },
        {
          id: 2,
          rule: 'Hackathon team details must be submitted before Day 2 ends.',
        },
        {
          id: 3,
          rule: 'Any absence from the Hackathon will void the Hackathon certificate.',
        },
        {
          id: 4,
          rule: 'A valid student ID is required for registration and verification at the event venue.',
        },
      ],
    },
    {
      id: 4,
      combo: 'Elite Combo',
      events: '2 Technical Events + Hackathon',
      hostel: 'Accommodation, Food, and Refreshments are Included',
      prize: 'Exciting Prizes!',
      ticket: 'Tickets for Star Night (Culturals) are included!',
      fee: '555.00',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSfMtR-gcxIM_dRfCHT9Wo54zTvYuJ0uYA0UAFAQ94kknBflLg/viewform?usp=sharing&ouid=107739413345558944539',
      image: ComboImage4,
      rulesData: [
        {
          id: 1,
          rule: 'Both technical events will be scheduled on Day 2, participants must ensure they can attend both.',
        },
        {
          id: 2,
          rule: 'Hackathon teams must be finalized and registered by the end of Day 2.',
        },
        {
          id: 3,
          rule: 'Hackathon participation is compulsory to validate the combo.',
        },
        {
          id: 4,
          rule: 'A valid student ID is required for registration and verification at the event venue.',
        },
      ],
    },
    {
      id: 5,
      combo: 'Special Combo',
      events: '1 Technical Event + 1 Workshop + Hackathon',
      hostel: 'Accommodation, Food, and Refreshments are Included',
      prize: 'Exciting Prizes!',
      ticket: 'Tickets for Star Night (Culturals) are included!',
      fee: '599.00',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSfMtR-gcxIM_dRfCHT9Wo54zTvYuJ0uYA0UAFAQ94kknBflLg/viewform?usp=sharing&ouid=107739413345558944539',
      image: ComboImage5,
      rulesData: [
        {
          id: 1,
          rule: 'Workshop and technical event may be on the same day (Day 2), participants must manage time accordingly.',
        },
        {
          id: 2,
          rule: 'Hackathon team details must be confirmed by Day 2 evening.',
        },
        {
          id: 3,
          rule: 'Missing any part of the combo may result in partial or no certification.',
        },
        {
          id: 4,
          rule: 'A valid student ID is required for registration and verification at the event venue.',
        },
      ],
    },
    {
      id: 6,
      combo: 'Classic Combo',
      events: 'Hackathon',
      hostel: 'Accommodation, Food, and Refreshments are Included',
      prize: 'Exciting Prizes!',
      ticket: 'Tickets for Star Night (Culturals) are included!',
      fee: '400.00',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSfMtR-gcxIM_dRfCHT9Wo54zTvYuJ0uYA0UAFAQ94kknBflLg/viewform?usp=sharing&ouid=107739413345558944539',
      image: ComboImage6,
      rulesData: [
        {
          id: 1,
          rule: 'Only hackathon-related facilities and certificates are included.',
        },
        {
          id: 2,
          rule: 'Team registration must be completed before Day 2 evening.',
        },
        {
          id: 3,
          rule: 'All members must be present for the entire hackathon duration, late arrivals may be disqualified.',
        },
        {
          id: 4,
          rule: 'A valid student ID is required for registration and verification at the event venue.',
        },
      ],
    },
  ],
  ComboDeligatesData: [
    {
      id: 1,
      combo: 'Delegate Registrations',
      events: 'Can visit all the events for a day',
      hostel: 'Accommodation, Food, and Refreshments are Included',
      fee: '1500.00',
      link: 'https://forms.gle/na9rUVbfzSYVtA2h7',
      image: ComboImage7,
      isTrue: true,
      rulesData: [
        {
          id: 1,
          rule: 'Delegates who wish to attend for more than one day must specify the number of days during registration.',
        },
        {
          id: 2,
          rule: 'Accommodation is offered only to delegates attending for more than one day.',
        },
        {
          id: 3,
          rule: 'A valid ID is required for verification at the event venue.',
        },
      ],
    },
  ],
  ComboStallsData: [
    {
      id: 1,
      combo: 'Startup Stalls',
      events: 'Can showcase there stalls for three days',
      hostel: 'Accommodation, Food, and Refreshments are Included',
      fee: '5000.00',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLScYvnbrjPKIxbcvfjUpRXQH-WOrG-2Yop14lZPBp1y-s0137g/viewform?usp=sharing&ouid=107739413345558944539',
      image: ComboImage8,
      isTrue: false,
      rulesData: [
        {
          id: 1,
          rule: 'Accommodation is provided for the stall members.',
        },
        {
          id: 2,
          rule: 'Stall spaces will be allotted on a first-come, first-serve basis.',
        },
        {
          id: 3,
          rule: 'Bookings are confirmed only upon full payment is done.',
        },
        {
          id: 4,
          rule: 'A valid ID is required for registration and verification at the event venue.',
        },
      ],
    },
  ],
}));
