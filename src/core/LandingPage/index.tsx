import React, { FC } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Box from '@material-ui/core/Box'

import { queryVideos } from 'common/store/videos'
import { ScreenContainer } from 'common/components/templates/ScreenContainer'
import { Text, TypographyStyles } from 'common/components/atoms/Typography'

import { SearchForm } from './SearchForm'
import { FullHeightGrid } from './styled'

const validationSchema = yup.object().shape({
  keyword: yup.string().required('Please add some keywords'),
})

const initialValues = {
  keyword: '',
}

interface LandingPageProps {
  queryVideos: (keyword: string) => void
}

const LandingPage: FC<LandingPageProps> = ({ queryVideos }) => {
  const history = useHistory()

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        queryVideos(values.keyword)
        history.push({
          pathname: '/search',
          search: `?keyword=${values.keyword}`,
        })
      }}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, setFieldValue }) => (
        <ScreenContainer center>
          <FullHeightGrid
            container
            alignItems="center"
            justify="center"
            direction="column"
          >
            <Box mb={3}>
              <Text type={TypographyStyles.title}>Video Search Tool</Text>
            </Box>
            <SearchForm
              setFieldValue={setFieldValue}
              handleSubmit={handleSubmit}
            />
          </FullHeightGrid>
        </ScreenContainer>
      )}
    </Formik>
  )
}

export default connect(null, { queryVideos })(LandingPage)
