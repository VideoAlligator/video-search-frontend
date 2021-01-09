import React, { FC } from 'react'
import Box from '@material-ui/core/Box'
import CardContent from '@material-ui/core/CardContent'

import { Video } from 'common/types/video'
import { Text, TypographyStyles } from 'common/components/atoms/Typography'

import { StyledCard } from './styled'
import Chip from '@material-ui/core/Chip'

interface VideoInfoCardProps {
  video: Video
}

export const VideoInfoCard: FC<VideoInfoCardProps> = ({ video }) => {
  const { title, duration, keywords, genres, overview } = video
  return (
    <StyledCard>
      <CardContent>
        <Box display="flex">
          <Text type={TypographyStyles.labelCopy}>Title: </Text>
          <Box p={1} />
          <Text>{title}</Text>
        </Box>
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
                  {/* <Text>{keyword}</Text> */}
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
                  {/* <Text>{genre}</Text> */}
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
      </CardContent>
    </StyledCard>
  )
}
