import React, { useState, useEffect, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Route, Switch, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import LayoutStyles from '../../styles/Layout';
import { MobileBreakpoint } from '../../styles/variables';
import routes from '../routes';

import Workspace from '../Workspace/Workspace';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar'; 
import Footer from '../Footer/Footer';  

function resizeDispatch() {
    if (typeof (Event) === 'function') {
        window.dispatchEvent(new Event('resize'));
    } else {
        const evt = window.document.createEvent('UIEvents');
        evt.initUIEvent('resize', true, false, window, 0);
        window.dispatchEvent(evt);
    }
}

const Layout = props => {

    const { classes } = props;
    const [opened, setOpened] = useState(true);

    let mediaMatcher = matchMedia(`(max-width: ${MobileBreakpoint}px)`);

    const handleDrawerToggle = () => {        
        setOpened(!opened);
        resizeDispatch();
    }

    useEffect(
        () => {
            if (mediaMatcher.matches){ 
                setOpened(false);
            }

            mediaMatcher.addListener(match => {
                setTimeout(() => {
                    if (match.matches) {
                        setOpened(false);
                    } else {
                        setOpened(true);
                    }
                }, 300)
            })

            let unlisten = props.history.listen(() => {
                if (mediaMatcher.matches) setOpened(false);
                document.querySelector('#root > div > main').scrollTop = 0;
            });

            return () => {
                unlisten();
                mediaMatcher.removeListener(match => {
                    setTimeout(() => {
                        if (match.matches) {
                            setOpened(false);
                        } else {
                            setOpened(true);
                        }
                    }, 300)
                });
            }
            // eslint-disable-next-line
        }, []
    );
    const getRoutes = (
        <Switch>
            {routes.items.map((item, index) => (                   
                    item.type === 'submenu' ? item.children.map(subItem => <Route exact path={`${subItem.path}`} component={subItem.component} name={subItem.name} />) :
                        <Route exact path={item.path} component={item.component} name={item.name} key={index} />
            ))}
            <Redirect to="/404" />
        </Switch>
    )

    return (
        <Fragment>
            <CssBaseline />
            <Header
                toggleDrawer={handleDrawerToggle}                    
            />
            
            <div className={clsx(classes.panel)}>
                <Sidebar
                    routes={routes.items}
                    opened={opened}
                    toggleDrawer={handleDrawerToggle}
                />                    
                <Workspace opened={opened}>
                    {getRoutes}                        
                </Workspace>                                       
            </div>

            <Footer />
            
        </Fragment>
    );
}

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(LayoutStyles)(Layout);