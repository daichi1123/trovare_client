import * as React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

function SubmitButton() {
  return (
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        type="submit"
      >
        Submit
      </Button> 
  );
}

export default SubmitButton