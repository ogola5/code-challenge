import React, { useState,useEffect } from "react";

function Transaction() {
  const [Transaction,setTransactions]=useState([])
  useEffect(()=>{
    fetch("http://localhost:8001/transactions")
    .then((resp) =>resp.json())
    .then((data)=>{
      setTransactions(data)
    })
  },[])
  const eachTransaction= transaction.map((single)=>{
    return(
      <>
      <table>
        <tr>
          <td>{single.date}</td>
          <td>{single.description}</td>
          <td>{single.category}</td>
          <td>{single.amount}</td>
        </tr>
      </table>
      </>

    )
      
  })
  return (
    <div>
    {eachTransaction}
  </div>
  );
}

export default Transaction;
