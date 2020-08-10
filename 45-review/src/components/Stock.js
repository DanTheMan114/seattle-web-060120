import React from 'react'
// const Stock = (props) => 
// props.stock.name props.addStock
const Stock = ({stock, addOrRemoveStock}) => {
 return (  
   // onClick={(e)=> addStock(e)}
  <div onClick={() => addOrRemoveStock(stock)}>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{
            stock.name
          }</h5>
        <p className="card-text">{
            stock.price
          }</p>
      </div>
    </div>
  </div>
);
}

export default Stock
