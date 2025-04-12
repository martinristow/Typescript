# 🍲 Recipe App

A simple recipe management application built with React and Zustand for global state management. This app allows users
to add, edit, and delete recipes, including their ingredients and instructions. It features a clean and responsive UI
built with TailwindCSS.

## ✨ Features

- **Add Recipes**: Users can input the name, ingredients, and instructions for new recipes.
- **Edit Recipes**: Users can edit existing recipes and update them.
- **Delete Recipes**: Users can delete recipes from the list.
- **State Management**: Uses Zustand for managing recipe data globally.
- **Responsive UI**: The app is styled with TailwindCSS to ensure it looks great on all screen sizes.

## 📦 Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **Zustand**: A small, fast, and scalable state management library for React.
- **TailwindCSS**: A utility-first CSS framework for styling.
- **TypeScript**: A statically typed superset of JavaScript for type safety.

## 🚀 Getting Started

### 1. Clone the repository

    git clone https://github.com/martinristow/Typescript/tree/main/zus-projects/RecipeApp

### 2. Install dependencies

    npm install

### 3. Start the development server

    npm run dev

 - The app will run on http://localhost:5173 (or whichever port Vite uses).

### Usage

- Add a new recipe by entering the recipe name, ingredients (comma separated), and instructions in the form.
- Edit any recipe by clicking the "Edit" button, which pre-fills the form with the current recipe details.
- Delete any recipe by clicking the "Delete" button next to the recipe.
- The app stores the recipe data globally using Zustand and allows the user to manage their recipe collection
  seamlessly.

### 🧪 Folder Structure

    src/
    ├── components/
    │   └── RecipeApp.tsx     # Main recipe logic and UI
    ├── store/
    │   └── useStore.ts       # Zustand store for managing recipes
    ├── App.tsx               # Root component
    ├── main.tsx              # Entry point

### 📝 Future Improvements

    Add persistent storage using localStorage or a backend
    Add recipe image uploads
    Add category/tags for filtering recipes
    Improve mobile responsiveness and accessibility