import React from "react";
import styled from "styled-components";
const IDOPlatformTable = () => {
  return (
    <ContentTable>
      <SingleCard>
        <div className="title">Registration</div>
        <div className="date">
          <p>Starts</p>
          <p>-</p>
          <p>End</p>
          <p>-</p>
        </div>
      </SingleCard>
      <SingleCard>
        <div className="title">IDO I round (main)</div>
        <div className="date">
          <p>Starts</p>
          <p>-</p>
          <p>End</p>
          <p>-</p>
        </div>
      </SingleCard>
      <SingleCard>
        <div className="title">IDO II round (FCFS)</div>
        <div className="date">
          <p>Starts</p>
          <p>-</p>
          <p>End</p>
          <p>-</p>
        </div>
      </SingleCard>
      <SingleCard className="long_card">
        <div className="title">total</div>
        <div className="date">
          <p> Registered users</p>
          <p>-</p>
          <p>Whitelisted Users</p>
          <p>-</p>
          <p>Participated Users</p>
          <p>-</p>
          <p>Funds swapped</p>
          <p>-</p>
        </div>
      </SingleCard>
      <SingleCard>
        {/* <div className="title">total</div> */}
        <div className="date">
          <p> Swap Rate</p>
          <p>-</p>
          <p>Hard cup</p>
          <p>-</p>
        </div>
      </SingleCard>
      <SingleCard>
        {/* <div className="title">total</div> */}
        <div className="date">
          <p> Distributer</p>
          <p>-</p>
          <p>Vesting</p>
          <p>-</p>
        </div>
      </SingleCard>
    </ContentTable>
  );
};

export default IDOPlatformTable;

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
