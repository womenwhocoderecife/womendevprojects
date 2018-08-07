import validator from 'validator';

export default {

  login_rules: [
    {
      field: 'email',
      method: validator.isEmpty,
      validWhen: false,
      message: 'Email is required.'
    },
    {
      field: 'email',
      method: validator.isEmail,
      validWhen: true,
      message: 'That is not a valid email.'
    }
  ]
};