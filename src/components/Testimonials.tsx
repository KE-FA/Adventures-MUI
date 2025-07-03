import { MaximizeSharp } from "@mui/icons-material";
import {
  Box,
  Stack,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Avatar,
} from "@mui/material";

const reviews = [
  {
    name: "John D",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.exercitationem minima dolor unde aperiam debitis nobis totam? Fuga natus voluptatibus a recusandae sapiente voluptatum?",
    avatar: "https://www.randomuser.me/api/portraits/men/10.jpg",
  },
  {
    name: "David M",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure modi voluptas culpa rem, vel obcaecati vero autem, exercitationem minima dolor unde aperiam debitis nobis totam?",
    avatar: "https://www.randomuser.me/api/portraits/men/81.jpg",
  },
  {
    name: "Beatrice W",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus veritatis velit a quos esse voluptas, ipsum quidem at corporis reprehenderit nulla nisi beatae laudantium maiores eum totam obcaecati eos similique!",
    avatar: "https://www.randomuser.me/api/portraits/women/80.jpg",
  },
];

function Testimonials() {
  return (
    <Box sx={{ py: 3, bgcolor: "#FEEBF6" }}>
      <Stack component="div">
        <Typography variant="h4" gutterBottom fontWeight={600}>
          Customer Reviews
        </Typography>
        <Grid container spacing={3} >
          {reviews.map((review) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Card>
                <CardContent>
                  <Typography variant="body2">{review.comment}</Typography>

                  <Avatar
                    src={review.avatar}
                    alt={review.name}
                    sx={{ width: 80, height: 80, marginTop: '30px', justifyContent:'center', marginLeft:'40%' }}
                    
                    
                  />

                  <Typography
                    variant="h5"
                    textAlign={"center"}
                    py={2}
                    fontWeight={550}
                  >
                    {review.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
}

export default Testimonials;
