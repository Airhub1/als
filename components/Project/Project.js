import React from "react";
import styled from "styled-components";
import SectionTitles from "../SectionTitles/SectionTitles";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import {
  projectData,
  projectDataCurrent,
  projectDataUpcoming,
} from "./ProjectData";

const ProjectComponent = () => {
  return (
    <ProjectWrap>
      <div className="container">
        <div>
          <ProjectContent>
            <Title>Upcoming Projects</Title>
            <Swiper
              slidesPerView={2}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
              }}
              navigation={true}
              spaceBetween={30}
              scrollbar={{ draggable: true }}
              pagination={{
                clickable: true,
              }}
              className="mySwiper"
            >
              {projectDataUpcoming.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <a href="#ido">
                      <SingleItem>
                        <div className="title">{item.title}</div>
                        <p>Coming soon</p>
                        <div className="project_icon">
                          <Image src={item.image} alt="" />
                        </div>
                        <div className="button_wrapper">
                          <button>ENTER</button>
                        </div>
                        <div className="bottom">
                          <p>Registrations starts</p>
                          <p>00 days 00 month 00 year 00 hours 00 min 00 sec</p>
                        </div>
                      </SingleItem>
                    </a>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </ProjectContent>
        </div>
        <div>
          <ProjectContent>
            <Title className="current">Current Projects</Title>
            <Swiper
              slidesPerView={2}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
              }}
              navigation={true}
              spaceBetween={30}
              scrollbar={{ draggable: true }}
              pagination={{
                clickable: true,
              }}
              className="mySwiper"
            >
              {projectDataCurrent.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <SingleItem>
                      <div className="title">{item.title}</div>
                      <p>Coming soon</p>
                      <div className="project_icon">
                        <Image src={item.image} alt="" />
                      </div>
                      <div className="button_wrapper">
                        <button>ENTER</button>
                      </div>
                      <div className="bottom">
                        <p>Registrations starts</p>
                        <p>00 days 00 month 00 year 00 hours 00 min 00 sec</p>
                      </div>
                    </SingleItem>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </ProjectContent>
        </div>

        <div>
          <ProjectContent>
            <Title className="completed">Completed Projects</Title>
            <Swiper
              slidesPerView={2}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
              }}
              navigation={true}
              spaceBetween={30}
              scrollbar={{ draggable: true }}
              pagination={{
                clickable: true,
              }}
              className="mySwiper"
            >
              {projectDataCurrent.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <SingleItem>
                      <div className="title">{item.title}</div>
                      <p>Coming soon</p>
                      <div className="project_icon">
                        <Image src={item.image} alt="" />
                      </div>
                      <div className="button_wrapper">
                        <button>ENTER</button>
                      </div>
                      <div className="bottom">
                        <p>Registrations starts</p>
                        <p>00 days 00 month 00 year 00 hours 00 min 00 sec</p>
                      </div>
                    </SingleItem>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </ProjectContent>
        </div>
      </div>
    </ProjectWrap>
  );
};

export default ProjectComponent;

const ProjectWrap = styled.div`
  padding: 40px 0 70px;
`;
const Title = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  color: #ffffff;
`;

const ProjectContent = styled.div`
  padding: 0px 0 100px;
  margin-top: 50px;
  .current {
    transform: translateY(-150px);
  }
  .completed {
    transform: translateY(-150px);
  }
  .swiper {
    width: 100%;
    height: 100%;
    padding: 40px;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: transparent;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-horizontal > .swiper-scrollbar {
    display: none;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-button-prev,
  .swiper-rtl .swiper-button-next {
    color: #fff;
  }

  .swiper-button-next,
  .swiper-rtl .swiper-button-prev {
    color: #fff;
  }
`;
const SingleItem = styled.div`
  width: 300px;
  background: rgba(0, 0, 0, 0.05);
  box-shadow: inset 0px -4px 4px rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(40px);
  border-radius: 20px;
  /* border: 2px solid #fff; */
  margin: 0 auto;
  text-align: center;
  padding: 40px 25px;
  position: relative;
  cursor: pointer;
  transition: all 0.4s linear;
  padding-bottom: 70px;
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    padding: 3px;
    background: linear-gradient(
      180deg,
      #27e5ff 0%,
      #1275ff 78.12%,
      #0019ff 100%
    );
    transition: all 0.4s linear;
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
  :hover {
    border-color: transparent;
    box-shadow: inset 0 0 6px 6px rgba(255, 255, 255, 0.75),
      inset 0 0 3px 2px rgba(39, 229, 255, 0.75);
    /* padding: 30px; */
  );
      box-shadow: inset 0 0 6px 6px rgba(255, 255, 255, 0.75),
        inset 0 0 3px 2px rgba(39, 229, 255, 0.75);
      box-shadow: 0px 0px 20px #27e5ff,
        inset 0px 1px 2px rgba(255, 255, 255, 0.8),
        inset 0px 20px 40px rgba(255, 255, 255, 0.25),
        inset 0px -4px 4px rgba(255, 255, 255, 0.25),
        inset 0px -40px 40px rgba(0, 0, 0, 0.2);
    }
  }

  .title {
    font-weight: 500;
    font-size: 28px;
    line-height: 32px;
    text-align: center;
    font-variant: small-caps;
    color: #ffffff;
    padding-bottom: 20px;
    position: relative;
    :before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 30%;
      width: 100px;
      height: 1px;
      background-color: #fff;
    }
  }
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
    text-align: center;
    text-transform: capitalize;
    color: #ffffff;
  }
  .project_icon {
    padding: 20px 0;
    position: relative;
    :before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 30%;
      width: 100px;
      height: 1px;
      background-color: #fff;
    }
  }

  .button_wrapper {
    margin-top: 20px;
    margin-bottom: 20px;
    button {
      background: linear-gradient(90deg, #0acffe 0%, #495aff 100%);
      border-radius: 14px;
      outline: none;
      border: none;
      padding: 16px 40px;
      cursor: pointer;
      color: #fff;
      }
    }
  }
  .bottom {
    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #ffffff;
    }
  }
`;
