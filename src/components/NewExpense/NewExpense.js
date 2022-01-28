import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [formActive, setFormActive] = useState(false);

  const activateFormHandler = () => {
    setFormActive(true);
  };
  const deactivateFormHandler = () => {
    setFormActive(false);
  };

  const onSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setFormActive(false);
  };
  return (
    <div className="new-expense">
      {formActive ? (
        <ExpenseForm
          onCancel={deactivateFormHandler}
          onSaveExpenseData={onSaveExpenseData}
        />
      ) : (
        <button onClick={activateFormHandler}>Add new Expense</button>
      )}
    </div>
  );
};
export default NewExpense;
