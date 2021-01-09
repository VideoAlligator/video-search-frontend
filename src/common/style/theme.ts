import { createMuiTheme } from '@material-ui/core/styles'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

export const theme: any = {
  colors: {
    borderSeparator: '#ecebeb',
    mainColor: '#7095be',
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

const breakpoints = createBreakpoints({})

export const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: theme.colors.mainColor,
    },
    secondary: {
      main: theme.colors.lightBody,
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
    subtitle1: {
      fontWeight: 'normal',
      fontSize: '22px',
      [breakpoints.down('sm')]: {
        fontSize: '16px',
      },
    },
    subtitle2: {
      fontWeight: 'bold',
      fontSize: '22px',
      [breakpoints.down('sm')]: {
        fontSize: '16px',
      },
    },
    body1: {
      fontWeight: 'normal',
      fontSize: '16px',
    },
    body2: {
      fontWeight: 'normal',
      fontSize: '14px',
    },
    h1: {
      fontWeight: 'bold',
      fontSize: '70px',
      color: '#3d80b3',
      [breakpoints.down('sm')]: {
        fontSize: '28px',
      },
    },
    h2: {
      fontSize: '40px',
      fontWeight: 'normal',
      [breakpoints.down('sm')]: {
        fontSize: '24px',
      },
    },
    h3: {
      fontWeight: 'bold',
      fontSize: '28px',
      lineHeight: '1.36',
    },
    h4: {
      fontSize: '20px',
    },
    h5: {
      fontSize: '15px',
    },
  },
})

theme.fontFamily = muiTheme.typography.fontFamily
