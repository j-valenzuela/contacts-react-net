import React from 'react'
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

  const [opened, setOpened] = React.useState(false);
  const [mode, setMode] = React.useState('Editing');
  const [selectedContact, setSelectedContact] = React.useState({});

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
    { cellStyle: {width: 40}, title: 'Photo', field: 'imageUrl', render: rowData => <Avatar alt='avatar' src={rowData.imageUrl} className={classes.avatar} /> },
    { cellStyle: {width: 45}, title: 'First Name', field: 'firstname' },
    { cellStyle: {width: 45}, title: 'Last Name', field: 'lastname' },
    { cellStyle: {width: 100}, title: 'Email', field: 'email', },
    { cellStyle: {width: 180}, title: 'Phone', field: 'phonenumber' },
    { cellStyle: {width: 180}, title: 'Address', field: 'longaddress' }
  ];

  const data = [
    { imageUrl:'/img/aquaman.jpg', firstname: 'Arthur', lastname: 'Curry', email: 'waterboy@atlantis.com', phonenumber: '+1 (800) THE-SEAS', longaddress: 'One Atlantis Way, Atlantis City' },
    { imageUrl:'/img/batman.jpg', firstname: 'Bruce', lastname: 'Wayne', email: 'DarkKnight@batcave.com', phonenumber: '+1 (800) BAT-CAVE', longaddress: 'The Bat Cave, Gotham City' },
    { imageUrl:'/img/black_panther.jpg', firstname: 'King', lastname: 'T\'Challa', email: 'BlackKat@wakandaforever.com', phonenumber: '+1 (800) THE-CATS', longaddress: 'One Panther Way, Wakanda' },
    { imageUrl:'/img/black_widow.jpg', firstname: 'Natasha', lastname: 'Romanova', email: 'LethalGirl@avengers.com', phonenumber: '+1 (800) AVENGER', longaddress: 'Avengers Headquarters, New York City, USA' },
    { imageUrl:'/img/captain_america.jpg', firstname: 'Steve', lastname: 'Rogers', email: 'TheCap@avengers.com', phonenumber: '+1 (800) AVENGER', longaddress: 'Avengers Headquarters, New York City, USA' }
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
