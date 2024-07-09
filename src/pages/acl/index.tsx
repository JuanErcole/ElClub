// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const ACLPage = () => {

  return (
    <Grid container spacing={6}>
      <Grid item md={6} xs={12}>
        <Card>
          <CardContent>
            <Typography>Home</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

ACLPage.acl = {
  action: 'read',
  subject: 'acl-page'
}

export default ACLPage
