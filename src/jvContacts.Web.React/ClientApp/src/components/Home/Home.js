import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Wrapper from '../Wrapper/Wrapper';

function Home() {
    return (
        <Wrapper>
            <Card>
                <CardContent>
                    <Typography variant="h4" gutterBottom className="font-weight-bold">jvContacts - Demo</Typography>
                    <Typography component={'span'} variant="body1">
                        This demo was developed as a proof of concept for integrating multiple trending technologies. 
                        In the frontend it uses:
                    </Typography>
                    <Typography component={'span'} variant="body1">
                        <ul>
                            <li>React with hooks for state management and functional components</li>
                            <li>Material UI (version 4.0.0-beta2 with support for hooks)</li>
                            <li>Material Table (<a href="https://material-table.com/#/" target="_blank" rel="noopener noreferrer"> website</a>)</li>
                            <li>JSS (CSS via JS) included with Material UI</li>                            
                            <li>Responsive design</li>
                            <li>WCAG 2.0 compliance</li>
                            <li>Unit testing with Jest and Enzyme</li>
                        </ul>
                    </Typography>
                    <Typography component={'span'} variant="body1">
                        In the backend, the following technologies are used:
                    </Typography>
                    <Typography component={'span'} variant="body1">
                        <ul>
                            <li>ASP.NET Core 2.2</li>
                            <li>Entity Framework Core 2.2:
                                <ul>
                                    <li>Migrations</li>
                                    <li>Shadow properties</li>
                                    <li>Global queries</li>
                                    <li>In-Memory driver for unit testing</li>
                                </ul>
                            </li>
                            <li>SQL Server 2017 Express</li>                            
                            <li>Domain Driven Design (DDD)</li>
                            <li>Command Query Responsibility Segregation (CQRS)</li>
                            <li>Unit testing with xUnit</li>
                        </ul>
                    </Typography>
                </CardContent>
            </Card>
        </Wrapper >
    );
};

export default Home;