import React, { Component } from "react";
import Slider from "react-slick";

import "../../sass/Certificate.scss";

import certificate1 from "../../assets/images/certificate1.png"
import certificate2 from "../../assets/images/certificate2.png"
import certificate3 from "../../assets/images/certificate3.png"
import certificate4 from "../../assets/images/certificate4.png"
import certificate5 from "../../assets/images/certificate5.png"

export class Certificate extends Component {
  render() {
    const certificates = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 2,
    };
    return (
      <section id="certificate">
        <div className="container">
          <h1>
            Качество продукции подтверждают <span>сертификаты</span>
          </h1>
          <div className="certificates">
            <Slider {...certificates}>
              <img src={certificate1} alt="" />
              <img src={certificate2} alt="" />
              <img src={certificate3} alt="" />
              <img src={certificate4} alt="" />
              <img src={certificate5} alt="" />
              <img src={certificate2} alt="" />
              <img src={certificate4} alt="" />
              <img src={certificate3} alt="" />
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}

export default Certificate;
