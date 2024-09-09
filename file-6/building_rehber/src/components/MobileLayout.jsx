import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import TyreMenu from "./TyreMenu.jsx";

const MobileLayout = () => {
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        margin: "auto",
      }}
    >
      <Grid>
        <TyreMenu />
      </Grid>
    </Box>
  );
};

export default MobileLayout;
