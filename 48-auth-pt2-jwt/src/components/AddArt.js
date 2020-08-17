import React from 'react';

class AddArt extends React.Component{
state = {
  title:'',
  image:'',
  artist:''
}


handleChange = (e) => {
  let {name, value} = e.target
  this.setState({
    [name]: value
  })
}

handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
    fetch('http://localhost:3000/arts',{
        method:"POST",
        headers:{
          'Content-Type':'application/json',
          'Authorization': `Bearer ${this.props.token}`
        },
        body:JSON.stringify(this.state)
      })
      .then(res => res.json())
      .then(json => this.props.addArtToState(json))
}

render(){
    console.log(this.props)
  return (
    <div className="AddArt">
    <h2>Add New Art</h2>
     <form onSubmit={(e) => this.handleSubmit(e)}>
         <label>Title</label>
         <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
        <br/>
         <label>Image</label>
         <input type="text" name="image" value={this.state.image} onChange={this.handleChange}/>
         <br/>
         <label>Artist</label>
         <input type="text" name="artist" value={this.state.artist} onChange={this.handleChange}/>
         <br/>
         <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
}

export default AddArt;