import React from 'react';

const ArtistList = (props) => {
    let artistNames = () => {
        let artist = []
            return props.allArt.map(item=>{
                if(!artist.includes(item.artist.name)){
                    artist.push(item.artist.name)
                return(<p>{item.artist.name}</p>)
                }
          
        })
        
    }
  return (
    <div className="PaintingContainer">
     {
        artistNames()
     }
    </div>
  );
}

export default ArtistList;