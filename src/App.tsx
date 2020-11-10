import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'

import { store } from 'common/store'
import { theme, muiTheme } from 'common/style/theme'
import TopBar from 'common/components/TopBar'
import { SearchInput } from 'common/components/SearchInput'

export const App = (): JSX.Element => (
  <Provider store={store}>
    <SCThemeProvider theme={theme}>
      <MuiThemeProvider theme={muiTheme}>
        <TopBar />
        <SearchInput />
      </MuiThemeProvider>
    </SCThemeProvider>
  </Provider>
)
