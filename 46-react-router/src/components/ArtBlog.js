import React from 'react';

class ArtBlog extends React.Component {
state = {
    blogs:[]
}

componentDidMount(){
    fetch(`http://localhost:3000/blogs`)
    .then(res => res.json())
    .then(json => this.setState({blogs:json}))
}

renderBlog = () =>{
    console.log('hi')
   return this.state.blogs.map(item => {
     return ( <div>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        </div>
     )
    })
   
}
render(){
    return (
        <div className="ArtBlog">
         {this.renderBlog()}
        </div>
      );
} 
}

export default ArtBlog;