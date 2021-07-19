import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../ui/Card";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2019");
  const handleFilterSelect = (year) => {
    setFilterYear(year);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        onFilterSelect={handleFilterSelect}
        filterYear={filterYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
