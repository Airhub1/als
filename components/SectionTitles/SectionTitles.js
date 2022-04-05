import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Star from "../../assets/title_star.png";
const SectionTitles = ({ color, children }) => {
  return (
    <Titles>
      {children}
      <div className="title_star">
        <Image src={Star} alt="" />
      </div>
    </Titles>
  );
};

export default SectionTitles;

const Titles = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 50px;
  line-height: 60px;
  position: relative;
  z-index: 1000;
  color: ${(color) => (color ? "#color: #141430;" : "#fff")};
  color: #fff;
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
