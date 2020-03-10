import React from 'react';
import Header from './Header'
import './App.css';
import { Grid } from '@material-ui/core';

function Mentorship() {
    return (
        <div>
            <Header text="Our Mentorship Program"/>
            <Grid container direction="column" alignItems="center"> 
                <p class="width-75">
                    To be a CollegeStart Mentor, you need a set of basic qualifications that show you are a professional willing to impart your knowledge on students looking to find the best methods to succeed. These include:
                    <ul>
                        <li>A college degree/diploma</li>
                        <li>Free time to spend assisting students</li>
                        <li>The will to promote change focused on success</li>
                    </ul>
                    If you meet these three basic qualifications, then you’re on the path to becoming a mentor! There are a few main tasks that mentors will be assigned which include:
                    <ul>
                        <li>Providing students with expertise about your field of work/study so that students can have a first-hand point of view when deciding on which fields they want to go into as they head into college.</li>
                        <li>Answering student’s questions about college, to the best of your knowledge as things change rapidly from year to year on college campuses, and the steps you took towards succeeding and prospering in your field of study.</li>
                        <li>Fostering social interaction with students to act as the pillar of social support that many students lack when dealing with the college or other post-secondary institution application process.</li>
                    </ul>
                    As a mentor, you will act as a support system that to many students is a foreign or unknown concept. Promoting a positive outlook and good decision making is a must as students will hopefully look to you as both a source of knowledge and as a supporter in their goals. Breaking down the barriers that students put between themselves and others in a professional manner is a necessity as it will allow for you to better provide them with support.
                    <br /><br />
                    Overall, if you see yourself as someone who can provide a lasting impact on the next generation of students, then we would love to have you as a student mentor! The way this process will work is you will be paired with a group of students that have similar interests and they will be given a line of contact via the website. Giving them a basic schedule of your available times would be advisable as we understand that you have other obligations. If you’re interested in this process, then please contact us so we can set up a short interview and get you started on this journey!
                </p>
            </Grid>
        </div>  
    );
}

export default Mentorship;