import React, { Component } from "react";

import logo from "../../assets/images/Logo.png";

import vk from "../../assets/images/vk.svg";
import fb from "../../assets/images/fb.svg";
import linkedin from "../../assets/images/linkedin.svg";

import "../../sass/Footer.scss";

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="logos">
            <img src={logo} alt="" />
            <div className="social">
              <a href="https://m.vk.com/">
                <img src={vk} alt="" />
              </a>
              <a href="https://ru-ru.facebook.com/">
                <img src={fb} alt="" />
              </a>
              <a href="https://ru.linkedin.com/">
                <img src={linkedin} alt="" />
              </a>
            </div>
          </div>
          <div className="line"></div>

          <div className="items">
            <div className="item_1">
              <h3>Продукция</h3>
              <ul>
                <li>Ламинатные тубы</li>
                <li>Экструзионные тубы</li>
                <li>Другая упаковка</li>
              </ul>
            </div>
            <div className="item_2">
              <h3>Компания</h3>
              <ul>
                <li>О нас</li>
                <li>Наша команда</li>
                <li>Сертификаты</li>
              </ul>
            </div>
            <div className="item_3">
              <h3>Разделы</h3>
              <ul>
                <li>Контакты</li>
                <li>Новости</li>
                <li>Вакансии</li>
              </ul>
            </div>
            <div className="contacts">
              <div className="belarus">
                <h5>Беларусь</h5>
                <p>+375 (17) 270 53 77</p>
                <p>+375 (17) 270 53 78</p>
              </div>
              <div className="moskva">
                <h5>Москва</h5>
                <p>+7 (495) 280 73 44</p>
                <p>+7 (495) 280 73 44</p>
              </div>
            </div>
            <div className="contacts2">
              <div className="evropa">
                <h5>Европа</h5>
                <p>+48 73 1111 044</p>
              </div>
              <div className="ekatirenburg">
                <h5>Екатеринбург</h5>
                <p>+7 (343) 346 82 06</p>
              </div>
            </div>
          </div>
          <div className="years">
            <p>© 2022 Leangroup. All Rights Reserved.</p>
            <p>Разработка и продвижение сайтов SkyWeb.by</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
