import React from 'react'

const AlbumCard = ({ title, artist, coverImage, _id, addAlbum, removeAlbum, inRekordBox, deezerId }) => (

  <div className="column-is-one-third album-card" value={_id} key={_id} >
    <div className="image">
      <img src={coverImage}></img>
    </div>
    
    <div>
      <h5 className="title-size">{title}</h5>
      <h6>{`${artist.name}`}</h6>
    </div>
    {removeAlbum && (
      <div 
        id={id} 
        onClick={inRekordBox ? addAlbum : removeAlbum} 
        className={`flex-end button ${inRekordBox ? 'button-primary' : 'button'}`}
      >
        {inRekordBox ? 'Add to collection' : 'Remove from collection'}</div>)}
  </div >
)

export default AlbumCard
