import React, { FC } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

interface SearchFieldProps {
  id: string
  label: string
  width: number
}

export const SearchField: FC<SearchFieldProps> = ({ id, label, width }) => {
  return (
    <Autocomplete
      id={id}
      freeSolo
      options={sampleKeywords}
      getOptionLabel={(option) => option}
      style={{ width }}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
    />
  )
}

const sampleKeywords = ['baby', 'midlife crisis', 'toy', 'boy', 'board game']
