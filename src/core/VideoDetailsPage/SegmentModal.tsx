import React, { FC } from 'react'
import Box from '@material-ui/core/Box'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Modal from '@material-ui/core/Modal'
import CloseIcon from '@material-ui/icons/Close'
import CircularProgress from '@material-ui/core/CircularProgress'

import { Text, TypographyStyles } from 'common/components/atoms/Typography'
import { Segment } from 'common/types/video'
import { Frame } from 'common/types/frame'

import { CloseButton, FrameImg } from './styled'

interface SegmentModalProps {
  isModalOpen: boolean
  onClose: () => void
  selectedKeyword: string
  segments: Segment[]
  frames: Frame[]
  isFrameLoading: boolean
}

export const SegmentModal: FC<SegmentModalProps> = ({
  isModalOpen,
  onClose,
  selectedKeyword,
  segments,
  frames,
  isFrameLoading,
}) => {
  const showFrames = () => {
    if (isFrameLoading) {
      return <CircularProgress />
    }
    if (!frames || frames.length === 0) return
    const filteredFrames = frames.filter(
      (frame) => frame.keyword === selectedKeyword
    )
    if (filteredFrames.length === 0) return
    const target = filteredFrames[0]
    return (
      <FrameImg
        src={`data:${target.img.contentType};base64,${Buffer.from(
          target.img.data
        ).toString('base64')}`}
        alt={target.keyword}
      />
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
            width: 400,
            padding: 30,
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
