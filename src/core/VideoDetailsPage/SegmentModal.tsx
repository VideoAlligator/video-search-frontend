import React, { FC } from 'react'
import Box from '@material-ui/core/Box'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Modal from '@material-ui/core/Modal'
import CloseIcon from '@material-ui/icons/Close'

import { Text, TypographyStyles } from 'common/components/atoms/Typography'
import { Segment } from 'common/types/video'

import { CloseButton } from './styled'
import { FrameImg } from './styled'
import { Frame } from 'common/types/frame'

interface SegmentModalProps {
  isModalOpen: boolean
  onClose: () => void
  selectedKeyword: string
  segments: Segment[]
  frames: Frame[]
}

export const SegmentModal: FC<SegmentModalProps> = ({
  isModalOpen,
  onClose,
  selectedKeyword,
  segments,
  frames,
}) => {
  const showFrames = () => {
    if (!frames || frames.length === 0) return
    return frames.map(
      (frame, index) =>
        frame.keyword === selectedKeyword && (
          <FrameImg
            src={`data:${frame.img.contentType};base64,${Buffer.from(
              frame.img.data
            ).toString('base64')}`}
            alt={frame.keyword}
            key={index}
          />
        )
    )
  }
  return (
    <Modal
      aria-labelledby="title"
      aria-describedby="timestamp"
      open={isModalOpen}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade
        in={isModalOpen}
        style={{
          backgroundColor: '#ffffff',
          border: 'none',
          boxShadow: 'none',
        }}
      >
        <div
          style={{
            padding: 20,
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={1}
          >
            <Text type={TypographyStyles.primaryHeadline}>
              {selectedKeyword.toUpperCase()}
            </Text>
            <CloseButton onClick={onClose}>
              <CloseIcon />
            </CloseButton>
          </Box>
          {showFrames()}
          <Box pt={2} pb={2}>
            {segments.map(
              (segment, index) =>
                segment.keyword === selectedKeyword && (
                  <Text key={index}>
                    {segment.start} - {segment.end} seconds
                  </Text>
                )
            )}
          </Box>
        </div>
      </Fade>
    </Modal>
  )
}
