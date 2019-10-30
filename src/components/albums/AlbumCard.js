import React from 'react'
import { Link } from 'react-router-dom'
// import SoundPlayer from 'react-native-sound-player'


const AlbumCard = ({ title, artist, coverImage, id, addAlbum, removeAlbum, inRekordBox, dropDown, albumTracks }) => (

  <div className='column-is-one-third album-card' value={id} key={id} >

    <div className="image">
      <img src={coverImage}></img>
    </div>
    <div>
      <h5 className="title-size">{title}</h5>
      <h6>{`${artist.name}`}</h6>
    </div >
    <button className="button" value={id} onClick={dropDown}>
      ▷
    </button>
    {albumTracks && (
      <div>
        {albumTracks.map(track => (
          <div key={track.id}>
            <p>{track.title}</p>
            <button value={track.preview} onClick={() => track.preview.play()}>▷</button>
            <p>{track.preview}</p>
            {/* <button onClick={SoundPlayer.playUrl(track.preview)}>▷</button> */}
          </div>))}
      </div>)}
    {
      removeAlbum && (
        <div onClick={(!inRekordBox) ? addAlbum : removeAlbum}
          className={`flex-end button ${(!inRekordBox) ? 'button-primary' : 'button'}`} id={id}>
          {(!inRekordBox) ? 'Add to collection' : 'Remove from collection'}</div>)
    }
  </div >
)

export default AlbumCard
