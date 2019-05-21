import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import AppContext from './AppContext';

function AppProvider(props) {           
    const theme = createMuiTheme({            
        palette: {
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
        <MuiThemeProvider theme={theme}>
            <AppContext.Provider>
                {props.children}
            </AppContext.Provider>
        </MuiThemeProvider>        
    );    
}

export default AppProvider;