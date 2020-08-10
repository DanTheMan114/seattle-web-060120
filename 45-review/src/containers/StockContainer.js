import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  buildsStocks = () => {
   return this.props.stocks.map(stockItem => {
      return <Stock key={stockItem.id} stock={stockItem} addOrRemoveStock={this.props.addStock}/>
    })
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.buildsStocks()
        }
      </div>
    );
  }

}

export default StockContainer;
