import React, { useEffect, useState } from 'react'
import { Axios } from '../utils/api';
import { useParams } from 'react-router-dom';
import ReactLoading from "react-loading";
import { Container } from '../styles/DetailPage.styled';
import DetailAnime from '../components/DetailAnime';
import { CenterWrapper } from '../styles/HomePage.styled';

function DetailPage() {
  const { id } = useParams();
  const [anime, setAnime] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchAnime = async () => {
      setLoading(true);
      await Axios.get(`/anime/${id}`).then((resp) => {
        setAnime(resp.data.data.attributes);
      }).catch((error) => {
        if (error.response) {
          console.log(error);
        }
      });
      
      setLoading(false);
  }
  useEffect(() => {
    fetchAnime();
  }, []);

  const { synopsis, canonicalTitle, titles, posterImage, averageRating, userCount } = anime || {};
  
  return (
    <div>
      <Container>
        {loading === true? 
          <CenterWrapper>
            <ReactLoading type="spin" color="#59CAFF" height={100} width={50} />
          </CenterWrapper>
          :
          <DetailAnime 
            synopsis={synopsis} 
            canonicalTitle={canonicalTitle} 
            titles={titles}
            posterImage={posterImage}
            userCount={userCount}
            averageRating={averageRating}
          />
        }
      </Container>
    </div>
  )
}

export default DetailPage