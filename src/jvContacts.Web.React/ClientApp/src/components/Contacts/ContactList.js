import React from 'react';
import PropTypes from 'prop-types';
import { MaterialTable, MTableToolbar } from 'material-table';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
//import { AddContactForm, EditContactForm } from 'components';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    }
});

const ContactList = (props) => {

    const { classes } = props;

    
    return (
        
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
                        onClick: (event, rowData) => alert("You saved " + rowData.name)
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Delete Contact',
                        onClick: (event, rowData) => alert("You want to delete " + rowData.name)
                    }
                ]}
                components={{
                    Toolbar: props => (
                        <div>
                            <MTableToolbar {...props} />
                            <div style={{ padding: '0px 10px' }}>
                                <Button variant="contained" color="primary" className={classes.button}>
                                    ADD CONTACT
                                    <AddIcon className={classes.rightIcon} />
                                </Button>
                                
                            </div>
                        </div>
                    ),
                }}
            />        
    );
}

ContactList.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ContactList);