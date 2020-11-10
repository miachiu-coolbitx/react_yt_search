import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
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
      borderBottomColor: '#4B3468', // Semsi-transparent underline
    },
    '& .MuiInput-underline:hover:before': {
      borderBottomColor: '#9C9BBB', // Solid underline on hover
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#C36E8D', // Solid underline on focus
    },
  },
})(TextField);

function TextInput({ name, label, setInputs, type }) {
  return (
    <div>
      <StyleTextField
        id={name}
        label={label}
        type={type}
        onChange={setInputs}
        fullWidth
        autoComplete="false"
        required
      />
    </div>
  );
}

export default TextInput;
