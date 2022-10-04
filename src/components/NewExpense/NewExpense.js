import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
    const [formActive, setFormActive] = useState(false); 

    const onSaveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.ceil(Math.random() * 1000).toString()
        }
       props.onAddExpense(expenseData);
       setFormActive(false);
    }

    const startEditingHandler = () => {
        setFormActive(true);
    }
    const stopEditingHandler = () => {
        setFormActive(false);
    }
    
    return  (
        <div className="new-expense">
            {formActive === true ? <ExpenseForm stopEditing={stopEditingHandler} onSaveExpenseData={onSaveExpenseData} /> : <button onClick={startEditingHandler}>Add New Expense</button>}
        </div>
    )
};

export default NewExpense;