import React from 'react'
import axios from 'axios';
import MaterialTable from 'material-table'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Wrapper from '../Wrapper/Wrapper';
import ContactForm from './ContactForm';

const useStyles = makeStyles({
  avatar: {
    margin: 0,
    width: 40,
    height: 40,
  },
});

const Contacts = (props) => {
  const [data, setData] = React.useState([
    { firstName: "", lastName: "", email: ""}
  ]);
  const [opened, setOpened] = React.useState(false);
  const [mode, setMode] = React.useState('Editing');
  const [selectedContact, setSelectedContact] = React.useState({});

  React.useEffect(() => {
    axios.get("/api/contacts/getAll")
      .then(res => res.data.contacts)       
      .then(res => setData(res));          
  }, []);

  const openForm = (mode, rowData) => {
    setOpened(true);
    setMode(mode);
    setSelectedContact(rowData);
  };

  const closeForm = () => {
    setOpened(false);
  };

  const classes = useStyles();
  
  const columns = [
    { title: 'Id' , field: 'id', hidden: true },
    { cellStyle: {width: 40}, title: 'Photo', field: 'imageUrl', render: rowData => <Avatar alt='avatar' src={`/img/${rowData.imageUrl}`} className={classes.avatar} /> },
    { cellStyle: {width: 45}, title: 'First Name', field: 'firstName' },
    { cellStyle: {width: 45}, title: 'Last Name', field: 'lastName' },
    { cellStyle: {width: 100}, title: 'Email', field: 'email', },
    { cellStyle: {width: 50}, title: 'Phone Number', field: 'phoneNumber' },
    { cellStyle: {width: 200}, title: 'Address', field: 'address.displayAddress' },
    { title: 'Address', field: 'address.street1', hidden: true },
    { title: 'Address (cont.)', field: 'address.street2', hidden: true },
    { title: 'City', field: 'address.city', hidden: true },
    { title: 'State', field: 'address.state', hidden: true },
    { title: 'Country', field: 'address.country', hidden: true },
    { title: 'Postal Code', field: 'address.zipCode', hidden: true }
  ];

  const actions = [
    {
      icon: 'edit',
      iconProps: {color: 'action' },
      tooltip: 'Edi Contact',
      onClick: (event, rowData) => openForm('Editing', {rowData})
    },
    {
      icon: 'delete',
      iconProps: { color: 'action' },
      tooltip: 'Delete Contact',
      onClick: (event, rowData) => alert("delete")
    },
    {
      icon: 'add',
      tooltip: 'Add New Contact',
      isFreeAction: true,
      onClick: (event) => openForm('Adding', {})
    }
  ];

  const options = {
    pageSize: 10
  }

  return (
    <Wrapper>
        <MaterialTable
          title="Contacts"
          columns={columns}
          data={data}
          actions={actions}
          options={options}
        />
        <ContactForm
          opened={opened}
          mode={mode}
          data={selectedContact}
          closeForm={closeForm}
        />
    </Wrapper>
  );
};

export default Contacts;
