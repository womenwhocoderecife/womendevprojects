import React, {Component} from 'react';

import About from './About';
import Proposal from './Proposal';

import github from '../assets/icons/github.svg';
import instagram from '../assets/icons/instagram.svg';
import twitter from '../assets/icons/twitter.svg';

import '../assets/style/main/main.css';
import '../assets/style/main/team.css';

class Main extends Component{
  constructor(){
    super();
    this.state = { teams: [] };
  }

  componentDidMount(){
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://women-dev-projects.herokuapp.com/teams';

    fetch(proxyUrl + targetUrl)
    .then(results => {
        return results.json();
      }).then(data => {
        console.log(data);
        let teams = data.map((team) => {
          return (
            <li className="team__card">
              <img
                className="team__card__img"
                src={team.photo}
                alt={team.name}
                title={team.name}
              />
              <h3 className="team__card__title">{team.name}</h3>
              <p className="team__card__text">{team.description}</p>

              <ul className='footer__list__social-network'>
                <li className='footer__list__item__social-network'>
                  <a href={team.github}><img src={github} alt='logo'/></a>
                </li>
                <li className='footer__list__item__social-network'>
                  <a href={team.instagram}><img src={instagram} alt='logo'/></a>
                </li>
                <li className='footer__list__item__social-network'>
                  <a href={team.twitter}><img src={twitter} alt='logo'/></a>
                </li>
              </ul>
            </li>
          )
        })
        this.setState({teams: teams});
        console.log("state", this.state.teams);
      })
  }

  render(){
      return (
        <main className="main">
          <About />
          <Proposal />
          <section className="team">
            <h2 className="main__title team__title">Equipe</h2>
            <ul className="team__content">
              {this.state.teams}
            </ul>
          </section>
        </main>
        )
    }

  }

  export default Main;
