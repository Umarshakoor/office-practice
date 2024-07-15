import Grid from "@mui/material/Unstable_Grid2";
import {
  Box,
  Button,
  Container,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { Save } from "@mui/icons-material";
import Question from "./Question";
import { useState } from "react";

function Appointments() {
  const [vCategory, setVCategory] = useState("");
  const categoty = [
    { value: "Transmission" },
    { value: "Electrical Controls" },
    { value: "Front Suspension" },
    { value: "Rear Suspension" },
    { value: "Engine Compartment" },
    { value: "Exterior Body Diagram" },
    { value: "Road Test and Final Checks" },
    { value: "Fuel System" },
    { value: "Streeing" },
  ];

  const subCategory = [
    {
      label: "transmission",
      value: "test1",
    },
  ];

  const handleCatergoryChange = (e) => {
    setVCategory(e.target.value);
  };

  return (
    <Container>
      <Box sx={{ bgcolor: "white" }}>
        <Grid
          container
          sx={{
            flexDirection: "column",
            alignItems: "center",
            alignContent: "center",
            py: "10px",
          }}
        >
          <Grid item sx={{ display: "flex", justifyContent: "center" }}>
            <Typography>Add Question</Typography>
          </Grid>
        </Grid>
        <Grid container gap="10px" p="10px">
          <Grid item xs={12} sm={6} sx={{ flex: { xs: "none", sm: "1" } }}>
            <TextField
              onChange={handleCatergoryChange}
              size="small"
              label="select catergory"
              value={vCategory}
              select
              fullWidth
              variant="outlined"
              sx={{ bgcolor: "white" }}
            >
              {categoty.map((option, i) => (
                <MenuItem key={i} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ flex: { xs: "none", sm: "1" } }}>
            <TextField
              label="select sub catergory"
              size="small"
              select
              variant="outlined"
              fullWidth
              sx={{ bgcolor: "white" }}
            >
              {subCategory.map((sub, i) => (
                <MenuItem key={i} value={sub.value}>
                  {sub.value}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Question />
        <Grid container gap="5px">
          <Grid item>
            <Button variant="outlined" sx={{ color: "red" }}>
              Cancel
            </Button>
          </Grid>
          <Grid item>
            <Button startIcon={<Save />} variant="contained">
              Save
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Appointments;
