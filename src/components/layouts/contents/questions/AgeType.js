import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const AgeType=()=>{
  const [age, setAge] =useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={10}>0-10</MenuItem>
        <MenuItem value={20}>11-20</MenuItem>
        <MenuItem value={30}>21-30</MenuItem>
        <MenuItem value={40}>31-40</MenuItem>
        <MenuItem value={50}>41-50</MenuItem>
      </Select>
    </FormControl>
  </Box>
  )

}

export default AgeType;