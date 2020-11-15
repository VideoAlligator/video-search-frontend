import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'

import { State } from 'common/store/rootReducer'
import { videosSelectors, getVideos } from 'common/store/videos'
import { Video } from 'common/types/video'

import TopBar from 'common/components/TopBar'
import { SearchInput } from 'common/components/SearchInput'

interface LandingPageProps {
  videos: Video[]
  getVideos: () => void
}

const LandingPage: FC<LandingPageProps> = ({ videos, getVideos }) => {
  useEffect(() => {
    if (videos.length === 0) {
      getVideos()
    }
  })

  return (
    <>
      <TopBar />
      <SearchInput />
      <h3>All videos</h3>
      {videos.map((video, index) => (
        <div key={index}>
          <p>Name: {video.name}</p>
          <p>Duration: {video.duration}</p>
          <p>Labels: {video.labels}</p>
        </div>
      ))}
    </>
  )
}

const mapStateToProps = (state: State) => ({
  videos: videosSelectors.getVideos(state),
})

export default connect(mapStateToProps, { getVideos })(LandingPage)
