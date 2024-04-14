import React , {useContext} from 'react'
import Transaction from './transaction'
import { GlobalContext } from '../context/GlobalState'
const History = () => {

const {transactions} = useContext(GlobalContext);

  return (
    <div className="mt-4">
      <h3>History</h3>

      <div className="container list">
      {transactions.map(transaction=>(<Transaction key={transaction.id} transaction={transaction}/>))}
    </div>
    </div>
  )
}

export default History
