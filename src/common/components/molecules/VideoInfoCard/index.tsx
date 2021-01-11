import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import { CardContent, CardActionArea, CardMedia } from '@material-ui/core'
import Chip from '@material-ui/core/Chip'

import { Video } from 'common/types/video'
import { Text, TypographyStyles } from 'common/components/atoms/Typography'

import { StyledCard } from './styled'

interface VideoInfoCardProps {
  video: Video
}

export const VideoInfoCard: FC<VideoInfoCardProps> = ({ video }) => {
  const history = useHistory()
  const { _id, title, duration, posterUrl, details } = video

  return (
    <StyledCard>
      <CardActionArea
        // href={'/video/' + _id}
        onClick={() => {
          history.push({
            pathname: `/video/${_id}`,
          })
        }}
      >
        <Box display="flex">
          <CardMedia
            style={{ height: 150, width: 100 }}
            component="img"
            src={posterUrl}
            alt={title}
          />
          <CardContent>
            <Box display="flex">
              <Text type={TypographyStyles.primaryHeadline}>{title}</Text>
            </Box>
            <Box mt={1} display="flex">
              <Text type={TypographyStyles.labelCopy}>Duration:</Text>
              <Box p={1} />
              <Text>{duration}</Text>
            </Box>
            <Box mt={1} display="flex" alignItems="center">
              <Text type={TypographyStyles.labelCopy}>Timestamps:</Text>
              <Box p={1} />
              <Box display="flex">
                {details.map((detail, index) => (
                  <Box key={index} mr={2} display="flex" alignItems="center">
                    <Chip style={{ marginRight: 10 }} label={detail.keyword} />
                    <Text> {detail.timestamp} seconds</Text>
                  </Box>
                ))}
              </Box>
            </Box>
          </CardContent>
        </Box>
      </CardActionArea>
    </StyledCard>
  )
}
