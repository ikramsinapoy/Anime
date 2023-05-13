import styled  from 'styled-components';

const Container = styled.div`
  width: 1200px;
  max-width: 100%;
  padding: 30px 20px;
  margin: 0 auto;
  
`

const Wrapper = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  color: #E6E4D5;

  h2 {
    font-size: 42px;
    font-weight: bold;
    margin-bottom: 10px;
  };

  h3 {
    font-size: 24px;
    font-weight: normal;
    margin-bottom: 40px;
  }

  h4 {
    font-size: 20px;
    margin-bottom: 15px;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const PosterImg = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;

  border-radius: 10px;
  border: 1px solid #E6E4D5;
  filter: drop-shadow(2px 2px 1px #E6E4D5);
`
const RatingBox = styled.div`
  width: max-content;
  height: max-content;
  padding: 10px;
  background-color: #E6E4D5;
  border-radius: 10px;
  color: #1B424C;
  font-size: 12px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
`
const RatingText = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 5px;
` 

const ScoreText = styled.p`
  font-weight: bold;
`

const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export {
    TopBox,
    ScoreText,
    RatingBox,
    RatingText,
    Container,
    Wrapper,
    PosterImg
}