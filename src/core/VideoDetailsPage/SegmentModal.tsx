import React, { FC } from 'react'
import Box from '@material-ui/core/Box'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Modal from '@material-ui/core/Modal'
import CloseIcon from '@material-ui/icons/Close'

import { Text, TypographyStyles } from 'common/components/atoms/Typography'
import { Segment } from 'common/types/video'

import { CloseButton } from './styled'

interface SegmentModalProps {
  isModalOpen: boolean
  onClose: () => void
  selectedKeyword: string
  segments: Segment[]
}

export const SegmentModal: FC<SegmentModalProps> = ({
  isModalOpen,
  onClose,
  selectedKeyword,
  segments,
}) => {
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
            width: 300,
            height: 200,
            padding: 30,
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text type={TypographyStyles.primaryHeadline}>
              {selectedKeyword.toUpperCase()}
            </Text>
            <CloseButton onClick={onClose}>
              <CloseIcon />
            </CloseButton>
          </Box>
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
