import {PhoneNumberFormat, PhoneNumberUtil} from 'google-libphonenumber';

export function getValidPhoneNumberForDb(phoneNumber) {
  const phoneUtil = PhoneNumberUtil.getInstance();
  const parsedNumber = phoneUtil.parse(phoneNumber);
  return phoneUtil.format(parsedNumber, PhoneNumberFormat.INTERNATIONAL)
}

// Capitalize
export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

