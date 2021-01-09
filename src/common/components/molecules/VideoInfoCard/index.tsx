import React, { FC } from 'react'
import Box from '@material-ui/core/Box'
import CardContent from '@material-ui/core/CardContent'

import { Video } from 'common/types/video'
import { Text, TypographyStyles } from 'common/components/atoms/Typography'

import { StyledCard } from './styled'
import Chip from '@material-ui/core/Chip'
import { CardActionArea, CardMedia } from '@material-ui/core'

interface VideoInfoCardProps {
  video: Video
}

export const VideoInfoCard: FC<VideoInfoCardProps> = ({ video }) => {
  const { title, duration, keywords, genres, overview, posterUrl } = video
  return (
    <StyledCard>
      <CardActionArea>
        <Box display="flex">
          <CardMedia
            style={{ height: 300, width: 200 }}
            component="img"
            src={posterUrl}
            title="test"
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
          </CardContent>
        </Box>
      </CardActionArea>
    </StyledCard>
  )
}
