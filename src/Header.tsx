import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default () => {
  return (
    <AppBar position='fixed'>
      <ToolBar sx={{ justifyContent: 'space-between' }}>
        <Typography component="h1" variant="h4">Scrum Timebox</Typography>
      </ToolBar>
    </AppBar>
  )
}
