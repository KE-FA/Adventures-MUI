import { Container, Typography } from '@mui/material';
import TripPackage from '../components/TripPackage';

const packages = [
  {
    title: 'Honeymoon',
    images: [
      './honeymoon1.jpg',
      './honeymoon2.jpg',
      './honeymoon3.jpg',
    ],
    description: 'Romantic getaways to stunning destinations with luxury accommodation and unforgettable experiences.',
    price: 'From $1,500 per couple - special discounts available.',
  },
  {
    title: 'Family',
    images: [
      './family1.jpg',
      './family2.jpg',
      './family3.jpg',
    ],
    description: 'Fun-filled family adventures tailored for all ages, with safe activities and family-friendly lodging.',
    price: 'Starting at $1,200 for a family of 4.',
  },
  {
    title: 'Adventure',
    images: [
      './adventure1.jpg',
      './adventure2.jpg',
      './adventure3.jpg',
    ],
    description: 'Thrilling activities for adventure seekers — mountain climbing, rafting, hiking and more.',
    price: 'Packages start from $800 per person.',
  },
  {
    title: 'Cultural Tours',
    images: [
      './cultural1.jpg',
      './cultural2.jpg',
      '/cultural3.jpg',
    ],
    description: 'Immersive cultural experiences to connect you with local communities and traditions.',
    price: 'From $700 per person.',
  },
  {
    title: 'Wildlife Safaris',
    images: [
      './wildlife1.jpg',
      './wildlife2.jpg',
      './wildlife3.jpg',
    ],
    description: 'Classic safari experiences to witness Africa’s majestic wildlife up close.',
    price: 'From $900 per person.',
  },
  {
    title: 'Eco-Tours',
    images: [
      './eco1.jpg',
      './eco2.jpg',
      '/eco3.jpg',
    ],
    description: 'Sustainable tours that respect nature, supporting conservation and local communities.',
    price: 'From $650 per person.',
  },
  {
    title: 'Luxury Vacations',
    images: [
      '/luxury1.jpg',
      '/luxury2.jpg',
      '/luxury3.jpg',
    ],
    description: 'High-end getaways with top-tier accommodation, exclusive experiences, and private tours.',
    price: 'Packages start at $3,000 per person.',
  },
  {
    title: 'Beach Holidays',
    images: [
      './beach1.jpg',
      './beach2.jpg',
      './beach3.jpg',
    ],
    description: 'Relax on Kenya’s pristine beaches, enjoy ocean adventures and coastal culture.',
    price: 'From $700 per person.',
  },
  {
    title: 'Wellness Retreats',
    images: [
      './retreat1.jpg',
      './retreat2.jpg',
      './retreat3.jpg',
    ],
    description: 'Rejuvenate your body and mind with spa treatments, yoga, and peaceful surroundings.',
    price: 'Packages from $1,000 per person.',
  },
  {
    title: 'Culinary Tours',
    images: [
      './culinary1.jpg',
      './culinary2.jpg',
      './culinary3.jpg',
    ],
    description: 'Taste your way through Kenya’s rich culinary heritage with expert-guided food tours.',
    price: 'Starting at $600 per person.',
  },
];

function TripTypes() {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>Our Trip Packages</Typography>
      {packages.map((pkg) => (
        <TripPackage
          title={pkg.title}
          images={pkg.images}
          description={pkg.description}
          price={pkg.price}
        />
      ))}
    </Container>
  );
}

export default TripTypes;
