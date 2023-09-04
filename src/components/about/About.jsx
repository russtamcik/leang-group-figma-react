import React, { Component } from "react";
import Slider from "react-slick";

import "../../sass/About.scss";

export class About extends Component {
  render() {
    const products = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <section>
        <Slider className="slider" {...products}>
          <div className="wrap">
            <div className="texts">
              <p>LEANGROUP - тубы и этикетки</p>
              <h3>Ламинатные тубы</h3>
              <span>
                Используются для производства зубных паст. Широко применяются в
                сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
                химии и DIY (Do-it-Yourself).
              </span>
              <button>Каталог</button>
            </div>
          </div>
          <div className="wrap">
            <div className="texts">
              <p>LEANGROUP - тубы и этикетки</p>
              <h3>Ламинатные тубы</h3>
              <span>
                Используются для производства зубных паст. Широко применяются в
                сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
                химии и DIY (Do-it-Yourself).
              </span>
              <button>Каталог</button>
            </div>
          </div>
          <div className="wrap">
            <div className="texts">
              <p>LEANGROUP - тубы и этикетки</p>
              <h3>Ламинатные тубы</h3>
              <span>
                Используются для производства зубных паст. Широко применяются в
                сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
                химии и DIY (Do-it-Yourself).
              </span>
              <button>Каталог</button>
            </div>
          </div>
        </Slider>
      </section>
    );
  }
}

export default About;