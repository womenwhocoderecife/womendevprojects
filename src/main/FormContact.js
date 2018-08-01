import React, { Component } from 'react';

class FormContact extends Component {
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
      <form>
        <h2>Quer iniciar um novo projeto com a gente? Vamo!! </h2>
        <div>
          <input id="name" type="text" />
          <label for="name">Nome</label>
        </div>

        <div>
          <input id="email" type="email" />
          <label for="email">E-mail</label>
        </div>

        <div>
          <input id="subject" type="text" />
          <label for="subject">Assunto</label>
        </div>

        <div>
          <label for="message">Mensagem</label>
          <textarea id="message" type="text" />
        </div>
        <input id="submit" type="submit" value="Enviar" />
      </form>
    );
  }
}

export default FormContact;
