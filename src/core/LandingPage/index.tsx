import React, { FC } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import Box from '@material-ui/core/Box'

import { ScreenContainer } from 'common/components/templates/ScreenContainer'
import { Text, TypographyStyles } from 'common/components/atoms/Typography'

import { SearchForm } from './SearchForm'

const validationSchema = yup.object().shape({
  keywords: yup.string().required('Please add some keywords'),
})

const initialValues = {
  keywords: '',
}

const LandingPage: FC = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log('submited', values)}
      validationSchema={validationSchema}
    >
      {({ errors, handleSubmit, setFieldValue, values }) => (
        <ScreenContainer center>
          <Box p={3}>
            <Box mb={3}>
              <Text type={TypographyStyles.title}>Video Search Tool</Text>
            </Box>
            <SearchForm
              setFieldValue={setFieldValue}
              handleSubmit={handleSubmit}
            />
          </Box>
        </ScreenContainer>
      )}
    </Formik>
  )
}

export default LandingPage
