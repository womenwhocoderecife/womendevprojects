import validator from 'validator';

export default {

  login_rules: [
    {
      field: 'name',
      method: validator.isEmpty,
      validWhen: false,
      message: 'Você precisa digitar seu nome.'
    },
    {
      field: 'email',
      method: validator.isEmpty,
      validWhen: false,
      message: 'Informa teu email, que vamos tentar te dá um retorno o mais rápido possível.'
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
      message: 'Informa pra gente um título do motivo do teu contato.'
    },
    {
      field: 'message',
      method: validator.isEmpty,
      validWhen: false,
      message: 'Deixa aqui a mensagem que você quer enviar pra gente.'
    }
  ]
};