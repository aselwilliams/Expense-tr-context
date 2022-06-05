import React, {useState} from 'react'

function AddTransaction() {
    const [text,setText] = useState('');
    const [amount, setAmount] = useState(0);

    const handleTextChange=(e)=>{
        setText(e.target.value)
    }

    const handleAmountChange=(e)=>{
        setText(e.target.value)
    }

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
    <h3>Add new transaction</h3>
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="text">Text</label>
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Enter text..."
        />
      </div>
      <div className="form-control">
        <label htmlFor="amount">
          Amount <br />
          (negative - expense, positive - income)
        </label>
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter amount..."
        />
      </div>
      <button className="btn">Add transaction</button>
    </form>
  </>
  )
}

export default AddTransaction