import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { Formik } from 'formik'
import * as yup from 'yup'
import Box from '@material-ui/core/Box'

import { State } from 'common/store/rootReducer'
import { videosSelectors, getVideos } from 'common/store/videos'
import { Video } from 'common/types/video'

import { ScreenContainer } from 'common/components/templates/ScreenContainer'
import { VideoInfoCard } from 'common/components/molecules/VideoInfoCard'

import { SearchForm } from './SearchForm'
import { Grid } from '@material-ui/core'

interface ResultsPageProps {
  videos: Video[]
  getVideos: () => void
}

const validationSchema = yup.object().shape({
  keywords: yup.string().required('Please add some keywords'),
})

const ResultsPage: FC<ResultsPageProps> = ({ videos, getVideos }) => {
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
          <Box mt={3} ml={3}>
            <SearchForm
              setFieldValue={setFieldValue}
              handleSubmit={handleSubmit}
            />
          </Box>
          <Box p={3}>
            <Box display="flex" alignContent="flex-start" flexWrap="wrap">
              {videos.map((video, index) => (
                <div key={index}>
                  <Box mr={3} mt={3}>
                    <VideoInfoCard video={video} />
                  </Box>
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

export default connect(mapStateToProps, { getVideos })(ResultsPage)
