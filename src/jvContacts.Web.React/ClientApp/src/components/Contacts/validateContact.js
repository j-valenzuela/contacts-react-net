// Phone number validation
import { PhoneNumberUtil } from 'google-libphonenumber';

export function validatePhoneNumber(phoneNumber) {
  let isValid = true;
  try {
    const phoneUtil = PhoneNumberUtil.getInstance();
    isValid = phoneUtil.isValidNumber(phoneUtil.parse(phoneNumber));
  }
  catch(e){
    isValid = false;
  }
  return isValid;
}

export function validateContact(values) {
  let errors = {};
  // First Name Errors
  if (!values.firstname) {
      errors.firstname = "First Name is required"
  } else if (values.firstname.length < 2 || values.firstname.length > 80){
      errors.firstname = "First name must contain at least 2 characters and a maximum of 80";
  }
  // Last Name Errors
  if (!values.lastname) {
      errors.lastname = "Last Name is required"
  } else if (values.lastname.length < 2 || values.lastname.length > 80){
      errors.lastname = "Last name must contain at least 2 characters and a maximum of 80";
  }
  // Email Errors
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  // Phone Number Errors
  if (values.phonenumber) {
    if(!validatePhoneNumber(values.phonenumber)){
      errors.phonumber = "Invalid phone number for the selected country";
    }
  }
  return errors;
}
