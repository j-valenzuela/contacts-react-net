import React, { Component } from 'react';
import {css} from 'react-emotion';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import HeaderStyles from 'styles/Header';

const ellipseShape = css `
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
  overflow: hidden;
  height: 100%;
  width: 560px;

  &:after {
    content: '';
    display: block;
    width: 870px;
    position: absolute;
    top: -20px;
    right: -300px;
    height: 280px;
    z-index: 1;
    background-color: rgba(255,255,255, 0.06);
    border-radius: 50% 0 0 50%;
  }
`

class Header extends Component {
  state = {
    anchorEl: null,
    searchExpanded: false
  };

  handleDrawerToggle = () => {
    this.props.toggleDrawer();
    if (this.state.searchExpanded) this.handleSearchExpandToggle();
  }

  render() {
    const { classes, toggleFullscreen } = this.props;
    return (
      <AppBar
        position="static"
        className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={this.handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
       
          <Typography variant="h6" color="inherit" style={{ flex: 1 }}>
            jvContacts
          </Typography>          
          <div className={ellipseShape}></div>
          <Hidden xsDown >
            <IconButton color="inherit" onClick={toggleFullscreen}>
              <FullscreenIcon />
            </IconButton>
          </Hidden>     
          <Button color="inherit">LOGIN</Button>
        </Toolbar>     
      </AppBar>
    )
  }
}

Header.prototypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(HeaderStyles)(Header);