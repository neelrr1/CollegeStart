import React from 'react';
import Header from './Header'
import './App.css';
import { Grid, Button } from '@material-ui/core';

function Subscribe() {
    return (
        <div>
            <Header text="Subscribe to our Mailing List!"/>
            <br />
            <Grid container direction="column" alignItems="center"> 
                <Button variant="contained" color="primary" size="large">Join Now!</Button>
            </Grid>
        </div>      
    );
}

export default Subscribe;