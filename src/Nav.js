import React, { useState } from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import EmailIcon from '@material-ui/icons/Email'
import InfoIcon from '@material-ui/icons/Info'
import SchoolIcon from '@material-ui/icons/School'
import FlagIcon from '@material-ui/icons/Flag'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import AccountIcon from '@material-ui/icons/AccountCircle'
import Typography from '@material-ui/core/Typography';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    list: {
        width: 250
    }
  }));

function Nav() {
    const classes = useStyles()
    const title = "CollegeStart"
    const [open, setOpen] = useState(false)

    const pages = ["Home", "About Us", "Subscribe to Our Mailing List"]
    const routes = ["/home", "/about", "/subscribe"]
    const icons = [<HomeIcon />, <InfoIcon />, <EmailIcon />]

    const toggleDrawer = (open) => event => {
        if (
          event.type === "keydown" &&
          (event.key === "Tab" || event.key === "Shift")
        ) {
          return;
        }
    
        setOpen(open);
    };

    const redirect = (route) => event => {
        if (route !== window.location.pathname) {
            window.location.assign(route)
        }
    }

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                <IconButton onClick={toggleDrawer(true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon/>
                </IconButton>
                <Typography onClick={redirect("/home")} variant="h6" className={classes.title}>
                    {title}
                </Typography>
                </Toolbar>
            </AppBar>
            <Drawer onClick={toggleDrawer(false)} open={open} onKeyDown={toggleDrawer(false)}>
                <List>
                    {pages.map((text, index) => (
                        <ListItem onClick={redirect(routes[index])} button key={text}>
                            <ListItemIcon>
                                {icons[index]}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                    <Divider></Divider>
                    <ListItem button onClick={redirect("/mentorship")}>
                        <ListItemIcon><PersonAddIcon /></ListItemIcon>
                        <ListItemText>Mentorship</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><AccountIcon /></ListItemIcon>
                        <ListItemText>Profile</ListItemText>
                    </ListItem>
                    <ListItem button onClick={redirect("/yourschools")}>
                        <ListItemIcon><SchoolIcon /></ListItemIcon>
                        <ListItemText>Your Schools</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><FlagIcon /></ListItemIcon>
                        <ListItemText>Road to Admissions</ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
}

export default Nav;