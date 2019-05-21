import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import SidebarItemStyles from '../../styles/SidebarItem';
import { capitalize } from '../../utils/helpers';

const SidebarItem = props => {

    const { classes, route, index, activeRoute, toggleMenu, currentPath } = props;   

    useEffect(() => {        
        if (!currentPath || activeRoute === index || route.path === '/') return;
        toggleMenu(index)
        // eslint-disable-next-line
    }, []);
               
    if (route.type === 'submenu') {
        return (
            <div className={activeRoute === index ? classes.menuCollapsed : classes.menuClosed}>
                <ListItem className={classes.menuItem} button key={index} onClick={() => toggleMenu(index)}>
                    <ListItemIcon>
                        <route.icon className={classes.menuIcon} />
                    </ListItemIcon>
                    <Typography color="primary" variant="body1" className="flexSpacer">{capitalize(route.name)}</Typography>
                    
                    <ListItemIcon className={classes.caret}>
                        {activeRoute === index ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                    </ListItemIcon>
                </ListItem>
                <Collapse in={activeRoute === index ? true : false} timeout="auto" unmountOnExit>
                    <List disablePadding>
                        {route.children.map((subitem, index) => (
                            <NavLink to={`${route.path ? route.path : ''}${subitem.path ? subitem.path : ''}`} exact className={classes.menuLink} activeClassName={classes.menuActive} key={index}>
                                <ListItem className={classes.menuSubItem} button>
                                    <Typography color="primary" variant="body1" className="flexSpacer">{capitalize(subitem.name)}</Typography>                                        
                                </ListItem>
                            </NavLink>)
                        )}
                    </List>
                </Collapse>
            </div>
        )
    }
    return (
        <NavLink to={route.path} exact className={classes.menuLink} activeClassName={classes.menuActive} key={index}>
            <ListItem className={classes.menuItem} button onClick={() => toggleMenu(index)}>
                <ListItemIcon>
                    <route.icon className={classes.menuIcon} />
                </ListItemIcon>
                <Typography variant="body1" className="flexSpacer">{capitalize(route.name)}</Typography>                    
            </ListItem>
        </NavLink>
    );
}

SidebarItem.prototypes = {
    classes: PropTypes.object.isRequired,
    route: PropTypes.object,
    index: PropTypes.number,
    activeRoute: PropTypes.number,
    toggleMenu: PropTypes.func
};

export default withStyles(SidebarItemStyles)(SidebarItem);