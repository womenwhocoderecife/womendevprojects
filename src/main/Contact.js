import React from 'react';

import FormContact from './FormContact';

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

    <FormContact />
  </section>
);

export default Contact;
