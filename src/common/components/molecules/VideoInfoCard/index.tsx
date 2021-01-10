import React, { FC } from 'react'
import Box from '@material-ui/core/Box'
import CardContent from '@material-ui/core/CardContent'

import { Video } from 'common/types/video'
import { Text, TypographyStyles } from 'common/components/atoms/Typography'

import { StyledCard } from './styled'
import { CardActionArea, CardMedia } from '@material-ui/core'

interface VideoInfoCardProps {
  video: Video
}

export const VideoInfoCard: FC<VideoInfoCardProps> = ({ video }) => {
  const { _id, title, duration, posterUrl } = video
  return (
    <StyledCard>
      <CardActionArea href={'/video/' + _id}>
        <Box display="flex">
          <CardMedia
            style={{ height: 150, width: 100 }}
            component="img"
            src={posterUrl}
            alt={title}
          />
          <CardContent>
            <Box display="flex">
              <Text type={TypographyStyles.movieName}>{title} </Text>
            </Box>
            <Box mt={1} display="flex">
              <Text type={TypographyStyles.labelCopy}>Duration: </Text>
              <Box p={1} />
              <Text>{duration}</Text>
            </Box>
          </CardContent>
        </Box>
      </CardActionArea>
    </StyledCard>
  )
}
