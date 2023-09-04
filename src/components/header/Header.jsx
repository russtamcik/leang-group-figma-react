import React, { Component } from "react";

import logo from "../../assets/images/Logo.png";
import bars from "../../assets/images/bars.png";

import "../../sass/Header.scss";

export class Header extends Component {
  state = {
    isOpen: false,
  };
  render() {
    const toggle = () => {
      this.setState({ isOpen: !this.state.isOpen });
    };
    return (
      <header>
        <nav>
          <a href="#header">
            <img src={logo} alt="" />
          </a>
          <ul className="nav_item">
            <div className="toggle">
              <span className="nav_link" onClick={toggle}>
                Продукция
              </span>
              <ul
                className={`toggle_link ${
                  this.state.isOpen ? "" : "navbar-close"
                }`}
              >
                <li className="nav_link">Ламинатные тубы</li>
                <li className="nav_link">Экструзионные тубы</li>
                <li className="nav_link">Другая упаковка</li>
              </ul>
            </div>
            <div className="line"></div>
            <a href="#sertificat">
              <li className="nav_link">Сертификаты</li>
            </a>
            <div className="line"></div>
            <a href="#company">
              <li className="nav_link">Наша команда</li>
            </a>
            <div className="line"></div>
            <a href="#about">
              <li className="nav_link">О нас</li>
            </a>
            <div className="line"></div>
            <a href="#news">
              <li className="nav_link">Новости</li>
            </a>
            <div className="line"></div>
            <a href="#vacanse">
              <li className="nav_link">Вакансии</li>
            </a>
            <div className="line"></div>
            <a href="#contact">
              <li className="nav_link">Контакты</li>
            </a>
          </ul>
          <div className="language">
            <span>RU</span>
            <div className="line"></div>
            <p>EN</p>
          </div>
          <div className="bars">
            <img src={bars} alt="" />
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
