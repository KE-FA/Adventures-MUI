import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static" sx={{bgcolor:'green'}}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Zaph Tours
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/destinations">Destinations</Button>
        <Button color="inherit" component={Link} to="/trip-types">Trip Types</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
