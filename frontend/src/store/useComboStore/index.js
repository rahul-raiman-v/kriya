import { create } from "zustand";

export const useComboStore = create(() => ({
    ComboData: [
        {
            id: 1,
            combo: "Master Combo",
            events: "2 Technical Events + Hackathon + 2 Workshops",
            hostel: "Accommodation, Food, and Refreshments are Included",
            prize: "Exciting Prizes!",
        },
        {
            id: 2,
            combo: "Master Combo",
            events: "2 Technical Events + 2 Workshops",
            hostel: "Accommodation, Food, and Refreshments are Included",
            prize: "Exciting Prizes!",
        },
        {
            id: 3,
            combo: "Master Combo",
            events: "2 Technical Events + Hackathon + 1 Workshops",
            hostel: "Accommodation, Food, and Refreshments are Included",
            prize: "Exciting Prizes!",
        },
        {
            id: 4,
            combo: "Master Combo",
            events: "2 Technical Events + Hackathon + 1 Workshops",
            hostel: "Accommodation, Food, and Refreshments are Included",
            prize: "Exciting Prizes!",
        },
        {
            id: 5,
            combo: "Master Combo",
            events: "2 Technical Events + Hackathon + 1 Workshops",
            hostel: "Accommodation, Food, and Refreshments are Included",
            prize: "Exciting Prizes!",
        },
    ],
    ComboDeligatesData: [
        {
            id: 1,
            combo: "Visitors Combo",
            events: "Can visit events for 3 days",
            hostel: "Accommodation, Food, and Refreshments are Included",
        },
    ],
    ComboStallsData: [
        {
            id: 1,
            combo: "Stalls Combo",
            events: "Can place Stalls for 3 days",
            hostel: "Accommodation, Food, and Refreshments are Included",
        },
    ]
}))