import React, { useEffect, useState } from "react";
import Header  from "./components/Header";
import  Balance  from "./components/Balance";
import  IncomeExpenses  from "./components/IncomeExpenses";
import  TransactionList  from "./components/TransactionList";
import  AddTransaction  from "./components/AddTransaction";
import './App.css';

const localStorageTransactions=JSON.parse(localStorage.getItem('transactions'))

const initialTransactions=localStorageTransactions || []

function App() {
  const [transactions,setTransactions] =useState(initialTransactions)

  useEffect(()=>{
    localStorage.setItem('transactions', JSON.stringify(transactions))
  },[transactions]);

  const addTransaction =(transaction)=>{
    const newTransactions=transactions.map((t)=>{
      return {...t}
    })
    newTransactions.push(transaction);
    setTransactions(newTransactions);
  };

  const deleteTransaction=(id)=>{
    const newTransactions=transactions.filter((t)=>t.id !== id);
    setTransactions(newTransactions)
  }
  return (
   <>
   <Header />
   <div className="container">
     <Balance transactions={transactions} />
     <IncomeExpenses transactions={transactions} />
     <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
     <AddTransaction addTransaction={addTransaction} />
   </div>
   </>
  );
}

export default App;
