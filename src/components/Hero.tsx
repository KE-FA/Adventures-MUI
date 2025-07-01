import { Box, Typography, Stack } from '@mui/material';

function Hero() {
  return (
    <Box
      sx={{
        height: '70vh',
        backgroundImage: 'url(./Hero-Section.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat:'no-repeat',
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
        margin:'20px'
      }}
    >
      <Stack component="div">
        <Typography variant="h2">Explore the world with us</Typography>
      </Stack>
    </Box>
  );
}

export default Hero;
