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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis laoreet est, ac venenatis tortor imperdiet in. In scelerisque urna a purus consequat tincidunt non id diam. Aliquam non dui nec orci tempor facilisis. Sed non faucibus diam. Nulla blandit mi at magna commodo, id pellentesque tellus congue. Nulla varius bibendum velit vel ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin vitae aliquam sem. Praesent accumsan odio ut nisi posuere interdum. Integer aliquam aliquam varius. In accumsan metus ut maximus mollis. Curabitur eget tempus nisi. Nullam accumsan hendrerit sem. Aliquam faucibus sed risus quis vulputate.
                </p>
                <p class="width-50">
                Integer massa elit, dignissim et sapien at, mollis efficitur lorem. Maecenas in eros laoreet, scelerisque urna vitae, varius magna. Vestibulum sit amet ante ut enim maximus consequat. Aenean fermentum feugiat rutrum. Mauris vitae ex vel diam imperdiet molestie. Vestibulum euismod nisi mi, ac aliquet turpis rhoncus nec. Nunc magna nulla, sagittis in dictum eu, facilisis non sem. Suspendisse a rhoncus tellus. Quisque porttitor velit id mattis dictum.
                </p>
            </Grid>
        </div>  
    );
}

export default AboutUs;