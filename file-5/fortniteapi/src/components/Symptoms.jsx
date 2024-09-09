import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

function Symptoms() {
  return (
    <>
      <Box bgcolor={"#f8ffff"}>
        <Box
          sx={{ display: "flex", justifyContent: "center", color: "#6200de" }}
        >
          <Typography variant="h5">
            S<b>ymptoms of CoronaVirus</b>
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", color: "#8e9296" }}
        >
          <Typography variant="h6">
            Amet minim mollit non deserunt ullamco est sit na coder is medicine
          </Typography>
        </Box>
        <Grid
          display={"flex"}
          flexGrow={2}
          container
          spacing={2}
          marginTop={"20px"}
        >
          <Grid item xs={12} md={6} padding={"10px"}>
            <Card>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: " 0px 0px 5px  black",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: "80px" }}
                  image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQNKxOKVMfVCngvhFi6kEkhitE0EECTimw7daZck969lOvkUgtv"
                  alt="Live from space album cover"
                />

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CardContent>
                    <Typography textAlign={"center"} variant="h5">
                      High Fever
                    </Typography>
                    <Typography
                      textAlign={"center"}
                      variant="subtitle"
                      color="text.secondary"
                    >
                      Amet minim mollit non <br />
                      deserunt ullamco est sit na coder is medicine
                    </Typography>
                  </CardContent>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: " 0px 0px 5px  black",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: "80px" }}
                  image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQNKxOKVMfVCngvhFi6kEkhitE0EECTimw7daZck969lOvkUgtv"
                  alt="Live from space album cover"
                />

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CardContent>
                    <Typography textAlign={"center"} variant="h5">
                      High Fever
                    </Typography>
                    <Typography
                      textAlign={"center"}
                      variant="subtitle"
                      color="text.secondary"
                    >
                      Amet minim mollit non <br />
                      deserunt ullamco est sit na coder is medicine
                    </Typography>
                  </CardContent>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: " 0px 0px 5px  black",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: "80px" }}
                  image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQNKxOKVMfVCngvhFi6kEkhitE0EECTimw7daZck969lOvkUgtv"
                  alt="Live from space album cover"
                />

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CardContent>
                    <Typography textAlign={"center"} variant="h5">
                      High Fever
                    </Typography>
                    <Typography
                      textAlign={"center"}
                      variant="subtitle"
                      color="text.secondary"
                    >
                      Amet minim mollit non <br />
                      deserunt ullamco est sit na coder is medicine
                    </Typography>
                  </CardContent>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: " 0px 0px 5px  black",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: "80px" }}
                  image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQNKxOKVMfVCngvhFi6kEkhitE0EECTimw7daZck969lOvkUgtv"
                  alt="Live from space album cover"
                />

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CardContent>
                    <Typography textAlign={"center"} variant="h5">
                      High Fever
                    </Typography>
                    <Typography
                      textAlign={"center"}
                      variant="subtitle"
                      color="text.secondary"
                    >
                      Amet minim mollit non <br />
                      deserunt ullamco est sit na coder is medicine
                    </Typography>
                  </CardContent>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Symptoms;
