import React, { Component } from "react";

import darya from "../../assets/images/Darya.png";
import ekaterina from "../../assets/images/Ekaterina.png";
import dmitriy from "../../assets/images/Dmitriy.png";
import evgeniy from "../../assets/images/Evgeniy.png";
import elena from "../../assets/images/Elena.png";

import "../../sass/OurTeam.scss";

export class OurTeam extends Component {
  render() {
    return (
      <section id="our_team">
        <div className="container">
          <h1>
            Наша <span>команда</span>
          </h1>
          <div className="team">
            <div className="person_1">
              <img src={darya} alt="" />
              <h3>Войнич Дарья</h3>
              <p>Заместитель директора по продажам</p>
              <div className="phone">
                <p>+375 (17) 270-53-77 (317)</p>
              </div>
            </div>
            <div className="person_2">
              <img src={ekaterina} alt="" />
              <h3>Мисько Екатерина</h3>
              <p>Начальник отдела сопровождения</p>
              <div className="phone">
                <p>+375 (17) 270-53-77 (115)</p>
                <p> +375 29 112-73-48</p>
                <br />
                <p>k.melnichenko@leangroup.by</p>
              </div>
            </div>
            <div className="person_3">
              <img src={dmitriy} alt="" />
              <h3>Дмитроченко Дмитрий</h3>
              <p>Начальник отдела допечатной подготовки</p>
              <div className="phone">
                <p>+375 (17) 270-53-77 (333)</p>
                <p> +375 29 360-32-26</p>
                <br />
                <p>dmitrochenko@leangroup.by</p>
              </div>
            </div>
            <div className="person_4">
              <img src={evgeniy} alt="" />
              <h3>Антух Евгений</h3>
              <p>Начальник отдела снабжения</p>
              <div className="phone">
                <p>+375 (17) 270-53-77 (148)</p>
                <p> +375 44 764-16-28</p>
                <br />
                <p>j.antuh@leangroup.by</p>
              </div>
            </div>
            <div className="person_5">
              <img src={elena} alt="" />
              <h3>Мисник Елена</h3>
              <p>Специалист по работе с клиентами</p>
              <div className="phone">
                <p>+375 (17) 270-53-77 (322)</p>
                <p> +375 29 329-34-03</p>
                <br />
                <p>e.misnik@leangroup.by</p>
              </div>
            </div>
          </div>
          <div className="our_team">
            <button>Наша команда</button>
          </div>
        </div>
      </section>
    );
  }
}

export default OurTeam;
