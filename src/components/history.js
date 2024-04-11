import React from 'react'

const History = () => {
  return (
    <div className="mt-4">
      <h3>History</h3>
      <div className="container"><div className=" green-box">
            <div className="info-box d-flex mb-3">

            <div className="me-auto p-2">Cash</div> <div className="p-2">+500</div>
            </div>
           
            </div><div className=" red-box">
            <div className="info-box d-flex mb-3">

            <div className="me-auto p-2">Book</div> <div className="p-2">-40</div>
            
           </div>
            </div>
            <div className=" red-box">
            <div className="info-box d-flex mb-3">

            <div className="me-auto p-2">Camera</div> <div className="p-2">-200</div>
            
           </div>
            </div></div>
    </div>
  )
}

export default History
