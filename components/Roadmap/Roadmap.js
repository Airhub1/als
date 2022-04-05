import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { roadmap_data } from "./RoadmapData";
import RoadmapImage from "../../assets/roadmap.png";
import RoadmapImageMobile from "../../assets/roadmap1.png";
import SectionTitles from "../SectionTitles/SectionTitles";
import star from "../../assets/title_star.png";
import Partners from "../Partners/Partners";
const Roadmap = () => {
  return (
    <RoadmapWrapper>
      <div className="background_star_1">
        <Image src={star} alt="" />
      </div>
      <div className="background_star_2">
        <Image src={star} alt="" />
      </div>
      <div className="container">
        <SectionTitles>Roadmap</SectionTitles>
        <ContentWrap>
          <PriceContentHeader>
            <ul className="price_header_inner">
              {roadmap_data.map((item, index) => {
                return <li key={index}>{item.type}</li>;
              })}
            </ul>
            <div className="price_image">
              <div className="animation_ball"></div>
              <Image src={RoadmapImage} alt="" />
            </div>
            <div className="price_image_mobile">
              <Image
                src={RoadmapImageMobile}
                alt=""
                height="500px"
                width="50px"
                layout="fixed"
              />
            </div>
          </PriceContentHeader>
          <PriceContent>
            <ul>
              <li>Main idea and start developing</li>
              <li>Comunity building</li>
              <li>Partnership building</li>
              <li>Platform test</li>
            </ul>
            <ul>
              <li>Airdrop campaign</li>
              <li>Private sale</li>
              <li>Public sale</li>
              <li>DEX listing</li>
              <li>Staking launch</li>
              <li>First project launch</li>
              <li>Marketing campaign</li>
            </ul>
            <ul>
              <li>Platform development</li>
              <li>Insurance system integration</li>
              <li>Cross-chain integration</li>
              <li>More partnership and adoption in crypto world</li>
            </ul>
            <ul>
              <li>CEX listing</li>
              <li>Redesign UX/UI</li>
              <li>Further development</li>
            </ul>
          </PriceContent>
        </ContentWrap>
      </div>
    </RoadmapWrapper>
  );
};

export default Roadmap;

const RoadmapWrapper = styled.div`
  padding: 100px 0;
  position: relative;
  margin-top: -3px;
  background: linear-gradient(180deg, rgba(22, 58, 208, 0.5) 0%, #0929ad 100%);
  z-index: 1000;
  @media (max-width: 768px) {
    padding: 50px 0;
  }
  .background_star_1 {
    position: absolute;
    z-index: 100;
    right: 10px;
    top: 40%;
    width: 40px;
    height: 40px;
    img {
      width: 100%;
    }
  }
  .background_star_2 {
    position: absolute;
    z-index: 100;
    right: 50px;
    top: 43%;
    width: 70px;
    height: 70px;
    img {
      width: 100%;
    }
  }
`;
const PriceContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  ul {
    margin-top: 20px;
    @media (max-width: 472px) {
      margin-top: 50px;
    }
  }
  @media (max-width: 768px) {
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(1, 1fr);
  }
  .description {
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
    margin-left: 40px;
    margin-top: 20px;
  }
  li {
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: #ffffff;
    margin-left: 50px;
    @media (max-width: 768px) {
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      color: #ffffff;
      margin-left: 40px;
    }
    @media (max-width: 472px) {
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      color: #ffffff;
      margin-left: 40px;
    }
  }
`;
const PriceContentHeader = styled.ul`
  margin-top: 90px;
  position: relative;

  @media (max-width: 768px) {
    display: flex;
  }
  .price_header_inner {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    @media (max-width: 768px) {
      grid-template-rows: repeat(4, 1fr);
      grid-template-columns: repeat(1, 1fr);
    }
    li {
      text-align: center;
      font-weight: 500;
      font-size: 24px;
      line-height: 28px;
      text-align: center;
      color: #ffffff;
      list-style-type: style none;
      list-style: none;
      @media (max-width: 768px) {
        text-align: center;
        font-weight: 500;
        font-size: 20px;
        line-height: 22px;
        text-align: center;
        color: #ffffff;
        list-style-type: style none;
        list-style: none;
      }
      @media (max-width: 472px) {
        text-align: center;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #ffffff;
        list-style-type: style none;
        list-style: none;
      }
    }
  }

  .price_image {
    margin-left: 20px;
    @media (max-width: 768px) {
      display: none;
    }
  }
  
  .price_image_mobile {
    display: none;
    @media (max-width: 768px) {
      margin-top: -40px;
      margin-left: 25px;
      display: block;
      height: 120%;
    }
  }
`;
const ContentWrap = styled.div`
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 0.5fr 1fr;
  }
`;
