import React from 'react'
import MaterialTable from 'material-table'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Wrapper from '../Wrapper/Wrapper';
import Swal from 'sweetalert2';

import ContactService from '../../services/ContactService';
import ContactForm from './ContactForm';
import { Ui } from '../../utils/Ui';

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
    loadTable();
  }, []);

  async function loadTable() {
    let result = await ContactService.list();
    if (result && result.data) {
      setData(result.data);
    }
  };

  const openForm = (mode, rowData) => {
    setOpened(true);
    setMode(mode);
    setSelectedContact(rowData);
  };

  const closeForm = () => {
    setOpened(false);
  };

  const deleteContact = (data) => {
    Swal.fire({
      title: `Are you sure you want to delete ${data.firstName} ${data.lastName}?`,
      text: "Please confirm",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#aaa',
      confirmButtonText: 'Yes'
    }).then( async function (result) {
      if (result.value) {
        let result = await ContactService.delete(data.id);
        if (result.hasErrors){
          Ui.showErrors('Error deleting contact');
        }
        else{
          Ui.showSuccess('Contact has been deleted');
          loadTable();
        }
      }
    })
  };

  const classes = useStyles();

  const columns = [
    { title: 'Id' , field: 'id', hidden: true },
    { cellStyle: {width: 10}, title: 'Photo', field: 'imageUrl', render: rowData => <Avatar alt='avatar' src={`/img/${rowData.imageUrl}`} className={classes.avatar} /> },
    { cellStyle: {width: 15}, title: 'First Name', field: 'firstName' },
    { cellStyle: {width: 15}, title: 'Last Name', field: 'lastName' },
    { cellStyle: {width: 20}, title: 'Email', field: 'email', },
    { cellStyle: {width: 20}, title: 'Phone Number', field: 'phoneNumber' },
    { cellStyle: {width: 100}, title: 'Address', field: 'address.displayAddress' },
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
      iconProps: { color: 'action' },
      tooltip: 'Edi Contact',
      onClick: (event, rowData) => openForm('Editing', { rowData })
    },
    {
      icon: 'delete',
      iconProps: { color: 'action' },
      tooltip: 'Delete Contact',
      onClick: (event, rowData) => deleteContact(rowData)
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
        loadTable={loadTable}
      />

    </Wrapper>
  );
};

export default Contacts;
