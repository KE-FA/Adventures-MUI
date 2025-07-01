import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ bgcolor: 'green', color: '#fff', p: 2, textAlign: 'center' }}>
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Zaph Tours. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
