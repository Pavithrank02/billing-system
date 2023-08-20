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
    <Box sx={{ minWidth: 100 }}>
      <FormControl sx={{maxWidth: 290, minWidth: 100}} size='small'>
        <InputLabel id="demo-simple-select-label">Salutation</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Salutation"
          onChange={handleChange}

        >
          <MenuItem value={"Mr."}>Mr.</MenuItem>
          <MenuItem value={"Mrs"}>Mrs</MenuItem>
          <MenuItem value={"Miss"}>Miss</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}