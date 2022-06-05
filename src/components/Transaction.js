import React from 'react'

function Transaction({transaction, deleteTransaction}) {
    const {id, text, amount} =transaction;
    const customClass=amount< 0 ? 'red inline' : 'green inline'
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