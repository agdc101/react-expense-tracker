import React, {useState} from "react";
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022');
    const addFilterHandler = year => {
        setFilteredYear(year);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onAddExpenseFilter={addFilterHandler}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    );
}

export default Expenses;