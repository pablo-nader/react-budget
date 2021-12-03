import { useState } from "react";
import SetBudget from "./components/SetBudget";
import BudgetContainer from "./components/BudgetContainer";

function App() {
  const [budget, setBudget] = useState(0);
  const [balance, setBalance] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [step, setStep] = useState(1);
  const [error, setError] = useState(false);

  const validateBalance = (balance, expense) => {
    if ((balance - expense.ammount) >= 0) {
      setBalance(balance - expense.ammount);

      return true;
    } 
    return false;
  }

  const addExpenses = expense => {
    if (validateBalance(balance, expense)) {
      setExpenses([...expenses, expense]);

      setError(false);
    } else {
      setError(true);
    }
  }

  const deleteExpense = expense => {
      setExpenses(expenses.filter(e => e.id !== expense.id));
      setBalance(balance + Number(expense.ammount));
  }

  return (
    <div className="container">
      <h1 className="text-center mb-3">Week Budget</h1>
      <div className="row ">
        {
          step === 1 ?
          <SetBudget 
            setBudget={setBudget}
            setBalance={setBalance}
            setStep={setStep}
          /> :
          <BudgetContainer 
            budget={budget}
            expenses={expenses}
            setBalance={setBalance}
            addExpenses={addExpenses}
            deleteExpense={deleteExpense}
            balanceError={error}
          />
        }
        
      </div>
    </div>
  );
}

export default App;
