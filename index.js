import PostalValidator from './src/PostalCodeSchema.js';
import ipValidator from './src/IpAddressSchema.js';
import UserValidator from './src/UserSchema.js';
class Validator {
  postalCode() {
    return new PostalValidator();
  }

  ipAddress() {
    return new ipValidator();
  }

  user(){
    return  new UserValidator();
  }
}

// const v = new Validator();
// const postalCodeSchema = v.postalCode();
// console.log(postalCodeSchema);

// console.log(postalCodeSchema.isValid('ZIP_12345')); // true
// postalCodeSchema.isValid('ZIP_67890'); // true
// postalCodeSchema.isValid('ZIP_54321'); // true
// postalCodeSchema.isValid('invalid-postal-code'); // false
// console.log(postalCodeSchema.isValid(1234567890)); // false

export default Validator;
