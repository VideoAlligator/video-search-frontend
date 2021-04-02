import React, { FC } from 'react'
import Box from '@material-ui/core/Box'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Modal from '@material-ui/core/Modal'
import CloseIcon from '@material-ui/icons/Close'

import { Text } from 'common/components/atoms/Typography'
import { Segment } from 'common/types/video'

import { CloseButton, FrameImg, ModalHeading } from './styled'

interface SegmentModalProps {
  isModalOpen: boolean
  onClose: () => void
  title: string
  selectedKeyword: string
  segments: Segment[]
}

const baseURL = process.env.REACT_APP_API_BASE

export const SegmentModal: FC<SegmentModalProps> = ({
  isModalOpen,
  onClose,
  title,
  selectedKeyword,
  segments,
}) => {
  const showTimestamp = (segment: Segment, index: number) => {
    if (segment.keyword !== selectedKeyword) return
    if (segment.start === segment.end)
      return <Text key={index}>Second: {segment.start}</Text>
    return (
      <Text key={index}>
        Second: {segment.start} - {segment.end}
      </Text>
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
          <Box py={2} display="flex" justifyContent="center">
            <FrameImg
              src={`${baseURL}/frames/${title}/${selectedKeyword}`}
              alt={selectedKeyword}
            />
          </Box>
          <Box pt={2} pb={2} id="modal-description">
            {segments.map((segment, index) => showTimestamp(segment, index))}
          </Box>
        </Box>
      </Fade>
    </Modal>
  )
}
