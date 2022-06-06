import React, {useContext, useState} from 'react';
import {GlobalContext} from '../context-api/GlobalState'

function AddTransaction() {
    const {addTransaction}=useContext(GlobalContext)

    const [text,setText] = useState('');
    const [amount, setAmount] = useState(0);


    const generateId=()=>{
        return Math.floor(Math.random()*1000000000)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(text.trim() ==='' || Number(amount)===0) {
            alert('Please add a text and amount')
        } else {
            const newTransaction={
                id: generateId(),
                text,
                amount: +amount
            };
            addTransaction(newTransaction);
            setText('');
            setAmount(0)
        }
    }


  return (
    <>
        <form onSubmit={handleSubmit}>
      <h4>Add new transaction</h4>
      <div className="underline"></div>
      <p>Text</p>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Enter text..."
      />
      <p>
        Amount<p>(negative - expense, positive - income)</p>
      </p>
      <input
        type="number"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
        placeholder="Enter amount..."
      />

      <button>Add transaction</button>
    </form>
  </>
  )
}

export default AddTransaction