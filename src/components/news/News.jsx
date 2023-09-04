import React, { Component } from "react";

import ecovidas from "../../assets/images/ecoVadis.png";
import apple from "../../assets/images/apple.png";
import mixCream from "../../assets/images/mix-cream.png";

import "../../sass/News.scss";

export class News extends Component {
  render() {
    return (
      <section id="news_section">
        <div className="container">
          <h1>Новости</h1>
          <div className="comand">
            <div className="card_1">
              <img src={ecovidas} alt="" />
              <div className="title">
                <p>28.01.2022</p>
                <h4>"ЛеанГрупп" серебряный призер EcoVadis!</h4>
              </div>
            </div>
            <div className="card_2">
              <img src={apple} alt="" />
              <div className="title">
                <p>21.01.2022</p>
                <h4>"ЛеанГрупп" серебряный призер EcoVadis!</h4>
              </div>
            </div>
            <div className="card_3">
              <img src={mixCream} alt="" />
              <div className="title">
                <p>16.12.2021</p>
                <h4>Туба, как вид упаковки</h4>
              </div>
            </div>
          </div>
          <div className="all-news">
            <button>Все новости</button>
          </div>
        </div>
      </section>
    );
  }
}

export default News;
