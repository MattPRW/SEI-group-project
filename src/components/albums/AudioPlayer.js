import React from 'react'
import AudioPlayer from 'react-h5-audio-player'

const Player = ({ preview }) => (
  <AudioPlayer
    autoPlay={false}
    src={preview}
  // onPlay={play}
  />
)
export default Player