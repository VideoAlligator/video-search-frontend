import React, { FC } from 'react'
import Box from '@material-ui/core/Box'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Modal from '@material-ui/core/Modal'
import CloseIcon from '@material-ui/icons/Close'

import { LoadingIcon } from 'common/components/atoms/LoadingIcon'
import { Text } from 'common/components/atoms/Typography'

import { Segment } from 'common/types/video'
import { Frame } from 'common/types/frame'

import { CloseButton, FrameImg, ModalHeading } from './styled'

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
      return <LoadingIcon />
    }
    if (!frames || frames.length === 0) return
    const filteredFrames = frames.filter(
      (frame) => frame.keyword === selectedKeyword
    )
    if (filteredFrames.length === 0) return
    const target = filteredFrames[0]
    return (
      <Box py={2} display="flex" justifyContent="center">
        <FrameImg
          src={`data:${target.img.contentType};base64,${Buffer.from(
            target.img.data
          ).toString('base64')}`}
          alt={target.keyword}
        />
      </Box>
    )
  }

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
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
        <Box p={4} style={{ width: 400 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={1}
          >
            <ModalHeading id="modal-title">
              {selectedKeyword.toUpperCase()}
            </ModalHeading>
            <CloseButton onClick={onClose} aria-label="Close button">
              <CloseIcon />
            </CloseButton>
          </Box>
          {showFrames()}
          <Box pt={2} pb={2} id="modal-description">
            {segments.map(
              (segment, index) =>
                segment.keyword === selectedKeyword && (
                  <Text key={index}>
                    {segment.start} - {segment.end} seconds
                  </Text>
                )
            )}
          </Box>
        </Box>
      </Fade>
    </Modal>
  )
}
