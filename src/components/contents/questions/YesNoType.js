import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@mui/material/Grid";
const YesNoType = () => {
  const [isYesClicked, setIsYesClicked] = useState("false");
  const [isClicked, setIsClicked] = useState("false");
  const _yesButtonClick = () => {
    setIsYesClicked(true);
    setIsClicked(true);
  };
  const _noButtonClick = () => {
    setIsYesClicked(false);
    setIsClicked(true);
  };
  if (isClicked === "false") {
    return (
      <div>
        질문: 예,아니요로 대답해주세요asdf
        <br></br>
        <br></br>
        <Grid container spacing={3}>
          <Grid item>
            <Button variant="contained" onClick={_yesButtonClick}>
              예
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={_noButtonClick}>
              아니요
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return (
      <div>
        질문: 예,아니요로 대답해주세요
        <br></br>
        <br></br>
        <Grid container spacing={3}>
          <Grid item>
            <div>
              <Button
                variant="contained"
                onClick={_yesButtonClick}
                style={{ background: isYesClicked ? "#c1c423" : "none" }}
              >
                예
              </Button>
            </div>
          </Grid>
          <Grid item>
            <div>
              <Button
                variant="contained"
                onClick={_noButtonClick}
                style={{ background: isYesClicked ? "none" : "#c1c423" }}
              >
                아니요
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default YesNoType;
