import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
    const onSaveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.ceil(Math.random() * 1000).toString()
        }
        props.onAddExpense(expenseData);
    }
    
    return  (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={onSaveExpenseData} />
        </div>
    )
};

export default NewExpense;