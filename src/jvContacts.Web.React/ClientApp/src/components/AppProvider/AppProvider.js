import React, { Component } from 'react';
import { create } from 'jss';
import rtl from 'jss-rtl';
import JssProvider from 'react-jss/lib/JssProvider';
import { MuiThemeProvider, createMuiTheme, createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

import AppContext from './AppContext';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const generateClassName = createGenerateClassName();

class AppProvider extends Component {
    state = {
        type: 'light',
        direction: 'ltr',
    }

    render() {
        const { direction, type } = this.state;
        const theme = createMuiTheme({
            direction,
            palette: {
                type,
                primary: {
                    main: blueGrey[800]
                },
                secondary: {
                    main: blue[500]
                },
                error: red
            },
            typography: {
                fontFamily: 'Roboto,"Helvetica Neue",Arial,sans-serif',
                useNextVariants: true,
                headline: {
                    fontSize: '1rem',
                },
                subheading: {
                    fontSize: '0.8125rem',
                },
                button: {
                    fontWeight: 400,
                    textTransform: 'initial'
                }
            },
            shape: {
                borderRadius: 4
            }
        });

        return (
            <JssProvider jss={jss} generateClassName={generateClassName}>
                <MuiThemeProvider theme={theme}>
                    <AppContext.Provider value={{
                        state: this.state,
                        toggleTheme: () => this.setState({
                            type: this.state.type === 'light' ? 'dark' : 'light'
                        }),
                        toggleDirection: () => this.setState({
                            direction: this.state.direction === 'ltr' ? 'rtl' : 'ltr',
                        }, () => document.body.dir = this.state.direction)
                    }}>
                        {this.props.children}
                    </AppContext.Provider>
                </MuiThemeProvider>
            </JssProvider>
        )
    }
}

export default AppProvider;