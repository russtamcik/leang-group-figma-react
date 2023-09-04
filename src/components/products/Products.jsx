import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";

import cream1 from "../../assets/images/cream1.png";
import cream2 from "../../assets/images/cream2.png";
import cream3 from "../../assets/images/cream3.png";
import cream4 from "../../assets/images/cream4.png";
import cream5 from "../../assets/images/cream5.png";

import "../../sass/Products.scss";

export class Products extends Component {
  render() {
    return (
      <section id="product">
        <div className="container">
          <h1>
            Наша <span>продукция</span>
          </h1>
          <Tabs className="btns">
            <TabList>
              <Tab>
                <button>Ламинатные тубы</button>
              </Tab>
              <Tab>
                <button>Экструзионные тубы</button>
              </Tab>
              <Tab>
                <button>Другая упаковка</button>
              </Tab>
            </TabList>

            <TabPanel>
              <div className="images">
                <img src={cream1} alt="" />
                <img src={cream2} alt="" />
                <img src={cream3} alt="" />
                <img src={cream4} alt="" />
                <img src={cream5} alt="" />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="images">
                <img src={cream3} alt="" />
                <img src={cream4} alt="" />
                <img src={cream1} alt="" />
                <img src={cream2} alt="" />
                <img src={cream3} alt="" />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="images">
                <img src={cream5} alt="" />
                <img src={cream1} alt="" />
                <img src={cream2} alt="" />
                <img src={cream3} alt="" />
                <img src={cream4} alt="" />
              </div>
            </TabPanel>
          </Tabs>
          <div className="catalog">
            <button>Перейти в каталог</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Products;
