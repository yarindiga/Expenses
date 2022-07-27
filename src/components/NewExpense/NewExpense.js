import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);
  function editingFrom() {
    setIsEditing(true);
  }
  function saveExpenseData(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }
  function stopEditing() {
    setIsEditing(false);
  }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={editingFrom}>Add new expense</button>}
      {isEditing && (
        <ExpenseForm
          onCancel={stopEditing}
          onSaveExpenseData={saveExpenseData}
        />
      )}
    </div>
  );
}

export default NewExpense;
