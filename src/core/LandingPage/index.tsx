import React, { FC } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Box from '@material-ui/core/Box'

import { queryVideos } from 'common/store/videos'
import { ScreenContainer } from 'common/components/templates/ScreenContainer'

import { SearchForm } from './SearchForm'
import { FullHeightGrid, HiddenHeading } from './styled'
import img from './name.jpg'

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
        <ScreenContainer center maxWidth={1000}>
          <FullHeightGrid
            container
            alignItems="center"
            justify="center"
            direction="column"
          >
            <Box mb={2}>
              <img height={100} width={700} src={img} alt="Contact Us" />
              <HiddenHeading>Video Search Tool</HiddenHeading>
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
