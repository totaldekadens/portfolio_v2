import { memo, useState } from 'react'
import { Waypoint } from 'react-waypoint'
import dynamic from 'next/dynamic'
import React from 'react'
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })
interface Props {
  src: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const VideoPlayer = memo(({ src }: Props) => {
  const [playing, setPlaying] = useState(false)

  const handleEnterViewport = function () {
    setPlaying(true)
  }
  const handleExitViewport = function () {
    setPlaying(false)
  }

  return (
    <Waypoint
      scrollableAncestor={'window'}
      onEnter={handleEnterViewport}
      onLeave={handleExitViewport}
    >
      <div className="relative rounded-lg transition-opacity">
        <ReactPlayer
          url={src}
          style={{ borderRadius: '16px', overflow: 'hidden' }}
          loop
          width="100%"
          height="100%"
          playing={playing}
          playsinline={true}
          muted={true}
          fallback={<p>Loading</p>}
        />
      </div>
    </Waypoint>
  )
})

export default VideoPlayer
