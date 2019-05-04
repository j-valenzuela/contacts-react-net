import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Route, Switch, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Workspace, Header, Sidebar, Footer } from 'components';
import LayoutStyles from 'styles/Layout';
import { MobileBreakpoint } from 'styles/variables';
import routes from 'routes';

function resizeDispatch() {
    if (typeof (Event) === 'function') {
        window.dispatchEvent(new Event('resize'));
    } else {
        const evt = window.document.createEvent('UIEvents');
        evt.initUIEvent('resize', true, false, window, 0);
        window.dispatchEvent(evt);
    }
}

class Layout extends Component {
    state = {
        opened: true,
        type: 'light',
        direction: 'ltr'
    };

    mediaMatcher = matchMedia(`(max-width: ${MobileBreakpoint}px)`);

    handleDrawerToggle = () => {
        this.setState({ opened: !this.state.opened });
        resizeDispatch()
    };

    handleFullscreenToggle = () => {
        const element = document.querySelector('#root');
        const isFullscreen = document.webkitIsFullScreen || document.mozFullScreen || false;

        element.requestFullScreen = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || function () { return false; };
        document.cancelFullScreen = document.cancelFullScreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || function () { return false; };
        isFullscreen ? document.cancelFullScreen() : element.requestFullScreen();
    }

    componentDidMount() {
        if (this.mediaMatcher.matches) this.setState({ opened: false });

        this.mediaMatcher.addListener(match => {
            setTimeout(() => {
                if (match.matches) {
                    this.setState({ opened: false })
                } else {
                    this.setState({ opened: true })
                }
            }, 300)
        })

        this.unlisten = this.props.history.listen(() => {
            if (this.mediaMatcher.matches) this.setState({ opened: false });
            document.querySelector('#root > div > main').scrollTop = 0;
        });
    }

    componentWillUnmount() {
        this.unlisten();
        this.mediaMatcher.removeListener(match => {
            setTimeout(() => {
                if (match.matches) {
                    this.setState({ opened: false })
                } else {
                    this.setState({ opened: true })
                }
            }, 300)
        });
    }

    render() {
        const { classes } = this.props;
        const { opened } = this.state;

        const getRoutes = (
            <Switch>
                {routes.items.map((item, index) => (
                    item.type === 'external' ? <Route exact path={item.path} component={item.component} name={item.name} key={index} /> :
                        item.type === 'submenu' ? item.children.map(subItem => <Route exact path={`${subItem.path}`} component={subItem.component} name={subItem.name} />) :
                            <Route exact path={item.path} component={item.component} name={item.name} key={index} />
                ))}
                <Redirect to="/404" />
            </Switch>
        )

        return (
            <Fragment>
                <Header
                    toggleDrawer={this.handleDrawerToggle}
                    toggleFullscreen={this.handleFullscreenToggle}
                />
                
                <div className={classNames(classes.panel, 'theme-dark')}>
                    <Sidebar
                        routes={routes.items}
                        opened={opened}
                        toggleDrawer={this.handleDrawerToggle}
                    />                    
                    <Workspace opened={opened}>
                        {getRoutes}                        
                    </Workspace>                                       
                </div>

                <Footer />
                
            </Fragment>
        )
    }
}

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(LayoutStyles)(Layout);