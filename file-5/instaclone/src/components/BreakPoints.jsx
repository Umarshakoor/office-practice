import {
  Grid,
  Box,
  AppBar,
  Typography,
  createTheme,
  Container,
  Hidden,
  Drawer,
  Paper,
  Button,
} from "@mui/material";

// Grid System: The Grid component uses breakpoints to define how the layout changes across different screen sizes.
<Box>
  <Grid container>
    <Grid item xs={12} sm={6} md={4}></Grid>
  </Grid>
  {/* Box Component: The Box component allows you to define CSS properties based on
  breakpoints using the sx prop. */}
  <Box sx={{ width: { xs: "100%", sm: "50%", md: "33%" } }}>
    {/* Content */}
  </Box>
  {/* Typography Component: Breakpoints can be used to change typography
  properties like font size or line height. */}
  <Typography sx={{ fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" } }}>
    Responsive Typography
  </Typography>
  {/* Container Component: The Container component can be responsive using the
  maxWidth prop. */}
  <Container maxWidth={{ xs: "sm", md: "lg" }}>{/* Content */}</Container>; //
  {/* Hidden Component: The Hidden component allows you to hide content based on
  breakpoints. */}
  <Hidden smDown>{/* Hidden on small screens and down */}</Hidden>;
  {/* Drawer Component: The Drawer component can be responsive using the variant prop and
  the breakpoints in the sx prop. */}
  <Drawer variant="temporary" sx={{ display: { xs: "block", md: "none" } }}>
    {/* Drawer content */}
  </Drawer>
  {/* // AppBar Component: You can use breakpoints to style the AppBar component
  responsively. */}
  <AppBar position="static" sx={{ display: { xs: "none", sm: "block" } }}>
    {/* AppBar content */}
  </AppBar>
  {/* // Paper Component: The Paper component can be styled responsively using the
  sx prop. */}
  <Paper sx={{ padding: { xs: 2, sm: 3, md: 4 } }}>{/* Paper content */}</Paper>
  {/* // Button Component: Buttons can also use breakpoints for responsive styling. */}
  <Button sx={{ fontSize: { xs: "0.75rem", sm: "1rem", md: "1.25rem" } }}>
    Responsive Button
  </Button>
</Box>;
// Theme Customization: Breakpoints can be defined in the theme and used throughout your application.
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

function SpacingExample() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Paper>Item 1</Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper>Item 2</Paper>
      </Grid>
    </Grid>
  );
}
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

function SpacingBoxExample() {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Paper>Item 1</Paper>
      <Paper>Item 2</Paper>
    </Box>
  );
}
import Box from "@mui/material/Box";

function FlexGrowExample() {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ flexGrow: 1, bgcolor: "primary.main", p: 2 }}>Flex Item 1</Box>
      <Box sx={{ flexGrow: 2, bgcolor: "secondary.main", p: 2 }}>
        Flex Item 2
      </Box>
    </Box>
  );
}
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

function CombinedExample() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box sx={{ flexGrow: 1, bgcolor: "primary.main", p: 2 }}>
            <Paper>Flex Item 1</Paper>
          </Box>
          <Box sx={{ flexGrow: 2, bgcolor: "secondary.main", p: 2 }}>
            <Paper>Flex Item 2</Paper>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper>Grid Item 1</Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper>Grid Item 2</Paper>
      </Grid>
    </Grid>
  );
}

export default CombinedExample;
