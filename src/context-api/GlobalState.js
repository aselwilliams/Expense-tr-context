import { createContext,useEffect, useState } from "react";

const localStorageTransactions=JSON.parse(localStorage.getItem('transactions'))

const initialTransactions=localStorageTransactions || []

export const GlobalContext=createContext();

export const GlobalProvider=({children})=>{
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
        <GlobalContext.Provider value={{transactions, deleteTransaction, addTransaction}} >
            {children}
        </GlobalContext.Provider>
    )
}