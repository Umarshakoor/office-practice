import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import IncomeList from "./components/IncomeList.jsx";
import ExpenseList from "./components/ExpenseList.jsx";
import AddIncomeForm from "./components/AddIncomeForm.jsx";
import { StateProvider } from "./context/StateContext";
import AddExpenseForm from "./components/AddExpenseForm.jsx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#388e3c", // Green color for primary
    },
    secondary: {
      main: "#1976d2", // Blue color for secondary
    },
    error: {
      main: "#d32f2f", // Red color for error
    },
    background: {
      default: "#fafafa", // Light background color
    },
    text: {
      primary: "#000", // Dark text color
      secondary: "#fff", // Light text color
    },
  },
  typography: {
    fontFamily: "Titillium Web, sans-serif",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StateProvider>
        <div className="App">
          <h1>Expense Tracker</h1>
          <div className="container">
            <div className="income-expense-container">
              <div className="income">
                <h2>Income</h2>
                <IncomeList />
                <AddIncomeForm />
              </div>
              <div className="expense">
                <h2>Expenses</h2>
                <ExpenseList />
                <AddExpenseForm />
              </div>
            </div>
          </div>
        </div>
      </StateProvider>
    </ThemeProvider>
  );
};

export default App;
