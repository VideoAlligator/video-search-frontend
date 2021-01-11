import React, { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import Box from '@material-ui/core/Box'

import { State } from 'common/store/rootReducer'
import { videosSelectors, getVideos } from 'common/store/videos'
import { Video } from 'common/types/video'
import { ScreenContainer } from 'common/components/templates/ScreenContainer'
import { Text, TypographyStyles } from 'common/components/atoms/Typography'

import { VideoDetails } from './VideoDetails'

interface VideoDetailsPageProps {
  videos: Video[]
  getVideos: () => void
}

interface VideoParams {
  videoId: string
}

const getVideoById = (videos: Video[], videoId: string): Video[] =>
  videos.filter((video: Video) => video._id === videoId)

const VideoDetailsPage: FC<VideoDetailsPageProps> = ({ videos, getVideos }) => {
  useEffect(() => {
    if (videos.length === 0) {
      getVideos()
    }
  })

  const params = useParams<VideoParams>()
  const resultVideo = getVideoById(videos, params.videoId)[0]

  return (
    <ScreenContainer center maxWidth={1100}>
      <Box my={6}>
        {resultVideo ? (
          <VideoDetails video={resultVideo} />
        ) : (
          <Text type={TypographyStyles.primaryHeadline}>
            Cannot find such videos.
          </Text>
        )}
      </Box>
    </ScreenContainer>
  )
}

const mapStateToProps = (state: State) => ({
  videos: videosSelectors.getVideos(state),
})

export default connect(mapStateToProps, { getVideos })(VideoDetailsPage)
