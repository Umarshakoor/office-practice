import { useState, useContext } from "react";
import { StateContext } from "../context/StateContext";

const AddExpenseForm = () => {
  const { addExpense } = useContext(StateContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Date.now(),
      text,
      amount: Number(amount),
    };
    addExpense(newExpense);
    setText("");
    setAmount(0);
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Expense description"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default AddExpenseForm;
