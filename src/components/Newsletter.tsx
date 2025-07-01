import { Box, Container, Typography, TextField, Button } from '@mui/material';

function Newsletter() {
  return (
    <Box sx={{ py: 5 }}>
      <Container>
        <Typography variant="h5" gutterBottom>Subscribe to our Newsletter</Typography>
        <Typography variant="body1" gutterBottom>Get weekly updates on safaris and adventures.</Typography>
        <TextField label="Email Address" variant="outlined" sx={{ mr: 4 }} />
        <Button variant="contained" sx={{marginTop:1.5}}>Subscribe</Button>
      </Container>
    </Box>
  );
}

export default Newsletter;
