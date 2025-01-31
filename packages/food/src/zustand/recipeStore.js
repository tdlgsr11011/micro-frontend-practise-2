import { create } from "zustand";

const apiKey = process.env.API_KEY;
const baseUrl = process.env.RECIPE_BASE_URL;

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
      console.log(err);
    }
  },
}));

export default useRecipeStore;
