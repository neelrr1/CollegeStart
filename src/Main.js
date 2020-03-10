// import React, { useState } from 'react';
import React from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Header from './Header'
import { Select, MenuItem, FormControl, FormHelperText } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  form: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Main(props) {
  const classes = useStyles()
  // const [GPA, setGPA] = useState(4.0)
  // const [SAT, setSAT] = useState(1600)

  // const handleGPA = event => {
  //   console.log(event.target.value.type)
  //   console.log(event.target)
  //   if (event.target.value < 0 || event.target.value > 4) {
  //     console.log("Error")
  //   } else {
  //     setGPA(event.target.value)
  //   }
  // }

  const majors = ["Aerospace Engineering", "Computer Science", "Data Science", "Electrical Engineering"]
  const selectedMajor = "Computer Science"

  const sizes = ["Small ( <5k students)", "Medium (5k-15k students)", "Large (<15k students)"]
  const selectedSize = "Medium (5k-15k students)"

  const locs = ["Urban", "Suburban", "Rural"]
  const selectedLocs = "Urban"

  const inputLabel = React.useRef(null);

  const route = "/yourschools"
  const handleSubmit = event => {
      if (route !== window.location.pathname) {
          window.location.assign(route)
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
            <TextField required variant="outlined" label="GPA"/>
            <TextField required variant="outlined" label="SAT Score" />
            <TextField required variant="outlined" label="Tuition Budget" />
            <br />
            <FormControl required variant="outlined">
              <FormHelperText ref={inputLabel} id="major-select">Major</FormHelperText>
              <Select autoWidth value={selectedMajor} renderValue={value => `${value}`}>
                {majors.map((text) => (
                    <MenuItem>{text}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl required variant="outlined">
              <FormHelperText>School Size</FormHelperText>
              {/* <InputLabel ref={inputLabel} id="size-select">School Size</InputLabel> */}
              <Select autoWidth value={selectedSize} renderValue={value => `${value}`}>
                {sizes.map((text) => (
                    <MenuItem>{text}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl required variant="outlined">
              <FormHelperText>School Location</FormHelperText>
              {/* <InputLabel ref={inputLabel} id="size-select">School Size</InputLabel> */}
              <Select autoWidth value={selectedLocs} renderValue={value => `${value}`}>
                {locs.map((text) => (
                    <MenuItem>{text}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <br />
            <Button onClick={handleSubmit} color="primary" variant="contained">Submit</Button>
          </form>
        </Paper>
      </Box>
    </div>
  );
}

export default Main;
