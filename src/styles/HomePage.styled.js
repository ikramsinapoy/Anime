import styled from "styled-components";

const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 30px 20px;
  margin: 0 auto;
`
const Card = styled.div`
  border: 1px solid #d3dce6;
  border-radius: 10px;
  width: 250px;
  height: 350px;
  padding: 20px;
  background-image: url("https://media.kitsu.io/anime/poster_images/254/original.png");
  /* background-repeat: no-repeat; */
  background-size: cover;
  color: #ffffff;

  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    /* padding-bottom: 20px; */
  }

  /* div div{
    margin-top: auto;
  } */

`
const TitleCard = styled.p`
  color: #ffffff;
  text-decoration: none;
  display:inline-block;
`

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    /* background-color: #2196F3; */
    gap: 10px;
    justify-items: center;
`
const Button = styled.button`

  color: #ffffff;
  background: #59CAFF;
  font-size: 20px;
  margin: 10px;
  padding: 0.25em 1em;
  border: 2px solid #59CAFF;
  border-radius: 3px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export {
    Container,
    Card,
    Wrapper,
    Button,
    ButtonWrapper,
    TitleCard
}