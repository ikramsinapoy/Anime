import React, { useEffect, useState } from 'react'
import { Axios } from '../utils/api';
import { useParams } from 'react-router-dom';
import ReactLoading from "react-loading";
import { Container } from '../styles/DetailPage.styled';
import DetailAnime from '../components/DetailAnime';
import { CenterWrapper } from '../styles/HomePage.styled';

function DetailPage() {
  const { id } = useParams()
  const [initialValue, setInitialValue] = useState({
    image: "",
    tittle: {},
    rating: "",
    user: 0,
    synopsis: ""
  })
  // const initialValue = {
  //   image: "",
  //   tittle: {},
  //   rating: "",
  //   user: 0,
  //   synopsis: ""
  // };
  const [anime, setAnime] = useState({})
  const [loading, setLoading] = useState(false);

  // console.log('sebelum fetch')
  const fetchAnime = async () => {
      setLoading(true);
      await Axios.get(`/anime/${id}`).then((resp) => {
        console.log("data fetch: ",resp.data.data)
        setAnime(resp.data.data)
        console.log("data fetch2: ",resp.data)
      }).catch((error) => {
        if (error.response) {
          console.log(error);
        }
      });

      // console.log("anime: ",anime)
      setLoading(false);
  }
  // console.log('setelah fetch')
  useEffect(() => {
    fetchAnime();
  }, [])

  // console.log('initialValue',initialValue)
  return (
    <div>
        <Container>
            {loading === true? 
              <CenterWrapper>
                <ReactLoading type="spin" color="#0000FF" height={100} width={50} />
              </CenterWrapper>
              :
              // <DetailAnime anime={anime.attributes}/>
              <p>Anime</p>
          }
        </Container>

    </div>
  )
}

export default DetailPage