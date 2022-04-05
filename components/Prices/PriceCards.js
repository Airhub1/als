import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { pricesData } from "./PricesData.js";
const PriceCards = ({ activeClass }) => {
  return (
    <PriceContent>
      {pricesData.map((item, index) => {
        return (
          <Link href="/staking" key={index}>
            <PriceCard className={activeClass && "card"}>
              <div className="icon ">
                <Image src={item.icon} alt={item.name} />
              </div>
              <div className="name">{item.name}</div>
              <div className="allocation_ticket">
                <p className="stake">Stake</p>
                <p className="price">{item.price} LS</p>
              </div>
              {item.allocation_ticket_count && (
                <div className="allocation_ticket">
                  <p className="stake"> Guaranteed Allocation Tickets</p>
                  <p className="price">{item.allocation_ticket_count}</p>
                </div>
              )}
              {item.lottery_ticket_count && (
                <div className="allocation_ticket">
                  <p className="stake"> Lottery Tickets</p>
                  <p className="price">{item.lottery_ticket_count}</p>
                </div>
              )}
            </PriceCard>
          </Link>
        );
      })}
    </PriceContent>
  );
};

export default PriceCards;

const PriceContent = styled.div`
  padding-top: 60px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  padding: 60px 20px;
  position: relative;
  /* :hover { */
  padding: 30px;

  /* } */

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

const PriceCard = styled.div`
  padding: 24px 24px 50px;
  border: 1.5px solid #ffffff;
  box-sizing: border-box;
  border-radius: 19.1346px;
  transition: all 0.6s ease-in-out;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  :hover {
    border-color: transparent;
    box-shadow: inset 0 0 6px 6px rgba(255, 255, 255, 0.75),
      inset 0 0 3px 2px rgba(39, 229, 255, 0.75);
    /* padding: 30px; */
  }

  .icon {
    text-align: center;
  }
  .name {
    font-weight: 600;
    font-size: 28px;
    line-height: 32px;
    text-align: center;
    font-variant: small-caps;
    color: #ffffff;
    padding: 20px 0 20px;
    text-transform: uppercase;
  }
  .stake {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
    padding-top: 20px;
  }
  .allocation_ticket {
    text-align: center;
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
  .price {
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
    padding: 8px 0 20px;
  }
`;
