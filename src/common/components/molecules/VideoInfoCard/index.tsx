import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import { CardContent, CardActionArea, CardMedia } from '@material-ui/core'
import Chip from '@material-ui/core/Chip'

import { Video, Segment } from 'common/types/video'
import { Text, TypographyStyles } from 'common/components/atoms/Typography'

import { StyledCard } from './styled'

interface VideoInfoCardProps {
  video: Video
  keyword: string
}

export const VideoInfoCard: FC<VideoInfoCardProps> = ({ video, keyword }) => {
  const history = useHistory()
  const { _id, title, releaseDate, posterUrl, segments } = video

  const relatedSegments = segments.filter(
    (segment) => segment.keyword === keyword
  )

  const showTimestamp = (segment: Segment, index: number) => {
    if (segment.start === segment.end) return <Text>{segment.start}</Text>
    return (
      <Text>
        {segment.start} - {segment.end}
      </Text>
    )
  }

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
              <Text type={TypographyStyles.sectionHeadline}>{title}</Text>
            </Box>
            <Box mt={1} display="flex">
              <Text type={TypographyStyles.labelCopy}>Release Date:</Text>
              <Box p={1} />
              <Text>{releaseDate}</Text>
            </Box>
            <Box mt={1} display="flex" alignItems="center">
              <Text type={TypographyStyles.labelCopy}>Timestamps:</Text>
              <Box p={1} />
              <Box display="flex" alignItems="center">
                <Chip
                  style={{ marginRight: 10 }}
                  label={keyword.toUpperCase()}
                />
                <Box mr={1}>
                  <Text>Second: </Text>
                </Box>
                {relatedSegments.map(
                  (segment, index) =>
                    index < 3 && (
                      <Box key={index} display="flex">
                        {showTimestamp(segment, index)}
                        {index !== relatedSegments.length - 1 && (
                          <Box ml={2} mr={2}>
                            <Text>|</Text>
                          </Box>
                        )}
                      </Box>
                    )
                )}
                {relatedSegments.length > 3 && <Text>AND MORE</Text>}
              </Box>
            </Box>
          </CardContent>
        </Box>
      </CardActionArea>
    </StyledCard>
  )
}
