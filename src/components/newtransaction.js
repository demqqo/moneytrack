import React from 'react'

const Newtransaction = () => {
  return (
    <div>

      <h3>Abb New transaction</h3>
      <div className="container">
      <div>Text</div>
      <input className="mt-2 mb-2 p-2" type="text" placeholder="Enter text..."></input>
      <div >Amount</div>
      <div>(negative -expense, positive -income)</div>
      <input className="mt-2 mb-2 p-2" type="text" placeholder="Enter amount..."></input>
      <input className="mt-2 mb-2 p-2 button" type="submit"value="Add transaction"></input></div>
    </div>
  )
}

export default Newtransaction
