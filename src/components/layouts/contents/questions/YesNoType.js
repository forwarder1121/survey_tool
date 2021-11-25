import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const YesNoType = () => {
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
  return !isClicked ? (
    <div>
      질문: 예,아니요로 대답해주세요
      <ul>
        <Button variant="contained" onClick={_yesButtonClick}>
          예
        </Button>
        <Button variant="contained" onClick={_noButtonClick}>
          아니요
        </Button>
      </ul>
    </div>
  ) : (
    <div>
      질문: 예,아니요로 대답해주세요
      <ul>
        <Button
          variant="contained"
          onClick={_yesButtonClick}
          style={{ background: isYesClicked ? "green" : "none" }}
        >
          예
        </Button>
        <Button
          variant="contained"
          onClick={_noButtonClick}
          style={{ background: isYesClicked ? "none" : "green" }}
        >
          아니요
        </Button>
      </ul>
    </div>
  );
};

export default YesNoType;
