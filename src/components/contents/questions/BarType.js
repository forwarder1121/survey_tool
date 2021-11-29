import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";

import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

const BarType = () => {
  const [value, setValue] = useState(0);
  const _onChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: 300 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 2 }} alignItems="center">
        {value}
        <SentimentVeryDissatisfiedIcon />
        <Slider aria-label="Volume" value={value} onChange={_onChange} />
        <SentimentVerySatisfiedIcon />
      </Stack>
    </Box>
  );
};

export default BarType;
