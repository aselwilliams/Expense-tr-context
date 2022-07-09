import { createContext, useEffect, useReducer } from "react";
import { reducer } from "../StateReducer";

const localStorageTransactions = JSON.parse(
  localStorage.getItem("transactions")
);

const initialState = {
  transactions: localStorageTransactions || [],
};

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state.transactions));
  }, [state.transactions]);

  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_ITEM", payload: transaction });
  };

  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
  };
  const { transactions } = state;
  return (
    <GlobalContext.Provider
      value={{ transactions, deleteTransaction, addTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
