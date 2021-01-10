import React, { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import Box from '@material-ui/core/Box'

import { State } from 'common/store/rootReducer'
import { videosSelectors, getVideos } from 'common/store/videos'
import { Video } from 'common/types/video'

import { ScreenContainer } from 'common/components/templates/ScreenContainer'
import { VideoDetails } from './VideoDetails'

interface VideoDetailsPageProps {
  videos: Video[]
  getVideos: () => void
}

interface VideoParams {
  videoId: string
}

const VideoDetailsPage: FC<VideoDetailsPageProps> = ({ videos, getVideos }) => {
  useEffect(() => {
    if (videos.length === 0) {
      getVideos()
    }
  })

  const params = useParams<VideoParams>()

  return (
    <ScreenContainer center maxWidth={1200}>
      <Box p={3}>
        <Box display="flex" alignContent="flex-start" flexWrap="wrap">
          {videos.map((video, index) => (
            <div key={index}>
              {video._id === params.videoId && (
                <Box mr={3} mt={3}>
                  <VideoDetails video={video} />
                </Box>
              )}
            </div>
          ))}
        </Box>
      </Box>
    </ScreenContainer>
  )
}

const mapStateToProps = (state: State) => ({
  videos: videosSelectors.getVideos(state),
})

export default connect(mapStateToProps, { getVideos })(VideoDetailsPage)
