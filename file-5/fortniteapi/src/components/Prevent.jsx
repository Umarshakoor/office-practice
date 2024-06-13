import { Box, Button, Typography } from "@mui/material";
import wearMask from "./wearMask.png";

function Prevent() {
  return (
    <>
      <Box
        sx={{
          borderRadius: "0 0 40% 0",
          bgcolor: "#f1f7ff",
          display: "flex",
          justifyContent: "space-between",
          height: "300px",
          overflow: "hidden",
        }}
      >
        <Box>
          <Typography
            variant="h6"
            sx={{
              color: "#6200de",
              margin: "40px",
              fontWeight: "light",
              marginBottom: "-50px",
            }}
          >
            COVID- 19 AWARENESS
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: "#6200de",
              margin: "40px",
              marginBottom: "-40px",
              fontWeight: "bold",
            }}
          >
            Stay Safe. & Stay Cool
          </Typography>
          <Typography
            component="pre"
            align="left"
            variant="caption"
            sx={{ color: "#8e9296", margin: "40px" }}
          >
            Amet minim mollit non deserunt ullamco est
            <br /> sit aliqua dolor do amet sint. Velit
            <br /> officia consequat duis enim velit mollit.
          </Typography>
        </Box>
        <Box margin={"-40px"} overflow={"auto"}>
          <img
            height="400px"
            src={wearMask}
            alt="people wearing mask"
            loading="lazy"
          />
        </Box>
      </Box>
      <Button
        variant="contained"
        sx={{
          marginLeft: "40px",
          marginTop: "-130px",
          bgcolor: "#6200de",
          borderRadius: "30px",
        }}
      >
        How to Prevent
      </Button>
    </>
  );
}

export default Prevent;
