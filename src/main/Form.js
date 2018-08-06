import React, { Component } from 'react';

import FormValidator from './FormValidator';
import validations from './validations';

import '../assets/style/main/form.css';

class Form extends Component {
  constructor(props) {

    super(props);

    this.validator = new FormValidator(validations.login_rules);

    this.state = {
      email: '',
      validation: this.validator.valid()
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
  }

  handleFormSubmit = event => {
    event.preventDefault();

    const validation = this.validator.validate(this.state);
    this.setState({ validation });
    this.submitted = true;

    if (validation.isValid) {
      // handle actual form submission here
    }
  }

  render() {

    let validation = this.submitted ?
      this.validator.validate(this.state) :
      this.state.validation

    return (
      <form className="form">
        <h2 className="main__title form__title">
          Quer iniciar um novo projeto com a gente? Vamo!!
        </h2>
        <div className="form__field">
          <input
            className="form__input"
            id="name"
            type="text"
            required
            placeholder="seu nome"
            onChange={this.handleInputChange}
          />
          <div className="form__label-group">
            <label className="form__label" htmlFor="name">
              Nome
            </label>
            <span className="form__require">*</span>
          </div>
        </div>

        <div className="form__field">
          <input
            className="form__input"
            id="email"
            type="email"
            required
            placeholder="seu e-mail"
          />
          <div className="form__label-group">
            <label className="form__label" htmlFor="email">
              E-mail
            </label>
            <span className="form__require">*</span>
          </div>
        </div>

        <div className="form__field">
          <input
            className="form__input"
            id="subject"
            type="text"
            required
            placeholder="título da mensagem"
          />
          <div className="form__label-group">
            <label className="form__label" htmlFor="subject">
              Assunto
            </label>
            <span className="form__require">*</span>
          </div>
        </div>

        <div className="form__field">
          <div className="form__label-group">
            <label className="form__label" htmlFor="message">
              Mensagem
            </label>
            <span className="form__require">*</span>
          </div>
          <textarea
            className="form__textarea"
            id="message"
            required
            data-gramm="false"
          />
        </div>
        <input
          className="form__submit"
          id="submit"
          type="submit"
          value="Enviar"
          onClick={this.handleFormSubmit}
        />
      </form>
    );
  }
}

export default Form;
