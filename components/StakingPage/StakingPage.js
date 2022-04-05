import Image from "next/image";
import React from "react";
import styled from "styled-components";
import SectionTitles from "../SectionTitles/SectionTitles";
import stakingImage from "../../assets/staking1.png";
import { stakingData } from "./StakingsData";
const StakingPage = () => {
  return (
    <StakingWrapper>
      <div className="container">
        <StakingHeader>
          <div>
            <SectionTitles>Staking</SectionTitles>
            <p className="text">
            LS holders will be rewarded for staking the tokens on the LightStarter
            platform. The staking platform provides unique opportunities for increasing LS,
            thereby allowing you to earn or increase your rank in the Tier system.
            </p>
          </div>

          <div className="image_wrapper">
            <Image src={stakingImage} alt="" />
          </div>
        </StakingHeader>
        <StakingContent>
          {stakingData.map((item, index) => {
            return (
              <StakingCard key={index}>
                <div className="name">{item.name}</div>
                <p className="description">{item.text} </p>
                <div className="icon ">
                  <Image src={item.icon} alt={item.name} />
                </div>
                <div className="button_wrap">
                  <button>Get Status</button>
                </div>

                <div className="allocation_ticket">
                  <p className="stake"> Staking Period</p>
                  <p className="price">{item.staking_period}</p>
                </div>
              </StakingCard>
            );
          })}
        </StakingContent>
      </div>
    </StakingWrapper>
  );
};

export default StakingPage;

const StakingWrapper = styled.div`
  padding: 60px 0 55px;
  background: linear-gradient(
    252.12deg,
    rgba(255, 255, 255, 0.9) 1.16%,
    rgba(16, 40, 255, 0.993552) 46.91%,
    #0019ff 96.5%
  );
`;
const StakingHeader = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: block;
  }
  .text {
    max-width: 700px;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #ffffff;
    margin-top: 40px;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

const StakingContent = styled.div`
  padding-top: 60px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    padding: 0 10px;
  }
`;

const StakingCard = styled.div`
  padding: 24px;
  border: 1.5px solid #ffffff;
  box-sizing: border-box;
  border-radius: 19.1346px;
  .icon {
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    position: relative;
    :before {
      content: "";
      position: absolute;
      height: 1px;
      width: 100px;
      background-color: #fff;
      background-color: rgba(255, 255, 255, 0.5);
      top: 0;
      left: 33%;
    }
  }
  .button_wrap {
    text-align: center;
    margin-bottom: 20px;
    button {
      background: linear-gradient(90deg, #e8cb8a 0%, #ffa99f 48%, #ff719a 100%);
      border-radius: 14px;
      padding: 16px 40px;
      border: none;
      cursor: pointer;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      color: #ffffff;
      transition: all 300ms ease-in-out;
      :hover {
        background: linear-gradient(90deg, #fc6076 0%, #ff9a44 100%);
      }
    }
  }
  .name {
    font-weight: 500;
    font-size: 25px;
    line-height: 32px;
    text-align: center;
    font-variant: small-caps;
    color: #ffffff;
    text-transform: uppercase;
    padding: 20px 0 20px;
  }
  .description {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    text-transform: capitalize;
    color: #ffffff;
    position: relative;
    padding-bottom: 20px;
    margin-bottom: 20px;
    height: 50px;
  }
  .stake {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    text-transform: capitalize;
    color: #ffffff;
    position: relative;
    padding-top: 20px;
    :before {
      content: "";
      position: absolute;
      height: 1px;
      width: 100px;
      background-color: rgba(255, 255, 255, 0.5);
      top: 0;
      left: 33%;
    }
  }

  .price {
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
    padding: 8px 0 20px;
    position: relative;
  }
`;
