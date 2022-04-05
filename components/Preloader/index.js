import React from "react";
import styled from "styled-components";

// const Screen = styled.div`
//   position: relative;
//   height: 100vh;
//   width: 100%;
//   opacity: 0;
//   animation: fade 0.4s ease-in forwards;
//   background: black;

//   @keyframes fade {
//     0% {
//       opacity: 0.4;
//     }
//     50% {
//       opacity: 0.8;
//     }
//     100% {
//       opacity: 1;
//     }
//   }
// `;

// const Balls = styled.div`
//   display: flex;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);

//   .ball {
//     height: 20px;
//     width: 20px;
//     border-radius: 50%;
//     background: #1b5299;
//     margin: 0 6px 0 0;
//     animation: oscillate 0.7s ease-in forwards infinite;
//   }

//   .one {
//     animation-delay: 0.5s;
//   }
//   .two {
//     animation-delay: 1s;
//   }
//   .three {
//     animation-delay: 2s;
//   }

//   @keyframes oscillate {
//     0% {
//       transform: translateY(0);
//     }
//     50% {
//       transform: translateY(20px);
//     }
//     100% {
//       transform: translateY(0);
//     }
//   }
// `;

const LoadingScreen = () => {
  return (
    <div className="preloader__wrapper">
      <div className="preloader">
        <svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M300 150C300 232.843 232.843 300 150 300C67.1573 300 0 232.843 0 150C0 67.1573 67.1573 0 150 0C232.843 0 300 67.1573 300 150ZM20.7679 150C20.7679 221.373 78.6271 279.232 150 279.232C221.373 279.232 279.232 221.373 279.232 150C279.232 78.6271 221.373 20.7679 150 20.7679C78.6271 20.7679 20.7679 78.6271 20.7679 150Z"
            fill="#F3F3F3"
          />
          <path
            d="M289.616 150C295.351 150 300.037 154.655 299.641 160.376C297.837 186.392 289.275 211.553 274.72 233.336C258.238 258.003 234.811 277.229 207.403 288.582C179.994 299.935 149.834 302.906 120.736 297.118C91.6393 291.33 64.9119 277.044 43.934 256.066C22.9561 235.088 8.66999 208.361 2.88221 179.264C-2.90558 150.166 0.0649254 120.006 11.4181 92.5975C22.7712 65.1886 41.9971 41.7618 66.6645 25.2796C88.4468 10.725 113.608 2.16293 139.624 0.359232C145.345 -0.0374269 150 4.64906 150 10.384C150 16.1189 145.343 20.7246 139.627 21.1849C117.723 22.9486 96.5686 30.2756 78.2025 42.5475C56.9504 56.7477 40.3864 76.931 30.6052 100.545C20.8239 124.159 18.2647 150.143 23.2511 175.212C28.2375 200.28 40.5457 223.307 58.6191 241.381C76.6926 259.454 99.7195 271.762 124.788 276.749C149.857 281.735 175.841 279.176 199.455 269.395C223.069 259.614 243.252 243.05 257.453 221.797C269.724 203.431 277.051 182.277 278.815 160.373C279.275 154.657 283.881 150 289.616 150Z"
            fill="#4d61e7"
          />
        </svg>
      </div>
    </div>
  );
};

export default LoadingScreen;
