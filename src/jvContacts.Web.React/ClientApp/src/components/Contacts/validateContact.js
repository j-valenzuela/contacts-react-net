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
  if (!values.firstName) {
      errors.firstName = "First Name is required"
  } else if (values.firstName.length < 2 || values.firstName.length > 80){
      errors.firstName = "First name must contain at least 2 characters and a maximum of 80";
  }
  // Last Name Errors
  if (!values.lastName) {
      errors.lastName = "Last Name is required"
  } else if (values.lastName.length < 2 || values.lastName.length > 80){
      errors.lastName = "Last name must contain at least 2 characters and a maximum of 80";
  }
  // Email Errors
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  // Phone Number Errors
  if (values.phoneNumber) {
    if(!validatePhoneNumber(values.phoneNumber)){
      errors.phoNumber = "Invalid phone number for the selected country";
    }
  }
  return errors;
}
