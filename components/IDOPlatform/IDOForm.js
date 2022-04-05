import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Logo from "../../assets/IDOLogo.png";
const IDOForm = () => {
  return (
    <IDOFormWrap>
      <Title>live</Title>
      <div className="logo line">
        <Image src={Logo} alt="" />
      </div>
      <div className="date line">
        <p>IDO ended</p>
        <strong>00 hours 00 min 00 sec</strong>
      </div>
      <div className="date line">
        <p>Available amount for IDO:</p>
        <strong>- USDT</strong>
      </div>
      <p
        style={{
          textAlign: "center",
          marginBottom: "-15px",
          paddingTop: "20px",
        }}
      >
        Contribute
      </p>

      <div className="date line">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
          }}
        >
          <strong style={{ marginRight: "10px" }}>MAX</strong>
          <input
            placeholder="- USDT"
            style={{ width: "80px", marginLeft: "20px" }}
          />
        </div>
      </div>
      <ButtonWrapper className="line">
      <a
        rel="noopener noreferrer"
        target="_blank"
      >
          APPROVE
      </a>
      </ButtonWrapper>
      <div
        className=" line"
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "0 10px 10px 0",
        }}
      >
        <p
          style={{
            paddingRight: "10px",
          }}
        >
          %{" "}
        </p>
        <strong>-/- USDT</strong>
      </div>
      <div className="line">
        <p style={{ textAlign: "center", marginTop: "10px" }}>
          1 TBA Token = - USDT
        </p>
        <p style={{ textAlign: "center", paddingBottom: "10px " }}>
          1 USDT = - TBA Token
        </p>
      </div>
      <div className="bottom">
        <p>Your status: -</p>
        <p>Number of guaranteed tickets: -</p>
        <p>Number of wining tickets: -</p>
        <p>Ticket allocation capacity (I round): -</p>
        <p>FCFS allocation available (II round): -</p>
      </div>
    </IDOFormWrap>
  );
};

export default IDOForm;

const IDOFormWrap = styled.div`
  background: #ebeefb;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 10px;
  position: relative;
  z-index: 900;
  .logo {
    margin-bottom: 30px;
    text-align: center;
    padding-bottom: 10px;
  }
  .date {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px;
    input {
      background: #ffffff;
      border-radius: 8px;
      width: 50px;
      padding: 8px 24px 8px 8px;
    }
  }
  .line {
    position: relative;

    :before {
      content: "";
      position: absolute;
      height: 1px;
      width: 170px;
      background-color: #9d9a9a;
      bottom: 0;
      left: 30%;
    }
  }
  .bottom {
    padding: 10px 0 20px 20px;
  }
`;
const Title = styled.div`
  font-weight: 500;
  font-size: 28px;
  line-height: 32px;
  text-align: center;
  font-variant: small-caps;
  color: #000000;
  margin-bottom: 20px;
`;
const ButtonWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  text-align: center;
  text-align: center;
  width: 100%;
  padding-bottom: 20px;
  cursor: pointer;

  /* width: 235px; */
  button,
  a {
    background: linear-gradient(
      180deg,
      #27e5ff 0%,
      #1275ff 78.12%,
      #0019ff 100%
    );
    border-radius: 10px;
    border: none;
    padding: 10px 0;
    width: 80%;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
    cursor: pointer;
    :hover {
      border-color: transparent;
      box-shadow: inset 0 0 1px 1px rgba(255, 255, 255, 0.75),
        inset 0 0 2px 1px rgba(39, 229, 255, 0.75);
      /* padding: 30px; */
    }
  }
`;
