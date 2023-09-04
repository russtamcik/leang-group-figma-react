import React, { Component } from "react";

import name from "../../assets/images/name.svg";
import call from "../../assets/images/phone.svg";

import "../../sass/Information.scss";

export class Information extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="background">
            <div className="texts">
              <h1>
                Получить подробную <span>информацию</span>
              </h1>
              <p>
                Просто заполните форму, наш менеджер свяжется с вами в ближайшее
                время
              </p>
            </div>
            <div className="info">
              <div className="name">
                <img src={name} alt="" />
                <input type="text" placeholder="Ваше имя" />
              </div>
              <div className="call">
                <img src={call} alt="" />
                <input type="text" placeholder="+998 (90) 1347432" />
              </div>
            </div>
            <div className="text-area">
              <textarea>Комментарий</textarea>
            </div>
            <div className="take_info">
              <button>Получить информацию</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Information;
