import { useState, useContext } from "react";
import { StateContext } from "../context/StateContext";

const AddIncomeForm = () => {
  const { addIncome } = useContext(StateContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newIncome = {
      id: Date.now(),
      text,
      amount: Number(amount),
    };
    addIncome(newIncome);
    setText("");
    setAmount(0);
  };

  return (
    <div>
      <h2>Add Income</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Income description"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add Income</button>
      </form>
    </div>
  );
};

export default AddIncomeForm;
