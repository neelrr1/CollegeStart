import React from 'react';
import Typography from '@material-ui/core/Typography';
import './App.css';

function Header(props) {
    return (
      <Typography class="gradient" variant="h4" component="h1" gutterBottom>
        {props.text}
      </Typography>
    );
}

export default Header;