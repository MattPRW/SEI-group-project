import React from 'react'
import { Link } from 'react-router-dom'
import Player from './AudioPlayer'


const AlbumCard = ({ title, artist, coverImage, id, addAlbum, removeAlbum, inRekordBox, dropDown, albumTracks }) => (

  <div className='column-is-one-third album-card' value={id} key={id} >

    <div className="image">
      <img src={coverImage}></img>
    </div>
    <div>
      <h5 className="title-size">{title}</h5>
      <h6 className="title-size">{`${artist.name}`}</h6>
    </div>
    <button className="button" value={id} onClick={dropDown}>
      ▷
    </button>
    {albumTracks && (
      <div>
        {albumTracks.map(track => (
          <div key={track.id}>
            <p>{track.title}</p>
            <Player 
              preview={track.preview}/>
          </div>))}
      </div>)}
    {
      removeAlbum && (
        <div onClick={(!inRekordBox) ? addAlbum : removeAlbum}
          className={`flex-end button ${(!inRekordBox) ? 'button-primary' : 'button'}`} id={id}>
          {(!inRekordBox) ? 'Add to rekord box' : 'Remove from rekord box'}</div>)
    }
  </div >
)

export default AlbumCard
