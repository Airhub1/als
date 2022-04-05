import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Logo from "../../assets/logo.png";
import MobileLogo from "../../assets/LightStarterSmallLogo.png";
import { headerData } from "./HeaderData";
import { useRouter } from "next/router";
import ConnectWallet from "./ConnectWallet";
const Header = () => {
  const router = useRouter();

  ConnectWallet();

  return (
    <HeaderWrapper>
      <div className="container">
        <HeadreContent>
          <LogoWrapDesctop>
            <Link href="/" passHref>
              <div>
                <Image src={Logo} alt="" style={{ cursor: "pointer" }} />
              </div>
            </Link>
          </LogoWrapDesctop>
          <LogoWrapMobile>
            <Link href="/" passHref>
              <div>
                <Image
                  src={MobileLogo}
                  alt=""
                  height={"40px"}
                  width={"40px"}
                  layout="fixed"
                />
              </div>
            </Link>
          </LogoWrapMobile>

          <HeaderItems>
            <ul>
              {headerData.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={router.pathname === item.link && "active"}
                  >
                    <Link href={item.link} passHref>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <HeaderButton id="connect">Connect Wallet</HeaderButton>
          </HeaderItems>
        </HeadreContent>
      </div>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  padding: 18px 0;
  background: #1a3586;
  position: relative;
  z-index: 100;
`;
const HeadreContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LogoWrapDesctop = styled.div`
  height: 40px;
  /* margin-top: 20px; */
  margin-right: 20px;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;
const LogoWrapMobile = styled.div`
  height: 20px;
  width: 20px;
  /* margin-top: 20px; */
  margin-right: 20px;
  display: none;
  img {
    height: 20px;
    width: 20px;
    /* margin-top: 20px; */
  }
  @media (max-width: 768px) {
    display: block;
  }
`;
const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  line-height: 24px;
  .active {
    color: #ffd60a;
  }
  ul {
    display: flex;
    li {
      font-family: "SF Pro Text", sans-serif;
      display: inline-block;
      margin-right: 40px;

      font-weight: 500;
      /* font-weight: bold; */
      font-size: 18px;
      line-height: 12px;
      text-align: center;
      color: #ffffff;
      font-family: "SF Pro Text", sans-serif;
      font-style: normal;

      @media (max-width: 768px) {
        font-size: 15px;
        margin-right: 20px;
      }
      @media (max-width: 480px) {
        font-size: 15px;
        margin-right: 10px;
      }
    }
  }
`;

const HeaderButton = styled.div`
  position: relative;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  cursor: pointer;
  padding: 10px 20px;
  white-space: nowrap;
  border: 2px solid #fff;
  border-radius: 50px;
  :hover {
    border: 3px solid #1275ff;
  }
  

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 3px 20px;
  }
`;
