import styled from "styled-components";

const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 30px 20px;
  margin: 0 auto;
`;
const Card = styled.div`
  border: 1px solid #d3dce6;
  border-radius: 10px;
  width: 300px;
  height: 400px;

  p {
    font-size: 14px;
    color: #000000;
  }

  img {
    width: 300px;
    height: 320px;
    border-radius: 10px 10px 0px 0px;
    object-fit: cover;
  }
`;
const ContenWrapper = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  display:inline-block;
`;
const WrapperLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px;

  h1 {
    font-size: 42px;
    text-align: center;
    margin-bottom: 10px;
  }

  span {
    background-color: #59CAFF;
    color: #ffffff;
    padding: 2px;
    border-radius: 10px;
  }

  @media (max-width: 630px) {
    padding: 10px 10px 50px 10px;
    h1 {
      font-size: 28px;
    }
  }
`;
const LayoutImg = styled.img`
  margin-top: 20px;
  width: 700px;
  border-radius: 10px;

  @media (max-width: 630px) {
      width: 350px;
  }
`;
const TitleCard = styled.p`
  color: #2B2B49;
  display:inline-block;
  font-weight: bold;
  margin-bottom: 2px;

  &:hover {
    text-decoration: underline;
    font-size: 16px;
  }
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 10px;
  justify-items: center;

  @media (max-width: 1000px) {
    grid-template-columns: auto auto;
  }

  @media (max-width: 630px) {
    grid-template-columns: auto;
  } 
`;
const Button = styled.button`
  color: #ffffff;
  background: #59CAFF;
  font-size: 20px;
  margin: 10px;
  padding: 0.25em 1em;
  border: 2px solid #59CAFF;
  border-radius: 3px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 630px) {
    padding: 0.25em;
  } 
`;
const CenterWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;

export {
    Container,
    Card,
    Wrapper,
    Button,
    CenterWrapper,
    TitleCard,
    ContenWrapper,
    WrapperLayout,
    LayoutImg
}