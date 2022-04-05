import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { aboutUsData } from "../AboutUs/AboutUsData";
import BackgroundImage from "../../assets/about-us/about-us-bg.png";
const Services = () => {
  return (
    <ServicesWrap>
      <div className="container">
        <div className={"background_image"}>
          <Image alt="water_portrait" src={BackgroundImage} />
        </div>
        <CardItems>
          {aboutUsData.map((item, index) => {
            return (
              <Card key={index}>
                <div className="icon">
                  <Image width={54} height={54} src={item.icon} alt="" />
                </div>
                <div className="title">{item.title}</div>
                <div className="text">{item.text}</div>
              </Card>
            );
          })}
        </CardItems>
      </div>
    </ServicesWrap>
  );
};

export default Services;

const ServicesWrap = styled.section`
  /* padding: 50px 0; */
  position: relative;
  /* min-height: 100%; */
  /* padding-bottom: 100px; */

  .background_image {
    position: absolute;
    bottom: 5px;
    left: 0;
    z-index: 1;
    height: 300px;
    @media (min-width: 1750px) {
      bottom: 5px;
    }
    @media (min-width: 1600px) {
      bottom: 50px;
    }

    img {
      height: 300px;
    }
  }
`;
const Card = styled.div`
  padding: 30px;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.6s linear;
  :hover {
    background: radial-gradient(
      97.93% 155.18% at 2.25% 2.07%,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    filter: drop-shadow(8px 8px 24px rgba(14, 0, 70, 0.2))
      drop-shadow(-8px -8px 24px rgba(14, 0, 70, 0.2));
    backdrop-filter: blur(200px);
    border-radius: 24px;
    border-radius: 30 px;
    background: radial-gradient(
      97.93% 155.18% at 2.25% 2.07%,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    box-shadow: 5px 10px 15px rgb(0, 0, 0, 0.3);
    border-radius: 24px;
    border: 2px solid #2945b8;
  }
  :first-child {
    background: #2724cd;
    border-radius: 24px;
    border: none;
    .title {
      font-weight: 800;
      font-size: 50px;
      line-height: 60px;
      color: #ffffff;
    }
    .icon {
      display: none;
    }
  }
  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 30px;
    color: #ffffff;
    margin: 28px 0 10px;
  }
  .text {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    color: #bfc7fd;
  }
`;
const CardItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  position: relative;
  z-index: 100;
  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;
