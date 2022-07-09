import React, { useContext } from "react";
import { GlobalContext } from "../context-api/GlobalState";

function Balance() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((t) => t.amount); //[-1200,5000]

  const total = amounts.reduce((acc, item) => acc + item, 0);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>{"$" + total.toFixed(2)}</h1>
    </>
  );
}

export default Balance;
