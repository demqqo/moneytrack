import React, {useContext}  from 'react'
import "../App.css"
import { GlobalContext } from '../context/GlobalState'

const Transaction = ({transaction}) => {
    
const { deleteTransaction } = useContext(GlobalContext);
const sign = transaction?.amount < 0 ? '-' : '+';

  return (
    
    <div>
      <div className={(transaction?.amount < 0 ? 'red-box li' : 'green-box li') } >
          <div className="info-box d-flex ">
            <div className="me-auto p-2">{transaction?.text || 'Unknown'}</div> 
            <div className="p-2">{sign}${Math.abs(transaction?.amount) || 0}</div>
            
          </div>
        </div>
        <button onClick={()=>deleteTransaction(transaction?.id)} className="delete-btn">X</button>
    </div>
    
  )
}

export default Transaction