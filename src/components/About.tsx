import { Box, Container, Typography } from "@mui/material";

function About() {
  return (
    <Box sx={{ py: 5 }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          About Zaph Tours
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fugit
          quaerat vero eos excepturi natus nostrum voluptate, quia dolorem
          officia eum architecto aspernatur ullam quo commodi exercitationem
          tenetur ut pariatur
        </Typography>
      </Container>
    </Box>
  );
}

export default About;
