import React, { FC } from 'react'
import Box from '@material-ui/core/Box'

import { Video } from 'common/types/video'
import { Text, TypographyStyles } from 'common/components/atoms/Typography'
import Chip from '@material-ui/core/Chip'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

interface VideoDetailsProps {
  video: Video
}

export const VideoDetails: FC<VideoDetailsProps> = ({ video }) => {
  const { title, duration, keywords, genres, overview, posterUrl } = video
  return (
    <Box display="flex">
      <img height={300} width={200} src={posterUrl} alt={title} />
      <Box ml={5}>
        <Box>
          <Button
            component={Link}
            to="/results"
            variant="contained"
            color="primary"
            style={{ marginLeft: 850 }}
          >
            Back
          </Button>
        </Box>
        <Text type={TypographyStyles.movieName}>{title} </Text>
        <Box mt={1} display="flex">
          <Text type={TypographyStyles.labelCopy}>Duration: </Text>
          <Box p={1} />
          <Text>{duration}</Text>
        </Box>
        {keywords.length > 0 && (
          <Box mt={1} display="flex">
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
          <Box mt={1} display="flex">
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
      </Box>
    </Box>
  )
}
