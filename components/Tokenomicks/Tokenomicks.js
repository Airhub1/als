import Image from "next/image";
import React from "react";
import styled from "styled-components";
import tocenomicsImage from "../../assets/tokenomics2.png";
const Tokenomicks = () => {
  return (
    <TokenomicksWrap>
      <div className="container">
      <TocenomicsImg>
        <Image src={tocenomicsImage} alt="" />
      </TocenomicsImg>
      </div>
    </TokenomicksWrap>
    // <TokenomicksWrap>
    //   <div className="container">
    //     <div className={"background_image"}>
    //       <Image alt="water_portrait" src={Bg} />
    //     </div>
    //     <SectionTitles> Tokenomics</SectionTitles>
    //     <TocenomicsImg>
    //       <Image src={tocenomicsImage} alt="" />
    //     </TocenomicsImg>
    //     <Content>
    //       {tocenomicsData.map((item, index) => {
    //         return (
    //           <div className="item" key={index}>
    //             <span
    //               className="color"
    //               style={{ background: `${item.color}` }}
    //             ></span>
    //             <span className="title">{item.title}</span>
    //           </div>
    //         );
    //       })}
    //     </Content>
    //   </div>
    // </TokenomicksWrap>
  );
};

export default Tokenomicks;

const TokenomicksWrap = styled.div`
  padding: 120px 0;
  /* min-height: 100%; */
  padding-bottom: 37px;
  /* background: #0929ad; */
  position: relative;
  z-index: 1;
  background: linear-gradient(180deg, rgba(9, 41, 173, 0) 0%, #0929ad 100%);
  @media (min-width: 1800px) {
    padding: 10px 0 10px;
  }
  @media (max-width: 768px) {
    padding: 50px 0;
    min-height: 100%;
  }
  .background_image {
    position: absolute;
    bottom: 0px;
    left: 0;
    min-height: 100%;
    z-index: 1;
    @media (max-width: 900px) {
      color: red;
      border-radius: 2px solid #ffc222;
      color: #ddfddd;
      display: none;
    }
  }
`;

const TocenomicsImg = styled.div`

  @media (max-width: 900px) {
    display: block;
    text-align: center;
  }
`;

const Content = styled.div`
  margin-top: 50px;
  position: relative;
  z-index: 999;
  padding: 0 30px;
  @media (max-width: 900px) {
    text-align: center;
  }
  @media (max-width: 768px) {
    margin-top: 30px;
  }
  .item {
    display: flex;
    margin-bottom: 20px;
    /* justify-content: center; */
    :last-child {
      margin-bottom: 0;
    }
    @media (max-width: 900px) {
      justify-content: center;
    }
    @media (max-width: 768px) {
      justify-content: left;
    }
  }
  .color {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 14px;
  }
  .title {
    font-weight: 500;
    font-size: 17px;
    line-height: 24px;
    color: #ffffff;
  }
`;
