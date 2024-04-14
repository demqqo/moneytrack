import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Main = () => {
const {transactions} = useContext(GlobalContext);
const amounts = transactions.map(transaction=> transaction.amount)
const total = amounts.reduce((acc, item) => (acc+=item),0).toFixed(2);
  return (
    <div className='mt-5'>
      <p className="fw-semibold">YOUR BALANCE</p>
      <h1>${total}</h1>
      
    </div>
  )
}

export default Main
