import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import HeaderStyles from '../../styles/Header';

const Header = props => {

  const { classes, toggleDrawer } = props;

  return (

    <AppBar data-testid="header"
      position="static"
      className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <IconButton
          data-testid="menu"
          color="inherit"
          aria-label="Menu"
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" style={{ flex: 1 }}>
          jvContacts
        </Typography>
        <div className={classes.ellipseShape}></div>
      </Toolbar>
    </AppBar>
  );
}

Header.prototypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(HeaderStyles)(Header);