import React from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
  return (
    <form className="expense-form">
      <input type="text" placeholder="Enter expense name" />
      <input type="number" placeholder="Amount" />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
