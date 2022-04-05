import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Line from "../../assets/title_line.png";
const Partners = () => {
  return (
    <PartnersWrap>
      <div className="container">
        <Title>
          Partners
          <div>
            <Image src={Line} alt="" />
          </div>
        </Title>
      </div>
    </PartnersWrap>
  );
};

export default Partners;

const PartnersWrap = styled.div`
  padding: 50px 0 200px;
`;
const Title = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 50px;
  line-height: 60px;
  text-align: center;
  color: #ffffff;
  position: relative;
  div {
    text-align: center;
  }
`;
