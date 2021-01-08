import React, { FC } from 'react'
import { Form, Field } from 'formik'
import Box from '@material-ui/core/Box'

import { Button } from 'common/components/atoms/Button'
import { SearchField } from 'common/components/atoms/SearchField'
import { FormikFieldRender } from 'common/types/FormikFieldRender'
import { ButtonList } from 'common/components/molecules/ButtonList'

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
    color: '#ebe89e',
  },
  {
    text: 'cat',
    color: '#b2eb9e',
  },
  {
    text: 'desk',
    color: '#9eebe2',
  },
  {
    text: 'ball',
    color: '#d8befa',
  },
  {
    text: 'bird',
    color: '#fab7d3',
  },
  {
    text: 'apple',
    color: '#ebb99e',
  },
]
const keywords2 = [
  {
    text: 'forest',
    color: '#9db736',
  },
  {
    text: 'glacier',
    color: '#9eb3eb',
  },
  {
    text: 'sea',
    color: '#948bf6',
  },
  {
    text: 'buildings',
    color: '#ee72f1',
  },
  {
    text: 'street',
    color: '#fb6f88',
  },
  {
    text: 'mountain',
    color: '#fc8644',
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
        <Box>
          <ButtonList buttonProps={keywords1} />
        </Box>
        <Box>
          <ButtonList buttonProps={keywords2} />
        </Box>
      </>
    </Form>
  )
}
