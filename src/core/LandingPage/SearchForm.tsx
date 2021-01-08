import React, { FC } from 'react'
import { Form, Field } from 'formik'

import { PrimaryButton } from 'common/components/atoms/Button'
import { SearchField } from 'common/components/atoms/SearchField'
import { FormikFieldRender } from 'common/types/FormikFieldRender'

export const SearchForm: FC = () => {
  return (
    <Form>
      <Field name="keywords">
        {({ field, form }: FormikFieldRender<string>) => (
          <SearchField id={field.name} label="Search Keyword" width={600} />
        )}
      </Field>
      <Field name="submit">
        {({ field, form }: FormikFieldRender<string>) => <PrimaryButton />}
      </Field>
    </Form>
  )
}
