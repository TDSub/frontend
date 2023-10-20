import { Box, Button, Card, CardContent, CardHeader, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <Grid container spacing={3} justifyContent={'center'}>
        <Grid item>
          <Card>
            <CardHeader title={'1'} />
            <CardContent>
              <Button variant={'contained'}>Explore Subscriptions</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardHeader title={'2'} />
            <CardContent>
              <Button onClick={() => navigate('/owner')} variant={'contained'}>
                Become an owner
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
