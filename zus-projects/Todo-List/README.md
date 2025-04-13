# 📝 TodoList App

A simple and elegant Todo List built with **React**, **Zustand** for state management, and **Tailwind CSS** for styling.

## ✨ Features

- ✅ Add new todos
- ❌ Remove existing todos
- 🔁 Toggle todo completion
- 💾 Persistent local state (optional future feature)
- 💅 Beautiful and responsive UI with Tailwind CSS

## 🧠 Tech Stack

- **React** – Frontend library
- **Zustand** – Lightweight state management
- **TypeScript** – Type safety and maintainability
- **Tailwind CSS** – Utility-first styling

## 📦 Installation

1. Clone the repo
    ````bash
    git clone https://github.com/your-username/todo-list.git

2. Install dependencies
    ````bash
   npm install

3. Run the development server
    ````bash
   npm run dev
- Open http://localhost:5173 to view the app.


## 📂 File Structure
    src/
    ├── store.ts         # Zustand store for managing todos
    ├── components/
    │   └── TodoList.tsx # Main Todo List component
    ├── App.tsx          # Root component
    └── main.tsx         # Entry point


### 💡 Usage
- Type in the input to add a new todo.
- Check/uncheck a todo to mark it as completed.
- Click the ❌ "Delete" button to remove it.

### 🛠 Future Improvements
- Save todos to localStorage
- Filter: All / Active / Completed
- Edit todo text
- Add due dates or categories
