import React from 'react';

class OnePainting extends React.Component {
    state={
        painting:''
      }
    
    componentDidMount(){
        fetch(`http://localhost:3000/art/${this.props.id.match.params.id}`)
        .then(res => res.json())
        .then(json => this.setState({painting:json}))
      } 
    
render(){
  return(
    <div className="OnePainting">
     <p>{this.state.painting.title}</p>
     <img src={this.state.painting.image}></img>
    </div>
  );
}
}
export default OnePainting;

