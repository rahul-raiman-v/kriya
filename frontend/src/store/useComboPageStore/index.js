import { create } from "zustand";
import { persist } from "zustand/middleware"

export const useComboPageStore = create(persist((set) => ({
    selectedCombo: null,    
    setSelectedCombo: (comboData) => set({ selectedCombo: comboData }),
}),{
    name:"comboStore"
}));
