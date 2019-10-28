import React from 'react'

const AlbumCard = ({ title, artist, cover_medium, id, handleAddAlbum }) => (

  <div className="column-is-one-third" value={id} key={id} >
    <div>
      <h5 className="titleSize">{title}</h5>
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
