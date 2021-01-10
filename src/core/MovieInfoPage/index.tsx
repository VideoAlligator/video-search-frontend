import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { Formik } from 'formik'
import * as yup from 'yup'
import Box from '@material-ui/core/Box'

import { State } from 'common/store/rootReducer'
import { videosSelectors, getVideos } from 'common/store/videos'
import { Video } from 'common/types/video'

import { ScreenContainer } from 'common/components/templates/ScreenContainer'
import { MovieInfoCard } from 'common/components/molecules/MovieInfoCard'

interface MovieInfoPageProps {
  videos: Video[]
  getVideos: () => void
}

const validationSchema = yup.object().shape({
  keywords: yup.string().required('Please add some keywords'),
})

const MovieInfoPage: FC<MovieInfoPageProps> = ({ videos, getVideos }) => {
  useEffect(() => {
    if (videos.length === 0) {
      getVideos()
    }
  })

  const initialValues = {
    keywords: '',
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log('submited', values)}
      validationSchema={validationSchema}
    >
      {({ errors, handleSubmit, setFieldValue, values }) => (
        <ScreenContainer center maxWidth={1200}>
          <Box p={3}>
            <Box display="flex" alignContent="flex-start" flexWrap="wrap">
              {videos.map((video, index) => (
                <div key={index}>
                  {index == 0 && (
                    <Box mr={3} mt={3}>
                      <MovieInfoCard video={video} />
                    </Box>
                  )}
                </div>
              ))}
            </Box>
          </Box>
        </ScreenContainer>
      )}
    </Formik>
  )
}

const mapStateToProps = (state: State) => ({
  videos: videosSelectors.getVideos(state),
})

export default connect(mapStateToProps, { getVideos })(MovieInfoPage)
