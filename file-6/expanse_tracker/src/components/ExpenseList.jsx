import { useContext } from "react";
import { StateContext } from "../context/StateContext";

const ExpenseList = () => {
  const { expenses, deleteExpense } = useContext(StateContext);

  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.text} - ${expense.amount}
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
