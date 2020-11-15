import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'

import { State } from 'common/store/rootReducer'
import { videosSelectors, getVideos } from 'common/store/videos'
import { Video } from 'common/types/video'

import { Text, TypographyStyles } from 'common/components/atoms/Typography'
import TopBar from 'common/components/molecules/TopBar'
import { VideoInfoCard } from 'common/components/molecules/VideoInfoCard'

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
      <Text type={TypographyStyles.primaryHeadline}>All videos</Text>
      {videos.map((video, index) => (
        <div key={index}>
          <VideoInfoCard video={video} />
        </div>
      ))}
    </>
  )
}

const mapStateToProps = (state: State) => ({
  videos: videosSelectors.getVideos(state),
})

export default connect(mapStateToProps, { getVideos })(LandingPage)
