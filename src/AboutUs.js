import React from 'react';
import Header from './Header'
import './App.css';
import { Grid } from '@material-ui/core';

function AboutUs() {
    return (
        <div>
            <Header text="About Us"/>
            <Grid container direction="column" alignItems="center"> 
                <p class="width-50">
                    CollegeStart is a project run by a team of Georgia Tech student researchers whose primary goal is to break down the barriers that students of lower socioeconomic status face during the college and other post-secondary application processes. Many of these students face critical deficits in both information about the process and support from a peer or social superior. As such, we want to provide a mix of targeted information and support to help these students and ensure a level of quality similar to that of private college counselors. To do this, we plan on using proprietary software to develop a unique and targeted information base similar to private, professional help. Additionally, we plan on supplementing this with a mentorship system that helps in creating a social support system that fosters connections between mentors and groups of students to help push them all ahead. In providing these resources to students, we hope that we can help to equalize the field as the costs of private, professional assistance grows.
                </p>
                <p class="width-50">
                    As a student team, we are continually looking to improve our solution implementation. If you want to learn more about our website development and solution progress, please subscribe to our mailing list. In doing this, we are also offering free premium services once the website launches to all students who subscribe to the mailing list. Thank you for taking the time to read this, and I hope we can help you to reach the goals you have set for yourself!
                </p>
            </Grid>
        </div>  
    );
}

export default AboutUs;