import React, { FC, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Backdrop from '@material-ui/core/Backdrop'
import Chip from '@material-ui/core/Chip'
import Fade from '@material-ui/core/Fade'
import Modal from '@material-ui/core/Modal'
import { Text, TypographyStyles } from 'common/components/atoms/Typography'
import { Video } from 'common/types/video'

interface VideoDetailsProps {
  video: Video
}

export const VideoDetails: FC<VideoDetailsProps> = ({ video }) => {
  const history = useHistory()
  const {
    title,
    duration,
    keywords,
    genres,
    overview,
    posterUrl,
    details,
  } = video

  const [open, setOpen] = useState(false)
  const [word, setIndex] = useState('')

  const handleOpen = (word: string) => () => {
    setOpen(true)
    setIndex(word)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box display="flex">
      <img height={300} width={200} src={posterUrl} alt={title} />
      <Box ml={5}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Text type={TypographyStyles.primaryHeadline}>{title}</Text>
          <Button
            onClick={(e) => {
              e.preventDefault()
              history.goBack()
            }}
            variant="contained"
            color="primary"
          >
            Back
          </Button>
        </Box>
        <Box mt={1} display="flex">
          <Text type={TypographyStyles.labelCopy}>Duration:</Text>
          <Box p={1} />
          <Text>{duration}</Text>
        </Box>
        {keywords.length > 0 && (
          <Box mt={1} display="flex" alignItems="center">
            <>
              <Text type={TypographyStyles.labelCopy}>Keywords:</Text>
              {keywords.map((keyword, index) => (
                <div key={index}>
                  <Chip style={{ marginLeft: 10 }} label={keyword} />
                </div>
              ))}
            </>
          </Box>
        )}
        {genres.length > 0 && (
          <Box mt={1} display="flex" alignItems="center">
            <>
              <Text type={TypographyStyles.labelCopy}>Genres:</Text>
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
          <Text type={TypographyStyles.labelCopy}>Overview:</Text>
          <Box p={1} />
          <Text>{overview}</Text>
        </Box>
        <Box mt={3} mb={1}>
          <Text type={TypographyStyles.primaryHeadline}>
            Timestamps (click for details)
          </Text>
        </Box>
        <Box display="flex">
          {details.map((detail, index) => (
            <Box key={index} mr={2} mb={2} display="flex" alignItems="center">
              <Chip
                style={{ marginRight: 10 }}
                label={detail.keyword}
                onClick={handleOpen(detail.keyword)}
              ></Chip>
            </Box>
          ))}
        </Box>
        <Modal
          aria-labelledby="title"
          aria-describedby="timestamp"
          open={open}
          onClose={handleClose}
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
            in={open}
            style={{
              backgroundColor: '#ffffff',
              border: 'none',
              boxShadow: 'none',
            }}
          >
            <div
              style={{
                padding: 15,
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <h2 id="title">{word}</h2>
                <Button
                  size="small"
                  onClick={handleClose}
                  variant="contained"
                  color="primary"
                >
                  close
                </Button>
              </Box>
              {details.map(
                (detail, index) =>
                  detail.keyword === word && (
                    <p id="timestamp">{detail.timestamp} seconds</p>
                  )
              )}
            </div>
          </Fade>
        </Modal>
      </Box>
    </Box>
  )
}
