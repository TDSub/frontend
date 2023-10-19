import { Grid, Typography } from '@mui/material'

const Navbar = () => {
  return (
    <Grid
      container
      alignItems={'center'}
      sx={theme => ({ backgroundColor: theme.palette.background.paper, paddingX: 2 })}
    >
      <Grid item>
        <Typography fontWeight={'bold'} fontSize={20}>
          Decentralized Subscription Protocol
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Navbar
