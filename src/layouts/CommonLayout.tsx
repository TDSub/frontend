import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { TonConnectUIProvider } from '@tonconnect/ui-react'
import { FC, PropsWithChildren } from 'react'
import { BrowserRouter } from 'react-router-dom'

import theme from '../theme.tsx'

const CommonLayout: FC<PropsWithChildren> = ({ children }) => {
  // this manifest is used temporarily for development purposes
  const manifestUrl =
    'https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json'

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TonConnectUIProvider manifestUrl={manifestUrl}>{children}</TonConnectUIProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default CommonLayout
