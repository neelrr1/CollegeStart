import React from 'react';
import Header from './Header'
import './App.css';
import { Grid, Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';

function YourSchools() {
    
    const schools = ["Georgia Institute of Technology", "Stanford University", "Carnegie Melon University", "University of Arizona", "Purdue University"]
    const colors = ["#B3A369", "#8C1515", "grey", "lightblue", "#CEB888"]

    return (
        <div>
            <Header text="Schools That Fit You"/>
            <Grid container direction="column" alignItems="center">
                <br />
                {schools.map((text, index) => (
                    <div style={{width: "75%"}}>
                        <Card style={{background: colors[index]}} raised variant="outlined">
                            <CardContent  style={{ width: '5000' }}>
                                <Typography style={{fontSize: 14}} color="textSecondary" gutterBottom>
                                {"#"+(index+1)}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {text}
                                </Typography>
                                <Typography variant="body2" component="p">
                                Placeholder About School Text
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                        <br />
                    </div>
                ))}
            </Grid>
        </div>  
    );
}

export default YourSchools;