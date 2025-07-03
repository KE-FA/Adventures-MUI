import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Stack,
  Button,
} from "@mui/material";

const destinations = [
  {
    name: "Dubai",
    image: "./dubai1.jpg",
    desc: "A dazzling city of modern marvels, luxury shopping, and spectacular desert adventures.",
    soloPrice: "$ 7000",
    groupPrice: "$ 6800",
  },
  {
    name: "SouthAfrica",
    image: "./sa.jpg",
    desc: "A stunning destination with diverse landscapes, wildlife safaris, and rich cultural heritage.",
    soloPrice: "$ 2500",
    groupPrice: "$ 2200",
  },
  {
    name: "United States",
    image: "./us.jpg",
    desc: "From vibrant cities to breathtaking natural parks, an endless variety of sights and experiences.",
    soloPrice: "$ 8500",
    groupPrice: "$ 8300",
  },
  {
    name: "Canada",
    image: "./canada.jpg",
    desc: "A land of majestic mountains, snowy adventures, and welcoming cities.",
    soloPrice: "$ 6800",
    groupPrice: "$ 6500",
  },
  {
    name: "Europe",
    image: "./europe.jpg",
    desc: "A blend of history, culture, and beautiful cities across multiple countries — a traveler’s dream.",
    soloPrice: "$ 3000",
    groupPrice: "$ 2800",
  },
  {
    name: "London",
    image: "./london.jpg",
    desc: "The iconic capital city with royal landmarks, historic streets, and a vibrant urban vibe.",
    soloPrice: "$ 7200",
    groupPrice: "$ 7000",
  },
];

function FeaturedDestinations() {
  return (
    <Box sx={{ p: 5 }}>
      <Stack component="div">
        <Typography variant="h4" gutterBottom fontWeight={600}>
          Featured Destinations
        </Typography>
        <Grid container spacing={3}>
          {destinations.map((dest) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={dest.image}
                  alt={dest.name}
                />
                <CardContent>
                  <Typography variant="h5" fontWeight='bold'>{dest.name}</Typography>
                  <Typography variant="body2">{dest.desc}</Typography>
                  <Typography variant="body1" fontWeight='650' mt={1}>Individual Cost : {dest.soloPrice}</Typography>
                  <Typography variant="body1" fontWeight='650' mb={1}>Group Cost : {dest.groupPrice}</Typography>
                   <Button variant="contained" sx={{marginTop:1.3}}>Learn More</Button>
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
