import validator from 'validator';

export default {

  login_rules: [
    {
      field: 'name',
      method: validator.isEmpty,
      validWhen: false,
      message: 'Informa aqui teu nome por favor.'
    },
    {
      field: 'email',
      method: validator.isEmpty,
      validWhen: false,
      message: 'Informa um email, que vamos tentar te dá um retorno o mais rápido possível.'
    },
    {
      field: 'email',
      method: validator.isEmail,
      validWhen: true,
      message: 'Verifica se teu email está correto por favor.'
    },
    {
      field: 'subject',
      method: validator.isEmpty,
      validWhen: false,
      message: 'Informa pra gente sobre o que você está entrando em contato conosco.'
    },
    {
      field: 'message',
      method: validator.isEmpty,
      validWhen: false,
      message: 'Deixa aqui a mensagem que você quer enviar pra gente.'
    }
  ]
};