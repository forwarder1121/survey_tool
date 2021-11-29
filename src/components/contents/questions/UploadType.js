import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import FileUploadIcon from "@mui/icons-material/FileUpload";

const Input = styled("input")({
  display: "none",
});

const UploadType = () => {
  return (
    <label>
      <Input multiple type="file" />
      <Button variant="contained" component="span">
        <FileUploadIcon />
        Upload
      </Button>
    </label>
  );
};
export default UploadType;
