import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { FC, PropsWithChildren } from 'react'
import { BrowserRouter } from 'react-router-dom'

import theme from '../theme.tsx'

const CommonLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default CommonLayout
