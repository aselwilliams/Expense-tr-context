import React from 'react';
import Transaction from './Transaction';

function TransactionList({transactions,deleteTransaction}) {
  return (
   <>
   <h3>History</h3>
   <div className='list'>
       {transactions.map((transaction)=>{
           return (
               <Transaction key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction} />
           )
       })}
   </div>
   </>
  )
}

export default TransactionList