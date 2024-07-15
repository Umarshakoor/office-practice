import { Add, Remove } from "@mui/icons-material";
import { Box, Button, Divider, Grid, MenuItem, TextField } from "@mui/material";
import { useState } from "react";

function Question() {
  const [arr, setArr] = useState([
    {
      question: "",
      questionType: "",
      possibleValue: "",
      score: 0,
    },
  ]);
  console.log(arr);

  const handleArr = () => {
    // eslint-disable-next-line
    // debugger;
    setArr([
      ...arr,
      {
        question: "",
        questionType: "",
        possibleValue: "",
        score: 0,
      },
    ]);
  };

  const qType = [
    { value: "textbox" },
    { value: "dropdown" },
    { value: "checkbox" },
    { value: "radio" },
    { value: "image" },
    { value: "doc" },
  ];
  const handleInputChange = (index, event) => {
    const values = [...arr];
    const { value } = event.target;
    values[index] = value;
    setArr(values);
  };

  return (
    <>
      {arr.map((question, index) => (
        <Box key={index}>
          <Grid container gap="10px" p="10px">
            <Grid item xs={12} sm={6} sx={{ flex: { xs: "none", sm: "1" } }}>
              <TextField
                name="question"
                onChange={(event) => handleInputChange(index, event)}
                label="Question"
                size="small"
                variant="outlined"
                fullWidth
                value={question.question}
                sx={{ bgcolor: "white" }}
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ flex: { xs: "none", sm: "1" } }}>
              <TextField
                name="questionType"
                onChange={(event) => handleInputChange(index, event)}
                label="Question Type"
                size="small"
                select
                variant="outlined"
                fullWidth
                value={question.questionType}
                sx={{ bgcolor: "white" }}
              >
                {qType.map((option, i) => (
                  <MenuItem key={i} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Grid container gap="10px" p="10px">
            <Grid item xs={12} sm={6} sx={{ flex: { xs: "none", sm: "1" } }}>
              <TextField
                name="possibleValue"
                onChange={(event) => handleInputChange(index, event)}
                size="small"
                label="Possible Value"
                variant="outlined"
                fullWidth
                value={question.possibleValue}
                sx={{ bgcolor: "white" }}
              ></TextField>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{ flex: { xs: "none", sm: "1", display: "flex" } }}
            >
              <TextField
                name="score"
                onChange={(event) => handleInputChange(index, event)}
                label="Score"
                type="number"
                size="small"
                value={question.score}
                variant="outlined"
                fullWidth
                sx={{ bgcolor: "white", width: "80%" }}
              />
              <Box
                sx={{
                  display: "flex",
                  p: "0",
                  m: "0",
                  mx: "auto",
                  alignItems: "center",
                }}
              >
                {arr.length < 0 ? (
                  <Add
                    onClick={handleArr}
                    sx={{
                      backgroundColor: "primary.main",
                      color: "white",
                      borderRadius: "50px",
                      cursor: "pointer",
                    }}
                  />
                ) : (
                  <Remove
                    onClick={handleArr}
                    sx={{
                      backgroundColor: "red",
                      color: "white",
                      borderRadius: "50px",
                      cursor: "pointer",
                    }}
                  />
                )}
              </Box>
            </Grid>
          </Grid>
          <Grid item ml="10px" xs={12}>
            <Button>Add Sub Question</Button>
          </Grid>
          <Divider sx={{ my: "20px" }} />
        </Box>
      ))}
    </>
  );
}

export default Question;
