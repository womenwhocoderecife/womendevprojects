import { useState } from 'react';
import * as emailjs from 'emailjs-com';

export const useForm = () => {
  emailjs.init(process.env.REACT_APP_EMAILJS_KEY);
  const [inputs, setInputs] = useState({});
  const [success, setSuccess] = useState(false);
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    sendMail();
  };

  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  };

  const sendMail = () => {
    let template_params = {
    //   to_email: 'recife@womenwhocode.com',
      to_email: 'willanylp@gmail.com',
      from_name: inputs.name,
      from_email: inputs.email,
      message_html: `${inputs.subject}: ${inputs.message}`,
    };
    const service_id = 'gmail';
    const template_id = 'template_ilLeoLLt';

    emailjs.send(service_id, template_id, template_params).then(
      () => {
        setSuccess(true);
        alert('E-mail enviado com sucesso!');
      },
      () => {
        setSuccess(false);
        alert('Tente mais tarde!');
      },
    );
  };
  
  return {
    handleSubmit,
    handleInputChange,
    inputs, 
    success
  };
    
};