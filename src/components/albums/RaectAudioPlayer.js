import React from 'react'
import ReactAudioPlayer from 'react-audio-player'

const ReactPlayer = ({ preview }) => (
  <ReactAudioPlayer
    autoPlay={true}
    src={preview}
    controls
  // onPlay={play}
  />
)
export default ReactPlayer