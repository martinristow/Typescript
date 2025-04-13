import {create} from "zustand";


interface MealsInterface {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
}

interface MealsStoreInterface {
    meals: MealsInterface[];
    searchQuery: string;
    setMeals: (meals: MealsInterface[]) => void;
    setSearchQuery: (searchQuery: string) => void;
}

export const useStore = create<MealsStoreInterface>((set) => ({
    meals: [],
    searchQuery: "",
    setMeals: (meals: MealsInterface[]) => set({meals}),
    setSearchQuery: (query: string) => set({searchQuery: query}),
}))