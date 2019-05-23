import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import countryNames from 'the-country-names/list';
import PhoneInput from 'react-phone-number-input';
import { Form, Field } from 'react-final-form';
import { TextField } from 'final-form-material-ui';

import { validateContact, validatePhoneNumber } from './validateContact';
import CustomAutoSuggest from './CustomAutoSuggest';

const styles = theme => ({
  container: {
    display: 'flex'
  },
  imageDiv: {
    flex: '1',
    textAlign: 'center'
  },
  fieldDiv: {
    flex: '4',
    alignItems: 'flex-start'
  },
  phoneField: {
    marginTop: '16px'
  },
  countryState: {
    marginTop: '13px'
  },
  thumb: {
    verticalAlign: 'top',
    maxWidth: '100px',
    height: 'auto'
  }
});

function ContactForm(props) {

  const { classes, opened, mode, data, closeForm } = props;
  const ADDING = mode === 'Adding';

  const initialValues = {  
    id: !data || !data.rowData || data.rowData.id === undefined ? '' : data.rowData.id,
    firstName: !data || !data.rowData || data.rowData.firstName === undefined ? '' : data.rowData.firstName,
    lastName: !data || !data.rowData || data.rowData.lastName === undefined ? '' : data.rowData.lastName,
    email: !data || !data.rowData || data.rowData.email === undefined ? '' : data.rowData.email,
    phoneNumber: !data || !data.rowData || data.rowData.phoneNumber === undefined ? '' : data.rowData.phoneNumber,
    street1: !data || !data.rowData || data.rowData.address.street1 === undefined ? '' : data.rowData.address.street1,
    street2: !data || !data.rowData || data.rowData.address.street2 === undefined ? '' : data.rowData.address.street2,
    city: !data || !data.rowData || data.rowData.address.city === undefined ? '' : data.rowData.address.city,
    zipCode: !data || !data.rowData || data.rowData.address.zipCode === undefined ? '' : data.rowData.address.zipCode,
    country: !data || !data.rowData || data.rowData.address.country === undefined ? '' : data.rowData.address.country,
    state: !data || !data.rowData || data.rowData.address.state === undefined ? '' : data.rowData.address.state,
    imageUrl: !data || !data.rowData || data.rowData.imageUrl === undefined || data.rowData.imageUrl === '' ? 'unknown.png' : data.rowData.imageUrl
  };

  const [regionList, setRegionList] = React.useState([]);
  const [selectedCountry, setCountry] = React.useState('');
  const [selectedRegion, setRegion] = React.useState('');


  const getCountryNamesAsArray = Object.keys(countryNames).map(isoCode => countryNames[isoCode]);

  const countryList = getCountryNamesAsArray.map(country => {
    const countries = {};
    countries.value = country.name;
    countries.label = country.name;
    countries.regions = country.regions.map(region => {
      const regions = {}
      regions.value = region.name;
      regions.label = region.name;
      return regions;
    });
    return countries;
  });

  const getRegionList = (country) => {
    let tmpList = countryList.filter(c => {
      return c.value === country;
    });
    try {
      if (tmpList && tmpList[0].regions) {
        setRegionList(tmpList[0].regions)
      }
    }
    catch (e) {
      // Do nothing. Country is still being entered
    }
  }


  function PhoneFieldWrapper(props) {
    const {
      input: { name, onChange, value },
      meta,
      ...rest
    } = props;

    const showError =
      ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error || !validatePhoneNumber(value)) &&
      meta.modified;

    return (
      <PhoneInput
        {...rest}
        name={name}
        displayInitialValueAsLocalNumber
        className={classes.phoneField}
        country={'US'}
        international={false}
        countryOptions={['US', 'CA', 'MX']}
        placeholder={'Phone Number'}
        indicateInvalid={showError}
        error={showError ? 'Invalid phone number for the selected country' : ''}
        onChange={onChange}
        value={value === '' ? null : value}
      />
    );
  }

  //function convertJSON(obj_from_json) {
  //  if (typeof obj_from_json !== "object" || Array.isArray(obj_from_json)) {
  //    // not an object, stringify using native function
  //    return JSON.stringify(obj_from_json);
  //  }
  //  // Implements recursive object serialization according to JSON spec
  //  // but without quotes around the keys.
  //  let props = Object
  //    .keys(obj_from_json)
  //    .map(key => `${key}:${convertJSON(obj_from_json[key])}`)
  //    .join(",");
  //  return `{${props}}`;
  //}


  const onSubmit = async values => {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    await sleep(300);
    // HACK: There is a bug in final-form when using react-autosuggest
    // as explained here https://github.com/final-form/react-final-form/issues/315
    // The side-effect is that the Country and State autosuggest controls
    // are not recognized when data changes, and for instance the form does not
    // get dirty and the corresponding fields do not get values updated. We need
    // to set the form values manually upon submitting like we are doing here.
    values.country = selectedCountry;
    values.state = selectedRegion;

    let axiosOpts = {
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    };

    //let command = convertJSON(values);

    if (ADDING) {
      axios.post(`/api/contacts/create`, values, axiosOpts)
        .then(res => {
          console.log(res);
          console.log(res.data);
          toast.success('Contact saved successfully', {
            position: "top-right"
            autoClose: 3000
            hideProgressBar: false
            closeOnClick: true
            pauseOnHover: true
            draggable: true
          });  
          { closeForm }
        })
        .catch(error => {
          // handle error
          console.log(error);
          toast.error('Error adding contact', {
            position: "top-right"
            autoClose: 5000
            hideProgressBar: false
            closeOnClick: true
            pauseOnHover: true
            draggable: true
          });
        })
    } else {
      axios.put(`/api/contacts/update/${values.id}`, values, axiosOpts)
        .then(res => {
          console.log(res);
          console.log(res.data);
          toast.success('Contact saved successfully', {
            position: "top-right"
            autoClose: 3000
            hideProgressBar: false
            closeOnClick: true
            pauseOnHover: true
            draggable: true
          });
          { closeForm }
        })
        .catch(error => {
          // handle error
          console.log(error);
          toast.error('Error updating contact', {
            position: "top-right"
            autoClose: 5000
            hideProgressBar: false
            closeOnClick: true
            pauseOnHover: true
            draggable: true
          });
        })
    }
  };

  const handleChange = (name, values) => (event, { newValue }) => {
    if (name === 'country') {
      setCountry(newValue);
      if (newValue) {
        values.country = newValue;
        getRegionList(newValue);
      }
    } else {
      values.state = newValue;
      setRegion(newValue);
    }
  };

  return (
    <Fragment>
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
      <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        validate={validateContact}
        render={({ handleSubmit, form, submitting, pristine, invalid, values }) => (
          <form id="contactForm" onSubmit={handleSubmit} noValidate>
            <Dialog disableBackdropClick disableEscapeKeyDown
              fullWidth={true}
              maxWidth={'md'}
              open={opened}
              onClose={closeForm}
              scroll='paper'
              aria-labelledby="contact-form-title"
            >
              <DialogTitle id="contact-form-title"> {mode} Contact</DialogTitle>
              <DialogContent dividers={true}>

                <div className={classes.container}>
                  <div className={classes.imageDiv}>
                    <img src={`/img/${values.imageUrl}`} alt={values.imageUrl} className={classes.thumb} />
                  </div>
                  <div className={classes.fieldDiv}>
                    <Grid container alignItems="flex-start" spacing={2}>
                      <Grid item xs={6}>
                        <Field
                          fullWidth
                          required
                          name="firstName"
                          component={TextField}
                          type="text"
                          label="First Name"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Field
                          required
                          fullWidth
                          name="lastName"
                          component={TextField}
                          type="text"
                          label="Last Name"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Field
                          fullWidth
                          name="email"
                          required
                          component={TextField}
                          type="email"
                          label="Email"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Field
                          name="phoneNumber"
                          component={PhoneFieldWrapper}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Field
                          fullWidth
                          name="street1"
                          component={TextField}
                          label="Street Address"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Field
                          fullWidth
                          name="street2"
                          component={TextField}
                          label="Address (cont)"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Field
                          fullWidth
                          name="city"
                          component={TextField}
                          label="City"
                        />
                      </Grid>
                      <Grid item xs={4}>
                        {/* <Field
                              name="country"
                              component={AutoSuggestWrapper}
                              suggestions={countryList}
                              labelText={'Country'}
                              value={selectedCountry}
                              onChange={(e, val) => handleChange('country', e, val)}
                            /> */}
                        <CustomAutoSuggest
                          id="country"
                          name="country"
                          className={classes.countryState}
                          suggestions={countryList}
                          label="Country"
                          placeholder="Type for a country"
                          value={selectedCountry || initialValues.country}
                          onChange={handleChange('country', values)}
                        />

                      </Grid>
                      <Grid item xs={5}>
                        <CustomAutoSuggest
                          id="state"
                          name="state"
                          className={classes.countryState}
                          suggestions={regionList}
                          label="State/Region"
                          placeholder="Type state/region"
                          value={selectedRegion || initialValues.state}
                          onChange={handleChange('region', values)}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Field
                          name="zipCode"
                          component={TextField}
                          label="Postal Code"
                        />
                      </Grid>
                    </Grid>
                  </div>
                </div>

              </DialogContent>
              <DialogActions>
                <Button onClick={closeForm} color="primary" >
                  CANCEL
                </Button>
                <Button
                  type="submit"
                  onClick={() =>
                    // { cancelable: true } required for Firefox
                    // https://github.com/facebook/react/issues/12639#issuecomment-382519193
                    document
                      .getElementById('contactForm')
                      .dispatchEvent(new Event('submit', { cancelable: true }))
                  }
                  disabled={submitting || pristine || invalid}
                  variant="contained"
                  color="primary">
                  SAVE
                </Button>
              </DialogActions>
            </Dialog>
          </form>
        )}
      />
    </Fragment>
  );
}
ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactForm);