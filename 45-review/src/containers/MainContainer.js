import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <SearchBar sort={this.props.sort} search={this.props.search}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.props.stocks} addStock={this.props.addStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.props.portfolio} removeStock={this.props.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
