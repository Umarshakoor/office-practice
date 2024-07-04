import { Box, Button, NativeSelect, Typography } from "@mui/material";
import { ArrowBackIos, PendingOutlined } from "@mui/icons-material/";
import Grid from "@mui/material/Unstable_Grid2";
import React, { useState } from "react";

function TyreMenu() {
  /*   const [name, setName] = useState("umar");
  const [name, setName] = useState("umar");
  const [name, setName] = useState("umar"); */
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <Box
            sx={{
              backgroundColor: "#c4d5ff",
              padding: "10px",
              display: "flex",
            }}
            height={"40px"}
            width={"100%"}
          >
            <ArrowBackIos />
            <Typography variant="text">Report</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              backgroundColor: "#c4d5ff",
              alignItems: "center",
              justifyContent: "flex-end",
              padding: "10px",
            }}
            height={"40px"}
            display={"flex"}
          >
            <PendingOutlined />
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} marginTop={"0px"}>
          <Box
            sx={{
              backgroundColor: "#c4d5ff",
            }}
            height={"20px"}
            width={"100%"}
          >
            <Typography>Tyres</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} marginTop={"0px"}>
          <Box
            sx={{
              backgroundColor: "#c4d5ff",
              padding: "10px",
            }}
            height={"40px"}
            width={"100%"}
          >
            <Typography>Tyres</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box display={"flex"} justifyContent={"center"} marginTop={"30px"}>
            <Typography variant="text" align="center">
              Passenger Front Tyre
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container alignItems={"center"}>
        <Grid item xs={8}>
          <Box display={"flex"} justifyContent={"center"}>
            <NativeSelect
              fullWidth
              defaultValue={30}
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}
            >
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display={"flex"} justifyContent={"center"}>
            <Button sx={{ fontSize: "6px" }} variant="contained" size="medium">
              Copy From Top Left
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Grid container my={"5px"} alignItems={"center"}>
        <Grid item xs={8}>
          <Box display={"flex"} justifyContent={"center"}>
            <NativeSelect
              fullWidth
              defaultValue={30}
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}
            >
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display={"flex"} justifyContent={"center"}>
            <Button sx={{ fontSize: "6px" }} variant="contained" size="medium">
              Copy From Top Left
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Grid container my={"5px"} alignItems={"center"}>
        <Grid item xs={8}>
          <Box display={"flex"} justifyContent={"center"}>
            <NativeSelect
              fullWidth
              defaultValue={30}
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}
            >
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display={"flex"} justifyContent={"center"}>
            <Button sx={{ fontSize: "6px" }} variant="contained" size="medium">
              Copy From Top Left
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Grid container my={"5px"} alignItems={"center"}>
        <Grid item xs={8}>
          <Box display={"flex"} justifyContent={"center"}>
            <NativeSelect
              fullWidth
              defaultValue={30}
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}
            >
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display={"flex"} justifyContent={"center"}>
            <Button sx={{ fontSize: "6px" }} variant="contained" size="medium">
              Copy From Top Left
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Grid container my={"5px"} alignItems={"center"}>
        <Grid item xs={8}>
          <Box display={"flex"} justifyContent={"center"}>
            <NativeSelect
              fullWidth
              defaultValue={30}
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}
            >
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display={"flex"} justifyContent={"center"}>
            <Button
              sx={{ fontSize: "6px", backgroundColor: "#292e42" }}
              variant="contained"
              size="medium"
            >
              Copy From Top Left
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6}>
          <Box display={"flex"}>
            <Button
              variant="contained"
              size="large"
              sx={{ backgroundColor: "#4c4c4c" }}
            >
              Back
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <Button variant="contained" size="large">
              Save
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default TyreMenu;
