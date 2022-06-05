import React from 'react'

function IncomeExpenses() {
    const amounts = transactions.map((transaction)=>transaction.amount); 
    const income = amounts.filter((amount)=>amount > 0).reduce((acc, item)=>acc + item, 0)

    const expense = amounts.filter((expense)=>expense< 0).reduce((acc, item)=>acc + item, 0) * -1;
  return (
    <div>
        <section className="flex">
      <div>
        <label>INCOME</label>
        <p className="income">${income}</p>
      </div>
      <div className="line"></div>
      <div>
        <label>EXPENSE</label>
        <p className="expense">${expense}</p>
      </div>
    </section>
    </div>
  )
}

export default IncomeExpenses