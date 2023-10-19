import './App.css'

import { Button, Card, CardContent, CardHeader, Typography } from '@mui/material'

function App() {
  return (
    <Card>
      <CardHeader title={'TD-Sub'} />
      <CardContent>
        <Typography fontWeight={'bold'}>Hello From TD-Sub</Typography>
        <Button>Click Me</Button>
      </CardContent>
    </Card>
  )
}

export default App
