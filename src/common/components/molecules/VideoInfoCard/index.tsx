import React, { FC } from 'react'
import Box from '@material-ui/core/Box'
import CardContent from '@material-ui/core/CardContent'

import { Video } from 'common/types/video'
import { Text, TypographyStyles } from 'common/components/atoms/Typography'

import { StyledCard } from './styled'

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
        <Box display="flex">
          <Text type={TypographyStyles.labelCopy}>Duration: </Text>
          <Box p={1} />
          <Text>{duration}</Text>
        </Box>
        {keywords.length > 0 && (
          <>
            <Text type={TypographyStyles.labelCopy}>Keywords: </Text>
            {keywords.map((keyword, index) => (
              <div key={index}>
                <Text>{keyword}</Text>
              </div>
            ))}
          </>
        )}
        {genres.length > 0 && (
          <>
            <Text type={TypographyStyles.labelCopy}>Genres: </Text>
            {genres.map((genre, index) => (
              <div key={index}>
                <Text>{genre}</Text>
              </div>
            ))}
          </>
        )}
        <Box display="flex">
          <Text type={TypographyStyles.labelCopy}>Overview: </Text>
          <Box p={1} />
          <Text>{overview}</Text>
        </Box>
      </CardContent>
    </StyledCard>
  )
}
