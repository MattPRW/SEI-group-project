import React from 'react'

const AlbumCard = ({ title, artist, coverImage, id, handleAddAlbum }) => (

  <div className="column-is-one-third album-card" value={id} key={id} >
    <div className="image">
      <img src={coverImage}></img>
    </div>
    <div>
      <h5 className="title-size">{title}</h5>
      <h6>{`${artist.name}`}</h6>
    </div>
    {handleAddAlbum && (<div onClick={handleAddAlbum} className="button add-button" id={id}>
     Add to collection
    </div>)}
  </div >
)

export default AlbumCard
