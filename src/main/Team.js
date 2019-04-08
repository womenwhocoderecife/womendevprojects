import React, { Component } from 'react';
import axios from 'axios';

import github from '../assets/icons/github.svg';
import instagram from '../assets/icons/instagram.svg';
import twitter from '../assets/icons/twitter.svg';
import linkedin from '../assets/icons/linkedin.svg';

import '../assets/style/main/team.css';

class Team extends Component {
  constructor() {
    super();
    this.state = {
      teams: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl =
      'https://women-dev-projects.herokuapp.com/teams';

    axios
      .get(proxyUrl + targetUrl)
      .then(results =>
        this.setState({
          teams: results.data,
          isLoading: false,
        }),
      )
      .catch(error => error);
  }

  checkLinkAvailability(link, image) {
    return link ? (
      <li className="footer__list__item__social-network">
        <a href={link} target="_blank">
          <figure className="team__card__figure">
            <img src={image} alt="logo" />
          </figure>
        </a>
      </li>
    ) : null;
  }

  render() {
    const { teams } = this.state;

    return (
      <section className="team" id="team">
        <h2 className="main__title team__title">Equipe</h2>
        <ul className="team__content">
          {teams.map(team => (
            <li key={team.created_at} className="team__card">
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

              <ul className="footer__list__social-network hideElement">
                {this.checkLinkAvailability(team.github, github)}
                {this.checkLinkAvailability(
                  team.instagram,
                  instagram,
                )}
                {this.checkLinkAvailability(team.twitter, twitter)}
                {this.checkLinkAvailability(team.linkedin, linkedin)}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Team;
