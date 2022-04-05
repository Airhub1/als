import Image from "next/image";
import React from "react";
import styled from "styled-components";
import SectionTitles from "../SectionTitles/SectionTitles";
import Services from "../Services/Services";

const AboutUs = () => {
  return (
    <AboutUsWrapper>
      <div className="container">
        <SectionTitles>About Us</SectionTitles>
        <p className="description">
          LightStarter is a decentralized launchpad platform, brining new crypto
          projects with a low participation entry for the community
        </p>
      </div>

      <Services />
    </AboutUsWrapper>
  );
};

export default AboutUs;

const AboutUsWrapper = styled.div`
  padding: 88px 0 0;
  margin-top: 50px;
  padding-bottom: 80px;
  position: relative;
  z-index: 100;
  background: linear-gradient(180deg, rgba(9, 41, 173, 0.5) -5%, #0929ad 100%);
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0.5) 1%,
    #0929ad 100%
  );
  background: linear-gradient(180deg, rgba(9, 41, 173, 0) 0%, #0929ad 100%);
  /* background: linear-gradient(180deg, rgba(9, 41, 173, 0.5) 0%, #0929ad 100%); */
  /* background: linear-gradient(180deg, rgba(9, 41, 173, 0.5) 0%, #0929ad 100%); */
  /* min-height: 100%; */
  background: linear-gradient(to top, rgba(9, 41, 173, 1) 0%, #e5e5e5 500%);
  /* background: #e5e5e5; */

  @media (max-width: 768px) {
    padding: 44px 0 0;
  }

  .description {
    width: 600px;
    margin: 40px 0 80px;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #ffffff;
    @media (max-width: 900px) {
      width: 90%;
      text-align: center;
    }
    @media (max-width: 768px) {
      font-size: 16px;
      width: 100%;
      text-align: center;
      margin: 20px 0 40px;
    }
  }
`;
