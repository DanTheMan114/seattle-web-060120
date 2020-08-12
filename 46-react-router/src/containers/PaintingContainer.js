import React from 'react';
import PaintingCard from '../components/PaintingCard';

class PaintingContainer extends React.Component{

renderCards = () => this.props.allArt.map(item=><PaintingCard key={item.id} painting={item}/>)

render(){
  console.log(this.props)
  return (
    <div className="PaintingContainer">
    <div>{this.renderCards()}</div>
   </div>
  );
}
}

export default PaintingContainer;