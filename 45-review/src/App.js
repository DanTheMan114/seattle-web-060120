import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

    state = {
      stocksAll:[],
      stocks:[],
      portfolio:[]
    }
  

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(json => this.setState({stocks:json, stocksAll:json}))
  }

  addStock = (stock) => {
    if(!this.state.portfolio.includes(stock)){
      this.setState({portfolio:[...this.state.portfolio, stock]})
    }
  }

  removeStock = (stock) => {
    if(this.state.portfolio.includes(stock)){
      let newPortfolio = this.state.portfolio.filter(item => item != stock)
      this.setState({portfolio:newPortfolio})
    }
  }

  sortStocks = (e) => {
    console.log(e.target.value)
    if(e.target.value == 'Alphabetically'){
     let newStock = this.state.stocks.sort((a,b) => a.name < b.name?-1:1)
      this.setState({stocks:newStock})
    } else {
      //earth
      let newStock = this.state.stocks.sort((a,b) => a.price < b.price?-1:1)
      this.setState({stocks:newStock})


    }
  }

  search = (e) => {
    let newStocks = this.state.stocksAll.filter(item => item.type == e.target.value)
    this.setState({stocks:newStocks})
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Header/>
        <MainContainer portfolio={this.state.portfolio} stocks={this.state.stocks} addStock={this.addStock} removeStock={this.removeStock} sort={this.sortStocks} search={this.search}/>
      </div>
    );
  }
}

export default App;
