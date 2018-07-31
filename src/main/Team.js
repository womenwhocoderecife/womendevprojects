import React, {Component} from 'react';

import github from '../assets/icons/github.svg';
import instagram from '../assets/icons/instagram.svg';
import twitter from '../assets/icons/twitter.svg';

import '../assets/style/main/team.css';

class Team extends Component{
  constructor(){
    super();
    this.state = { teams: [] };
  }

  async componentDidMount(){
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://women-dev-projects.herokuapp.com/teams';

    await fetch(proxyUrl + targetUrl)
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

              <ul className='footer__list__social-network hideElement'>
              {this.checkLinkAvailability(team.github, github) }

              {this.checkLinkAvailability(team.instagram, instagram)}

              {this.checkLinkAvailability(team.twitter, twitter)}
              </ul>
            </li>
          )
        })
        this.setState({teams: teams});
        console.log("state", this.state.teams);
      })
  }

  checkLinkAvailability(link, image){
    return link ?
            <li className='footer__list__item__social-network'><a href={link}><img src={image} alt='logo'/></a></li>
            : <li></li>;
  }

  render(){
      return (
        <section className="team">
          <h2 className="main__title team__title">Equipe</h2>
          <ul className="team__content">
            {this.state.teams}
          </ul>
        </section>
        )
    }

  }


export default Team;
