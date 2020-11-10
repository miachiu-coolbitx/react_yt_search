import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core';

function SelectInput({ style, name, label, type, setInputs, options, value }) {
  const StyleSelect = withStyles({
    root: {
      '& .MuiInputLabel-root': {
        color: '#9C9BBB', // Label Text color
      },
      '& .MuiInputLabel-root:hover': {
        color: '#fff', // invalid
      },
      '& .MuiInputBase-input': {
        color: '#C36E8D', // Text color
      },
      '& .MuiInputBase-input:focus': {
        color: '#fff',
      },
      '& .MuiInput-underline:before': {
        borderBottomColor: '#4B3468', // Semi-transparent underline
      },
      '& .MuiInput-underline:hover:before': {
        borderBottomColor: '#9C9BBB', // Solid underline on hover
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#C36E8D', // Solid underline on focus
      },
    },
  })(FormControl);
  return (
    <div>
      {/* <StyleSelect
        id={name}
        label={label}
        type={type}
        onChange={setInputs}
        required
        fullWidth
        autoComplete="false"
      /> */}
      <StyleSelect fullWidth>
        <FormControl required>
          <InputLabel>{label}</InputLabel>
          <Select id={name} name={name} onChange={setInputs}>
            {options &&
              options.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  disabled={option.disable}
                  selected={option.selected}
                >
                  {option.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </StyleSelect>
    </div>
  );
}

export default SelectInput;
