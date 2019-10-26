import React from 'react'

const AlbumCard = ({ title, artist, cover_medium, id, handleAddAlbum }) => (

  <div onClick={handleAddAlbum} className="one-third column" value={id} key={id} >
    <div>
      <h5>{title}</h5>
      <h6>{`Artist: ${artist.name}`}</h6>
    </div>
    <div className="image">
      <img src={cover_medium}></img>
    </div>
    {handleAddAlbum && (<div onClick={handleAddAlbum} className="button" id={id}>
     Add to collection
    </div>)}
  </div >
)

export default AlbumCard
