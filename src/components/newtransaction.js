import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
const Newtransaction = () => {
  const [text, setText] = useState("")
  const [amount, setAmount] = useState("")
  const {addTransaction} = useContext(GlobalContext);
  const handleSubmit =(e)=>{
    e.preventDefault();
   
const newTransaction= {
  
  id: Math.floor(Math.random()*100000000),
  text,
  amount: +amount
  }
  
    addTransaction(newTransaction);
    setText("");
        setAmount("");
  }
  return (
    <div>

      <h3>Abb New transaction</h3>
      <div className="container">
      <div>Text</div>
         <form onSubmit={handleSubmit}><input className="mt-2 mb-2 p-2" type="text" placeholder="Enter text..." value={text}onChange={(e)=>setText(e.target.value)}></input>
      <div >Amount</div>
      <div>(negative -expense, positive -income)</div>
   
      <input className="mt-2 mb-2 p-2" type="text" placeholder="Enter amount..." value={amount}onChange={(e)=>setAmount(e.target.value)}></input>
      <input className="mt-2 mb-2 p-2 button" type="submit"value="Add transaction"></input></form></div>
    </div>
  )
  }

export default Newtransaction
