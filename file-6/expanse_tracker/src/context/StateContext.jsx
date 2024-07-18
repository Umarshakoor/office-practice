import { createContext, useState, useEffect } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);

  useEffect(() => {
    const storedIncomes = JSON.parse(localStorage.getItem("incomes")) || [];
    const storedExpanses = JSON.parse(localStorage.getItem("expanses")) || [];
    setIncomes(storedIncomes);
    setExpenses(storedExpanses);
    updateTotals(storedIncomes, storedExpanses);
  }, []);

  useEffect(() => {
    localStorage.setItem("incomes", JSON.stringify(incomes));
    localStorage.setItem("expenses", JSON.stringify(expenses));
    updateTotals(incomes, expenses);
  }, [incomes, expenses]);

  const updateTotals = (incomes, expenses) => {
    const totalIncome = incomes.reduce((acc, income) => acc + income.amount, 0);
    const totalExpenses = expenses.reduce(
      (acc, expanse) => acc + expanse.amount,
      0
    );
    setTotalIncome(totalIncome);
    setTotalExpenses(totalExpenses);
  };
  const addIncome = (income) => {
    setIncomes([...incomes, income]);
  };

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteIncome = (id) => {
    const newIncomes = incomes.filter((income) => income.id !== id);
    setIncomes(newIncomes);
  };

  const deleteExpense = (id) => {
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(newExpenses);
  };

  return (
    <StateContext.Provider
      value={{
        incomes,
        expenses,
        totalIncome,
        totalExpenses,
        addIncome,
        addExpense,
        deleteIncome,
        deleteExpense,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
