import React from 'react'
import AudioPlayer from 'react-h5-audio-player'

const Player = ({ file }) => (
  <AudioPlayer
    autoPlay={true}
    src={file}
    controls={true}
  />
)
export default Player