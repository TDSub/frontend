import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#248BDA'
    },
    secondary: {
      main: '#00ACE7'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#3E4756',
      paper: '#212932'
    }
  },
  typography: {
    fontFamily: 'Inter'
  }
})

export default theme
