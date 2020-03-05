import React, { useState } from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Header from './Header'

const useStyles = makeStyles(theme => ({
  form: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Main(props) {
  const classes = useStyles()
  const [GPA, setGPA] = useState(4.0)
  // const [SAT, setSAT] = useState(1600)

  const handleGPA = event => {
    console.log(event.target.value.type)
    console.log(event.target)
    if (event.target.value < 0 || event.target.value > 4) {
      console.log("Error")
    } else {
      setGPA(event.target.value)
    }
  }
  
  return (
    <div>
      <Box style={{ textAlign: 'center' }}>
        <Header text="CollegeStart"/>
        <Paper elevation={3}>
          <br />
          <Typography variant="p" component="h2" gutterBottom>
            Find Out Which Schools Fit You!
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            Note this is just a placeholder and is not currently functional.
          </Typography>
          <form className={classes.form} autoComplete="off">
            <TextField required error onChange={handleGPA} value={GPA /* TODO: Round to 2 decimals, validate input */} type='number' variant="outlined" label="GPA" />
            <TextField variant="outlined" label="Placeholder" />
            <TextField variant="outlined" label="Placeholder" />
            <TextField variant="outlined" label="SAT Score" />
            <br />
            <Button color="primary" variant="contained">Submit</Button>
          </form>
        </Paper>
      </Box>
    </div>
  );
}

export default Main;
