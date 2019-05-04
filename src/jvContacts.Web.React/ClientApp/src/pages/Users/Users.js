import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Wrapper } from 'components';

const Users = props => {

    return (
        <Wrapper>
            <Card>
                <CardContent>
                    <Typography variant="h5" gutterBottom className="font-weight-bold">Users (coming soon)</Typography>
                    <Typography>
                        User management and authentication will be included in a future version. This page is included
                        only to demonstrate how to include different routes and pages.
                    </Typography>
                </CardContent>
            </Card>
        </Wrapper>
    );
};

export default Users;