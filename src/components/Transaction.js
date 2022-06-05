import React from 'react'

function Transaction({transaction, deleteTransaction}) {
    const {is, text, amount} =transaction;
    const customClass=amount< 0 ? 'red' : 'green'
  return (
    <li className={customClass}>
        {text}<span>{amount}</span>
        <button className='delete-btn' onClick={()=>deleteTransaction(id)}>x</button>
    </li>
  )
}

export default Transaction