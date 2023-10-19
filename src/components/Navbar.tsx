import { Grid, Typography } from '@mui/material'
import { TonConnectButton } from '@tonconnect/ui-react'

const Navbar = () => {
  return (
    <Grid
      container
      alignItems={'center'}
      justifyContent={'space-between'}
      sx={theme => ({ backgroundColor: theme.palette.background.paper, paddingX: 2 })}
    >
      <Grid item>
        <Typography fontWeight={'bold'} fontSize={20}>
          Decentralized Subscription Protocol
        </Typography>
      </Grid>
      <Grid item>
        <TonConnectButton />
      </Grid>
    </Grid>
  )
}

export default Navbar
