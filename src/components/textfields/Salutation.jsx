import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Salutation() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{width: 100}} size='small'>
        <InputLabel id="demo-simple-select-label">Salutation</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Salutation"
          onChange={handleChange}

        >
          <MenuItem value={10}>Mr.</MenuItem>
          <MenuItem value={20}>Mrs</MenuItem>
          <MenuItem value={30}>Miss</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}