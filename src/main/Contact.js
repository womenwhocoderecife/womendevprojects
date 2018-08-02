import React from 'react';

import Form from './Form';

import '../assets/style/main/contact.css';
import hands from '../assets/images/hands.png';

const Contact = () => (
  <section className="contact">
    <figure className="contact__figure">
      <img
        className="contact__img"
        src={hands}
        alt="a lot of hands together"
        title="Contact"
      />
    </figure>

    <Form />
  </section>
);

export default Contact;
