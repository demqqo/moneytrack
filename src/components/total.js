import React , {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
const Total = () => {
const {transactions} = useContext(GlobalContext);
const amounts = transactions.map(transaction=>transaction.amount)
const income = amounts.filter(item=> item >0).reduce((acc, item) => (acc+=item),0).toFixed(2);
const expense = amounts.filter(item => item < 0).reduce((acc,item) => (acc-=item),0).toFixed(2);
  return (
    <div className="info-box pt-4 pb-3">
      <div className="row text-center ">
        <div className="col border-end"><p className="fw-semibold">INCOME</p>
        <p className="green fs-4 fw-medium">+${income}</p></div>
        <div className="col "><p className="fw-semibold">EXPENSE</p><p className="red fs-4 fw-medium">-${expense}</p></div>
      </div>
    </div>
  )
}

export default Total
