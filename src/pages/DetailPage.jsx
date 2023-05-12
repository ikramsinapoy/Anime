import React, { useEffect, useState } from 'react'
import { Axios } from '../utils/api';
import styled  from 'styled-components';
import { useParams } from 'react-router-dom';
import ReactLoading from "react-loading";

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

const config = {
  headers: {
    "Accept": "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json",
  }
}
function DetailPage() {
  const { id } = useParams()
  // const [initialValue, setInitialValue] = useState({})
  const initialValue = {
    image: "",
    tittle: {},
    rating: "",
    user: 0,
    synopsis: ""
  };
  const [anime, setAnime] = useState(initialValue)
  const [loading, setLoading] = useState(false);

  // console.log('sebelum fetch')
  const fetchAnime = async () => {
      setLoading(true);
      await Axios.get(`/anime/${id}`).then((resp) => {
        console.log("data fetch: ",resp)
          setAnime({
            tittle: resp.data.data.attributes.titles,
            image: resp.data.data.attributes.coverImage.original,
            rating: resp.data.data.attributes.averageRating,
            user: resp.data.data.attributes.userCount,
            synopsis: resp.data.data.attributes.synopsis
          })
      }).catch((error) => {
        if (error.response) {
          console.log(error);
        }
      });

      setLoading(false);
  }
  // console.log('setelah fetch')
  useEffect(() => {
    fetchAnime(); 
  }, [])

  console.log(anime.image)
  return (
    <div>
        <Container>
            {loading === true && !anime? 
              <ReactLoading type="spin" color="#0000FF" height={100} width={50} />
              :
            <Wrapper>

              <PosterImg alt='title' src={anime.image}/>
              
              <div>
                <TopBox>
                  <div>
                    <h2>{anime.tittle.en_jp}</h2>
                    <h3>{anime.tittle.en}</h3>
                  </div>

                  <RatingBox>
                    <ScoreText>SCORE</ScoreText>
                    <RatingText>{anime.rating}</RatingText>
                    <p>{anime.user} users</p>
                  </RatingBox>
                </TopBox>
                  
                  

                  <h4>Synopsis</h4>
                  <p>
                    {anime.synopsis}
                  </p>
                  
                  
              </div>
            </Wrapper>
          }
        </Container>

    </div>
  )
}

export default DetailPage