import React, { FC, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'

import { Text, TypographyStyles } from 'common/components/atoms/Typography'
import { Video } from 'common/types/video'
import { Frame } from 'common/types/frame'

import { SegmentModal } from './SegmentModal'

interface VideoDetailsProps {
  video: Video
  frames: Frame[]
  isFrameLoading: boolean
  resetFrame: () => void
  resetVideo: () => void
}

export const VideoDetails: FC<VideoDetailsProps> = ({
  video,
  frames,
  isFrameLoading,
  resetFrame,
  resetVideo,
}) => {
  const history = useHistory()
  const frame = frames
  const {
    title,
    runtime,
    genres,
    overview,
    posterUrl,
    releaseDate,
    annotations,
    segments,
  } = video

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedKeyword, setSelectedKeyword] = useState('')

  return (
    <>
      <SegmentModal
        isModalOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedKeyword={selectedKeyword}
        segments={segments}
        frames={frame}
        isFrameLoading={isFrameLoading}
      />
      <Box display="flex">
        <img height={375} width={250} src={posterUrl} alt={title} />
        <Box ml={5}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text type={TypographyStyles.primaryHeadline}>{title}</Text>
            <Button
              onClick={(e) => {
                e.preventDefault()
                history.goBack()
                resetFrame()
                resetVideo()
              }}
              variant="contained"
              color="primary"
            >
              Back
            </Button>
          </Box>
          <Box mt={1} display="flex">
            <Text type={TypographyStyles.labelCopy}>Runtime:</Text>
            <Box p={1} />
            <Text>{runtime} minutes</Text>
          </Box>
          <Box mt={1} display="flex">
            <Text type={TypographyStyles.labelCopy}>Release Date:</Text>
            <Box p={1} />
            <Text>{releaseDate}</Text>
          </Box>
          {annotations.length > 0 && (
            <Box mt={1} display="flex" alignItems="center">
              <>
                <Text type={TypographyStyles.labelCopy}>Keywords:</Text>
                {annotations.map((annotation, index) => (
                  <div key={index}>
                    <Chip
                      style={{ marginLeft: 10 }}
                      label={annotation.keyword.toUpperCase()}
                      color="secondary"
                    />
                  </div>
                ))}
              </>
            </Box>
          )}
          {genres.length > 0 && (
            <Box mt={1} display="flex" alignItems="center">
              <>
                <Text type={TypographyStyles.labelCopy}>Genres:</Text>
                {genres.map((genre, index) => (
                  <div key={index}>
                    <Chip style={{ marginLeft: 10 }} label={genre} />
                  </div>
                ))}
              </>
            </Box>
          )}
          <Box mt={1} display="flex">
            <Text type={TypographyStyles.labelCopy}>Overview:</Text>
            <Box p={1} />
            <Text>{overview}</Text>
          </Box>
          <Box mt={3} mb={1}>
            <Text type={TypographyStyles.primaryHeadline}>
              Timestamps (click for details)
            </Text>
          </Box>
          <Box display="flex">
            {annotations.map((annotation, index) => (
              <Box key={index} mr={2} mb={2} display="flex" alignItems="center">
                <Chip
                  style={{ marginRight: 10 }}
                  label={annotation.keyword.toUpperCase()}
                  color="secondary"
                  onClick={() => {
                    setIsModalOpen(true)
                    setSelectedKeyword(annotation.keyword)
                  }}
                ></Chip>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  )
}
