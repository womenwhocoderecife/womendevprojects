import React, { Component } from 'react';

import github from '../assets/icons/github.svg';
import instagram from '../assets/icons/instagram.svg';
import twitter from '../assets/icons/twitter.svg';

import '../assets/style/main/team.css';

class Team extends Component {
  constructor() {
    super();
    this.state = { teams: [] };
  }

  componentDidMount() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl =
      'https://women-dev-projects.herokuapp.com/teams';

    fetch(proxyUrl + targetUrl)
      .then(results => {
        return results.json();
      })
      .then(data => {
        let teams = data.map((team, index) => {
          return (
            <li key={index} className="team__card">
              <figure className="team__card__figure">
                <img
                  className="team__card__img"
                  src={team.photo}
                  alt={team.name}
                  title={team.name}
                />
                <h3 className="team__card__title">{team.name}</h3>
              </figure>
              <p className="team__card__text">{team.description}</p>

              <ul className="footer__list__social-network">
                <li className="footer__list__item__social-network">
                  <a href={team.github}>
                    <figure className="team__card__figure">
                      <img src={github} alt="logo" />
                    </figure>
                  </a>
                </li>
                <li className="footer__list__item__social-network">
                  <a href={team.instagram}>
                    <figure className="team__card__figure">
                      <img src={instagram} alt="logo" />
                    </figure>
                  </a>
                </li>
                <li className="footer__list__item__social-network">
                  <a href={team.twitter}>
                    <figure className="team__card__figure">
                      <img src={twitter} alt="logo" />
                    </figure>
                  </a>
                </li>
              </ul>
            </li>
          );
        });
        this.setState({ teams: teams });
        console.log('state', this.state.teams);
      });
  }

  render() {
    return (
      <section className="team">
        <h2 className="main__title team__title">Equipe</h2>
        <ul className="team__content">{this.state.teams}</ul>
      </section>
    );
  }
}

export default Team;
