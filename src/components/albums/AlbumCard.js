import React from 'react'
import { Link } from 'react-router-dom'
import Player from './AudioPlayer'


const AlbumCard = ({ title, artist, coverImage, id, addAlbum, removeAlbum, inRekordBox, albumTracks, play, songOnPlayer, albumOnPlayer, openDropDown }) => (

  <div className='column-is-one-third album-card' value={id} key={id} >

    <div className="album-image" id={id} style={{ backgroundImage: `url(${coverImage})`, height: '250px', width: '250px' }} >
      {(albumTracks && parseInt(albumOnPlayer) === id) &&
        <div className="player-flex">
          <Player
            file={songOnPlayer} />
          {albumTracks.map(track => (
            <button onClick={play} className="button tracklist" key={track.title} value={track.preview}>{track.title}</button>
          ))}
        </div>}
    </div>
    <div>
      <h5 className="title-size">{title}</h5>
      <h6>{`${artist.name}`}</h6>
    </div>
    <div className='card-buttons'>
      <button className="button" value={id} onClick={openDropDown}>
        {parseInt(albumOnPlayer) === id ? 'Close Player ▽' : 'Open Player △'}
      </button>
      {
        removeAlbum && (
          <div onClick={(!inRekordBox) ? addAlbum : removeAlbum}
            className={`button ${(!inRekordBox) ? 'button-primary' : 'button'}`} id={id}>
            {(!inRekordBox) ? 'Add to rekord box' : 'Remove from rekord box'}</div>)
      }
    </div>
  </div >
)

export default AlbumCard
