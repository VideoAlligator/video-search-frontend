import React, { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'

import { State } from 'common/store/rootReducer'
import { videosSelectors, getVideoById, resetVideo } from 'common/store/videos'
import {
  framesSelectors,
  getFrameByVideoName,
  resetFrame,
} from 'common/store/frames'
import { Video } from 'common/types/video'
import { Frame } from 'common/types/frame'
import { ScreenContainer } from 'common/components/templates/ScreenContainer'

import { VideoDetails } from './VideoDetails'
import img from './assets/images.jpg'

interface VideoDetailsPageProps {
  currVideo?: Video
  getVideoById: (videoId: string) => void
  frames: Frame[]
  getFrameByVideoName: (videoName: string) => void
  isVideoLoading: boolean
  isFrameLoading: boolean
  resetFrame: () => void
  resetVideo: () => void
}

interface VideoParams {
  videoId: string
}

const VideoDetailsPage: FC<VideoDetailsPageProps> = ({
  currVideo,
  getVideoById,
  frames,
  getFrameByVideoName,
  isVideoLoading,
  isFrameLoading,
  resetFrame,
  resetVideo,
}) => {
  const params = useParams<VideoParams>()

  useEffect(() => {
    getVideoById(params.videoId)
  }, [params.videoId, getVideoById])

  useEffect(() => {
    if (currVideo && !isVideoLoading) {
      getFrameByVideoName(currVideo.title)
    }
  }, [currVideo, getFrameByVideoName, isVideoLoading])

  return (
    <ScreenContainer center maxWidth={1100}>
      <Box my={6}>
        {isVideoLoading ? (
          <CircularProgress />
        ) : (
          currVideo && (
            <>
              <VideoDetails
                video={currVideo}
                frames={frames}
                isFrameLoading={isFrameLoading}
                resetFrame={resetFrame}
                resetVideo={resetVideo}
              />
              <Box display="flex" justifyContent="flex-end" mt={5}>
                <img height={200} width={320} src={img} alt="background" />
              </Box>
            </>
          )
        )}
      </Box>
    </ScreenContainer>
  )
}

const mapStateToProps = (state: State) => ({
  currVideo: videosSelectors.getCurrVideo(state),
  frames: framesSelectors.getCurrVideoFrames(state),
  isVideoLoading: videosSelectors.isLoading(state),
  isFrameLoading: framesSelectors.isLoading(state),
})

export default connect(mapStateToProps, {
  getVideoById,
  getFrameByVideoName,
  resetFrame,
  resetVideo,
})(VideoDetailsPage)
