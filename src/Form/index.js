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
    let validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation;

    return (
      <form className="form" onSubmit={this.handleFormSubmit}>
        <h2 className="main__title form__title">
          Quer iniciar um novo projeto com a gente? Vamos!!
        </h2>

        <div className="form__field">
          <div className="form__label-group">
            <span className="form__require">*</span>
            <label className="form__label" htmlFor="name">
              Nome
            </label>
          </div>
          <input
            className="form__input"
            id="name"
            type="text"
            required
            name="name"
            placeholder="Nome Completo"
            onChange={this.handleInputChange}
          />
          <span className="form__validate">
            {validation.name.message}
          </span>
        </div>

        <div className="form__field">
          <div className="form__label-group">
            <span className="form__require">*</span>
            <label className="form__label" htmlFor="email">
              E-mail
            </label>
          </div>
          <input
            className="form__input"
            id="email"
            type="email"
            name="email"
            required
            placeholder="seu e-mail"
            onChange={this.handleInputChange}
          />
          <span className="form__validate">
            {validation.email.message}
          </span>
        </div>

        <div className="form__field">
          <div className="form__label-group">
            <span className="form__require">*</span>
            <label className="form__label" htmlFor="subject">
              Assunto
            </label>
          </div>
          <input
            className="form__input"
            id="subject"
            type="text"
            name="subject"
            required
            placeholder="título da mensagem"
            onChange={this.handleInputChange}
          />
          <span className="form__validate">
            {validation.subject.message}
          </span>
        </div>

        <div className="form__field">
          <div className="form__label-group">
            <span className="form__require">*</span>
            <label className="form__label" htmlFor="message">
              Mensagem
            </label>
          </div>
          <span className="form__validate">
            {validation.message.message}
          </span>
          <textarea
            className="form__textarea"
            id="message"
            name="message"
            required
            data-gramm="false"
            onChange={this.handleInputChange}
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
