import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import HomePage from "../HomePage/HomePage";
import Layout from "../Layout/Layout";
import Partners from "../Partners/Partners";
import Prices from "../Prices/Prices";
import Roadmap from "../Roadmap/Roadmap";
import Services from "../Services/Services";
import Tokenomicks from "../Tokenomicks/Tokenomicks";

const MainPage = () => {
  return (
    <Layout>
      <HomePage />
      <AboutUs />

      <Prices />
      <Tokenomicks />

      <Roadmap />
      <Partners />
    </Layout>
  );
};

export default MainPage;
