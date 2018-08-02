import React from 'react';

import calendar from '../assets/images/calendar.png';
import check from '../assets/images/check.png';
import coffee from '../assets/images/coffee.png';
import heart from '../assets/images/heart.png';
import '../assets/style/main/statistic.css';


const Statistic = () => (
    <section className="statistic">
      <ul className="statistic__content">
         <li className="statistic__list">
             <img className="statistic__img" src={calendar} alt="calendar" /> 
            <h4 className="statistic__tittle">15</h4>
            <p className="statistic__text">Dias Trabalhados</p>
        </li>    

         <li className="statistic__list">
             <img className="statistic__img" src={check} alt="check" /> 
            <h4 className="statistic__tittle">2</h4>
            <p className="statistic__text">Projetos Realizados</p>
        </li>  

        <li className="statistic__list">
             <img className="statistic__img" src={coffee} alt="coffee" /> 
            <h4 className="statistic__tittle__coffee">50</h4>
            <p className="statistic__text">Cafés</p>
        </li>  

        <li className="statistic__list">
             <img className="statistic__img" src={heart} alt="heart" /> 
            <h4 className="statistic__tittle">2</h4>
            <p className="statistic__text">Clientes Satisfeitos</p>
        </li>  
      </ul>
      
      
    </section>
  );
  
  export default Statistic;