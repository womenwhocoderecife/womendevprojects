import React, { Component } from 'react';

import '../assets/style/main/form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
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
            placeholder="seu nome"
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
            data-gramm="false"
          />
        </div>
        <input
          className="form__submit"
          id="submit"
          type="submit"
          value="Enviar"
        />
      </form>
    );
  }
}

export default Form;
