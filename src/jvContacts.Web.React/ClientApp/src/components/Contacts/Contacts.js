import React from 'react'
import axios from 'axios';
import MaterialTable from 'material-table'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Wrapper from '../Wrapper/Wrapper';
import ContactForm from './ContactForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Swal from 'sweetalert2';

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

  const loadTable = () => {

    axios.get("/api/contacts/getAll")
      .then(res => res.data.contacts)
      .then(res => setData(res));

  };

  const openForm = (mode, rowData) => {
    setOpened(true);
    setMode(mode);
    setSelectedContact(rowData);
  };

  const closeForm = () => {
    setOpened(false);
  };

  const axiosOpts = {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
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
    }).then((result) => {
      if (result.value) {
        axios.delete(`/api/contacts/delete/${data.id}`, axiosOpts)
          .then(res => {
            console.log(res);
            console.log(res.data);
            toast.success('Contact has been deleted', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true
            }); 
            loadTable();
          })
          .catch(error => {
            // handle error
            console.log(error);
            toast.error('Error deleting contact', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true
            });
          })        
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
    </Wrapper>
  );
};

export default Contacts;
