import { Grid, Card, CardMedia, CardContent, Typography, Box, Stack } from '@mui/material';

const destinations = [
  { name: 'Mt. Kenya', image: './Mt-Kenya.jpg', desc: 'Africa’s second highest peak.', price: '$ 300' },
  { name: 'Mt. Ruwenzori', image: './Mt-Ruwenzori.jpg', desc: 'Mountains of the Moon.', price: '$ 350' },
  { name: 'Lake Nakuru', image: './Lake-Nakuru.jpg', desc: 'Flamingos & wildlife haven.', price: '$ 150' },
  { name: 'Tsavo National Park', image: './Tsavo.jpg', desc: 'Elephants & big cats.', price: '$ 200' },
  { name: 'Nairobi National Park', image: './Nairobi.jpg', desc: 'Wildlife in the city.', price: '$ 120' },
  { name: 'Coastal Kenya', image: './Coastal.jpg', desc: 'Beaches & Swahili culture.', price: '$ 200' },
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
                  <Typography variant="h5" sx={{fontWeight:'bolder'}}>{dest.name}</Typography>
                  <Typography variant="body2">{dest.desc}</Typography>
                  <Typography variant="body1" sx={{fontWeight:'bold'}}>{dest.price}</Typography>
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



