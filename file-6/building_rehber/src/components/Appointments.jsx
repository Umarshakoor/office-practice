import Grid from "@mui/material/Unstable_Grid2";
import {
  Box,
  Button,
  Container,
  MenuItem,
  TextField,
  Typography,
  Divider,
} from "@mui/material";
import { Add, Remove, Save } from "@mui/icons-material";
import { useState } from "react";

function Appointments() {
  const [masterArry, setMasterArray] = useState([]);
  console.log("masterArray...", masterArry);
  const [arr, setArr] = useState([]);
  const [obj, setObj] = useState({
    id: new Date().getTime(),
    question: "",
    questionType: "",
    possibleValue: "",
    score: 0,
  });
  console.log("arr...", arr);
  console.log("obj...", obj);

  const [click, setClick] = useState(false);
  const addLabels = (e) => {
    setClick(true);
    e.preventDefault();
    setMasterArray([obj, ...masterArry]);

    setArr([
      ...arr,
      {
        id: new Date().getTime(),
        question: "",
        questionType: "",
        possibleValue: "",
        score: 0,
      },
    ]);
  };

  const [subArr, setSubArr] = useState([]);
  const [subObj, setSubObj] = useState({
    id: new Date().getTime,
    subQuestion: "",
    subQuestionType: "",
    subQuestionPossibleValue: "",
    subQuestionScore: "",
  });

  const [subClick, setSubClick] = useState(false);
  const addSubQues = (e) => {
    setSubClick(true);
    e.preventDefault();
    setSubArr([
      ...subArr,
      {
        id: new Date().getTime,
        subQuestion: "",
        subQuestionType: "",
        subQuestionPossibleValue: "",
        subQuestionScore: "",
      },
    ]);
  };

  const addSubLabel = () => {
    setSubArr([
      ...subArr,
      {
        subQuestionPossibleValue: "",
        subQuestionScore: "",
      },
    ]);
  };

  const handleSave = () => {
    setMasterArray([obj, ...masterArry]);
  };

  const qType = [
    { value: "textbox" },
    { value: "dropdown" },
    { value: "checkbox" },
    { value: "radio" },
    { value: "image" },
    { value: "doc" },
  ];

  const [vCategory, setVCategory] = useState("");
  const categories = [
    { value: "Transmission", subCategories: ["Gear Box", "Clutch"] },
    {
      value: "Electrical Controls",
      subCategories: ["Circuit Breakers", "Wiring"],
    },
    { value: "Front Suspension", subCategories: ["Struts", "Control Arms"] },
    { value: "Rear Suspension", subCategories: ["Axle", "Shocks"] },
    { value: "Engine Compartment", subCategories: ["Air Filter", "Battery"] },
    { value: "Exterior Body Diagram", subCategories: ["Doors", "Windows"] },
    {
      value: "Road Test and Final Checks",
      subCategories: ["Brakes", "Lights"],
    },
    { value: "Fuel System", subCategories: ["Fuel Pump", "Fuel Lines"] },
    { value: "Steering", subCategories: ["Power Steering", "Steering Column"] },
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
              {categories.map((option, i) => (
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
              {categories
                .find((cat) => cat.value === vCategory)
                ?.subCategories.map((subCat, index) => (
                  <MenuItem key={index} value={subCat}>
                    {subCat}
                  </MenuItem>
                ))}
            </TextField>
          </Grid>
        </Grid>
        <Grid container gap="10px" p="10px">
          <Grid item xs={12} sm={6} sx={{ flex: { xs: "none", sm: "1" } }}>
            <TextField
              onChange={(e) => setObj({ ...obj, question: e.target.value })}
              label="Question"
              size="small"
              variant="outlined"
              fullWidth
              value={obj.question}
              sx={{ bgcolor: "white" }}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ flex: { xs: "none", sm: "1" } }}>
            <TextField
              onChange={(e) => setObj({ ...obj, questionType: e.target.value })}
              label="Question Type"
              size="small"
              select
              variant="outlined"
              fullWidth
              value={obj.questionType}
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
        {obj.questionType === "textbox" ||
        obj.questionType === "image" ||
        obj.questionType === "doc" ? null : (
          <>
            <Grid container gap="10px" p="10px">
              <Grid item xs={12} sm={6} sx={{ flex: { xs: "none", sm: "1" } }}>
                <TextField
                  onChange={(e) =>
                    setObj({ ...obj, possibleValue: e.target.value })
                  }
                  size="small"
                  label="Possible Value"
                  variant="outlined"
                  fullWidth
                  value={obj.possibleValue}
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
                  onChange={(e) => setObj({ ...obj, score: e.target.value })}
                  label="Score"
                  type="number"
                  size="small"
                  value={obj.score}
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
                  {arr.length > 0 ? (
                    <Remove
                      onClick={addLabels}
                      sx={{
                        backgroundColor: "red",
                        color: "white",
                        borderRadius: "50px",
                        cursor: "pointer",
                      }}
                    />
                  ) : (
                    <Add
                      onClick={addLabels}
                      sx={{
                        backgroundColor: "primary.main",
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
              {subClick ? (
                <Button onClick={addSubQues}>Remove Sub Question</Button>
              ) : (
                <Button onClick={addSubQues}>Add Sub Question</Button>
              )}

              {subClick &&
                subArr.map((subQues) => (
                  <Box key={subQues.id}>
                    <Grid container gap="10px" p="10px" key={subObj.id}>
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        sx={{ flex: { xs: "none", sm: "1" } }}
                      >
                        <TextField
                          name="question"
                          onChange={(e) =>
                            setSubObj({ ...subObj, question: e.target.value })
                          }
                          label="Question"
                          size="small"
                          variant="outlined"
                          fullWidth
                          value={subObj.question}
                          sx={{ bgcolor: "white" }}
                        ></TextField>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        sx={{ flex: { xs: "none", sm: "1" } }}
                      >
                        <TextField
                          onChange={(e) =>
                            setSubObj({
                              ...subObj,
                              questionType: e.target.value,
                            })
                          }
                          label="Question Type"
                          size="small"
                          select
                          variant="outlined"
                          fullWidth
                          value={subObj.questionType}
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
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        sx={{ flex: { xs: "none", sm: "1" } }}
                      >
                        <TextField
                          onChange={(e) =>
                            setSubObj({
                              ...subObj,
                              possibleValue: e.target.value,
                            })
                          }
                          size="small"
                          label="Possible Value"
                          variant="outlined"
                          fullWidth
                          value={subObj.possibleValue}
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
                          onChange={(e) =>
                            setSubObj({ ...subObj, score: e.target.value })
                          }
                          label="Score"
                          type="number"
                          size="small"
                          value={subObj.score}
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
                          {arr.length > 0 ? (
                            <Add
                              onClick={addSubLabel}
                              sx={{
                                backgroundColor: "primary.main",
                                color: "white",
                                borderRadius: "50px",
                                cursor: "pointer",
                              }}
                            />
                          ) : (
                            <Remove
                              onClick={addSubLabel}
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
                  </Box>
                ))}
            </Grid>
            <Divider />
          </>
        )}
        {click &&
          arr.map((array) => (
            <Box key={arr.id}>
              <Grid container gap="10px" p="10px">
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ flex: { xs: "none", sm: "1" } }}
                >
                  <TextField
                    onChange={(e) =>
                      setObj({ ...obj, possibleValue: e.target.value })
                    }
                    size="small"
                    label="Possible Value"
                    variant="outlined"
                    fullWidth
                    value={array.possibleValue}
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
                    onChange={(e) => setObj({ ...obj, score: e.target.value })}
                    label="Score"
                    type="number"
                    size="small"
                    value={array.score}
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
                        onClick={addLabels}
                        sx={{
                          backgroundColor: "primary.main",
                          color: "white",
                          borderRadius: "50px",
                          cursor: "pointer",
                        }}
                      />
                    ) : (
                      <Remove
                        onClick={addLabels}
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
              <Divider />
            </Box>
          ))}
        <Grid container gap="5px">
          <Grid item>
            <Button variant="outlined" sx={{ color: "red" }}>
              Cancel
            </Button>
          </Grid>
          <Grid item>
            <Button
              startIcon={<Save />}
              variant="contained"
              onClick={handleSave}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Appointments;
