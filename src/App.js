import React, {useState} from 'react';
import Card from './components/UI/Card';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const initial_expenses = [
  {
    id: 'e1',
    title: 'Home Insurance',
    amount: 194.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]; 

const App = () => {

  const [expenses, setExpenses] = useState(initial_expenses);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <Card className="expenses">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </Card>
  );
}

export default App;
