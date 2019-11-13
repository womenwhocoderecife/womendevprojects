import React, { Component } from 'react';

import FormValidator from './FormValidator';
import validations from './validations';
import * as emailjs from 'emailjs-com';

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

    emailjs.init('user_tBJWRd0DwWH4aciirQP36');
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
      this.sendMail();
    }
  };

  clearForm = () => {
    document.querySelector('.form').reset();
  };

  sendMail = () => {
    let template_params = {
      to_email: 'recife@womenwhocode.com',
      from_name: this.state.name,
      from_email: this.state.email,
      message_html: `${this.state.subject}: ${this.state.message}`,
    };
    const service_id = 'gmail';
    const template_id = 'template_ilLeoLLt';

    emailjs.send(service_id, template_id, template_params).then(
      response => {
        this.submitted = false;
        this.clearForm();
        alert('E-mail enviado com sucesso!');
      },
      err => {
        this.submitted = false;
        this.clearForm();
        alert('Tente mais tarde!');
      },
    );
  };

  render() {
    let validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation;

    return (
      <form className="form" onSubmit={this.handleFormSubmit}>
        <h2 className="main__title form__title">
          Se você representa uma organização ou iniciativa que deseja iniciar um projeto conosco,
          entre em contato pelo formulário a seguir:
        </h2>

        <div className="form__field">
          <div className="form__label-group">
            <label className="form__label" htmlFor="name">
              Nome
            </label>
            <span className="form__require">*</span>
          </div>
          <input
            className="form__input"
            id="name"
            type="text"
            required
            name="name"
            placeholder="Nome"
            onChange={this.handleInputChange}
          />
          <span className="form__validate">
            {validation.name.message}
          </span>
        </div>

        <div className="form__field">
          <div className="form__label-group">
            <label className="form__label" htmlFor="email">
              E-mail
            </label>
            <span className="form__require">*</span>
          </div>
          <input
            className="form__input"
            id="email"
            type="email"
            name="email"
            required
            placeholder="E-mail"
            onChange={this.handleInputChange}
          />
          <span className="form__validate">
            {validation.email.message}
          </span>
        </div>

        <div className="form__field">
          <div className="form__label-group">
            <label className="form__label" htmlFor="subject">
              Assunto
            </label>
            <span className="form__require">*</span>
          </div>
          <input
            className="form__input"
            id="subject"
            type="text"
            name="subject"
            required
            placeholder="Assunto"
            onChange={this.handleInputChange}
          />
          <span className="form__validate">
            {validation.subject.message}
          </span>
        </div>

        <div className="form__field">
          <div className="form__label-group">
            <label className="form__label" htmlFor="message">
              Mensagem
            </label>
            <span className="form__require">*</span>
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
            placeholder="Mensagem"
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
