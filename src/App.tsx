import './App.css'

import { Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar.tsx'
import Home from './pages/Home.tsx'

function App() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateRows: '64px 1fr',
        height: '100dvh',
        width: '100vw',
        overflow: 'hidden'
      }}
    >
      <Navbar />
      <Box sx={theme => ({ height: '100%', backgroundColor: theme.palette.background.default })}>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </Box>
    </Box>
  )
}

export default App
