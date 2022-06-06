import React, { useContext } from 'react';
import {GlobalContext} from '../context-api/GlobalState'

function Transaction({transaction}) {
    const {deleteTransaction} = useContext(GlobalContext)

    const {id, text, amount} = transaction;
    
  return (
    <main
    className={`inline ${amount < 0 ? "red" : "green"}`}
    key={id}
  >
    <button onClick={() => deleteTransaction(id)} className="exit">
      X
    </button>

    <article className="box inline">
      <p>{text}</p>
      <p>{amount}</p>
    </article>
  </main>
  )
}

export default Transaction