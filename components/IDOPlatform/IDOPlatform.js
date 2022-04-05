import React from "react";
import styled from "styled-components";
import SectionTitles from "../SectionTitles/SectionTitles";
import Logo from "../../assets/IDOLogo.png";
import Image from "next/image";
import IDOPlatformTable from "./IDOPlatformTable";
import IDOForm from "./IDOForm";
import Star from "../../assets/title_star.png";
import BgImage from "../../assets/IDO_bg.png";
const IDOPlatform = () => {
  return (
    <IDOPlatformWrap id="ido">
      <div className={"background_image"}>
        <Image alt="water_portrait" src={BgImage} />
      </div>
      <div className="container">
        <SectionTitle>
          {/* IDO Platform */}
          <div className="title_star">
            <Image src={Star} alt="" />
          </div>
        </SectionTitle>
        <Content>
          <ContentInfo>
            <Header>
              <div className="subtitle">Project name</div>

              <div className="logo">
                <Image src={Logo} alt="" />
              </div>
              <p>
                <small>IDO details</small>{" "}
              </p>
            </Header>
            <IDOPlatformTable />
          </ContentInfo>
          <ContentForm>
            <IDOForm />
          </ContentForm>
        </Content>
        <TokenInformation>
          <div className="title">Token information</div>{" "}
          <div className="content">
            <SingleTokenInformationCard>
              <div className="title">listing</div>
              <div className="date">
                <p>Date</p>
                <p>-</p>
                <p>Date</p>
                <p>-</p>
              </div>
            </SingleTokenInformationCard>
            <SingleTokenInformationCard>
              <div className="title">supply</div>
              <div className="date">
                <p>Total</p>
                <p>-</p>
                <p>Initial</p>
                <p>-</p>
              </div>
            </SingleTokenInformationCard>
            <SingleTokenInformationCard>
              <div className="title"></div>
              <div className="date">
                <p>Token</p>
                <p>-</p>
                <p>Network</p>
                <p>-</p>
              </div>
            </SingleTokenInformationCard>
            <SingleTokenInformationCard>
              <div className="title"></div>
              <div className="date">
                <p>Market cap at listing:</p>
                <p>-</p>
                <p>Contact address</p>
                <p>-</p>
              </div>
            </SingleTokenInformationCard>
          </div>
        </TokenInformation>
      </div>
    </IDOPlatformWrap>
  );
};

export default IDOPlatform;

const IDOPlatformWrap = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 20px 0 70px;
  position: relative;
  z-index: 100;
  .background_image {
    position: absolute;
    top: 0px;
    left: 0;
    z-index: 1;
  }
  .title {
    color: #0a0a0a;
  }
`;

const SectionTitle = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 50px;
  line-height: 60px;
  color: ${(color) => (color ? "#color: #141430;" : "#fff")};
  color: #141430;
  /* color: #ffffff; */
  position: relative;
  @media (max-width: 900px) {
    text-align: center;
  }
  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 60px;
    text-align: center;
  }
  .title_star {
    position: absolute;
    left: -105px;
    top: 10px;
    width: 60px;
    height: 60px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 60px;
  margin-top: 30px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    @media (max-width: 768px) {
      padding: 0 20px;
    }
  }
`;
const ContentInfo = styled.div``;
const ContentForm = styled.form``;
const Header = styled.div`
  text-align: center;
  .logo {
    margin-bottom: 30px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 16px;
      margin-bottom: 20px;
    }
  }
  .subtitle {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #141430;
    margin-bottom: 30px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 16px;
      margin-bottom: 22px;
    }
  }
  p {
    /* display: inline-block; */
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #141430;
    text-align: left;
    margin-bottom: 16px;
    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;

const ContentTable = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 24px;
  .long_card {
    grid-row-end: span 2;
  }
`;

const SingleCard = styled.div`
  text-align: center;
  background: #ffffff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 10px;
  .title {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
    color: #141430;
    text-align: center;
  }
  .date {
    p {
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      color: #141430;
      margin: 10px 0;
    }
  }
`;

const TokenInformation = styled.div`
  @media (max-width: 768px) {
    padding: 0 20px;
  }
  .title {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #141430;
    margin-top: 30px;
  }
  .content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 24px;
    margin-top: 30px;
  }
`;

const SingleTokenInformationCard = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  .title {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
    color: #141430;
    text-align: center;
    padding: 7px 0;
  }
  .date {
    p {
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      color: #141430;
      margin: 10px 0;
    }
  }
`;
