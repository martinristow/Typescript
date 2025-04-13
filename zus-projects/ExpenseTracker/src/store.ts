import {create} from 'zustand'


interface ExpenseInterface {
    id: number,
    description: string,
    amount: number,
}

interface ExpenseStore {
    expenses: ExpenseInterface[],
    addExpense: (expense: ExpenseInterface) => void
    removeExpense: (id: number) => void
}

export const useStore = create<ExpenseStore>((set) => ({
    expenses: [],

    addExpense: (expense) => set((state) => ({
        expenses: [...state.expenses, expense],
    })),

    removeExpense: (id) => set((state) => ({
        expenses: state.expenses.filter((expense) => expense.id !== id),
    }))
}))