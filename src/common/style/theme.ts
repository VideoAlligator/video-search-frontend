import { createMuiTheme } from '@material-ui/core/styles'
// import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import lightBlue from '@material-ui/core/colors/lightBlue'

export const theme: any = {
  colors: {
    borderSeparator: '#ecebeb',
    mainColor: '#5379a1',
    textPrimary: '#252525',
    lightBody: '#b7e0f5',
    iconDefault: '#DADADA',
    lightBackground: '#f6f6f7',
    mainBackground: '#fafafa',
    mediumBorder: '#bcbcbc',
    activeTab: '#f2f2f3',
    success: '#8EC150',
    iconGrey: '#5A595F',
    lightIconGrey: '#a2a1a6',
    checkboxBorder: '#e9e9e9',
    relativeMediumGrey: 'rgba(90, 89, 95, 0.88)',
    lightBlue: '#366ed6',
    progressBar: '#64dab7',
    grey1: '#efefef',
    grey2: '#f2f2f3',
    grey3: '#5a595f',
    grey4: '#6f6e7b',
    grey5: '#f9f9f9',
    grey6: '#313131',
    highlightedBorder: '#7a7a7a',
  },
}

// const breakpoints = createBreakpoints({})

export const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: theme.colors.mainColor,
    },
    secondary: {
      main: lightBlue[100],
    },
    text: {
      primary: theme.colors.textPrimary,
    },
    divider: theme.colors.borderSeparator,
    error: {
      // darkened from the default colour
      main: '#ad2333',
    },
  },
  typography: {
    fontFamily: 'Inter',
    body1: {
      fontWeight: 'normal',
      fontSize: '16px',
    },
    body2: {
      fontWeight: 'normal',
      fontSize: '18px',
    },
    h1: {
      fontWeight: 'bold',
      fontSize: '34px',
      color: '#4E6796',
      lineHeight: '1.7',
    },
    h2: {
      fontWeight: 'bold',
      fontSize: '22px',
      lineHeight: '1.67',
    },
  },
})

theme.fontFamily = muiTheme.typography.fontFamily
