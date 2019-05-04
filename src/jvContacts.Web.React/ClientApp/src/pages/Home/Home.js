import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Wrapper } from 'components';

const Home = props => {

    return (
        <Wrapper>
            <Card>
                <CardContent>
                    <Typography variant="h4" gutterBottom className="font-weight-bold">jvContacts - Demo</Typography>
                    <Typography>
                        This demo was developed as a proof of concept for integrating multiple trending technologies. In the frontend it uses:
                        <ul>
                            <li>React with hooks for state management</li>
                            <li>Material UI, a library for applying Google's Material Design principles</li>
                            <li>CSS in JS via Emotion</li>
                            <li>Responsive design</li>
                            <li>WCAG 2.0 compliance</li>
                            <li>Unit testing with Jest and Enzyme</li>
                        </ul>
                        In the backend, the following technologies are used:
                        <ul>
                            <li>ASP.NET Core 2.2</li>
                            <li>Entity Framework Core:
                                <ul>
                                    <li>Migrations</li>
                                    <li>Shadow properties</li>
                                    <li>Global queries</li>
                                    <li>In-Memory driver for unit testing</li>
                                </ul>
                            </li>
                            <li>SQL Server 2017 Express</li>
                            <li>PostgreSQL with Marten for Event Sourcing</li>
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