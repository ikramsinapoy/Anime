import React, { useEffect, useState } from 'react'
import { Axios } from '../utils/api';
import axios from "axios";
import { CenterWrapper, Container } from '../styles/HomePage.styled';
import ListAnime from '../components/ListAnime';
import ButtonPagination from '../components/ButtonPagination';
import ReactLoading from "react-loading";
import Layout from '../components/Layout';

const config = {
  mode: 'cors',
  headers: {
    "Accept": "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json",
  }
}
function HomePage() {
    const [anime, setAnime] = useState([]);
    const [prevLink, setPrevLink] = useState(null);
    const [nextLink, setNextLink] = useState(null);
    const [firstLink, setFirstLink] = useState(null);
    const [lastLink, setLastLink] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchAnime = async () => {
        setLoading(true);
        await Axios.get(`/anime?page[limit]=10&page[offset]=0`).then((resp) => {
            setAnime(resp.data.data);
            setPrevLink(resp.data.links.prev);
            setNextLink(resp.data.links.next);
            setFirstLink(resp.data.links.first);
            setLastLink(resp.data.links.last);
        })
        setLoading(false);
    }

    const handleFirstClick = async () => {
      setLoading(true);
      await axios.get(firstLink, config).then((resp) => {
        setAnime(resp.data.data);
        setPrevLink(resp.data.links.prev);
        setNextLink(resp.data.links.next);
        setFirstLink(resp.data.links.first);
        setLastLink(resp.data.links.last);
      })
      sessionStorage.setItem("currentPage", firstLink)
      setLoading(false);
    }

    const handlePrevClick = async () => {
      setLoading(true);
      await axios.get(prevLink, config).then((resp) => {
        setAnime(resp.data.data);
        setPrevLink(resp.data.links.prev);
        setNextLink(resp.data.links.next);
        setFirstLink(resp.data.links.first);
        setLastLink(resp.data.links.last);
      })
      sessionStorage.setItem("currentPage", prevLink)
      setLoading(false);
    }

    const handleNextClick = async () => {
      setLoading(true);
      await axios.get(nextLink, config).then((resp) => {
        setAnime(resp.data.data);
        setPrevLink(resp.data.links.prev);
        setNextLink(resp.data.links.next);
        setFirstLink(resp.data.links.first);
        setLastLink(resp.data.links.last);
      })
      sessionStorage.setItem("currentPage", nextLink)
      setLoading(false);
    }

    const handleLastClick = async () => {
      setLoading(true);
      await axios.get(lastLink, config).then((resp) => {
        setAnime(resp.data.data);
        setPrevLink(resp.data.links.prev);
        setNextLink(resp.data.links.next);
        setFirstLink(resp.data.links.first);
        setLastLink(resp.data.links.last);
      })
      sessionStorage.setItem("currentPage", lastLink)
      setLoading(false);
    }

    useEffect(() => {
      const currentPage = sessionStorage.getItem("currentPage")

      if (currentPage === '' || currentPage === null) {
        fetchAnime();
      } else {
        const fetchCurrentPage = async () => {
          setLoading(true);
          await axios.get(currentPage, config).then((resp) => {
            console.log(resp.data)
            setAnime(resp.data.data);
            setPrevLink(resp.data.links.prev);
            setNextLink(resp.data.links.next);
            setFirstLink(resp.data.links.first);
            setLastLink(resp.data.links.last);
          })
          sessionStorage.setItem("currentPage", currentPage)
          setLoading(false);
        }

        fetchCurrentPage()
      }
    }, [])

    console.log(anime)
  return (
    <div>
      
      <Container>
        <Layout/>
        {loading === true?
          <CenterWrapper>
            <ReactLoading type="spin" color="#0000FF" height={100} width={50} />
          </CenterWrapper>
          :
          <ListAnime anime={anime}/>
        }
        <ButtonPagination 
          handlePrevClick={handlePrevClick} 
          handleNextClick={handleNextClick}
          handleFirstClick={handleFirstClick}
          handleLastClick={handleLastClick}
          prevLink={prevLink} 
          nextLink={nextLink}
          />
      </Container>
    </div>
  )
}

export default HomePage