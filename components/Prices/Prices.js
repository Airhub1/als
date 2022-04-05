import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components/";
import PriceCards from "./PriceCards";
import star from "../../assets/title_star.png";
const Prices = () => {
  const [offset, setOffset] = useState(window.pageYOffset);
  const [activeClass, setActiveClass] = useState(false);

  return (
    <PricesWrapper>
      <div className="container">
        <div className="background_star_1">
          <Image src={star} alt="" />
        </div>
        <div className="background_star_2">
          <Image src={star} alt="" />
        </div>
        <p className="text_descr">
          To take part in IDO projects, you have to stake LS tokens.{" "}
        </p>
        <p className="text_descr">
          Depending on the amount of tokens you have staked, you will receive
          the appropriate Tier status
        </p>
        <PriceCards activeClass={activeClass} />
      </div>
    </PricesWrapper>
  );
};

export default Prices;

const PricesWrapper = styled.section`
  padding: 50px 0 100px;
  position: relative;
  /* background: linear-gradient(
    180deg,
    rgba(22, 58, 208, 0.5) 30.92%,
    #0929ad 100%
  ); */

  background: #0929ad;
  background: linear-gradient(
    180deg,
    rgba(22, 58, 208, 1) 30.92%,
    #0929ad 100%
  );
  z-index: 1000;
  min-height: 100%;

  @media (max-width: 768px) {
    padding: 50px 0;
  }
  .text_descr {
    text-align: center;
    font-weight: 600;
    font-size: 18px;
    line-height: 32px;
    text-align: center;
    color: #ffffff;
    @media (max-width: 768px) {
      line-height: 26px;
    }
  }
  .background_star_1 {
    position: absolute;
    z-index: 100;
    left: 10px;
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
    left: 50px;
    top: 43%;
    width: 70px;
    height: 70px;
    img {
      width: 100%;
    }
  }
`;
