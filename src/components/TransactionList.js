import React, { useContext } from 'react';
import Transaction from './Transaction';
import {GlobalContext} from '../context-api/GlobalState';

function TransactionList() {
    const {transactions}=useContext(GlobalContext);
    const {deleteTransaction}=useContext(GlobalContext);

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