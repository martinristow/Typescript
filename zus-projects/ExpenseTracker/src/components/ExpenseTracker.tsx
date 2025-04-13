import {useStore} from "../store.ts";
import {useState} from "react";

const ExpenseTracker = () => {

    const {expenses, addExpense, removeExpense} = useStore()

    const [description, setDescription] = useState<string>('')
    const [amount, setAmount] = useState<number | ''>('')

    const handleAddExpense = () => {
        if (description.trim() === '' || amount === '') return;

        addExpense({
            id: Date.now(),
            description: description,
            amount: Number(amount),
        })


        setDescription('')
        setAmount('')

    }

    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-red-400 to-blue-500'>
            <div className='bg-white p-8 rounded-lg shadow-xl w-full max-w-lg'>
                <h1 className='text-4xl font-extrabold mb-6 text-center text-purple-700'>
                    Expense Tracker
                </h1>

                <div className="space-y-4 mb-6">
                    <input type="text"
                           value={description}
                           onChange={(e) => setDescription(e.currentTarget.value)}
                           className='w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                           placeholder='Expense Description'
                    />

                    <input
                        type="number"
                        value={amount}
                        onChange={(e) =>
                            setAmount(e.currentTarget.value === '' ? '' : Number(e.currentTarget.value))}
                        placeholder='Description'
                        className='w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />

                    <button
                        onClick={handleAddExpense}
                        className='bg-blue-500 text-white w-full px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    >
                        Add Expense
                    </button>

                </div>

                <ul className='space-y-4 mb-6'>
                    {expenses.map((expense) => (
                        <li key={expense.id}
                            className='flex justify-between items-center bg-blue-50 p-4 rounded-lg shadow-sm'>
                            <span className="text-gray-800 font-semibold">
                                {expense.description} :
                                <span className="text-purple-600">
                                 ${expense.amount.toFixed(2)}
                                </span>
                            </span>

                            <button
                                className='bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500'
                                onClick={() => removeExpense(expense.id)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-purple-700">
                        Total Expenses : {" "}
                        <span className="text-purple-600">
                            $ {expenses.reduce((total, expense) => total + expense.amount, 0).toFixed(2)}
                        </span>
                    </h2>
                </div>

            </div>
        </div>
    )
}
export default ExpenseTracker
