import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core';
const StyleTextField = withStyles({
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
})(TextField);
function TextareaInput({ name, label, type, setInputs }) {
  return (
    <div>
      <StyleTextField
        id={name}
        label={label}
        name={name}
        type={type}
        onChange={setInputs}
        rows={5}
        multiline
        fullWidth
        required
      />
    </div>
  );
}

export default TextareaInput;
