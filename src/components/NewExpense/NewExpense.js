import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditable, setIsEditable] = useState(false);
  const saveExpenseHandler = (enteredExpenseDetails) => {
    const expenseData = {
      ...enteredExpenseDetails,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };
  const isEditableHandler = () => {
    setIsEditable(true);
  };

  const cancelEditingHandler = () => {
    setIsEditable(false)
  }

  return (
    <div className="new-expense">
      {!isEditable && (
        <button onClick={isEditableHandler}>Add new expense</button>
      )}
      {isEditable && <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel={cancelEditingHandler} />}
    </div>
  );
};

export default NewExpense;
