import React, { FC } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import Box from '@material-ui/core/Box'

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

const LandingPage: FC = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
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

export default LandingPage
