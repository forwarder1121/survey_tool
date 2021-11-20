import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";

const PreviousButton = () => {
  const _onClick = () => alert("이전 버튼이 눌렷습니다.");
  return (
    <Button variant="outlined" endIcon={<ArrowBackIcon />} onClick={_onClick}>
      이전
    </Button>
  );
};

export default PreviousButton;
