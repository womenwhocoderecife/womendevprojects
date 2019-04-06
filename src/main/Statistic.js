import React from 'react';

import CountUp from 'react-countup';
import calendar from '../assets/images/calendar.png';
import check from '../assets/images/check.png';
import coffee from '../assets/images/coffee.png';
import heart from '../assets/images/heart.png';
import '../assets/style/main/statistic.css';

const Statistic = () => (
  <section className="statistic">
    <ul className="statistic__list">
      <li className="statistic__list__item">
        <img
          className="statistic__img"
          src={calendar}
          alt="calendar"
        />
        <h4 className="statistic__tittle"><CountUp start={0} end={400} delay={2} duration={5}></CountUp></h4>
        <p className="statistic__text">Dias Trabalhados</p>
      </li>

      <li className="statistic__list__item">
        <img className="statistic__img" src={check} alt="check" />
        <h4 className="statistic__tittle"><CountUp start={0} end={3} delay={2} duration={0}></CountUp></h4>
        <p className="statistic__text">Projetos Realizados</p>
      </li>

      <li className="statistic__list__item">
        <img className="statistic__img" src={coffee} alt="coffee" />
        <h4 className="statistic__tittle"><CountUp start={0} end={1200} delay={2} duration={10}></CountUp></h4>
        <p className="statistic__text">Cafés</p>
      </li>

      <li className="statistic__list__item">
        <img className="statistic__img" src={heart} alt="heart" />
        <h4 className="statistic__tittle"><CountUp start={0} end={3} delay={2} duration={0}></CountUp></h4>
        <p className="statistic__text">Clientes Satisfeitos</p>
      </li>
    </ul>
  </section>
);

export default Statistic;
