import { create } from "zustand";

const apiKey = process.env.FORKIFY_API_KEY;
const baseUrl = process.env.FORKIFY_BASE_URL;

const useRecipeStore = create((set) => ({
  loading: false,
  recipes: [],

  fetchRecipes: async (queryText) => {
    const url = `${baseUrl}/api/v2/recipes?search=${queryText}&key=${apiKey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      set((state) => ({ recipes: data.data.recipes }));
    } catch (err) {
      throw new Error(err);
    }
  },
}));

export default useRecipeStore;
