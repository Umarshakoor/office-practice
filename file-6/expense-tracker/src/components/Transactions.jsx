import { Box, Container } from "@mui/material";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Transactions({ addIncome, addExpense }) {
  const [label, setLabel] = useState("");
  const [amount, setAmount] = useState("");

  const addInc = (income) => {
    addIncome(income);
    setTimeout(() => {
      setLabel("");
      setAmount("");
    }, 500);
  };

  const addEx = (expense) => {
    addExpense(expense);
    setTimeout(() => {
      setLabel("");
      setAmount("");
    }, 500);
  };

  return (
    <Container>
        <Box>
            <div>
            <button
              disabled={!label || !amount}
              onClick={() => addInc({ id: uuidv4(), label, amount })}
              className="btn btn-sm btn-success mb-3"
            >
              <i className="bi bi-bag-plus-fill"></i>
            </button>
          </div>
          <div className="col-auto">
            <input
              type="text"
              value={label}
              onChange={(event) => setLabel(event.target.value)}
              className="form-control mb-2"
              placeholder="Label"
            />
            <input
              type="number"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              className="form-control mb-2"
              placeholder="Amount"
            />
          </div>
          <div className="col-auto">
            <button
              disabled={!label || !amount}
              onClick={() => addEx({ id: uuidv4(), label, amount })}
              className="btn btn-sm btn-danger mb-3"
            >
              <i className="bi bi-bag-dash-fill"></i>
            </button>
            <div>
            </Box>
    </Container>
  );
}