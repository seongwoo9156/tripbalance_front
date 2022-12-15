import styled from "styled-components";

export const weather = styled.div`
  width: 100%;
  height: 134px;
  display: flex;
  margin: 10px auto 0;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  color: #777;
  @media screen and (max-width: 480px) {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    justify-content: space-evenly;
  }
`;

export const location = styled.div`
  width: 250px;
  height: 134px;
  display: flex;
  margin-right: 40px;
  flex-direction: column;
  text-align: right;
  @media screen and (max-width: 480px) {
    width: 170px;
    height: 100%;
    text-align: center;
    margin-right: 0px;
    z-index: 1;
  }
`;

export const cityName = styled.div`
  width: 100%;
  font-weight: 600;
  font-size: 44px;
  line-height: 67px;
  margin-bottom: 10px;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export const mobileCityName = styled.div`
  @media screen and (min-width: 481px) {
    display: none;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
    font-size: 22px;
    margin-bottom: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const countyName = styled.div`
  font-weight: 400;
  font-size: 30px;
  line-height: 24px;
  margin-bottom: 30px;
  @media screen and (max-width: 480px) {
    font-size: 18px;
    width: 100%;
    height: 100%;
    margin-bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const top = styled.div`
  display: flex;
  align-self: start;
  @media screen and (max-width: 480px) {
    width: 70%;
    height: 100%;
    margin-left: -10px;
  }
`;
export const iconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 480px) {
    margin-right: -10px;
    width: 100%;
    height: 100%;
  }
`;
export const weatherIcon = styled.img`
  width: 130px;
  height: 130px;
  @media screen and (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;
export const temperatureBox = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;
export const timer = styled.div`
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export const temperature = styled.div`
  @media screen and (min-width: 481px) {
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    height: 100%;
    text-align: right;
    color: #777;
    span {
      font-weight: 400;
      font-size: 70px;
      line-height: 73px;
    }
    p {
      position: absolute;
      bottom: -50px;
      right: 0;
      font-size: 24px;
    }
  }
  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-weight: 200;
    font-size: 80px;
    color: #777;
    margin: 0;
    span {
      font-weight: 400;
      font-size: 60px;
      line-height: 83px;
    }
    p {
      margin-top: -8px;
      margin-left: 10px;
      text-align: right;
      font-size: 24px;
    }
  }
`;
export const bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 334px;
  height: 100%;
  @media screen and (max-width: 480px) {
    height: 100%;
  }
`;

export const weatherDescription = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  margin: 0;
`;

export const details = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  text-align: left;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const parameterRow = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  height: 100%;
  @media screen and (max-width: 480px) {
  }
`;

export const parameterLabel = styled.div`
  font-weight: 200;
  font-size: 20px;
  line-height: 24.2px;
  align-self: start;
  @media screen and (max-width: 480px) {
    font-size: 14px;
    font-weight: 100;
  }
`;

export const parameterValue = styled.div`
  display: flex;
  font-size: 36px;
  font-weight: 400;
  line-height: 44px;
  p {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    font-size: 26px;
    p {
      font-size: 12px;
      font-weight: 0;
      line-height: 0;
      text-align: right;
      margin-bottom: 5px;
    }
  }
`;
