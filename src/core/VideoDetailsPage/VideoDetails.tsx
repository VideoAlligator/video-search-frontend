import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'

import { Text, TypographyStyles } from 'common/components/atoms/Typography'
import { Video } from 'common/types/video'

interface VideoDetailsProps {
  video: Video
}

export const VideoDetails: FC<VideoDetailsProps> = ({ video }) => {
  const history = useHistory()
  const {
    title,
    duration,
    genres,
    overview,
    posterUrl,
    annotations,
    segments,
  } = video

  return (
    <Box display="flex">
      <img height={300} width={200} src={posterUrl} alt={title} />
      <Box ml={5}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Text type={TypographyStyles.primaryHeadline}>{title}</Text>
          <Button
            onClick={(e) => {
              e.preventDefault()
              history.goBack()
            }}
            variant="contained"
            color="primary"
          >
            Back
          </Button>
        </Box>
        <Box mt={1} display="flex">
          <Text type={TypographyStyles.labelCopy}>Duration:</Text>
          <Box p={1} />
          <Text>{duration}</Text>
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
                  <Chip
                    style={{ marginLeft: 10 }}
                    label={genre}
                    color="secondary"
                  />
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
          <Text type={TypographyStyles.primaryHeadline}>Timestamps</Text>
        </Box>
        <Box display="flex" flexDirection="column">
          {segments.map((segment, index) => (
            <Box key={index} mr={2} mb={2} display="flex" alignItems="center">
              <Chip
                style={{ marginRight: 10 }}
                label={segment.keyword.toUpperCase()}
              />
              <Text>
                {segment.start} - {segment.end} seconds
              </Text>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
