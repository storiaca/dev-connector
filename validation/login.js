const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  
  // For Email
  if(!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid'
  }

  if(Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required'
  }

  // For Password
  if(Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required'
  }

  return {
    errors, 
    isValid: isEmpty(errors) 
  }
}