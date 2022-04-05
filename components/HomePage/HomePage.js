import Image from "next/image";
import React from "react";
import styled from "styled-components";
import HomeWave from "../../assets/home-wave-bg.png";
import MobileBgImage from "../../assets/mobile-bg-main.png";
import MainPic from "../../assets/home-main-pic.png";
import { useSpring, animated, config } from "react-spring";

const Container = styled(animated.div)`
  display: inline-block;
  padding: 5em;
  /* background: #c7d2fe66; */
  border-radius: 10px;
  z-index: 1;
  position: relative;
  /* backdrop-filter: blur(10px); */
  /* border: 2px solid transparent; */
  /* background-clip: border-box; */
  cursor: pointer;
`;

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const HomePage = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: config.default,
  }));

  return (
    <HomePageWrapper>
      <div className="container">
        <div className={"background_image"}>
          <Image alt="water_portrait" src={HomeWave} />
        </div>
        <div className={"main_image"}>
          <Container
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{
              transform: props.xys.interpolate(trans),
            }}
          >
            <Image alt="" src={MainPic} />
          </Container>
          {/* <Image alt="water_portrait" src={MainPic} /> */}
        </div>
        <HomePageContent>
          <div className="title">Easy access to the world of crypto startups</div>
          <div className="question">Ready to launch your project on?</div>
          <ButtonWrapper>
          <a
          href="https://forms.gle/H3qkpHAbPTxxTY8J6"
          rel="noopener noreferrer"
          target="_blank"
          >
            <button className="btn">Apply for IDO </button>
          </a>
          </ButtonWrapper>
          <Container
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{
              transform: props.xys.interpolate(trans),
            }}
          >
          <MobileBg>
            <Image src={MobileBgImage} alt="" />
          </MobileBg>
          </Container>
        </HomePageContent>
      </div>
    </HomePageWrapper>
  );
};

export default HomePage;

const HomePageWrapper = styled.section`
  height: 75vh;
  min-height: 45vh;
  position: relative;
  /* background: #3555da; */
  /* background: linear-gradient(180deg, rgba(9, 41, 173, 0.5) 0%, #0929ad 100%); */
  padding: 80px 0 0px;
  /* background: linear-gradient(
    180deg,
    rgba(22, 58, 208, 0) 26.75%,
    rgba(9, 41, 173, 0.7) 100%
  ); */
  width: 100%;
  @media (max-width: 900px) {
    padding: 10px 0 0;
    height: 80vh;
    min-height: 40vh;
  }
  @media (max-width: 750px) {
    padding: 10px 0 0;
    height: 60vh;
    min-height: 40vh;
  }
  @media (max-width: 600px) {
    padding: 10px 0 0;
    height: 55vh;
    min-height: 45vh;
  }
  .background_image {
    position: absolute;
    top: 0px;
    left: 0px;
    /* width: 100vw; */
    /* height: 100vh; */
    height: 100%;
    z-index: 1;
    @media (max-width: 650px) {
      top: 60px;
    }
    @media (max-width: 420px) {
      top: 160px;
    }
  }
  .main_image {
    position: absolute;
    top: 0%;
    right: -70px;
    bottom: 20px;
    cursor: pointer;
    width: 640px;
    height: 100%;
    /* height: 100vh; */
    z-index: 1;
    @media (max-width: 900px) {
      position: absolute;
      top: 10%;
      right: -70px;
      cursor: pointer;
      width: 550px;
      height: 100%;
      /* height: 100vh; */
      z-index: 1;
    }
    @media (max-width: 750px) {
      position: absolute;
      top: 8%;
      right: -45px;
      cursor: pointer;
      width: 420px;
      height: 100%;
      /* height: 100vh; */
    }
    @media (max-width: 600px) {
      display: none;
    }
  }
`;

const HomePageContent = styled.div`
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: -50px;
  }
  .title {
    z-index: 1000;

    font-weight: 500;
    font-size: 65px;
    line-height: 90px;
    color: #ffffff;

    width: 50%;
    margin-bottom: 50px;
    margin-top: 30px;

    @media (max-width: 750px) {
      width: 50%;
      margin-top: 55px;
    }

    @media (max-width: 750px) {
      font-weight: 500;
      font-size: 50px;
      line-height: 60px;
    }
    
    @media (max-width: 600px) {
      width: 50%;
      font-size: 50px;
      text-align: center;
      margin-bottom: 10px;
    }
    @media (max-width: 600px) {
      width: 90%;
      font-size: 40px;
      line-height: 49px;
    }
  }
  .question {
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    /* text-align: center; */
    color: #ffffff;
    margin-bottom: 10px;
  }
`;

const ButtonWrapper = styled.div`
  @media (max-width: 900px) {
    margin-bottom: 40px;
    background: #1535ba !important;
  }
  .btn {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
    padding: 8px 50px;
    background: rgba(53, 85, 218, 1);
    background: #1535ba !important;
    /* background: rgba; */
    position: relative;
    z-index: 1001;
    cursor: pointer;

    outline: none;
    border-radius: 10px;
    border: 2px solid #fff;
    :hover {
      border: 3px solid #1275ff;
    }
  }
`;

const MobileBg = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: block;
    text-align: center;
    cursor: pointer;
    margin-top: -60px;
    margin-bottom: 0px;
  }
`;
