import React, { Component } from 'react';

import './assets/style/menu.css';
import logo from './assets/images/logo.png';

class Menu extends Component {
  constructor() {
    super();
    this.state = { open: false };

    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.setState({ open: true });
  }

  closeMenu(event) {
    event.preventDefault();
    this.setState({ open: false });
  }

  render() {
    // show menu
    let showMenu;

    if (this.state.open) {
      showMenu = 'menu--show-menu';
    } else {
      showMenu = '';
    }

    return (
      <div className="menu-container">
        <button
          className={`menu__button ${showMenu}`}
          onClick={this.openMenu}
        >
          <span className="menu__button__icon">☰</span>
          Menu
        </button>
        <button
          className={`menu__button ${showMenu}`}
          onClick={this.closeMenu}
        >
          <span className="menu__button__icon">×</span>
          Menu
        </button>
        <nav className={`menu ${showMenu}`}>
          <a className="menu__logo" href="/">
            <figure className="menu__figure">
              <img
                className="menu__img"
                src={logo}
                alt="Logo Women Dev Projects"
              />
            </figure>
          </a>

          <ul className="menu__list">
            <li className="menu__list__item">
              <a className="menu__list__link" href="#home">
                Home
              </a>
            </li>
            <li className="menu__list__item">
              <a className="menu__list__link" href="#about">
                Sobre
              </a>
            </li>
            <li className="menu__list__item">
              <a className="menu__list__link" href="#proposal">
                Nossa Proposta
              </a>
            </li>
            <li className="menu__list__item">
              <a className="menu__list__link" href="#team">
                Equipe
              </a>
            </li>
            <li className="menu__list__item">
              <a className="menu__list__link" href="#contact">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;
