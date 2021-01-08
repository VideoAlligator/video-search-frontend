import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { Formik } from 'formik'
import * as yup from 'yup'
import Box from '@material-ui/core/Box'

import { State } from 'common/store/rootReducer'
import { videosSelectors, getVideos } from 'common/store/videos'
import { Video } from 'common/types/video'

import { Text, TypographyStyles } from 'common/components/atoms/Typography'
import TopBar from 'common/components/molecules/TopBar'
import { VideoInfoCard } from 'common/components/molecules/VideoInfoCard'

import { SearchForm } from './SearchForm'

interface LandingPageProps {
  videos: Video[]
  getVideos: () => void
}

const validationSchema = yup.object().shape({
  keywords: yup.string().required('Please add some keywords'),
})

const LandingPage: FC<LandingPageProps> = ({ videos, getVideos }) => {
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
        <>
          <TopBar />
          <Box p={3}>
            <Box mb={3}>
              <Text type={TypographyStyles.primaryHeadline}>All videos</Text>
            </Box>
            <SearchForm
              setFieldValue={setFieldValue}
              handleSubmit={handleSubmit}
            />
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
        </>
      )}
    </Formik>
  )
}

const mapStateToProps = (state: State) => ({
  videos: videosSelectors.getVideos(state),
})

export default connect(mapStateToProps, { getVideos })(LandingPage)
