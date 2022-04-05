import Image from "next/image";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Logo from "../../assets/logo.png";
import Telegram from "../../assets/social-media/Telegram1.png";
import Twitter from "../../assets/social-media/Twitter1.png";
import PDF from "./PDFDownload";

const Footer = () => {
  PDF();

  return (
    <FooterWrapper>
      <div className="container">
        <FooterInner>
          <div className="logo_wrap">
          <Link href="/" passHref>
            <Image src={Logo} alt="" />
          </Link>
          <div className="email">lightstarterorg@gmail.com</div>
          </div>
          <FooterItems>
            <div className="items">
              <ul>
                <button id="paper">Whitepaper</button>
              </ul>
              <ul>  
                <button id="terms">Terms of Use</button>
              </ul>
              <ul>
                <button id="privacy">Privacy Policy</button>
              </ul>
            </div>
            <div className="items social">
              <div className="title">Social Media</div>
              <ul>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://twitter.com/light_starter"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://telegram.me/LightStarter_Community"
                  >
                    Telegram Group
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://telegram.me/LightStarter_Announsment"
                  >
                    Telegram Channel
                  </a>
                </li>
              </ul>
            </div>
            <div className="social_icons">
              <ul>
                <li>
                  <a href="#" rel="noopener noreferrer" target="_blank">
                    <Image src={Twitter} alt="" />
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://telegram.me/LightStarter_Community"
                  >
                    <Image src={Telegram} alt="" />
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://telegram.me/LightStarter_Announsment"
                  >
                    <Image src={Telegram} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </FooterItems>
        </FooterInner>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  background: #1d3886;
  padding: 30px 0 40px;
`;
const FooterInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  .logo_wrap {
    margin-bottom: 20px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
  .email {
    margin-top: 20px;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
    text-align: center;
  }
`;

const FooterItems = styled.div`
  display: grid;
  flex-direction: column;
  grid-template-columns: 1fr 1fr;
  grid-gap: 80px;
  padding: 30px 0;
  li {
    margin: 10px 0;
  }
  button {
    margin: 10px 0;
  }
  .social_icons {
    display: none;
    ul {
      display: flex;
      margin-top: 30px;
      align-items: center;
      li {
        margin: 0 20px;
      }
    }
    @media (max-width: 768px) {
      display: block;
    }
  }
  @media (max-width: 768px) {
    display: block;
    padding: 10px 0;
    .items {
      margin-bottom: 20px;
    }
    .items.social {
      display: none;
    }
  }
  .title {
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 10px;
  }
  button {
    font-size: 16px;
    line-height: 125%;
    color: #ffffff;
    background: #1d3886;
    border: #1d3886;
    list-style-type: none;
    align-items: center;
    cursor: pointer;
  }
  li {
    font-size: 16px;
    line-height: 125%;
    color: #ffffff;
    list-style-type: none;
    text-align: center;
  }
`;
