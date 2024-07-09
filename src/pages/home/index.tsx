// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const Home = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography>
              Aca iria el perfil del usuario o admin.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

Home.acl = {
  action: 'read',
  subject: 'acl-page'
}

export default Home
