import { create } from "zustand";

const useRecipeStore = create((set) => ({
  counter: 0,
  increment: () => {
    set((state) => ({ counter: state.counter + 1 }));
  },
}));

export default useRecipeStore;
