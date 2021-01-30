import React, { FC } from 'react'
import { Form, Field } from 'formik'
import Box from '@material-ui/core/Box'

import { Button } from 'common/components/atoms/Button'
import { SearchField } from 'common/components/atoms/SearchField'
import { FormikFieldRender } from 'common/types/FormikFieldRender'
import { ButtonList } from 'common/components/molecules/ButtonList'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from '@material-ui/core'
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

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
    text: 'car',
    color: lightBlue[100],
  },
  {
    text: 'person',
    color: lightBlue[100],
  },
  {
    text: 'bicycle',
    color: lightBlue[100],
  },
  {
    text: 'bottle',
    color: lightBlue[100],
  },
  {
    text: 'cup',
    color: lightBlue[100],
  },
  {
    text: 'teddy bear',
    color: lightBlue[100],
  },
]
const keywords2 = [
  {
    text: 'cat',
    color: lightBlue[100],
  },
  {
    text: 'dog',
    color: lightBlue[100],
  },
  {
    text: 'bird',
    color: lightBlue[100],
  },
  {
    text: 'horse',
    color: lightBlue[100],
  },
  {
    text: 'banana',
    color: lightBlue[100],
  },
  {
    text: 'apple',
    color: lightBlue[100],
  },
]
const keywords3 = [
  {
    text: 'forest',
    color: blueGrey[100],
  },
  {
    text: 'glacier',
    color: blueGrey[100],
  },
  {
    text: 'sea',
    color: blueGrey[100],
  },
  {
    text: 'buildings',
    color: blueGrey[100],
  },
  {
    text: 'street',
    color: blueGrey[100],
  },
  {
    text: 'mountain',
    color: blueGrey[100],
  },
]
export const SearchForm: FC<SearchFormProps> = ({
  setFieldValue,
  handleSubmit,
}) => {
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
        >
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Grid
              container
              spacing={3}
              alignItems="center"
              justify="center"
              direction="row"
            >
              <Typography variant="h5">Most common search keyword ↓</Typography>
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
              <Box mt={2}>
                <ButtonList buttonProps={keywords1} />
              </Box>
              <Box mt={2}>
                <ButtonList buttonProps={keywords2} />
              </Box>
              <Box mt={2}>
                <ButtonList buttonProps={keywords3} />
              </Box>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </>
    </Form>
  )
}
