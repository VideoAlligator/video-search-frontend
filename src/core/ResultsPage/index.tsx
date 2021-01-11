import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import qs from 'query-string'
import { useHistory, useLocation } from 'react-router-dom'
import { Formik } from 'formik'
import * as yup from 'yup'
import Box from '@material-ui/core/Box'

import { State } from 'common/store/rootReducer'
import { videosSelectors, queryVideos } from 'common/store/videos'
import { Video } from 'common/types/video'

import { ScreenContainer } from 'common/components/templates/ScreenContainer'
import { Text, TypographyStyles } from 'common/components/atoms/Typography'
import { VideoInfoCard } from 'common/components/molecules/VideoInfoCard'

import { SearchForm } from './SearchForm'

interface ResultsPageProps {
  results: Video[]
  queryVideos: (keyword: string) => void
}

const validationSchema = yup.object().shape({
  keyword: yup.string().required('Please add some keywords'),
})

const initialValues = {
  keyword: '',
}

const ResultsPage: FC<ResultsPageProps> = ({ results, queryVideos }) => {
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    if (results.length === 0) {
      const queryString = qs.parse(location.search, { arrayFormat: 'bracket' })
      const keyword = queryString['keyword']
      if (typeof keyword === 'string') {
        queryVideos(keyword)
      }
    }
  })

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        queryVideos(values.keyword)
        history.replace({
          pathname: '/search',
          search: `?keyword=${values.keyword}`,
        })
      }}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, setFieldValue }) => (
        <ScreenContainer center maxWidth={1200}>
          <Box mt={3} ml={3}>
            <SearchForm
              setFieldValue={setFieldValue}
              handleSubmit={handleSubmit}
            />
          </Box>
          {results && results.length > 0 ? (
            <Box p={3}>
              <Box display="flex" alignContent="flex-start" flexWrap="wrap">
                {results.map((video, index) => (
                  <div key={index}>
                    <Box mr={3} mt={2}>
                      <VideoInfoCard video={video} />
                    </Box>
                  </div>
                ))}
              </Box>
            </Box>
          ) : (
            <Box p={3}>
              <Text type={TypographyStyles.primaryHeadline}>
                Cannot find such videos.
              </Text>
            </Box>
          )}
        </ScreenContainer>
      )}
    </Formik>
  )
}

const mapStateToProps = (state: State) => ({
  results: videosSelectors.getQueryResults(state),
})

export default connect(mapStateToProps, { queryVideos })(ResultsPage)
