import React, { Component } from "react";

import Player from "react-player";

import "../../sass/AboutCompany.scss";

export class AboutCompany extends Component {
  render() {
    return (
      <section id="about-comp">
        <div className="container">
          <h1>
            О компании <span>LEANGROUP</span>
          </h1>
          <div className="wrapper">
            <div className="player">
              <Player url="https://youtu.be/Hbi13dX902c" />
            </div>
            <div className="info">
              <p>
                Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и
                на сегодняшний день является ведущей компанией по производству
                ламинатных и экструзионных туб.
              </p>
              <br />
              <p>
                Имея две технологии – для производства ламинатных и
                экструзионных туб, мы предлагаем вам широкий спектр
                возможностей. Большим преимуществом является собственный
                печатный цех в ламинате и in-line печать в экструзии с
                возможностью различных дополнительных опций декора. Особое
                внимание уделяется работе с поставщиками для контроля и
                поддержания качества производимой нами продукции.
              </p>
              <br />
              <p>
                С января 2018 года компания стала членом Европейской Ассоциации
                производителей туб (ETMA), что подтверждает сильную позицию
                бренда и на рынке Европы.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutCompany;
