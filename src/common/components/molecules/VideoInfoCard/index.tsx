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
  keyword: string
}

export const VideoInfoCard: FC<VideoInfoCardProps> = ({ video, keyword }) => {
  const history = useHistory()
  const { _id, title, duration, posterUrl, segments } = video

  return (
    <StyledCard>
      <CardActionArea
        onClick={(e) => {
          e.preventDefault()
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
              <Box display="flex" alignItems="center">
                <Chip
                  style={{ marginRight: 10 }}
                  label={keyword.toUpperCase()}
                />
                {segments.map(
                  (segment, index) =>
                    segment.keyword === keyword && (
                      <Box key={index} mr={2}>
                        <Text>
                          {segment.start} - {segment.end} seconds
                        </Text>
                      </Box>
                    )
                )}
              </Box>
            </Box>
          </CardContent>
        </Box>
      </CardActionArea>
    </StyledCard>
  )
}
