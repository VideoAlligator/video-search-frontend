import React, { FC } from 'react'
import { Form, Field } from 'formik'
import Box from '@material-ui/core/Box'

import { Button } from 'common/components/atoms/Button'
import { SearchField } from 'common/components/atoms/SearchField'
import { FormikFieldRender } from 'common/types/FormikFieldRender'
import { ButtonList } from 'common/components/molecules/ButtonList'
import { Grid } from '@material-ui/core'

import lightBlue from '@material-ui/core/colors/lightBlue'
import blueGrey from '@material-ui/core/colors/blueGrey'

interface SearchFormProps {
  setFieldValue: (
    field: string,
    value: string,
    shouldValidate?: boolean
  ) => void
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void
}

const keywords1 = [
  {
    text: 'dog',
    color: lightBlue[50],
  },
  {
    text: 'cat',
    color: lightBlue[100],
  },
  {
    text: 'desk',
    color: lightBlue[200],
  },
  {
    text: 'ball',
    color: lightBlue['A100'],
  },
  {
    text: 'bird',
    color: lightBlue[100],
  },
  {
    text: 'apple',
    color: lightBlue[50],
  },
]
const keywords2 = [
  {
    text: 'forest',
    color: blueGrey[50],
  },
  {
    text: 'glacier',
    color: blueGrey[100],
  },
  {
    text: 'sea',
    color: blueGrey[300],
  },
  {
    text: 'buildings',
    color: blueGrey[200],
  },
  {
    text: 'street',
    color: blueGrey[100],
  },
  {
    text: 'mountain',
    color: blueGrey[50],
  },
]
export const SearchForm: FC<SearchFormProps> = ({
  setFieldValue,
  handleSubmit,
}) => {
  return (
    <Form>
      <Box display="flex">
        <Field name="keywords">
          {({ field, form }: FormikFieldRender<string>) => (
            <SearchField
              name={field.name}
              label="Search Keyword"
              width={800}
              setFieldValue={setFieldValue}
            />
          )}
        </Field>
        <Box p={2} />
        <Field name="submit">
          {({ field, form }: FormikFieldRender<string>) => (
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Search
            </Button>
          )}
        </Field>
      </Box>
      <>
        <Grid
          container
          spacing={3}
          alignItems="center"
          justify="center"
          direction="column"
        >
          <Box mt={5}>
            <ButtonList buttonProps={keywords1} />
          </Box>
          <Box mt={2}>
            <ButtonList buttonProps={keywords2} />
          </Box>
        </Grid>
      </>
    </Form>
  )
}
