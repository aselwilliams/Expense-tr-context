import React from 'react'

function Balance() {
    const amounts = transactions.map((t)=>t.amount) //[-1200,5000]

    const total = amounts.reduce((acc,item)=> acc+item, 0)
  return (
   <>
   <h4>Your Balance</h4>
   <h1>{'$'+total.toFixed(2)}</h1>
   </>
  )
}

export default Balance