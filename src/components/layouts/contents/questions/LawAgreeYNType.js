import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@mui/material/Grid";

const LawAgreeYNType = () => {
  const [isYesClicked, setIsYesClicked] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const _yesButtonClick = () => {
    setIsYesClicked(true);
    setIsClicked(true);
  };
  const _noButtonClick = () => {
    setIsYesClicked(false);
    setIsClicked(true);
  };
  const _lawalert = () => {
    alert("법적 내용에 대해 동의하셔야 다음이 진행됩니다.");
  };
  if (isClicked === "false") {
    return (
      <div>
        법적인 내용 .....동의하십니까?
        <br />
        <br />
        <Grid container spacing={3}>
          <Grid item>
            <Button variant="contained" onClick={_yesButtonClick}>
              예
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={_noButtonClick}
              onClick={_lawalert}
            >
              아니요
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return (
      <div>
        법적인 내용 .....동의하십니까?
        <br />
        <br />
        <Grid container spacing={3}>
          <Grid item>
            <Button
              variant="contained"
              onClick={_yesButtonClick}
              style={{ background: isYesClicked ? "#c1c423" : "none" }}
            >
              예
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={_noButtonClick}
              onClick={_lawalert}
              style={{ background: isYesClicked ? "none" : "#c1c423" }}
            >
              아니요
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default LawAgreeYNType;
