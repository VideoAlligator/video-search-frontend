import React, { FC } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

interface SearchFieldProps {
  name: string
  label: string
  width: number
  setFieldValue: (
    field: string,
    value: string,
    shouldValidate?: boolean
  ) => void
}

export const SearchField: FC<SearchFieldProps> = ({
  name,
  label,
  width,
  setFieldValue,
}) => {
  return (
    <Autocomplete
      id={name}
      freeSolo
      options={sampleKeywords}
      getOptionLabel={(option) => option}
      onChange={(_event, value) => setFieldValue(name, value || '')}
      style={{ width }}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
    />
  )
}

const sampleKeywords = ['baby', 'midlife crisis', 'toy', 'boy', 'board game']
