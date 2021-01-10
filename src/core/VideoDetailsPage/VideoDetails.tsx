import React, { FC } from 'react'
import Box from '@material-ui/core/Box'
import Chip from '@material-ui/core/Chip'

import { Video } from 'common/types/video'
import { Text, TypographyStyles } from 'common/components/atoms/Typography'

interface VideoDetailsProps {
  video: Video
}

export const VideoDetails: FC<VideoDetailsProps> = ({ video }) => {
  const {
    title,
    duration,
    keywords,
    genres,
    overview,
    posterUrl,
    details,
  } = video
  return (
    <Box display="flex">
      <img height={300} width={200} src={posterUrl} alt={title} />
      <Box ml={5}>
        <Box>
          <a style={{ marginLeft: 850 }} href="/results">
            back
          </a>
        </Box>
        <Text type={TypographyStyles.primaryHeadline}>{title}</Text>
        <Box mt={1} display="flex">
          <Text type={TypographyStyles.labelCopy}>Duration: </Text>
          <Box p={1} />
          <Text>{duration}</Text>
        </Box>
        {keywords.length > 0 && (
          <Box mt={1} display="flex" alignItems="center">
            <>
              <Text type={TypographyStyles.labelCopy}>Keywords: </Text>
              {keywords.map((keyword, index) => (
                <div key={index}>
                  <Chip style={{ marginLeft: 10 }} label={keyword} />
                </div>
              ))}
            </>
          </Box>
        )}
        {genres.length > 0 && (
          <Box mt={1} display="flex" alignItems="center">
            <>
              <Text type={TypographyStyles.labelCopy}>Genres: </Text>
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
          <Text type={TypographyStyles.labelCopy}>Overview: </Text>
          <Box p={1} />
          <Text>{overview}</Text>
        </Box>

        <Box mt={3} mb={1}>
          <Text type={TypographyStyles.primaryHeadline}>Timestamps</Text>
        </Box>
        <Box display="flex" flexDirection="column">
          {details.map((detail, index) => (
            <Box key={index} mr={2} mb={2} display="flex" alignItems="center">
              <Chip style={{ marginRight: 10 }} label={detail.keyword} />
              <Text> {detail.timestamp} seconds</Text>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
