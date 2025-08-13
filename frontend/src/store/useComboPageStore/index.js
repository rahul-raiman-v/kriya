import { create } from "zustand";

export const useComboPageStore = create((set) => ({
    selectedCombo: null,    
    setSelectedCombo: (comboData) => set({ selectedCombo: comboData }),
}));
