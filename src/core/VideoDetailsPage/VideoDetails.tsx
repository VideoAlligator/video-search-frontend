import React, { FC, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'
import Link from '@material-ui/core/Link'

import { Text, TypographyStyles } from 'common/components/atoms/Typography'
import { Video } from 'common/types/video'

import { SegmentModal } from './SegmentModal'
import { Heading, StyledText } from './styled'

interface VideoDetailsProps {
  video: Video
  resetVideo: () => void
}

export const VideoDetails: FC<VideoDetailsProps> = ({ video, resetVideo }) => {
  const history = useHistory()
  const {
    title,
    runtime,
    genres,
    overview,
    posterUrl,
    trailerUrl,
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
        title={title}
        selectedKeyword={selectedKeyword}
        segments={segments}
      />
      <Box display="flex">
        <img height={375} width={250} src={posterUrl} alt={title} />
        <Box ml={5}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Heading>{title}</Heading>
            <Button
              onClick={(e) => {
                e.preventDefault()
                history.goBack()
                resetVideo()
              }}
              variant="contained"
              color="primary"
            >
              Back
            </Button>
          </Box>
          <Box mt={2} display="flex">
            <Text type={TypographyStyles.labelCopy}>Runtime:</Text>
            <Box p={1} />
            <Text>{runtime} minutes</Text>
          </Box>
          <Box mt={2} display="flex">
            <Text type={TypographyStyles.labelCopy}>Release Date:</Text>
            <Box p={1} />
            <Text>{releaseDate}</Text>
          </Box>
          {trailerUrl && (
            <Box mt={2} display="flex">
              <Text type={TypographyStyles.labelCopy}>Trailer URL:</Text>
              <Box p={1} />
              <StyledText>
                <Link
                  href={trailerUrl}
                  target="_blank"
                  rel="noopener"
                  color="inherit"
                >
                  {trailerUrl}
                </Link>
              </StyledText>
            </Box>
          )}
          {genres.length > 0 && (
            <Box mt={2} display="flex" alignItems="center">
              <Text type={TypographyStyles.labelCopy}>Genres:</Text>
              <Box display="flex" maxWidth="750px" flexWrap="wrap">
                {genres.map((genre, index) => (
                  <div key={index}>
                    <Chip style={{ marginLeft: 10 }} label={genre} />
                  </div>
                ))}
              </Box>
            </Box>
          )}
          <Box mt={2} display="flex">
            <Text type={TypographyStyles.labelCopy}>Overview:</Text>
            <Box p={1} />
            <Text>{overview}</Text>
          </Box>
          <Box mt={4} mb={1}>
            <Text type={TypographyStyles.sectionHeadline}>
              Timestamps (click for details)
            </Text>
          </Box>
          <Box display="flex" maxWidth="750px" flexWrap="wrap">
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
