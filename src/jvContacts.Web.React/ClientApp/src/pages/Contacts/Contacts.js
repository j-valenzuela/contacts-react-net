import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import MTableToolbar from 'material-table';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import { Wrapper } from 'components';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    }
});


const Contacts = (props) => {
    const { classes } = props;
    return (
        <Fragment>
            <Wrapper>
                <div>
                    <div style={{ position: "absolute", top: 15, left: 130, zIndex: 2 }}>
                        <Button variant="contained" size="small" color="primary" className={classes.button}>
                            <AddIcon className={classes.leftIcon} />
                            ADD CONTACT
                                    </Button>
                    </div>
                </div>
                <MaterialTable
                    title="Contacts"
                    columns={[
                        { title: 'Name', field: 'name' },
                        { title: 'Surname', field: 'surname' },
                        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
                        {
                            title: 'Birth Place',
                            field: 'birthCity',
                            lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
                        },
                    ]}
                    data={[
                        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                    ]}
                    actions={[
                        {
                            icon: 'edit',
                            tooltip: 'Edit Contact',
                            iconProps: { color: 'action' },
                            onClick: (event, rowData) => alert("You saved " + rowData.name)
                        },
                        {
                            icon: 'delete',
                            tooltip: 'Delete Contact',
                            iconProps: { color: 'action' },
                            onClick: (event, rowData) => alert("You want to delete " + rowData.name)
                        }
                    ]}
                    options={{
                        search: true,
                        pageSize: 10                       
                    }}                    
                
                />

            </Wrapper>
        </Fragment>
    );
};

Contacts.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Contacts);