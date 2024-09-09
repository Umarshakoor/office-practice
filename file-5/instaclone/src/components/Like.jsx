import React, { useState } from "react";
import { FormControlLabel, Checkbox, Button } from "@mui/material";
import {
  Favorite,
  FavoriteBorder,
  ThumbUp,
  ThumbDown,
} from "@mui/icons-material";

function Like() {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [countUp, setCountUp] = useState(0);
  const [countDown, setCountDown] = useState(0);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <div>
      <Button
        variant="contained"
        color={liked ? "primary" : "default"}
        onClick={handleLike}
        startIcon={liked ? <ThumbDown /> : <ThumbUp />}
        endIcon={liked ? <Favorite /> : <FavoriteBorder />}
        style={{ margin: "10px" }}
      ></Button>
      {/* <Button onClick={() => setCountUp(countUp + 1)}>
        <ThumbUp />
        {`${countUp === 0 ? "" : countUp}`}
      </Button>
      <Button onClick={() => setCountDown(countDown + 1)}>
        <ThumbDown />
        {`${countDown === 0 ? "" : countDown}`}
      </Button> */}
      {/* <FormControlLabel
        control={
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            name="checkedH"
          />
        }
        label="Instagram Like Button"
      /> */}
    </div>
  );
}

export default Like;
