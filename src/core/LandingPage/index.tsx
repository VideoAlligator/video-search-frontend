import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import Box from '@material-ui/core/Box'

import { State } from 'common/store/rootReducer'
import { videosSelectors, getVideos } from 'common/store/videos'
import { Video } from 'common/types/video'

import { SearchField } from 'common/components/atoms/SearchField'
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
      <Box p={2}>
        <Text type={TypographyStyles.primaryHeadline}>All videos</Text>
      </Box>
      <Box p={2}>
        <SearchField id="keyword-search" label="Search Keyword" width={600} />
      </Box>
      <Box display="flex" alignContent="flex-start" flexWrap="wrap">
        {videos.map((video, index) => (
          <div key={index}>
            <Box p={2}>
              <VideoInfoCard video={video} />
            </Box>
          </div>
        ))}
      </Box>
    </>
  )
}

const mapStateToProps = (state: State) => ({
  videos: videosSelectors.getVideos(state),
})

export default connect(mapStateToProps, { getVideos })(LandingPage)
