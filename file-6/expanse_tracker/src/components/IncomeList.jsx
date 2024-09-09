import { useContext } from "react";
import { StateContext } from "../context/StateContext";

const IncomeList = () => {
  const { incomes, deleteIncome } = useContext(StateContext);

  return (
    <div>
      <h2>Income List</h2>
      <ul>
        {incomes.map((income) => (
          <li key={income.id}>
            {income.text} - ${income.amount}
            <button onClick={() => deleteIncome(income.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncomeList;
