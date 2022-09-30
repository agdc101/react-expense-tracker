import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import "./Expenses.css";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022');
    const addFilterHandler = year => {
        setFilteredYear(year);
    }
    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onAddExpenseFilter={addFilterHandler}/>
            {props.items.map((expense) => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>)}
        </Card>
    );
}

export default Expenses;