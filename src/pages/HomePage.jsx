import React, { Component, Fragment } from "react";
import Header from "../components/header/Header";
import About from "../components/about/About";
import AboutCompany from "../components/about-company/AboutCompany";
import Certificate from "../components/certificate/Certificate";
import Products from "../components/products/Products";
import Information from "../components/information/Information";
import OurTeam from "../components/our-team/OurTeam";
import News from "../components/news/News";
import Footer from "../components/footer/Footer";

export class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <About />
        <AboutCompany />
        <Certificate />
        <Products />
        <Information />
        <OurTeam />
        <News />
        <Footer />
      </Fragment>
    );
  }
}

export default HomePage;
