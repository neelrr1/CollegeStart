import React from 'react';
import './App.css';

function Subscribe() {
    return (
        <div>
            {/* <Header text="Subscribe to our Mailing List!"/> */}
            {/* <br /> */}
            <iframe title="Mailing List" scrolling="no" style={{ width: '100%', height: '1000px' }} src="https://mailchi.mp/078739483982/email_list"></iframe>
            {/* <Grid container direction="column" alignItems="center"> 
                <Button variant="contained" color="primary" size="large">Join Now!</Button>
            </Grid> */}
        </div>      
    );
}

export default Subscribe;