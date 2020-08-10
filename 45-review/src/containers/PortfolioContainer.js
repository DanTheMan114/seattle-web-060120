import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  buildsStocks = () => {
    return this.props.portfolio.map(portfolioItem => {
       return <Stock key={portfolioItem.id} stock={portfolioItem} addOrRemoveStock={this.props.removeStock}/>
     })
   }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.buildsStocks()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
