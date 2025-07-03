import { Box, Typography, Grid, Card, CardMedia, CardContent, } from '@mui/material';


interface TripPackageProps {
  title: string;
  images: string[];
  description: string;
  price: string;
}


const TripPackage = ({ title, images, description, price }: TripPackageProps) => {
  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="h5" gutterBottom fontWeight={550}>{title}</Typography>

      <Grid container spacing={2} sx={{ mb: 2 }}>
        {images.map((img) => (
          <Grid size={{xs:12,sm:4}} >
            <Card>
              <CardMedia
                component="img"
                height="150"
                
                image={img}
                alt={`${title}`}
                
                
                
              />
            </Card>
          </Grid>
        ))}
      </Grid>

      <Card sx={{ p: 2, bgcolor: '#f5f5f5' }}>
        <CardContent>
          <Typography variant="body1" sx={{ mb: 1 }}>{description}</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            {price}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TripPackage;

