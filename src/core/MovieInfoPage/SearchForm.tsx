import React, { FC } from 'react'
import { Form, Field } from 'formik'
import Box from '@material-ui/core/Box'

import { Button } from 'common/components/atoms/Button'
import { SearchField } from 'common/components/atoms/SearchField'
import { FormikFieldRender } from 'common/types/FormikFieldRender'

interface SearchFormProps {
  setFieldValue: (
    field: string,
    value: string,
    shouldValidate?: boolean
  ) => void
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void
}
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
    </Form>
  )
}
