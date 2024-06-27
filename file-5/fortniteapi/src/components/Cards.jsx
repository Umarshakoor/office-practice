import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  FormGroup,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";

function Cards() {
  return (
    <Container>
      <Box marginTop="70px">
        <Grid
          container
          spacing={2}
          sx={{
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "nowrap",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{ marginTop: "40px", marginBottom: "40px", margin: "40px" }}
              >
                <Card sx={{ maxWidth: 150 }}>
                  <CardMedia
                    sx={{ height: 100 }}
                    image="https://cdn.prod.website-files.com/608aecd1e643ecaa961a7a67/61d4c2be6d5b5f116c4f3328_personal%203.png"
                    title="green iguana"
                  />
                  <CardContent sx={{ height: "80px" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      Stay Home
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <Card sx={{ maxWidth: 150 }}>
                  <CardMedia
                    sx={{ height: 100 }}
                    image="https://cdn.prod.website-files.com/608aecd1e643ecaa961a7a67/61d4c2be6d5b5f116c4f3328_personal%203.png"
                    title="green iguana"
                  />
                  <CardContent sx={{ height: "80px" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      Stay Home
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{ marginTop: "40px", marginBottom: "40px", margin: "40px" }}
              >
                <Card sx={{ maxWidth: 150 }}>
                  <CardMedia
                    sx={{ height: 100 }}
                    image="https://cdn.prod.website-files.com/608aecd1e643ecaa961a7a67/61d4c2be6d5b5f116c4f3328_personal%203.png"
                    title="green iguana"
                  />
                  <CardContent sx={{ height: "80px" }}>
                    <Typography gutterBottom variant="h6" component="h6">
                      Stay Home
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <Card sx={{ maxWidth: 150 }}>
                  <CardMedia
                    sx={{ height: 100 }}
                    image="https://cdn.prod.website-files.com/608aecd1e643ecaa961a7a67/61d4c2be6d5b5f116c4f3328_personal%203.png"
                    title="green iguana"
                  />
                  <CardContent sx={{ height: "80px" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      Stay Home
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          </Box>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                alignContent: "space-around",
                justifyContent: "center",
                alignItems: "baseline",
              }}
            >
              <Typography variant="h5" color={"#6200de"}>
                How to Be Prevent CoronoVirus?
              </Typography>
              <br />
              <Typography paragraph="true" color={"#8e9296"} gutterBottom>
                Amet minim mollit non deserunt ullamco est sit aliqua
                <br /> dolor do amet sint. Velit officia consequat duis
                <br /> enim velit mollit. This is the best Part of the
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked />}
                  label="Have to talk about thid Covid 19 Virus?"
                />
                <FormControlLabel
                  control={<Checkbox checked />}
                  label="Have to talk about thid Covid 19 Virus?"
                />
                <FormControlLabel
                  control={<Checkbox checked />}
                  label="Have to talk about thid Covid 19 Virus?"
                />
              </FormGroup>
              <br />
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#6200de",
                  borderRadius: "30px",
                }}
              >
                How to Learn
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Cards;
