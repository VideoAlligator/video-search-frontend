import React, { FC, useState } from 'react'
import { Form, Field } from 'formik'
import Box from '@material-ui/core/Box'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from '@material-ui/core'
import { ArrowUpward, ArrowDownward } from '@material-ui/icons'

import { Button } from 'common/components/atoms/Button'
import { SearchField } from 'common/components/atoms/SearchField'
import { FormikFieldRender } from 'common/types/FormikFieldRender'
import { ButtonList } from 'common/components/molecules/ButtonList'

import { keywordsList } from './constants'

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
  const [expanded, setExpanded] = useState(false)

  return (
    <Form>
      <Box display="flex">
        <Field name="keyword">
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
        <Accordion
          style={{
            marginTop: 20,
            backgroundColor: 'transparent',
            boxShadow: 'none',
          }}
          expanded={expanded}
          onChange={() => setExpanded(!expanded)}
        >
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Grid
              container
              spacing={3}
              alignItems="center"
              justify="center"
              direction="row"
              style={{ color: '#3d80b3' }}
            >
              <Typography variant="h5">Most common search keyword</Typography>
              {expanded ? (
                <ArrowUpward fontSize="small" />
              ) : (
                <ArrowDownward fontSize="small" />
              )}
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Grid
              container
              spacing={2}
              alignItems="center"
              justify="center"
              direction="column"
            >
              {keywordsList.map((keywords, index) => (
                <Box mt={2} key={index}>
                  <ButtonList buttonProps={keywords} />
                </Box>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      </>
    </Form>
  )
}
