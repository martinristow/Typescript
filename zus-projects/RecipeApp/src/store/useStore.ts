import {create} from 'zustand'

interface RecipeInterface {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string;
}

interface RecipeStoreInterface {
    recipes: RecipeInterface[];
    addRecipe: (recipe: RecipeInterface) => void;
    removeRecipe: (id: number) => void;
}


export const useStore = create<RecipeStoreInterface>((set) => ({
    recipes: [],
    addRecipe: (recipe) =>
        set((state) => ({recipes: [...state.recipes, recipe]})),

    removeRecipe: (id) =>
        set((state) => (
            {recipes: state.recipes.filter((recipe) => recipe.id !== id)}
        ))

}))