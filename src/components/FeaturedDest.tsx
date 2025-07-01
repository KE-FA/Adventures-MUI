import { Grid, Card, CardMedia, CardContent, Typography, Box, Stack } from '@mui/material';

const destinations = [
  { name: 'Mt. Kenya', image: './Mt-Kenya.jpg', desc: 'Africa’s second highest peak.', price: 'Ksh 3000' },
  { name: 'Mt. Ruwenzori', image: './Mt-Ruwenzori.jpg', desc: 'Mountains of the Moon.', price: 'Ksh 3500' },
  { name: 'Lake Nakuru', image: './Lake-Nakuru.jpg', desc: 'Flamingos & wildlife haven.', price: 'Ksh 1500' },
  { name: 'Tsavo National Park', image: './Tsavo.jpg', desc: 'Elephants & big cats.', price: 'Ksh 2000' },
  { name: 'Nairobi National Park', image: './Nairobi.jpg', desc: 'Wildlife in the city.', price: 'Ksh 1200' },
  { name: 'Coastal Kenya', image: './Coastal.jpg', desc: 'Beaches & Swahili culture.', price: 'Ksh 2000' },
];

function FeaturedDestinations() {
  return (
    <Box sx={{ p:5 }}>
      <Stack component="div" >
        <Typography variant="h4" gutterBottom fontWeight={600}>Featured Destinations</Typography>
        <Grid container spacing={3}>
          {destinations.map((dest) => (
            <Grid size={{ xs:12, sm:6, md:4}}  >
              <Card>
                <CardMedia component="img" height="200" image={dest.image} alt={dest.name} />
                <CardContent>
                  <Typography variant="h5">{dest.name}</Typography>
                  <Typography variant="body2">{dest.desc}</Typography>
                  <Typography variant="body1">{dest.price}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
}

export default FeaturedDestinations;
