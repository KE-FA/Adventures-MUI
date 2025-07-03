import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  IconButton,
} from '@mui/material';

import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Contact = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>

      <Grid container spacing={4}>
        <Grid size={{xs:12, md:6}} >
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Send us a message
            </Typography>
            <Box
              component="form"
              
              sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            >
              <TextField
                label="Name"
                variant="outlined"
                required
              />
              <TextField
              
                label="Email"
                type="email"
                variant="outlined"
                required
              />
              <TextField
                
                label="Subject"
                variant="outlined"
              />
              <TextField
                
                label="Message"
                multiline
                rows={3}
                variant="outlined"
                required
              />
              <Button variant="contained" type="submit">
                Send Message
              </Button>
            </Box>
          </Paper>
        </Grid>

      
        <Grid size={{xs:12, md:6}}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Contact Information
            </Typography>

            <Box display="flex" alignItems="center" mb={1}>
              <EmailIcon sx={{ mr: 1 }} />
              <Typography>zaphtours@gmail.com</Typography>
            </Box>

            <Box display="flex" alignItems="center" mb={1}>
              <PhoneIcon sx={{ mr: 1 }} />
              <Typography>+254 734 828 995</Typography>
            </Box>

            <Box display="flex" alignItems="center" mb={1}>
              <LocationOnIcon sx={{ mr: 1 }} />
              <Typography>Nairobi, Kenya</Typography>
            </Box>

            <Box mt={2}>
              <Typography variant="subtitle1">Office Hours:</Typography>
              <Typography>Monday – Friday: 9:00 AM – 5:00 PM</Typography>
            </Box>

            <Box mt={2}>
              <Typography variant="subtitle1">Follow us:</Typography>
              <IconButton href="https://facebook.com" target="_blank" color="primary">
                <FacebookIcon />
              </IconButton>
              <IconButton href="https://instagram.com" target="_blank" color="secondary">
                <InstagramIcon />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank" color="info">
                <TwitterIcon />
              </IconButton>
            </Box>
          </Paper>

          {/* Google Map */}
          <Box sx={{ border: '1px solid #ccc' }}>
            <iframe
              title="Zaph Tours Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819689830559!2d36.821946414322325!3d-1.2920650359960666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d6f3c74c47%3A0x6df8c6be1c0c9b90!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000000"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
