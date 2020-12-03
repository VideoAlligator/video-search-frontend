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
  const { name, duration, labels } = video
  return (
    <StyledCard>
      <CardContent>
        <Box display="flex">
          <Text type={TypographyStyles.labelCopy}>Name: </Text>
          <Box p={1} />
          <Text>{name}</Text>
        </Box>
        <Box display="flex">
          <Text type={TypographyStyles.labelCopy}>Duration: </Text>
          <Box p={1} />
          <Text>{duration}</Text>
        </Box>
        {labels.length > 0 && (
          <>
            <Text type={TypographyStyles.labelCopy}>Labels: </Text>
            {labels.map((label, index) => (
              <div key={index}>
                <Text>{label}</Text>
              </div>
            ))}
          </>
        )}
      </CardContent>
    </StyledCard>
  )
}
