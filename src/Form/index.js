import React, { Component } from 'react';

import FormValidator from './FormValidator';
import validations from './validations';

import './index.css';

class Form extends Component {
  constructor(props) {
    super(props);

    this.validator = new FormValidator(validations.login_rules);

    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      validation: this.validator.valid(),
    };

    this.submitted = false;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange = event => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const validation = this.validator.validate(this.state);
    this.setState({ validation });
    this.submitted = true;

    if (validation.isValid) {
      // handle actual form submission here
    }
  };

  render() {
    // let validation = this.submitted
    //   ? this.validator.validate(this.state)
    //   : this.state.validation;

    return (
      <form className="form" onSubmit={this.handleFormSubmit}>
        <h2 className="main__title form__title">
          Quer iniciar um novo projeto <br />
          com a gente? Vamos!
        </h2>

        <h3
          style={{
            margin: '0 0 20px 0',
            width: '100%',
            color: '#fd50ceba',
          }}
        >
          recife@womenwhocode.com
        </h3>
      </form>
    );
  }
}

export default Form;
